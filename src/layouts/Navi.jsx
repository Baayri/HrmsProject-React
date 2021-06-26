import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Container } from 'semantic-ui-react'
import SignOut from './SignOut'
import SignIn from './SignIn'
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import Favorites from './Favorites'


export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignIn() {
        setIsAuthenticated(true)
    }

    function handleSignOut() {
        setIsAuthenticated(false)
    }

    const history = useHistory()

    function handleJobPosting() {
        history.push("/")
    }

    function handleJobPostingAdd() {
        history.push("/jobPostingAdd")
    }

    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand>HRMS</NavbarBrand>
                    <Nav className="mr-auto">
                        <Nav.Link onClick={handleJobPosting}>İş İlanları</Nav.Link>
                        <Nav.Link onClick={handleJobPostingAdd}>İlan Yayınla</Nav.Link>
                    </Nav>



                    <Nav className="ml-auto">
                        <Nav.Item>
                            {!isAuthenticated ? <SignOut signIn={handleSignIn} /> :
                                <SignIn signOut={handleSignOut} />}
                        </Nav.Item>

                        <Nav.Item>
                            {isAuthenticated ? <Favorites/>:null}
                        </Nav.Item>
                    </Nav>


                </Container>
            </Navbar>

            {/* <Menu size="tiny" inverted fixed="top">

                <Container>
                    <Menu.Item name='HRMS' />

                    <Menu.Item onClick={handleJobPosting}>İş İlanları</Menu.Item>

                    <Menu.Item onClick={handleJobPostingAdd}>İlan Yayınla</Menu.Item>

                    <Menu.Menu position='right'>

                        {!isAuthenticated? <SignOut signIn={handleSignIn}/>:
                        <SignIn signOut={handleSignOut}/>}

                    </Menu.Menu>
                </Container>


            </Menu> */}
        </div>
    )
}
