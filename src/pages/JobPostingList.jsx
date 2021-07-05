import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Button, Header, Table, Pagination, Grid } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService'
import { addToFavorite } from '../store/actions/favoriteActions'
import FavoriteJobPostingService from '../services/favoriteJobPostingService'

export default function JobPostingList() {

    const dispatch = useDispatch()

    const [jobPostings, setJobPostings] = useState([])
    const [activePage, setActivePage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const [totalPageSize, setTotalPageSize] = useState(0);

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getJobPostingsByActive(activePage, pageSize).then(result => {
            setJobPostings(result.data.data)
            setTotalPageSize(parseInt(result.data.message))
        })
    }, [activePage, pageSize])

    const handleAddToFavorite = (jobPosting) => {
        let favoriteJobPostingService = new FavoriteJobPostingService()
        let values = { jobPosting: { id: jobPosting.id, applicationDeadline: "" }, jobSeeker: { id: 1, birthDate: "" } }
        favoriteJobPostingService.add(values).then((result) => {
            if (result.data.success !== false) {
                dispatch(addToFavorite(jobPosting))
                toast.dark("Favorilere Eklendi")
            }
            return result.data.success
        })
    }


    const handlePaginationChange = (e, { activePage }) => {
        setActivePage(activePage);
    }

    const handlePageSizeChange = (pageSize) => {
        setPageSize(pageSize)
    }

    return (
        <div>

            <Grid>
                <Grid.Row>
                    <Grid.Column width={14}>
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
                                    <Table.HeaderCell>Favorilere Ekle</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {
                                    jobPostings.map(jobPosting => (
                                        <Table.Row key={jobPosting.id}>
                                            <Table.Cell>{jobPosting.employer.companyName}</Table.Cell>
                                            <Table.Cell>{jobPosting.city.cityName}</Table.Cell>
                                            <Table.Cell>{jobPosting.job.title}</Table.Cell>
                                            <Table.Cell textAlign="center">
                                                <Button size="tiny" secondary>Detay</Button>
                                            </Table.Cell>
                                            <Table.Cell textAlign="center">
                                                <Button
                                                    onClick={() =>
                                                        handleAddToFavorite(jobPosting)
                                                    }
                                                    icon='heart'
                                                    color="red"
                                                    size="tiny"
                                                />
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
                    </Grid.Column>

                    <Grid.Column width={2}>
                        <div className="mt-5">
                            <Button.Group size="tiny" color="black" vertical>
                                <Button onClick={()=>handlePageSizeChange(10)}>10</Button>
                                <Button onClick={()=>handlePageSizeChange(20)}>20</Button>
                                <Button onClick={()=>handlePageSizeChange(50)}>50</Button>
                                <Button onClick={()=>handlePageSizeChange(100)}>100</Button>
                            </Button.Group>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>



        </div>
    )
}
