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
    response.send(200, sortedUsers);
}
export function getUserById(request, response) {
    const { id } = request.params;
    const user = users.find(user => user.id === Number(id));
    if (user) {
        return response.send(200, user);
    }
    response.send(200, { error: 'user not found' });
}
// UPDATE
// DELETE
