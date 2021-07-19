import mongoose, { Schema, Document } from 'mongoose'

type Sex = '男' | '女'

interface User {
  name: String
  email: String
  sex: Sex
  age: Number
}

const users: Array<User> = [
  {
    name: 'ユーザー1',
    email: 'user1@example.com',
    sex: '男',
    age: 19,
  },
  {
    name: 'ユーザー2',
    email: 'user2@example.com',
    sex: '男',
    age: 22,
  },
  {
    name: 'ユーザー3',
    email: 'user3@example.com',
    sex: '女',
    age: 33,
  },
]

export function find(): Array<User> {
  return users
}