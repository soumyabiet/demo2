import React from "react";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";

function View ({viewdata}) {
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
            <Offcanvas.Title>{viewdata.title}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            {viewdata.body}
            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}
export default View;
