using Entity.Model.Security;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;

using System.Text;
using System.Threading.Tasks;

namespace Entity.Model
{
    public class GenericConfig
    {
        public void ConfigureUser(EntityTypeBuilder<User> builder)
        {
            //builder.HasIndex(i => i.username).IsUnique();
            builder.HasIndex(i => i.password).IsUnique();
        }
        public void ConfigurePerson(EntityTypeBuilder<Person> builder)
        {
            builder.HasIndex(i => i.document).IsUnique();
           // builder.HasIndex(i => i.email).IsUnique();
            //builder.HasIndex(i => i.phone).IsUnique();
           
            
        }

        public void ConfigureRole(EntityTypeBuilder<Role> builder)
        {
            //builder.HasIndex(i => i.code).IsUnique();
            //builder.HasIndex(i => i.name).IsUnique();
         
            
        }
        public void ConfigureView(EntityTypeBuilder<View> builder)
        {
           // builder.HasIndex(i => i.code).IsUnique();
           // builder.HasIndex(i => i.name).IsUnique();
           // builder.HasIndex(i => i.route).IsUnique();
        }
        public void ConfigureModules(EntityTypeBuilder<Modules> builder)
        {
            /*
            // Configura índices únicos
            builder.HasIndex(i => i.code).IsUnique();
            builder.HasIndex(i => i.name).IsUnique();

            // Configura las propiedades para permitir valores nulos
            builder.Property(e => e.deletedAt)
                   .IsRequired(false) // Permite valores nulos
                   .HasDefaultValue(null); // Valor predeterminado es null

            builder.Property(e => e.deletedBy)
                   .IsRequired(false) // Permite valores nulos
                   .HasDefaultValue(null); // Valor predeterminado es null
            */
        }

    }
    }
