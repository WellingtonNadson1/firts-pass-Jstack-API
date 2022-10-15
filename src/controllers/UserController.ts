import { IncomingMessage, Server, ServerResponse } from 'http'
import { User, users } from '../mocks/users'

export function send(response: ServerResponse, statusCode: number, body: any){
  response.writeHead(statusCode, {'Content-type': 'application/json'})
  response.end(JSON.stringify(body))
}

// CREAT
export function creatUser(request: IncomingMessage, response: ServerResponse){
  const { data } = request
  const lastUser = users[users.length -1].id
      const newUser: User = {
        id: lastUser + 1,
        first_name: data.first_name,
        last_name: data.last_name
      }
      users.push(newUser)
      send(response, 200, newUser)
}

// READ
export function listUsers(request: IncomingMessage, response: ServerResponse){

  const { order } = request.query

    const sortedUsers = users.sort((userAnterior, userPosterior) => {
        if(order === 'desc'){
          return userAnterior.id < userPosterior.id ? 1 : -1
        }
        return userAnterior.id > userPosterior.id ? 1 : -1
    })
    send(response, 200, sortedUsers)
}

export function getUserById(request: IncomingMessage, response: ServerResponse){

  const { id } =  request.params

  const user = users.find(user => user.id ===  Number(id))

  if (user){
    return send(response, 200, user)
  }
  send(response, 200, {error: 'user not found'})
}

// UPDATE

// DELETE