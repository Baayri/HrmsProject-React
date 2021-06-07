import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import EmployerList from '../pages/EmployerList'
import JobPositionList from '../pages/JobPositionList'
import JobPostingList from '../pages/JobPostingList'
import JobSeekerList from '../pages/JobSeekerList'

export default function Section() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <GridColumn size={14}>
                        <JobPostingList />
                    </GridColumn>
                </Grid.Row>

                <Grid.Row>
                    <GridColumn size={14}>
                        <JobSeekerList />
                    </GridColumn>
                </Grid.Row>

                <Grid.Row>
                    <GridColumn size={14}>
                        <JobPositionList />
                    </GridColumn>
                </Grid.Row>

                <Grid.Row>
                    <GridColumn size={14}>
                        <EmployerList />
                    </GridColumn>
                </Grid.Row>
            </Grid>
        </div>
    )
}
