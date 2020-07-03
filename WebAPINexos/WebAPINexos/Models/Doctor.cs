using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPINexos.Models
{
    public class Doctor
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Nombre { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Especialidad { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Credencial { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Hospital { get; set; }
    }
}
