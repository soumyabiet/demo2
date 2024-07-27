import React from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserList } from "../../../../model/User";

function List() {
  const [usersData, setUsersData] = useState([]);
  const [uid, setUID] = useState("");
  useEffect(() => {
    getUserList().then((result)=>{
      setUsersData(result.data);
    })
    setUID(localStorage.getItem('uid'));
  }, [uid]);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {usersData.map((user)=>{
              return(
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.id !== uid ? <Button variant="outline-danger">Delete</Button> : ""}
                    
                  </td>
                </tr>
              )
            })}
        </tbody>
      </Table>
      <Button variant="primary"as={Link} to="/user/add">Add user</Button>
    </>
  )
}
export default List;
