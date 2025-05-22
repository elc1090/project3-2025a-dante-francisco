using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using WebApiBackend.Context;
using WebApiBackend.Models;
using WebApiBackend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebApiBackend.Services.UserService
{
    public class UserService : IUser
    {
        private readonly RoadMapContext _context;

        public UserService(RoadMapContext context)
        {
            _context = context;
        }

        public async Task<ServiceResponse<List<User>>> CriarUser(User newUser)
        {
            ServiceResponse<List<User>> serviceResponse = new ServiceResponse<List<User>>();

            try
            {
                if(newUser == null){
                    serviceResponse.Dados = new List<User>();
                    serviceResponse.Menssagem = "Nenhum dado!";
                    serviceResponse.Sucesso = false;

                    return serviceResponse;
                }
                _context.Add(newUser);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = await _context.User.ToListAsync();
                serviceResponse.Menssagem = $"Novo User com Id: {newUser.id} adicionado";
            }
            catch (Exception ex)
            {
                serviceResponse.Menssagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<User>>> ObterUser()
        {
            ServiceResponse<List<User>> serviceResponse = new ServiceResponse<List<User>>();

            try
            {
                serviceResponse.Dados = await _context.User.ToListAsync();
                serviceResponse.Menssagem = $"Registros encontrados: ({serviceResponse.Dados.Count})";
            }
            catch (Exception ex)
            {
                serviceResponse.Menssagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }
        
        public async Task<ServiceResponse<User>> ObterUserPorId(int id)
        {
            ServiceResponse<User> serviceResponse = new ServiceResponse<User>();

            try
            { 
                serviceResponse.Dados = await _context.User.FirstOrDefaultAsync(x => x.id == id);
                serviceResponse.Menssagem = $"Registro encontrado";
            }
            catch (Exception ex)
            {
                serviceResponse.Menssagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<User>>> EditarUser(int id, User editedUser)
        {
            ServiceResponse<List<User>> serviceResponse = new ServiceResponse<List<User>>();

            try
            {
                User? EditUser = await _context.User.AsNoTracking().FirstOrDefaultAsync(x => x.id == id);

                if (EditUser == null)
                {
                    serviceResponse.Dados = new List<User>();
                    serviceResponse.Menssagem = $"Nenhum User encontrado na tabela users com Id: {editedUser.id}";
                    serviceResponse.Sucesso = false;
                }
                else
                {
                    _context.User.Update(editedUser);
                    await _context.SaveChangesAsync();

                    serviceResponse.Dados = await _context.User.ToListAsync();
                    serviceResponse.Menssagem = $"Edito User com Id: {EditUser.id}";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Menssagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }
        
        public async Task<ServiceResponse<List<User>>> DeletarUser(int id)
        {
            ServiceResponse<List<User>> serviceResponse = new ServiceResponse<List<User>>();

            try
            {
                User? DeleteUser = await _context.User.FirstOrDefaultAsync(x => x.id == id);

                if (DeleteUser == null)
                {
                    serviceResponse.Dados = new List<User>();;
                    serviceResponse.Menssagem = $"Nenhum User encontrado na tabela Users com Id: {id}";
                    serviceResponse.Sucesso = false;                    
                }
                else
                {
                    _context.User.Remove(DeleteUser);
                    await _context.SaveChangesAsync();

                    serviceResponse.Dados = await _context.User.ToListAsync();
                    serviceResponse.Menssagem = $"Deleta User com Id: {id}";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Menssagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }
    }
}