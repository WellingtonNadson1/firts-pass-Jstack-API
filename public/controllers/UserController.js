import { users } from "../mocks/users.js";
// CREATE
// READ
export function lisUsers(request, response) {
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(JSON.stringify(users));
}
// UPDATE
// DELETE
