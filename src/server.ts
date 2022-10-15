import http from 'node:http'
import { URL } from 'node:url'
import { bodyParser } from './helpers/bodyParser'
import { routes } from './routes'

const PORT = 3000
const hostname = 'localhost'

const server = http.createServer((request, response) => {

  const parsedUrl = new URL(`http://${hostname}:${PORT}${request.url}`)
  // Tratando o Placeholder ":id" da rota, 
  // para identificar o id do user a ser buscado na base. (Receiving params in the route)
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
    if (['POST', 'PUT', 'PATCH'].includes(request.method)){
      bodyParser(request, response, () =>{
        router.handler(request, response)
      })
    } else {
      router.handler(request, response)
    }
  } else {
    response.writeHead(404, {'Content-type': 'text/html'})
    response.end(`Cannot ${request.method}${request.url}`)
  }
})

server.listen(PORT, hostname, () => console.log(`Server running at http://${hostname}:${PORT}`))