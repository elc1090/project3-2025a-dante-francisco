using System;
using System.Collections.Generic;
using System.Linq;
using WebApiBackend.Models.Entities;
using WebApiBackend.Models;
using Microsoft.AspNetCore.Mvc;
using WebApiBackend.Services.UserService;

namespace WebApiBackend.Controllers
{
    namespace WebApiBackend.Controllers
    {
    
        using Microsoft.AspNetCore.Mvc;
    
        [Route("api/[controller]")]
        [ApiController]
        public class UserController : ControllerBase
        {
            private readonly IUser _IUser;

            public UserController(IUser IUser)
            {
                _IUser = IUser;
            }

            [HttpGet("GetUser")]
            public async Task<ActionResult<ServiceResponse<List<User>>>> GetUser()
            {
                ServiceResponse<List<User>> ServiceResponse = await _IUser.ObterUser();
                
                return Ok(ServiceResponse);
            }
            
            [HttpGet("GetUser/{id}")]
            public async Task<ActionResult<ServiceResponse<User>>> GetUserbyId(int id)
            {
                ServiceResponse<User> ServiceResponse = await _IUser.ObterUserPorId(id);
                
                return Ok(ServiceResponse);
            }
            
            [HttpPost("PostUser")]
            public async Task<ActionResult<ServiceResponse<List<User>>>> PostUser(User user)
            {
                ServiceResponse<List<User>> ServiceResponse = await _IUser.CriarUser(user);
                
                return Ok(ServiceResponse);
            }

            [HttpPut("PutUser/{id}")]
            public async Task<ActionResult<ServiceResponse<List<User>>>> EditUser(int id, User user)
            {
                ServiceResponse<List<User>> ServiceResponse = await _IUser.EditarUser(id,user);
                
                return Ok(ServiceResponse);
            }

            [HttpDelete("DeleteUser/{id}")]
            public async Task<ActionResult<ServiceResponse<List<User>>>> DeleteUser(int id)
            {
                ServiceResponse<List<User>> ServiceResponse = await _IUser.DeletarUser(id);
                
                return Ok(ServiceResponse);
            }
        }
    }
}