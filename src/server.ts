import http from 'node:http'
import { URL } from 'node:url'
import { listUsers } from './controllers/UserController'
import { routes } from './routes'

const PORT = 3000
const hostname = 'localhost'

const server = http.createServer((request, response) => {

  const parsedUrl = new URL(`http://${hostname}:${PORT}${request.url}`)

  let { pathname } = parsedUrl

  const splitEndpoint = pathname.split('/').filter(Boolean)
  let id = null

  if (splitEndpoint.length > 1){
    pathname = `/${splitEndpoint[0]}/:id`
    id = splitEndpoint[1]
  }

  const router = routes.find(routerObj => (
    routerObj.endpoint === pathname && routerObj.method === request.method
  ))

  if (router){
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id }
    
    router.handler(request, response)
  } else {
    response.writeHead(404, {'Content-type': 'text/html'})
    response.end(`Cannot ${request.method}${request.url}`)
  }

})

server.listen(PORT, hostname, () => console.log(`Server running at http://${hostname}:${PORT}`))