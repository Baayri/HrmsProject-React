import React from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {
    return (
        <div>
            <Menu size="tiny" inverted fixed="top">

                <Container>
                    <Menu.Item name='HRMS' />

                    <Menu.Item name='Home' />

                    <Menu.Item name='Job postings' />

                    <Menu.Item name='Companies' />

                    <Menu.Menu position='right'>

                        <Menu.Item>
                            <Button.Group>
                                <Button color="blue">Login</Button>
                                <Button.Or/>
                                <Button color="red">Sign up</Button>
                            </Button.Group>
                        </Menu.Item>

                        <Menu.Item>
                            <Dropdown
                                color="red"
                                text='Employer'
                                icon='add user'
                                floating
                                labeled
                                button
                                className='icon'
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item color="blue">Login</Dropdown.Item>
                                    <Dropdown.Item color="red">Sign up</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>

                    </Menu.Menu>
                </Container>


            </Menu>
        </div>
    )
}
