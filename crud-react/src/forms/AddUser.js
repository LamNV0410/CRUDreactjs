import React, { useState } from 'react'

const AddUser = props => {
	console.log(props)
	const state = { id: null, name: '', password: '' }
	console.log("AddUserForm",state)
	const [ user, setUser ] = useState(state)

	const handleInputChange = event => {
		const { name, value } = event.target
		console.log(event)
		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.password) return

				props.addUser(user)
				setUser(state)
			}}
		>
			<label className="text-danger">Name</label>
			<input  class="form-control" type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>password</label>
			<input  class="form-control" type="text" name="password" value={user.password} onChange={handleInputChange} />
			<button>Add new user</button>
		</form>
	)
}

export default AddUser
