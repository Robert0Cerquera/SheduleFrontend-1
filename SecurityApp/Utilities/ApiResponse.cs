using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Utilities
{
    public class ApiResponse<T>

    {
        public bool Success { get; set; }
        public T Data { get; set; }
        public string Message { get; set; }

        public ApiResponse()
        {
        }

        public ApiResponse(bool success, T data, string message)
        {
            Success = success;
            Data = data;
            Message = message;
        }
    }
}
