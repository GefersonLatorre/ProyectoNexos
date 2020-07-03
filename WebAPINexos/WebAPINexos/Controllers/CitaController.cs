using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPINexos.Contexts;
using WebAPINexos.Models;

namespace WebAPINexos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitaController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CitaController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Cita
        [HttpGet("{idDoctor}/{idPaciente}")]
        public async Task<ActionResult<IEnumerable<Cita>>> GetCitas(int idDoctor, int idPaciente)
        {
            if(idDoctor == 0)
            {
                return await _context.Citas.Where(c => c.Id_Paciente == idPaciente).ToListAsync();
            }
            else
            {
                return await _context.Citas.Where(c => c.Id_Doctor == idDoctor).ToListAsync();
            }
        }
    
        // POST: api/Cita
        [HttpPost]
        public async Task<ActionResult<Cita>> PostCita(Cita cita)
        {
            var citas = _context.Citas.Where(c => c.Id_Doctor == cita.Id_Doctor && c.Id_Paciente == cita.Id_Paciente).ToList();
            if (citas.Any())
            {                
                cita = new Cita { };
            }
            else
            {
                _context.Citas.Add(cita);
                await _context.SaveChangesAsync();
            }
            return cita;
        }

        // DELETE: api/Cita/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cita>> DeleteCita(int id)
        {
            var cita = await _context.Citas.FindAsync(id);
            if (cita == null)
            {
                return NotFound();
            }

            _context.Citas.Remove(cita);
            await _context.SaveChangesAsync();

            return cita;
        }

        private bool CitaExists(int id)
        {
            return _context.Citas.Any(e => e.Id == id);
        }
    }
}
