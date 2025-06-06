using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApiBackend.Models.Entities
{
    [Table("roadmap")]
    public class RoadMap
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id {get;set;}

        [ForeignKey("User")]
        public int userid {get; set;}
        public User User {get; init;}

        [Column("name",TypeName = "varchar(55)")]
        public string name {get; set;}

        [Column("roadmap",TypeName = "text")]
        public string roadmap {get; set;}
    }
}