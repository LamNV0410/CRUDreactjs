import React, { useState, Fragment } from 'react'
import AddUser from './forms/AddUser'
import EditUser from './forms/EditUser'
import UserTable from './forms/UserTable'
import data from './data.json'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Data
  const usersData = data
  console.log("appData",usersData)
  const initialFormState = { id: null, name: '', password: '' }

  // Setting state
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState("")
  const [editing, setEditing] = useState(false)

  // CRUD 
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setEditing(false)
    const index = usersData.findIndex(x=>x.id ===id)
    if(index <0 ) return
    const newUsers = [...users]
    newUsers.splice(index,1)
    setUsers(newUsers)
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, password: user.password })
  }

  return (
    <div className="container">
      <div className="d-flex flex-row justify-content-around">
        <div className="col-6">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUser
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
              <Fragment>
                <h2>Add user</h2>
                <AddUser addUser={addUser} />
              </Fragment>
            )}
        </div>
        <div className="col-6">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
