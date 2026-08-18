import fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import { restaurantRoutes } from './infrastructure/web/routes/restaurantRoutes.js';
import { orderRoutes } from './infrastructure/web/routes/orderRoutes.js';

const app: any = fastify({ logger: true });

// Registrar plugins
app.register(cors, {
  origin: '*',
});
app.register(helmet);

// Registrar rotas
app.register(restaurantRoutes, { prefix: '/api/v1' });
app.register(orderRoutes, { prefix: '/api/v1' });

// Rota raiz
app.get('/', async (_request: any, reply: any) => {
  return reply.send({
    message: 'Bem-vindo à API do Mandaí!',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
  });
});

// Rota de health check
app.get('/health', async (_request: any, reply: any) => {
  return reply.send({
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3001;

const start = async () => {
  try {
    await app.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  } catch (err) {
    console.error('❌ Erro ao iniciar o servidor:', err);
    process.exit(1);
  }
};

start();