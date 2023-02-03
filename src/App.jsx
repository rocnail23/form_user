import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'

function App() {
  const [users, setusers] = useState()
  const [updateInfo, setUpdateInfo] = useState()

  const getAllUsers = () => {
    const url = "http://users-crud.academlo.tech/users/"
    axios.get(url)
    .then(res => setusers(res.data))
    .catch(err => console.log(err))
  }
  const createNewUser = (data) => {
    const url = "http://users-crud.academlo.tech/users/"
    axios.post(url, data)
    .then(res => {console.log(res.data)
    getAllUsers()})
    .catch(err => console.log(err))
  }

  const deleteUserById = (id) => {
    const url = `http://users-crud.academlo.tech/users/${id}/`
    axios.delete(url)
    .then(res => {console.log(res)
    getAllUsers()
    
  })
  .catch(err => console.log(err))

  }

  const updateUserById = (id, data) => {
    const url = `http://users-crud.academlo.tech/users/${id}/`
    axios.put(url, data)
      .then(res => {
        console.log(res.data)
        getAllUsers()
        setUpdateInfo()
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  },[])

  console.log(users)
  return (
    <div className="App">
      <h1>users</h1>
      <FormUser 
      createNewUser={createNewUser} 
      updateInfo={updateInfo}
      updateUserById={updateUserById}/>
      {
        users?.map((user) => (
          <UserCard 
          key={user.id} 
          user={user}
          deleteUserById={deleteUserById}  
          setUpdateInfo={setUpdateInfo}/>
        ))
      }
    </div>
  )
}

export default App
