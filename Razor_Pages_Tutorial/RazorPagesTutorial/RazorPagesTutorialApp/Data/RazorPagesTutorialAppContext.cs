using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using RazorPagesTutorialApp.Models;

namespace RazorPagesTutorialApp.Data
{
    public class RazorPagesTutorialAppContext : DbContext
    {
        public RazorPagesTutorialAppContext (DbContextOptions<RazorPagesTutorialAppContext> options)
            : base(options)
        {
        }

        public DbSet<RazorPagesTutorialApp.Models.Movie> Movie { get; set; } = default!;
    }
}
