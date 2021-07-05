import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button, Header, Table } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'

export default function ConfirmedJobPostingPage() {
    
    const [jobPostings, setJobPostings] = useState([])



    useEffect(()=>{
        const jobPostingService=new JobPostingService()
        jobPostingService.getJobPostingsByInActive.then(result => setJobPostings(result.data.data))
    },[])

    function handleConfirmed(e,id) {
        const jobPostingService=new JobPostingService()
        jobPostingService.updateByActive(id,true).then(result =>{
            e.target.parentElement.parentElement.remove();
        })
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
                                    onClick={(e) => handleConfirmed(e,jobPosting.id)}
                                    >Onayla</Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
