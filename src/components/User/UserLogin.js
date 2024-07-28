import { useFormik } from "formik";
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

import * as Yup from 'yup';
import { useAuth } from "../../auth/auth.context";

const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    password: Yup.string()
        .required('Password is required')
});

const UserLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { loginAction } = useAuth();
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: LoginSchema,
        onSubmit: values => {
            setLoading(true)
            loginAction(values, (data) => {
                if (data.message) {
                    setError(data.message);
                }
                setLoading(false)
            });

        }
    });

    return (
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <div className="panel panel-info" >
                <Form onSubmit={formik.handleSubmit} className="mx-auto">
                    <h3>Sign In</h3>
                    { error ? (<Alert variant={`danger`}>
                        {error}
                    </Alert>) : null}
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter username"
                            onChange={formik.handleChange}
                            name="username"
                            value={formik.values.username}
                            isInvalid={!!formik.errors.username} />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors?.username}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            name="password"
                            value={formik.values.password}
                            isInvalid={!!formik.errors.password} />
                        <Form.Control.Feedback type="invalid">
                            {formik.errors?.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" disabled={loading}>
                        {loading ? `Loading...` : `Login`}
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default UserLogin;