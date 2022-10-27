using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RazorPagesMVCApp.Models;

namespace RazorPagesMVCApp.Data
{
    public class RazorPagesMVCAppContext : DbContext
    {
        public RazorPagesMVCAppContext (DbContextOptions<RazorPagesMVCAppContext> options)
            : base(options)
        {
        }

        public DbSet<RazorPagesMVCApp.Models.Movie> Movie { get; set; } = default!;
    }
}
