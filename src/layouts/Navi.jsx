import React from 'react'
import { useHistory } from 'react-router'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'

export default function Navi() {

    const history = useHistory()

    function handleJobPosting() {
        history.push("/")
    }

    function handleJobPostingAdd() {
        history.push("/jobPostingAdd")
    }

    return (
        <div>
            <Menu size="tiny" inverted fixed="top">

                <Container>
                    <Menu.Item name='HRMS' />

                    <Menu.Item onClick={handleJobPosting}>İş İlanları</Menu.Item>

                    <Menu.Item onClick={handleJobPostingAdd}>İlan Yayınla</Menu.Item>

                    <Menu.Menu position='right'>

                        <Menu.Item>
                            <Button.Group>
                                <Button color="blue">Giriş Yap</Button>
                                <Button.Or text="<->"/>
                                <Button color="red">Kayıt Ol</Button>
                            </Button.Group>
                        </Menu.Item>

                        <Menu.Item>
                            <Dropdown
                                color="red"
                                text='İşveren'
                                icon='add user'
                                floating
                                labeled
                                button
                                className='icon'
                            >
                                <Dropdown.Menu>
                                    <Dropdown.Item color="blue">Giriş Yap</Dropdown.Item>
                                    <Dropdown.Item color="red">Kayıt Ol</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Menu.Item>

                    </Menu.Menu>
                </Container>


            </Menu>
        </div>
    )
}
