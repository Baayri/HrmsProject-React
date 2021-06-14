import React from 'react'
import { Route } from 'react-router'
import { Grid } from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'
import JobPositionList from '../pages/JobPositionList'
import JobPostingList from '../pages/JobPostingList'
import JobSeekerList from '../pages/JobSeekerList'
import VerticalMenu from './VerticalMenu'
import AddJobPostingPage from '../pages/AddJobPostingPage'

export default function Dashboard() {
    return (
        <div>
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
                    </Grid.Column>

                </Grid.Row>

            </Grid>
        </div>
    )
}
