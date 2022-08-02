import React, { Fragment, useEffect, useState } from 'react'
import {Row, Col, Button, Image} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import {gql, useQuery, useLazyQuery } from '@apollo/client'

import { useAuthDispatch } from '../../context/auth';

import Users from './Users'
import Messages from './Messages'




export default function Home() {
    const history = useNavigate()
    const dispatch = useAuthDispatch()


    const logout = () => {
        dispatch({type: 'LOGOUT'})
        window.location.href = '/login'
    }   
    

    return (
        <Fragment>
            <Row className="bg-white mb-1">
                <Col xs={4} className="text-center">
                    <Link to="/login">
                        <Button variant="link">Login</Button>
                    </Link>
                </Col>
                <Col xs={4} className="text-center">
                    <Link to="/register">
                        <Button variant="link">Register</Button>
                    </Link>
                </Col>
                <Col xs={4} className="text-center">
                    <Button variant="link" onClick={logout}>Logout</Button>
                </Col>
            </Row>
            <Row className="bg-white">
                <Users />
                <Messages />
            </Row>
        </Fragment>
    )
}