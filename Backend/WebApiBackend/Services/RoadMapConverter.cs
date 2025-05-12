using WebApiBackend.Models;
using System.IO;
using System;

namespace WebApiBackend.Services
{
   public class Converter
   {
        private List<string> textReconfig(string[] text){
            List<string> newText = new List<string>(); 
            foreach (var line in text)
            {
                if((line[0] == "#") || (line[0] == "-")){
                    newText.add(line);
                }
            }
            return newText;
        }

        public int HeaderRead(List<string> file,int start){
            while(file[start][0] != "#"){
                start++;
            }

            
        }

        public List<string> FileReader(string path){
            if (File.Exist(path))
            {
                int start = 0;
                string[] readText = File.ReadAllLines(path);
                List<string> text = textReconfig(readText);
                int start = 0;
                int end = text.Count;
                int i = 0;
                while (i < readText.Count)
                {
                    
                }
            }
            else
            {
                throw new Exception("This file doesn´t exist.");
            }
        }
        public RoadMap Converter(){
            try
            {
                
                throw new Exception($"Syntax de Roadmap incorreta!");
            }
            catch (System.Exception)
            {
                
                throw new Exception($"Erro ao converter o mapa: {ex.Message}", ex);
            }
        }
   }
}