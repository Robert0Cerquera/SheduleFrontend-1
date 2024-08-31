﻿// <auto-generated />
using System;
using Entity.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Entity.Migrations
{
    [DbContext(typeof(AplicationDbContext))]
    [Migration("20240810013528_MigrationV1")]
    partial class MigrationV1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.7")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Entity.Model.Security.Modules", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("code")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("createdBy")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedBy")
                        .HasColumnType("datetime2");

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("state")
                        .HasColumnType("bit");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("updatedBy")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Module");
                });

            modelBuilder.Entity("Entity.Model.Security.Person", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("address")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("createdBy")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedBy")
                        .HasColumnType("datetime2");

                    b.Property<string>("document")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("firstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("firstSurname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("gender")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("phone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("secondName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("secondSurname")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("state")
                        .HasColumnType("bit");

                    b.Property<string>("typeDocument")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("updatedBy")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Persons");
                });

            modelBuilder.Entity("Entity.Model.Security.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("code")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("createdBy")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedBy")
                        .HasColumnType("datetime2");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("state")
                        .HasColumnType("bit");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("updatedBy")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Entity.Model.Security.RoleView", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("createdBy")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedBy")
                        .HasColumnType("datetime2");

                    b.Property<int>("roleId")
                        .HasColumnType("int");

                    b.Property<bool>("state")
                        .HasColumnType("bit");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("updatedBy")
                        .HasColumnType("datetime2");

                    b.Property<int>("viewId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("roleId");

                    b.HasIndex("viewId");

                    b.ToTable("RolesViews");
                });

            modelBuilder.Entity("Entity.Model.Security.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("createdBy")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedBy")
                        .HasColumnType("datetime2");

                    b.Property<string>("password")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("personId")
                        .HasColumnType("int");

                    b.Property<bool>("state")
                        .HasColumnType("bit");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("updatedBy")
                        .HasColumnType("datetime2");

                    b.Property<string>("username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("personId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Entity.Model.Security.UserRole", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("createdBy")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedBy")
                        .HasColumnType("datetime2");

                    b.Property<int>("roleId")
                        .HasColumnType("int");

                    b.Property<bool>("state")
                        .HasColumnType("bit");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("updatedBy")
                        .HasColumnType("datetime2");

                    b.Property<int>("userId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("roleId");

                    b.HasIndex("userId");

                    b.ToTable("UsersRoles");
                });

            modelBuilder.Entity("Entity.Model.Security.View", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("code")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("createdAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("createdBy")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime?>("deletedBy")
                        .HasColumnType("datetime2");

                    b.Property<string>("description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("moduleId")
                        .HasColumnType("int");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("route")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("state")
                        .HasColumnType("bit");

                    b.Property<DateTime>("updatedAt")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("updatedBy")
                        .HasColumnType("datetime2");

                    b.HasKey("Id");

                    b.HasIndex("moduleId");

                    b.ToTable("Views");
                });

            modelBuilder.Entity("Entity.Model.Security.RoleView", b =>
                {
                    b.HasOne("Entity.Model.Security.Role", "role")
                        .WithMany()
                        .HasForeignKey("roleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entity.Model.Security.View", "view")
                        .WithMany()
                        .HasForeignKey("viewId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("role");

                    b.Navigation("view");
                });

            modelBuilder.Entity("Entity.Model.Security.User", b =>
                {
                    b.HasOne("Entity.Model.Security.Person", "person")
                        .WithMany()
                        .HasForeignKey("personId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("person");
                });

            modelBuilder.Entity("Entity.Model.Security.UserRole", b =>
                {
                    b.HasOne("Entity.Model.Security.Role", "role")
                        .WithMany()
                        .HasForeignKey("roleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Entity.Model.Security.User", "user")
                        .WithMany()
                        .HasForeignKey("userId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("role");

                    b.Navigation("user");
                });

            modelBuilder.Entity("Entity.Model.Security.View", b =>
                {
                    b.HasOne("Entity.Model.Security.Modules", "module")
                        .WithMany()
                        .HasForeignKey("moduleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("module");
                });
#pragma warning restore 612, 618
        }
    }
}
