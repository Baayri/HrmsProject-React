import React, { useState, useEffect } from 'react'
import { Button, Header, Table } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'

export default function JobPostingList() {

    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostings().then(result => setJobPostings(result.data.data))
    }, [])

    return (
        <div>

            <Header>
                İş İlanları
            </Header>

            <Table color="black" celled className="shadow">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
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
