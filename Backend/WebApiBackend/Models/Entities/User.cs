using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApiBackend.Models.Entities
{
    [Table("User")]
    public class RoadMap
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id {get;set;}

        [Column("userid",TypeName = "smallint")]
        public int userId {get; set;}

        [Column("name",TypeName = "varchar(55)")]
        public string Username {get; set;}

        [Column("password",TypeName = "text")]
        public string password {get; set;}
    }
}