using System;
using System.Collections.Generic;
using System.Linq;
using WebApiBackend.Models.Entities;
using WebApiBackend.Models;
using Microsoft.AspNetCore.Mvc;
using WebApiBackend.Services;

namespace WebApiBackend.Controllers
{
    namespace WebApiBackend.Controllers
    {
    
        using Microsoft.AspNetCore.Mvc;
    
        [Route("api/[controller]")]
        [ApiController]
        public class UserController : ControllerBase
        {
            [HttpGet]
            public async Task<IActionResult> GetUser()
            {
                
                return Ok();
            }
        }
    }
}