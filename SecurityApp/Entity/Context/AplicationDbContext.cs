using Dapper;
using Entity.Model;
using Entity.Model.Security;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.Extensions.Configuration;
using System.Data;

namespace Entity.Context
{
    public class AplicationDbContext : DbContext
    {
        //protected readonly IConfiguration _configuration;
        private readonly GenericConfig _genericConfig;

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options, IConfiguration configuration) : base(options)
        {
            //_configuration = configuration;
            _genericConfig = new GenericConfig(); // Inicializar GenericConfig
        }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Llama al método base para aplicar las configuraciones por defecto
            base.OnModelCreating(modelBuilder);

            // Aplica configuraciones desde GenericConfig
           /* var genericConfig = new GenericConfig();
            genericConfig.ConfigureUser(modelBuilder.Entity<User>());
            genericConfig.ConfigurePerson(modelBuilder.Entity<Person>());
            genericConfig.ConfigureRole(modelBuilder.Entity<Role>());
            genericConfig.ConfigureView(modelBuilder.Entity<View>());
            genericConfig.ConfigureModules(modelBuilder.Entity<Modules>());
           */

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.EnableSensitiveDataLogging();
        }

        protected override void ConfigureConventions(ModelConfigurationBuilder configurationBuilder)
        {
            configurationBuilder.Properties<decimal>().HavePrecision(18, 2);
        }

        public override int SaveChanges()
        {
            EnsureAudit();
            return base.SaveChanges();
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSucces, CancellationToken cancellationToken = default)
        {
            EnsureAudit();
            return base.SaveChangesAsync(acceptAllChangesOnSucces,
                                         cancellationToken);
        }

        public async Task<IEnumerable<T>> QueryAsync<T>(string text, object parameters = null, int? timeout = null, CommandType? type = null)
        {
            using var command = new DapperEFCoreCommand(this,
                                                        text,
                                                        parameters,
                                                        timeout,
                                                        type,
                                                        CancellationToken.None);
            var connection = Database.GetDbConnection();
            return await connection.QueryAsync<T>(command.Definition);
        }

        public async Task<T> QueryFirstOrDefaultAsync<T>(string text, object parameters = null, int? timeout = null, CommandType? type = null)
        {
            using var command = new DapperEFCoreCommand(this,
                                                        text,
                                                        parameters,
                                                        timeout,
                                                        type,
                                                        CancellationToken.None);
            var connection = Database.GetDbConnection();
            return await connection.QueryFirstOrDefaultAsync<T>(command.Definition);
        }

        private void EnsureAudit()
        {
            ChangeTracker.DetectChanges();
        }

        //Security


        public DbSet<Modules> Module => base.Set<Modules>();
        public DbSet<Person> Persons => Set<Person>();
        public DbSet<Role> Roles => Set<Role>();
        public DbSet<RoleView> RolesViews => Set<RoleView>();
        public DbSet<User> Users => Set<User>();
        public DbSet<UserRole> UsersRoles => Set<UserRole>();
        public DbSet<View> Views => Set<View>();

        //Operational

        public readonly struct DapperEFCoreCommand : IDisposable
        {
            public DapperEFCoreCommand(DbContext context, string text, object parameters, int? timeout, CommandType? type, CancellationToken ct)
            {
                var transaction = context.Database.CurrentTransaction?.GetDbTransaction();
                var commandType = type ?? CommandType.Text;
                var commandTimeout = timeout ?? context.Database.GetCommandTimeout() ?? 30;

                Definition = new CommandDefinition(
                    text,
                    parameters,
                    transaction,
                    commandTimeout,
                    commandType,
                    cancellationToken: ct
                    );
            }

            public CommandDefinition Definition { get; }

            public void Dispose() { }
        }
    }
}