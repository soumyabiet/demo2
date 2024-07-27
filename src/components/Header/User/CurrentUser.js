import React from "react";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../../model/User";
import { ListGroup } from "react-bootstrap";

function CurrentUser() {
  const [usersData, setUsersData] = useState(null);
  useEffect(() => {
    getCurrentUser().then((result) => {
      setUsersData(result.data);
    })
  }, []);

  return (
    <>
      {usersData ? (
        <>
        <div>User Information </div>
        <ListGroup>
        <ListGroup.Item>{usersData.firstName}</ListGroup.Item>
        <ListGroup.Item>{usersData.lastName}</ListGroup.Item>
        <ListGroup.Item>{usersData.email}</ListGroup.Item>
        <ListGroup.Item>{usersData.username}</ListGroup.Item>
        <ListGroup.Item>{usersData.createdDate}</ListGroup.Item>
      </ListGroup>
      </>) : null}

    </>
  )
}
export default CurrentUser;