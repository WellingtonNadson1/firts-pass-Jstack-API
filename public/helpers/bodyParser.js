import { send } from "../controllers/UserController.js";
export function bodyParser(request, response, callback) {
    let body = '';
    request.on('data', (chunk) => {
        body += chunk;
    });
    request.on('end', () => {
        try {
            const data = JSON.parse(body);
            request.data = data;
            callback();
        }
        catch (error) {
            send(response, 400, `error: ${error}`);
        }
    });
}
