import React from 'react'
import { Menu } from 'semantic-ui-react'

export default function VerticalMenu() {
    return (
        <div>
            <Menu pointing secondary vertical>
                <Menu.Item name='Job position'/>
                <Menu.Item name='Employer' />
                <Menu.Item name='Job seeker' />
            </Menu>
        </div>
    )
}
