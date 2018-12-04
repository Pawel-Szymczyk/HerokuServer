'use strict';

const Hapi = require('hapi');


let defaultPort = process.env.PORT;
if (defaultPort == null || defaultPort == "") {
    defaultPort = 8000;
}

const server = Hapi.server({
    port: defaultPort,
    host: 'localhost'
});

const init = async () => {

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();