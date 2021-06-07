import React, { useEffect, useState } from 'react'
import {Button, Header, Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployer().then(result => setEmployers(result.data.data))
    },[])

    return (
        <div>

            <Header>
                Employers
            </Header>

            <Table color="black" celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Company Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Web Address</Table.HeaderCell>
                        <Table.HeaderCell>Detail</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employers.map(employer => (
                            <Table.Row key={employer.id}>
                                <Table.Cell>{employer.companyName}</Table.Cell>
                                <Table.Cell>{employer.email}</Table.Cell>
                                <Table.Cell>{employer.website}</Table.Cell>
                                <Table.Cell>
                                    <Button>view</Button>
                                </Table.Cell>

                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </div>
    )
}
