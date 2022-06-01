using Newtonsoft.Json;
using RabbitMQ.Client;
using System;
using System.Collections.Generic;
using System.Text;

namespace Producer
{
    class QueueProducer
    {
        public static void Publish(IModel model)
        {
            model.QueueDeclare("demo",
                durable: true,
                exclusive: false,
                autoDelete: false,
                arguments: null);
            int count = 0;
            var message = new
            {
                Name = "Rabbit MQ learning", Message = $"Hello Team!! count ={count} "
            };
            var body = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(message));
            model.BasicPublish("", "demo", null, body);
        }
    }
}
