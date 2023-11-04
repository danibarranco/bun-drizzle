//import './db/index';
import { Elysia } from 'elysia';
import { RoutesProvider } from './modules';
import { swagger } from '@elysiajs/swagger';
import { jwt } from '@elysiajs/jwt';

export const server = new Elysia()
    .use(
        jwt({
            name: 'jwt',
            secret: Bun.env.JWT_SECRET as string,
        }),
    )
    .use(RoutesProvider)
    .use(
        swagger({
            documentation: {
                info: {
                    title: 'Elysia API',
                    version: '1.0.0',
                    description: 'Elysia API Documentation',
                },
                servers: [
                    {
                        url: 'http://localhost:{port}',
                        description: 'Local Server',
                        variables: {
                            port: {
                                default: Bun.env.PORT || '3000',
                            },
                        },
                    },
                ],
            },
        }) as any,
    );

const PORT = Bun.env.PORT || 3000;

server.listen(PORT, () => {
    console.log('-'.repeat(50));

    server.routes.forEach((route) => {
        console.log(`${route.method} ${route.path}`);
        if (route.path.includes('swagger') || route.path === '/*') {
            return;
        }
    });

    console.log('-'.repeat(50));

    console.log(`Server is running on port ${PORT} 🚀`);
});
