using FormulaOne.chatService.Models;
using System.Collections.Concurrent;
using System.Threading.RateLimiting;

namespace FormulaOne.chatService.DataService
{
    public class SharedDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connections = new();
        public ConcurrentDictionary<string, UserConnection> connections => _connections;
    }
}
