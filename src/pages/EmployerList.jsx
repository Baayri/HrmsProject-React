import React, { useEffect, useState } from 'react'
import {Button, Header, Table } from 'semantic-ui-react'
import EmployerService from '../services/employerService'

export default function EmployerList() {

    const [employers, setEmployers] = useState([])

    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then(result => setEmployers(result.data.data))
    },[])

    return (
        <div>

            <Header>
                İşverenler
            </Header>

            <Table color="black" celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
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
                                    <Button>Detay</Button>
                                </Table.Cell>

                            </Table.Row>
                        ))
                    }
                </Table.Body>
            </Table>

        </div>
    )
}
