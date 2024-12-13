import { useState, useEffect } from 'react'

export default function UseExample() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      setUsers(await response.json())
    }
    fetchUsers()
  }, [])

  return (
    <>
      <ul className="collection">
        {users.map((user) => (
          <li key={user.id} className="collection-item">
            {user.name}
          </li>
        ))}
      </ul>
    </>
  )
}
