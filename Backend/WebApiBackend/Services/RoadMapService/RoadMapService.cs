using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using WebApiBackend.Context;
using WebApiBackend.Models;
using WebApiBackend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace WebApiBackend.Services.RoadMapService
{
    public class RoadMapService : IRoadMap
    {
        private readonly RoadMapContext _context;
        
        public RoadMapService(RoadMapContext context)
        {
            _context = context;
        }

        public async Task<ServiceResponse<List<RoadMap>>> CriarRoadMap(RoadMap newRoadMap){
            
            ServiceResponse<List<RoadMap>> serviceResponse = new ServiceResponse<List<RoadMap>>();

            try
            {
                if(newRoadMap == null){
                    serviceResponse.Dados = new List<RoadMap>();
                    serviceResponse.Menssagem = "Nenhum dados!";
                    serviceResponse.Sucesso = false;

                    return serviceResponse;
                }
                _context.Add(newRoadMap);
                await _context.SaveChangesAsync();

                serviceResponse.Dados = await _context.RoadMap.ToListAsync();
                serviceResponse.Menssagem = $"Novo RoadMap com Id: {newRoadMap.id} adicionado";
            }
            catch (Exception ex)
            {
                serviceResponse.Menssagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<RoadMap>>> ObterRoadMap(){

            ServiceResponse<List<RoadMap>> serviceResponse = new ServiceResponse<List<RoadMap>>();

            try
            {
                serviceResponse.Dados = await _context.RoadMap.ToListAsync();
                serviceResponse.Menssagem = $"Registros encontrados: ({serviceResponse.Dados.Count})";
            }
            catch (Exception ex)
            {
                serviceResponse.Menssagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<RoadMap>> ObterRoadMapPorId(int id){
            
            ServiceResponse<RoadMap> serviceResponse = new ServiceResponse<RoadMap>();

            try
            { 
                serviceResponse.Dados = await _context.RoadMap.FirstOrDefaultAsync(x => x.id == id);
                serviceResponse.Menssagem = $"Registro encontrado";
            }
            catch (Exception ex)
            {
                serviceResponse.Menssagem = ex.Message;
                serviceResponse.Sucesso = false;
            }
            return serviceResponse;
        }

        public async Task<ServiceResponse<List<RoadMap>>> EditarRoadMap(int id, RoadMap editedRoadMap){
            
            ServiceResponse<List<RoadMap>> serviceResponse = new ServiceResponse<List<RoadMap>>();

            try
            {
                RoadMap? ERoadMap = await _context.RoadMap.AsNoTracking().FirstOrDefaultAsync(x => x.id == id);

                if (ERoadMap == null)
                {
                    serviceResponse.Dados = new List<RoadMap>();
                    serviceResponse.Menssagem = $"Nenhum autor encontrado na tabela autores com Id: {editedRoadMap.id}";
                    serviceResponse.Sucesso = false;
                }
                else
                {
                    _context.RoadMap.Update(editedRoadMap);
                    await _context.SaveChangesAsync();

                    serviceResponse.Dados = await _context.RoadMap.ToListAsync();
                    serviceResponse.Menssagem = $"Edito RoadMap com Id: {ERoadMap.id}";
                }
            }
            catch (Exception ex)
            {
                serviceResponse.Menssagem = ex.Message;
                serviceResponse.Sucesso = false;
            }

            return serviceResponse;
        }

        public async Task<ServiceResponse<List<RoadMap>>> DeletarRoadMap(int id){
            
            ServiceResponse<List<RoadMap>> serviceResponse = new ServiceResponse<List<RoadMap>>();

            try
            {
                RoadMap? RoadMapD = await _context.RoadMap.FirstOrDefaultAsync(x => x.id == id);

                if (RoadMapD == null)
                {
                    serviceResponse.Dados = new List<RoadMap>();;
                    serviceResponse.Menssagem = $"Nenhum RoadMap encontrado na tabela RoadMaps com Id: {id}";
                    serviceResponse.Sucesso = false;                    
                }
                else
                {
                    _context.RoadMap.Remove(RoadMapD);
                    await _context.SaveChangesAsync();

                    serviceResponse.Dados = await _context.RoadMap.ToListAsync();
                    serviceResponse.Menssagem = $"Deleta RoadMap com Id: {id}";
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