using RabbitMQ.Client;
using System;
using System.Text;

namespace RabbitMQConsumer
{
    public class QueryConsumer
    {
        public static void Consume(IModel channel)
        {
            channel.QueueDeclare("demo",
                durable: true,
                exclusive: false,
                autoDelete: false,
                arguments: null);
            var consumer = new RabbitMQ.Client.Events.EventingBasicConsumer(channel);
            consumer.Received += (sender, e) =>
            {
                var body = e.Body.ToArray();
                var message = Encoding.UTF8.GetString(body);
                Console.WriteLine(message);
            };
            channel.BasicConsume("demo", true, consumer);
            Console.WriteLine("Consumer has started");
            Console.ReadLine();
        }
    }
}