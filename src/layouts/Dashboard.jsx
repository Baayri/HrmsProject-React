import React from 'react'
import { Route } from 'react-router'
import { Grid } from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'
import JobPositionList from '../pages/JobPositionList'
import JobPostingList from '../pages/JobPostingList'
import JobSeekerList from '../pages/JobSeekerList'
import VerticalMenu from './VerticalMenu'
import AddJobPostingPage from '../pages/AddJobPostingPage'
import ConfirmedJobPostingPage from '../pages/ConfirmedJobPostingPage'
import { ToastContainer } from 'react-toastify'
import EmployerUpdatePage from '../pages/EmployerUpdatePage'
import ConfirmedEmployerUpdatePage from '../pages/ConfirmedEmployerUpdatePage'
import AddCurriculaVitaePage from '../pages/AddCurriculaVitaePage'
import FavoriteJobPostingList from '../pages/FavoriteJobPostingList'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-left"/>
            <Grid>

                <Grid.Row>

                    <Grid.Column width={4}>
                        <VerticalMenu/>
                    </Grid.Column>


                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobPostingList}  />
                        <Route exact path="/employers" component={EmployerList}  />
                        <Route exact path="/jobpositions" component={JobPositionList}  />
                        <Route exact path="/jobseekers" component={JobSeekerList}  />
                        <Route exact path="/jobPostingAdd" component={AddJobPostingPage}/>
                        <Route exact path="/curriculaVitaeAdd" component={AddCurriculaVitaePage}/>
                        <Route exact path="/confirmedJobPostings" component={ConfirmedJobPostingPage}/>
                        <Route exact path="/employerUpdate" component={EmployerUpdatePage}/>
                        <Route exact path="/confirmedEmployerUpdate" component={ConfirmedEmployerUpdatePage}/>
                        <Route exact path="/favoriteJobPostings" component={FavoriteJobPostingList}/>
                    </Grid.Column>


                </Grid.Row>

            </Grid>
        </div>
    )
}
