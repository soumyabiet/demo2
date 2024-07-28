import React from "react";
import { useState,useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { getPostComment } from "../../../../model/Post";

function Comment(props){
    const [commentData, setCommentData] = useState(0);
    const [comment, setComment] = useState([]);
    useEffect(() => {
        getPostComment(props.viewdata.id).then((result)=>{
          setComment(result)
        });
    }, [commentData]);
    const [show, setShow] = useState(true);
    const handleClose = () => {
        setShow(false);
        routeChange('/post/list')

    };
    let navigate = useNavigate();
        const routeChange = (pathname) =>{
        let path = pathname;
        navigate(path);
    }

    return(
        <>
        <Offcanvas show={show} onHide={handleClose} placement='end' name='end'>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>{props.viewdata.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {
                   comment.map((element,i)=>{
                        return(
                            <Card style={{ width: '18rem' }} key={element.id}>
                                <Card.Body>
                                    <Card.Title>{element.name}</Card.Title>
                                    <Card.Text>
                                    {element.body}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                   })
                }
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}
export default Comment;
