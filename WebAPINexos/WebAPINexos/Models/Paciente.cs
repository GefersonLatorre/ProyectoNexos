using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPINexos.Models
{
    public class Paciente
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Nombre { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Seguro_Social { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Codigo_Postal { get; set; }
        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Telefono { get; set; }
    }
}
