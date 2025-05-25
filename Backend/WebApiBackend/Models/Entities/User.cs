using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace WebApiBackend.Models.Entities
{
    [Table("user")]
    public class User
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int id {get;set;}

        [Column("name",TypeName = "varchar(55)")]
        public string Username {get; set;}

        [Column("password_hash",TypeName = "text")]
        public string password {get; set;}
    }
}