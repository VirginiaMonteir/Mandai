import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';

declare module 'fastify' {
  interface FastifyRequest {
    params: any;
    query: any;
    body: any;
  }
  
  interface FastifyReply {
    send(payload?: any): FastifyReply;
    status(code: number): FastifyReply;
  }
}

declare module '@fastify/cors';
declare module '@fastify/helmet';

export { FastifyInstance, FastifyRequest, FastifyReply };