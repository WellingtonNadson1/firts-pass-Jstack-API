import { getUserById, listUsers } from "./controllers/UserController";

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
  }
]