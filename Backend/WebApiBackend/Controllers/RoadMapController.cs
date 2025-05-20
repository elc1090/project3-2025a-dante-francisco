using System;
using System.Collections.Generic;
using System.Linq;
using WebApiBackend.Models.Entities;
using WebApiBackend.Models;
using Microsoft.AspNetCore.Mvc;
using WebApiBackend.Services.RoadMapService;

namespace WebApiBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoadMapController : ControllerBase
    {

        private readonly IRoadMap _IRoadMap;

        public RoadMapController(IRoadMap IRoadMap)
        {
            _IRoadMap = IRoadMap;
        }

        [HttpGet("GetRoadMap")]
        public async Task<ActionResult<ServiceResponse<List<RoadMap>>>> GetRoadMap()
        {
            ServiceResponse<List<RoadMap>> ServiceResponse = await _IRoadMap.ObterRoadMap();

            return Ok(ServiceResponse);
        }

        [HttpPost("PostRoadMap")]
        public async Task<ActionResult<ServiceResponse<List<RoadMap>>>> PostRoadMap(RoadMap roadmap)
        {
            ServiceResponse<List<RoadMap>> ServiceResponse = await _IRoadMap.CriarRoadMap(roadmap);

            return Ok(ServiceResponse);
        }

        [HttpGet("GetRoadMap/{id}")]
        public async Task<ActionResult<ServiceResponse<RoadMap>>> GetRoadMapbyId(int id)
        {
            ServiceResponse<RoadMap> ServiceResponse = await _IRoadMap.ObterRoadMapPorId(id);

            return Ok(ServiceResponse);
        }

        [HttpPut("PutRoadMap/{id}")]
        public async Task<ActionResult<ServiceResponse<List<RoadMap>>>> PutRoadMap(int id, RoadMap roadmap)
        {   
            if(id != roadmap.id){
                return BadRequest();
            }
            ServiceResponse<List<RoadMap>> ServiceResponse = await _IRoadMap.EditarRoadMap(id, roadmap); 

            return Ok(ServiceResponse);
        }

        [HttpDelete("DeleteRoadMap/{id}")]
        public async Task<ActionResult<ServiceResponse<List<RoadMap>>>> DeleteRoadMap(int id)
        {
            ServiceResponse<List<RoadMap>> ServiceResponse = await _IRoadMap.DeletarRoadMap(id); 

            return Ok(ServiceResponse);
        }
    }
}