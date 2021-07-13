import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Header, Table,Pagination } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'

export default function ConfirmedJobPostingPage() {

    const [jobPostings, setJobPostings] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [pageSize] = useState(10)
    const [totalPageSize, setTotalPageSize] = useState(0);




    useEffect(() => {
        const jobPostingService = new JobPostingService()
        jobPostingService.getJobPostingsByInActive(activePage, pageSize).then(result => {
            setJobPostings(result.data.data)
            setTotalPageSize(parseInt(result.data.message))
        })
    }, [activePage,pageSize])

    function handleConfirmed(e, id) {
        const jobPostingService = new JobPostingService()
        jobPostingService.updateByActive(id, true).then(result => {
            e.target.parentElement.parentElement.remove();
        })
    }

    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage);
    }

    return (
        <div>
            <Header>
                İş İlanları(Aktif Değil)
            </Header>

            <Table color="black" celled className="shadow">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
                        <Table.HeaderCell>Onay</Table.HeaderCell>
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
                                    <Button
                                        onClick={(e) => handleConfirmed(e, jobPosting.id)}
                                    >Onayla</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

            <Pagination
                firstItem={null}
                lastItem={null}
                pointing
                secondary
                activePage={activePage}
                onPageChange={handlePaginationChange}
                totalPages={Math.ceil(totalPageSize)}
            />
        </div>
    )
}
