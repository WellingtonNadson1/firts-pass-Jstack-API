import { lisUsers } from "./controllers/UserController";

export let routes = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: lisUsers
  }
]