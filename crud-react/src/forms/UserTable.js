import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Table,Button } from 'react-bootstrap'

const UserTable = props => (
  <Table striped bordered hover>
    <thead>
      <tr>
        <th>Name</th>
        <th>password</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.password}</td>
            <td>
              <Button
                onClick={() => {
                  props.editRow(user)
                }}
                className="btn btn-primary mr-3"
              >
                Edit
              </Button>
              <Button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger"
              >
                Delete
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </Table>
)

export default UserTable
