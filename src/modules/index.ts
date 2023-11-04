import { initV1Routes } from './v1/v1.routes';
import { Elysia } from 'elysia';

export const RoutesProvider = (server: Elysia) => 
    // Api V1 Routes
    server.group('/api', (server) => server.use(initV1Routes))
    // 404 Routes 
    .all('*', ({set, body}) => {
        set.status = 404;
        body = {
            message: 'Route Not Found 🤷🏽',
        };
        return body;
    });

