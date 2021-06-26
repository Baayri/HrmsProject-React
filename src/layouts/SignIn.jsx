import React from 'react'
import { Button, ButtonGroup, Dropdown} from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'

export default function SignIn({ signOut }) {
    return (
        <div>

            <Dropdown as={ButtonGroup} className="mr-2">
                <Button variant="info"><Icon name="user circle"></Icon></Button>

                <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" />

                <Dropdown.Menu>
                    <Dropdown.Item >Ayarlar</Dropdown.Item>
                    <Dropdown.Item onClick={signOut}>Çıkış Yap</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
