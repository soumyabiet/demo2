import { useFormik } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";

import * as Yup from 'yup';
import { useAuth } from "../../auth/auth.context";

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
});

const UserLogin = () => {
    const auth = useAuth();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            auth.loginAction(values);
        }
    });

    return (
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-info" >
                <Form onSubmit={formik.handleSubmit} className="mx-auto">
                    <h3>Sign In</h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter username"
                            onChange={formik.handleChange}
                            name="username"
                            value={formik.values.username} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            name="password"
                            value={formik.values.password} />
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={!formik.isValid} >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default UserLogin;