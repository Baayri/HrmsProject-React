import React, { useState, useEffect } from 'react'
import { Button, Header, Table } from 'semantic-ui-react'
import JobSeekerService from '../services/jobSeekerService'

export default function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([])

    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeekers().then(result => setJobSeekers(result.data.data))
    }, [])

    return (
        <div>

            <Header>
                İş Arayanlar
            </Header>

            <Table color="black" celled className="shadow">

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Adı</Table.HeaderCell>
                        <Table.HeaderCell>Soyadı</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobSeekers.map(jobSeeker => (
                            <Table.Row key={jobSeeker.id}>
                                <Table.Cell>{jobSeeker.firstName}</Table.Cell>
                                <Table.Cell>{jobSeeker.lastName}</Table.Cell>
                                <Table.Cell>{jobSeeker.email}</Table.Cell>
                                <Table.Cell>
                                    <Button>Detay</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
