namespace WebApiBackend.Models.Entities
{
    public class RoadMapBlocks
    {

        public string nome {get; set;}

        public string pai {get; set;}

        public string filho {get; set;}

        public List<string> CommentsLinks {get; set;} = new List<string>();
    }
}