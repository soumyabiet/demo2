import React from "react";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import { getPostData } from "../../../../model/Post";
function List(props) {
  const [postdata, setPostdata] = useState(0);
  const [title, setTitle] = useState([]);
  const [totaldata, settotaldata] = useState([]);
  const [active, setActive] = useState(1);
  const [item, setItem] = useState(0);
  useEffect(() => {

    getPostData().then((result)=>{
      console.log(result)
      settotaldata(result);
      const datatitle = result.map(obj => {
        return obj
      }).slice(0, 10);
      setTitle(datatitle);
      let dataLength = (result.length) / 10;
      if (Number.isInteger(dataLength)) {
        setItem(dataLength)
      }
    });

  }, [postdata]);


  const deleteTitle = (index) => {
    console.log(index)
    const newTitle = title.filter((_, i) => i !== index);
    setTitle(newTitle)
  }
  const pagedata = (item) => {
    setActive(item)
    let start = 0;
    let end = 10;
    if (item > 1) {
      end = 10 * item;
      start = end - 10;
      const datatitle = totaldata.map(obj => {
        return obj
      }).slice(start, end);
      setTitle(datatitle);
    }
    else {
      const datatitle = totaldata.map(obj => {
        return obj
      }).slice(start, end);
      setTitle(datatitle);
    }
  }

  let items = [];
  for (let number = 1; number <= item; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => pagedata(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            title.map((element, i) => {
              return (
                <tr key={i}>
                  <td>{element.id}</td>
                  <td>{element.title}</td>
                  <td><Button variant="primary" as={Link} to={`/post/view/${element.id}`} onClick={() => props.getViewData(element)}>View Post</Button> <Button variant="primary" as={Link} to={`/post/comment/${element.id}`} onClick={() => props.getViewData(element)}>View Comments</Button> <Button variant="danger" onClick={() => deleteTitle(i)} >Delete</Button></td>
                </tr>
              )

            })
          }
        </tbody>
      </Table>
      <Pagination >{items}</Pagination>
    </>
  )
}
export default List;
