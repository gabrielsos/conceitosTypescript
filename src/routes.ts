import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response){
  const user = createUser({
    name: 'Gabriel',
    email: 'gabrielsos99@gmail.com',
    password: '123',
    techs: ['Node.js', 'ReactJS', 'React Native', { title: 'Javascript', experience: 100}]
  })

  return response.json({ user })
}