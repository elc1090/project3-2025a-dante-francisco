using System.Threading.Tasks;
using WebApiBackend.Models;
using WebApiBackend.Models.Entities;

namespace WebApiBackend.Services.RoadMapService
{
    public interface IRoadMap
    {
        Task<ServiceResponse<List<RoadMap>>> CriarRoadMap(RoadMap newRoadMap);
        Task<ServiceResponse<List<RoadMap>>> ObterRoadMap();
        Task<ServiceResponse<RoadMap>> ObterRoadMapPorId(int id);
        Task<ServiceResponse<List<RoadMap>>> EditarRoadMap(int id, RoadMap editedRoadMap);
        Task<ServiceResponse<List<RoadMap>>> DeletarRoadMap(int id);
    }
}