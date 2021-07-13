import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { Button, Header, Pagination, Grid, Card } from 'semantic-ui-react'
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
                        {
                            jobPostings.map(jobPosting => (
                                <Card  key={jobPosting.id} fluid color="black">

                                    <Card.Content textAlign="left">
                                        <Card.Header>
                                                {jobPosting.job.title}
                                                <Button
                                                    className="right floated"
                                                    onClick={() =>
                                                        handleAddToFavorite(jobPosting)
                                                    }
                                                    icon='heart'
                                                    color="red"
                                                    size="tiny"
                                                />
                                            </Card.Header>
                                        <Card.Meta>
                                            {jobPosting.employer.companyName}
                                        </Card.Meta>
                                        <Card.Description>
                                            {jobPosting.city.cityName}
                                            <Card.Description className="right floated">
                                                <Link to={`jobPosting/${jobPosting.id}`}><Button size="tiny" secondary>Detay</Button></Link>
                                            </Card.Description>
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            ))
                        }

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
                        <div className="verticalMenu">
                            <Button.Group size="tiny" color="black" vertical>
                                <Button onClick={() => handlePageSizeChange(10)}>10</Button>
                                <Button onClick={() => handlePageSizeChange(20)}>20</Button>
                                <Button onClick={() => handlePageSizeChange(50)}>50</Button>
                                <Button onClick={() => handlePageSizeChange(100)}>100</Button>
                            </Button.Group>
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>



        </div>
    )
}
