namespace WebApiBackend.Models
{

    enum roadMaptype{
        node,
        link
    }

    public class RoadMapBlocks
    {
        public string nome {get; set;}

        public string pai {get; set;}

        public string filho {get; set;}

        public roadMaptype type {get; set;}

        public List<string> CommentsLInks {get; set;}
    }
}