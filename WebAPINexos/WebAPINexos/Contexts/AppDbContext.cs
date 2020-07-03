using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPINexos.Models;

namespace WebAPINexos.Contexts
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Doctor> Doctores { get; set; }

        public DbSet<Paciente> Pacientes { get; set; }

        public DbSet<Cita> Citas { get; set; }
    }
}
