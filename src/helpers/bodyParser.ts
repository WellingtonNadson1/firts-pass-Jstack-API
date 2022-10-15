import { IncomingMessage, ServerResponse } from "http";
import { send } from "../controllers/UserController";

export function bodyParser(request: IncomingMessage, response: ServerResponse, callback){
  let body = '';
  request.on('data', (chunk) =>{
    body += chunk
  })
  request.on('end', () =>{
    try {
      const data = JSON.parse(body)
      request.data = data
      callback()
    } catch (error) {

      send(response, 400, `error: ${error}`)
    }
  })
}