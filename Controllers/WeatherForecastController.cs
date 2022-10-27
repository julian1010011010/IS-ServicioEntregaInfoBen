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
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;

        public WeatherForecastController(ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            List<String> Tablenames = new List<String>();

            using (MySqlConnection connection = new MySqlConnection("Server=bdasociatividad.c6m5z9oxzvab.us-west-2.rds.amazonaws.com;User ID=admin;Password=abcdef12345;Database=bdasociatividad"))
            {
                string query = "show tables from bdasociatividad";
                MySqlCommand command = new MySqlCommand(query, connection);
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        Tablenames.Add(reader.GetString(0));
                    }
                }
            }

            return Ok(Tablenames);
        }
    }
}
