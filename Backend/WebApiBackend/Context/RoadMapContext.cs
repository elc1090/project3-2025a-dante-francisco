using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiBackend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebApiBackend.Context
{
    public class RoadMapContext : DbContext
    {
        public RoadMapContext(DbContextOptions<RoadMapContext> options) : base(options){}
        
        public DbSet<RoadMap> RoadMap { get; set; }
        public DbSet<User> User { get; set;}
    }
}
