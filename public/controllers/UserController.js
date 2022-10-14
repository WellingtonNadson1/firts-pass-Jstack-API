import { users } from '../mocks/users.js';
// CREAT
// READ
export function listUsers(request, response) {
    const { order } = request.query;
    const sortedUsers = users.sort((userAnterior, userPosterior) => {
        if (order === 'desc') {
            return userAnterior.id < userPosterior.id ? 1 : -1;
        }
        return userAnterior.id > userPosterior.id ? 1 : -1;
    });
    response.writeHead(200, { 'Content-type': 'application/json' });
    response.end(JSON.stringify(sortedUsers));
}
export function getUserById(request, response) {
    const { id } = request.params;
    const user = users.find(user => user.id === Number(id));
    if (user) {
        response.writeHead(200, { 'Content-type': 'application/json' });
        response.end(JSON.stringify(user));
    }
    else {
        response.writeHead(404, { 'Content-type': 'application/json' });
        response.end(JSON.stringify({ error: 'user not found' }));
    }
}
// UPDATE
// DELETE
