using Business.Security.Implementations;
using Business.Security.Interfaces;
using Data.Implementations;
using Data.Interfaces;
using Entity.Context;
using Microsoft.EntityFrameworkCore;

namespace Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            //Configuracion Cords
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:4200")
                               .AllowAnyHeader()
                               .AllowAnyMethod();
                    });
            });

            // Configura DbContext con SQL Server
            builder.Services.AddDbContext<AplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DbfaultConnection")));


            //Registra IPersonaData y su implementacion

            builder.Services.AddScoped<IModulesData, ModulesData>();
            builder.Services.AddScoped<IModulesBusiness, ModulesBusiness>();

            builder.Services.AddScoped<IPersonsData, PersonsData>();
            builder.Services.AddScoped<IPersonsBusiness, PersonsBusiness>();

            builder.Services.AddScoped<IRolesData, RolesData>();
            builder.Services.AddScoped<IRolesBusiness, RolesBusiness>();

            builder.Services.AddScoped<IRolesViewsData, RolesViewsData>();
            builder.Services.AddScoped<IRolesViewsBusiness, RolesViewsBusiness>();

            builder.Services.AddScoped<IUsersRolesData, UsersRolesData>();
            builder.Services.AddScoped<IUsersRolesBusiness, UsersRolesBusiness>();

            builder.Services.AddScoped<IUsersData, UsersData>();
            builder.Services.AddScoped<IUsersBusiness, UsersBusiness>();

            builder.Services.AddScoped<IViewsData, ViewsData>();
            builder.Services.AddScoped<IViewsBusiness, ViewsBusiness>();



            // Add services to the container.
            builder.Services.AddControllers();

            //Configuracion JWT
            //var jwtSettings = new Jwtsettings();
            //builder.Configuration.GetSection("JwtSetting").Bind(jwtSettings);
            //builder.Services.AddSingleton(jwtSettings);
            //builder.Services.AddAuthentication(options =>
            //{
            //    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            //    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            //})

            //Configuracion Authentication
            //.AddJwtBearer(options =>
            //{
            //    options.TokenValidationParameters = new TokenValidationParameters
            //    {
            //        ValidateIssuer = true,
            //        ValidateAudience = true,
            //        ValidateLifetime = true,
            //        ValidateIssuerSigningKey = true,
            //        ValidIssuer = jwtSettings.Issuer,
            //        ValidAudience = jwtSettings.Audience,
            //        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecretKey))
            //    };
            //});

            builder.Services.AddAuthorization();


            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseCors("AllowSpecificOrigin");
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();
            app.UseAuthentication();
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}