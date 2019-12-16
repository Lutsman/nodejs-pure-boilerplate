const url = require('url');
const path = require('path');
const http = require('http');

const {mainPageRoute, staticRoute} = require('./routes');

const server = new http.Server();
const publicDir = path.join(__dirname, 'public');

server.on('request', async (req, res) => {

    const pathname = decodeURI(url.parse(req.url).pathname);

    switch(req.method) {
        case 'GET':
            if (pathname === '/') {
                await mainPageRoute(publicDir, res);
            } else {
                await staticRoute(publicDir, pathname, res);
            }
            break;

        default:
            res.statusCode = 501;
            res.end('Not implemented');
    }

});

server.listen(3000);
