import Elysia from 'elysia';
import { login, signup } from './auth.controller';
import {
    LoginValidationSchema,
    SignUpValidationSchema,
} from './auth.validator';

export const InitV1AuthRoutes = (server: Elysia) =>
    server.group('/auth', (server) => 
        server.post('/login', login, {
            body: LoginValidationSchema,
        })
        .post('/signup', signup, {
            body: SignUpValidationSchema,
        })
    );

