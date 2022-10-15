import { creatUser, getUserById, listUsers } from "./controllers/UserController.js";
export let routes = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: listUsers,
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: getUserById,
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: creatUser,
    }
];
