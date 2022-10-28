using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class InfoBenControllerController : ControllerBase
    {

        private readonly string ConnectionStrings = "Server=bdasociatividad.c6m5z9oxzvab.us-west-2.rds.amazonaws.com;User ID=admin;Password=abcdef12345;Database=bdasociatividad";
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        /// <summary>
        /// Get all user 
        /// </summary>
        /// <returns></returns>
        /// 
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                using var connection = new MySqlConnection(ConnectionStrings);
                Console.Write(connection);
                await connection.OpenAsync();

                using var command = new MySqlCommand("SELECT * FROM BeneficiariosAsociatividad;", connection);
                using var reader = await command.ExecuteReaderAsync();
                List<dynamic> Resposne = new();

                while (await reader.ReadAsync())
                {
                    var Cedular = reader.GetValue(1);

                    var Tabla = new
                    {
                        DocumentoTipo = reader.GetValue(0),
                        DocumentoNumero = reader.GetValue(1),
                        NombreCompleto = reader.GetValue(2) + " " + reader.GetValue(3) + " " + reader.GetValue(4) + " " + reader.GetValue(5),
                        CorreoElectronico = reader.GetValue(8),
                        Municipio = reader.GetValue(9),
                        Departamento = reader.GetValue(10),
                    };
                    Resposne.Add(Tabla);
                }
                return Ok(Resposne);

            }
            catch (Exception e)
            {
                return BadRequest(e.InnerException.ToString());
            }
        }


        /// <summary>
        ///   Get Beneficiarios By Filters
        /// </summary>
        /// <param name="pCedula"></param>
        /// <param name="pMunicipio"></param>
        /// <returns></returns>
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpGet("GetBeneficiariosByFilters")]
        public async Task<IActionResult> GetBeneficiariosByFilters(string pCedula, string pMunicipio)
        {

            try
            {
                using var connection = new MySqlConnection(ConnectionStrings);
                Console.Write(connection);
                await connection.OpenAsync();

                string Query = "SELECT * FROM BeneficiariosAsociatividad as ba WHERE ba.numId = " + pCedula + " AND ba.municipio LIKE '" + pMunicipio + "'";
                using var command = new MySqlCommand(Query, connection);


                using var reader = await command.ExecuteReaderAsync();


                List<dynamic> Resposne = new();

                while (await reader.ReadAsync())
                {
                    var Cedular = reader.GetValue(1);

                    var Tabla = new
                    {
                        DocumentoTipo = reader.GetValue(0),
                        DocumentoNumero = reader.GetValue(1),
                        NombreCompleto = reader.GetValue(2) + " " + reader.GetValue(3) + " " + reader.GetValue(4) + " " + reader.GetValue(5),
                        CorreoElectronico = reader.GetValue(8),
                        Municipio = reader.GetValue(9),
                        Departamento = reader.GetValue(10),
                    };
                    Resposne.Add(Tabla);
                }
                return Ok(Resposne);

            }
            catch (Exception e)
            {
                return BadRequest(e.InnerException.ToString());
            }


        }

        /// <summary>
        /// Get all Municipios
        /// </summary>
        /// <returns></returns>
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpGet("GetMunicipios")]
        public async Task<IActionResult> GetMunicipios()
        {
            try
            {
                using var connection = new MySqlConnection(ConnectionStrings);
                Console.Write(connection);
                await connection.OpenAsync();

                using var command = new MySqlCommand("SELECT * FROM MunicipiosDeptos;", connection);
                using var reader = await command.ExecuteReaderAsync();
                List<dynamic> Resposne = new();

                while (await reader.ReadAsync())
                {
                    var Cedular = reader.GetValue(1);

                    var Tabla = new
                    {
                        CodigoMunicipio = reader.GetValue(0),
                        Municipio = reader.GetValue(1),
                        Departamento = reader.GetValue(3)
                    };
                    Resposne.Add(Tabla);
                }
                return Ok(Resposne);

            }
            catch (Exception e)
            {
                return BadRequest(e.InnerException.ToString());
            }
        }

    }
}
