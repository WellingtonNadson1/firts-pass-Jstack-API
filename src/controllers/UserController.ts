import { IncomingMessage, ServerResponse } from "http";
import { users } from "../mocks/users";

// CREATE


// READ
export function lisUsers(request: IncomingMessage, response: ServerResponse){
  response.writeHead(200, {'Content-type': 'application/json'});
  response.end(JSON.stringify(users))
}
// UPDATE

// DELETE