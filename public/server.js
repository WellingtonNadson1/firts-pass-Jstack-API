import http from 'node:http';
import { lisUsers } from './controllers/UserController.js';
import { routes } from './routes.js';
const PORT = 3000;
const hostname = 'localhost';
const server = http.createServer((request, response) => {
    const route = routes.find(routeObj => (
        routeObj.endpoint === request.url && routeObj.method === request.method
    ));
    if (route) {
        lisUsers(request, response);
    }
    else {
        response.writeHead(400, { 'Content-type': 'text/html' });
        response.end(`Cannot ${request.method}${request.url}`);
    }
});
server.listen(PORT, hostname, () => console.log(`Server running at ${hostname}:${PORT}`));
