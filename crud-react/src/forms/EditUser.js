import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label>Name</label>
      <input class="form-control" type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>password</label>
      <input class="form-control" type="text" name="password" value={user.password} onChange={handleInputChange} />
      <button>Update user</button>
      <button onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
