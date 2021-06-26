import React, { useEffect, useState } from 'react'
import { Table,Button, Header } from 'semantic-ui-react'
import EmployerService from '../services/employerService'
import EmployerUpdateService from '../services/employerUpdateService'

export default function ConfirmedEmployerUpdatePage() {

    const [employerUpdates, setEmployerUpdates] = useState([])

    useEffect(()=>{
        let employerUpdateService=new EmployerUpdateService()
        employerUpdateService.getAll().then(result=>setEmployerUpdates(result.data.data))
    },[])

    function handleConfirmed(id,companyName,website,phone){
        console.log(id)
        let employerService=new EmployerService()
        employerService.update(id,companyName,website,phone)
    }

    return (
        <div>
            <Header>
                İşveren Güncellemeleri
            </Header>

            <Table color="black" celled className="shadow">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
                        <Table.HeaderCell>Telefon Numarası</Table.HeaderCell>
                        <Table.HeaderCell>Onay</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        employerUpdates.map(employerUpdate => (
                            <Table.Row key={employerUpdate.id}>
                                <Table.Cell>{employerUpdate.companyName}</Table.Cell>
                                <Table.Cell>{employerUpdate.website}</Table.Cell>
                                <Table.Cell>{employerUpdate.phone}</Table.Cell>
                                <Table.Cell>
                                    <Button
                                        onClick={()=>
                                            handleConfirmed(employerUpdate.employer.id,employerUpdate.companyName,employerUpdate.website,employerUpdate.phone)}
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
