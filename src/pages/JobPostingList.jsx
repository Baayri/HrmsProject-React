import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Button, Header, Table, Icon } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'
import { addToFavorite } from '../store/actions/favoriteActions'

export default function JobPostingList() {

    const dispatch = useDispatch()

    const [jobPostings, setJobPostings] = useState([])

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostingsByActive().then(result => setJobPostings(result.data.data))
    }, [])

    const handleAddToFavorite = (jobPostings) => {
        dispatch(addToFavorite(jobPostings))
        toast.dark("Favorilere eklendi")
    }


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
                                    <Button onClick={() => handleAddToFavorite(jobPosting)} icon color='red'>
                                        <Icon name='heart' />
                                    </Button>
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>
        </div>
    )
}
