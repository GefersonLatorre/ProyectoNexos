using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPINexos.Models
{
    public class Cita
    {
        [Key]
        public int Id { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Id_Doctor { get; set; }
        [Required]
        [Column(TypeName = "int")]
        public int Id_Paciente { get; set; }
    }
}
