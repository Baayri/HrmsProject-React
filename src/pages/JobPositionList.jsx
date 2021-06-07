import React, { useState, useEffect } from 'react'
import { Header, Table } from 'semantic-ui-react'
import JobPositionServie from '../services/jobPositionService'

export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([])

    useEffect(() => {
        let jobPositionService = new JobPositionServie()
        jobPositionService.getJobPosition().then(result => setJobPositions(result.data.data))
    }, [])

    return (
        <div>
            <Header>
                Job Positions
            </Header>

            <Table color="black" celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Job Title</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPositions.map(jobPosition => (
                            <Table.Row key={jobPosition.id}>
                                <Table.Cell>{jobPosition.title}</Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
