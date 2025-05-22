using System.Threading.Tasks;
using WebApiBackend.Models;
using WebApiBackend.Models.Entities;

namespace WebApiBackend.Services.UserService
{
    public interface IUser
    {
        Task<ServiceResponse<List<User>>> CriarUser(User newUser);
        Task<ServiceResponse<List<User>>> ObterUser();
        Task<ServiceResponse<User>> ObterUserPorId(int id);
        Task<ServiceResponse<List<User>>> EditarUser(int id, User editedUser);
        Task<ServiceResponse<List<User>>> DeletarUser(int id);
    }
}