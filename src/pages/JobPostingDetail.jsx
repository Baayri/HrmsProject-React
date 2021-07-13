import React, { useState } from 'react'
import { useEffect } from 'react'
import { Card, Grid, Button, Transition } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import JobPostingService from '../services/jobPostingService'

export default function JobPostingDetail() {

    let { id } = useParams()

    const [jobPosting, setJobPosting] = useState({})
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let jobPostingService = new JobPostingService()
        jobPostingService.getById(id).then(result => setJobPosting(result.data.data))
    }, [id])

    const handleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <div>
            <Card fluid color="grey">
                <Card.Content header="İlan" />
                <Card.Content>
                    <Grid centered>
                        <Grid.Row columns={3}>
                            <Grid.Column >
                                <Card.Description>
                                    <Card fluid color="blue">
                                        <Card.Content>
                                            <Card.Header>İş Pozisyonu</Card.Header>
                                            <Card.Description>{jobPosting.job?.title}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Description>
                            </Grid.Column>
                            <Grid.Column >
                                <Card.Description>
                                    <Card fluid color="blue">
                                        <Card.Content>
                                            <Card.Header>Şehir</Card.Header>
                                            <Card.Description>{jobPosting.city?.cityName}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Description>
                            </Grid.Column>
                            <Grid.Column >
                                <Card.Description>
                                    <Card fluid color="blue">
                                        <Card.Content>
                                            <Card.Header>Maaş(min-max)</Card.Header>
                                            <Card.Description>{jobPosting.salaryMin}-{jobPosting.salaryMax}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Description>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column >
                                <Card.Description>
                                    <Card fluid color="blue">
                                        <Card.Content>
                                            <Card.Header>Çalışma zamanı</Card.Header>
                                            <Card.Description>{jobPosting.workTime?.workTime}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Description>
                            </Grid.Column>
                            <Grid.Column >
                                <Card.Description>
                                    <Card fluid color="blue">
                                        <Card.Content>
                                            <Card.Header>Çalışma yeri</Card.Header>
                                            <Card.Description>{jobPosting.workType?.workType}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Description>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Card.Description>
                                    <Card fluid color="blue">
                                        <Card.Content>
                                            <Card.Header>Açık Pozisyon Adedi</Card.Header>
                                            <Card.Description>{jobPosting.numberOfOpenPosition}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Description>
                            </Grid.Column>
                            <Grid.Column>
                                <Card.Description>
                                    <Card fluid color="blue">
                                        <Card.Content>
                                            <Card.Header>Son Başvuru Tarihi</Card.Header>
                                            <Card.Description>{jobPosting.applicationDeadline}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Description>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={1}>
                            <Grid.Column>
                                <Card.Description>
                                    <Card fluid color="blue">
                                        <Card.Content>
                                            <Card.Header>Açıklama</Card.Header>
                                            <Card.Description>Açıklama : {jobPosting.jobDescription}</Card.Description>
                                        </Card.Content>
                                    </Card>
                                </Card.Description>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>

                        </Grid.Row>
                    </Grid>

                </Card.Content>
                <Card.Content extra textAlign="left">
                    <Button basic color="blue" content="İşveren Bilgileri" onClick={handleVisibility} />
                    <Button className="right floated" basic color="blue" content="Başvuru Yap" />
                </Card.Content>
            </Card>

            <Transition visible={visible} animation="drop" duration={600}>
                <Card color="blue">
                    <Card.Content header="İşveren" />
                    <Card.Content textAlign="left">
                        <Card.Description>Şirket Adı : {jobPosting.employer?.companyName}</Card.Description>
                    </Card.Content>
                    <Card.Content textAlign="left">
                        <Card.Description>Website : {jobPosting.employer?.website}</Card.Description>
                    </Card.Content>
                    <Card.Content textAlign="left">
                        <Card.Description>Telefon Numarası : {jobPosting.employer?.phone}</Card.Description>
                    </Card.Content>
                    <Card.Content extra textAlign="left">
                        <Button basic color="blue" content="Detay" />
                    </Card.Content>
                </Card>
            </Transition>
        </div>
    )
}
