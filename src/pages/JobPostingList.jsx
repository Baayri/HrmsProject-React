import React, { useState, useEffect } from 'react'
import { Button, Header, Table } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPosting().then(result => setJobPostings(result.data.data))
    }, [])

    return (
        <div>

            <Header>
                Job Postings
            </Header>

            <Table color="black" celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>City</Table.HeaderCell>
                        <Table.HeaderCell>Position</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobPostings.map(jobPosting => (
                            <Table.Row key={jobPosting.id}>
                                <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
                                <Table.Cell>{jobPosting.city.cityName}</Table.Cell>
                                <Table.Cell>{jobPosting.job.title}</Table.Cell>
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
