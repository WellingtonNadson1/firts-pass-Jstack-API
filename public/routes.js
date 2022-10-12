import { lisUsers } from "./controllers/UserController.js";
export let routes = [
    {
        endpoint: '/users',
        method: 'GET',
        handler: lisUsers
    }
];
