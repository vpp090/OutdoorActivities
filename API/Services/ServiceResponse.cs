using System.Net;
namespace API.Services
{
    public class ServiceResponse <T>
    {
        public T Data {get; set;}
        public string ErrorMessage {get; set;}
        public HttpStatusCode HttpCode {get; set;}
     }
}