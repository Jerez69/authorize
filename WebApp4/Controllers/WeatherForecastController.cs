using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApp4.Controllers
{
    [EnableCors("MyCorsPolicy")]
    [ApiController]
    [Route("api/[controller]")]
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

        [Authorize]
        [HttpGet]
        [Route("list")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        // GET api/ping
        [HttpGet]
        [Route("ping1")]
        public IActionResult Ping1()
        {
            // just to check if the session is still valid
            // if not a 401 will be returned
            return Ok(true);
        }

        [HttpGet]
        [Route("ping2")]
        public async Task<IActionResult> Ping2()
        {
            try
            {
                return Ok(true);
            }
            catch (Exception ex)
            {
                //Log.Error("************* Exception occurred at Get() ***************");
                var cex = ex;
                while (cex != null)
                {
                    //Log.Error(cex.Message);
                    cex = cex.InnerException;
                }
            }
            return BadRequest();
        }

        [Authorize]
        [HttpGet]
        [Route("ping3")]
        public async Task<IActionResult> Ping3()
        {
            try
            {
                return Ok(true);
            }
            catch (Exception ex)
            {
                //Log.Error("************* Exception occurred at Get() ***************");
                var cex = ex;
                while (cex != null)
                {
                    //Log.Error(cex.Message);
                    cex = cex.InnerException;
                }
            }
            return BadRequest();
        }

        [Authorize]
        [HttpGet]
        [Route("ping4")]
        public ActionResult<bool> Ping4()
        {
            try
            {
                return true;
            }
            catch (Exception ex)
            {
                // Database
                var cex = ex;
                while (cex != null)
                {
                    cex = cex.InnerException;
                }
            }
            return false;
        }

        [HttpGet]
        [Route("wrapping4")]
        public async Task<IActionResult> WrapPing4()
        {
            try
            {
                if (Ping4().Value == true)
                {
                    return Ok(true);
                }
                else
                {
                    return Ok(false);
                }
            }
            catch (Exception ex)
            {
                if (ex.HResult == 401)
                {
                    return Unauthorized();
                }
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("ping5")]
        public async Task<IActionResult> Ping5()
        {
            return Unauthorized();
        }

        [HttpGet]
        [Route("ping6")]
        public async Task<IActionResult> Ping6()
        {
            return BadRequest();
        }
    }
}
