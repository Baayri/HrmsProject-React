import React, { useState, useEffect } from 'react'
import { Button, Header, Table } from 'semantic-ui-react'
import JobSeekerService from '../services/jobSeekerService'

export default function JobSeekerList() {

    const [jobSeekers, setJobSeekers] = useState([])

    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeeker().then(result => setJobSeekers(result.data.data))
    }, [])

    return (
        <div>

            <Header>
                Job Seekers
            </Header>

            <Table color="black" celled>

                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
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
                                    <Button>view</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}