import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Sandeep Dhungana',
    password: bcrypt.hashSync('12345', 10),
    email: 'sandeep@example.com',
    isAdmin: true,
  },
  {
    name: 'Pujan Aryal',
    password: bcrypt.hashSync('12345', 10),
    email: 'pujan@example.com',
  },
  {
    name: 'Rajit Rimal',
    password: bcrypt.hashSync('12345', 10),
    email: 'rajit@example.com',
  },
]

export default users
