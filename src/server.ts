import http from 'node:http'
import { users } from './mocks/users';
import { lisUsers } from './controllers/UserController';
import { routes } from './routes';

const PORT = 3000;
const hostname = 'localhost';

const server = http.createServer((request, response) => {

const route = routes.find(routeObj => (
  routeObj.endpoint === request.url && routeObj.method === request.method
))

  if (route){
    lisUsers(request, response)
  } else {
    response.writeHead(400, {'Content-type': 'text/html'});
  response.end(`Cannot ${request.method}${request.url}`)
  }
})

server.listen(PORT, hostname, () => console.log(`Server running at ${hostname}:${PORT}`))