import React from 'react'
import {Container, Button} from 'react-bootstrap'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
    <Container>
        <div className="notFound">
            <h1>{error.status}</h1>
            <p>{error.statusText}</p>

            <Button variant="link">Go Back</Button>
        </div>
    </Container>
    )
    }

export default ErrorPage