import React from 'react'
import { useHistory } from 'react-router'
import { Menu } from 'semantic-ui-react'

export default function VerticalMenu() {

    const history=useHistory()
    function handleJobPosition() {
        history.push("/jobpositions")
    }

    function handleEmployer() {
        history.push("/employers")
    }

    function handleJobSeeker() {
        history.push("/jobseekers")
    }

    return (
        <div className="verticalMenu">
            <Menu pointing vertical className="shadow">
                <Menu.Item onClick={handleJobPosition}>İş Pozisyonları</Menu.Item>
                <Menu.Item onClick={handleEmployer}>İşverenler</Menu.Item>
                <Menu.Item onClick={handleJobSeeker}>İş Arayanlar</Menu.Item>
            </Menu>
        </div>
    )
}
