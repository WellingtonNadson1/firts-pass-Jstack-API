import { users } from "../mocks/users";
// CREATE
// READ
export function lisUsers(request, response) {
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(JSON.stringify(users));
}
// UPDATE
// DELETE
