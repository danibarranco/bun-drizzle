import { InitV1AuthRoutes } from './auth/auth.route';
import Elysia from 'elysia';

export const initV1Routes = (server: Elysia) => 
    server.group('/v1', (server) => server.use(InitV1AuthRoutes));

