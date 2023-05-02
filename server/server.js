const fastify = require('fastify')({ logger: false });
const fastifySwagger = require('@fastify/swagger');
const fastifyCors = require('@fastify/cors');
const { User, Team, GuestBook, Jeu, Rencontre, Stand, Stock, Dedicace, Compo, Billet } = require('./src/index');

const port = 3000;

fastify.register(fastifyCors, {
    origin: ['https://localhost:8080'],
});

// const memwatch = require('memwatch-next');
//
// memwatch.on('leak', (info) => {
//     console.error('Memory leak detected:\n', info);
// });

fastify.register(fastifySwagger, {
    routePrefix: '/api-docs',
    swagger: {
        info: {
            title: 'lion e-sport',
            description: 'API documentation',
            contact: {
                name: 'Arian5',
            },
        },
        servers: ['http://localhost:3000/'],
    },
    exposeRoute: true,
});

fastify.get('/', (req, reply) => {
    reply.send('Hello');
});

fastify.register(User, { prefix: '/api/users' });
fastify.register(Team, { prefix: '/api/teams' });
fastify.register(Billet, { prefix: '/api/tickets' });
fastify.register(GuestBook, { prefix: '/api/guestBooks' });
fastify.register(Jeu, { prefix: '/api/jeux' });
fastify.register(Rencontre, { prefix: '/api/rencontres' });
fastify.register(Dedicace, { prefix: '/api/dedicaces' });
fastify.register(Compo, { prefix: '/api/compositions' });
fastify.register(Stand, { prefix: '/api/stands' });
fastify.register(Stock, { prefix: '/api/stocks' });

fastify.listen({ port: port }, (err) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
    fastify.log.info(`app listening on port ${port}`);
});
