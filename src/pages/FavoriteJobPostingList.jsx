import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { Table,Button, Header } from 'semantic-ui-react'

import FavoriteJobPostingService from '../services/favoriteJobPostingService'
import { removeFromFavorite } from '../store/actions/favoriteActions'

export default function FavoriteJobPostingList() {

    const dispatch=useDispatch()

    const [favoriteJobPostings, setFavoriteJobPostings] = useState([])

    useEffect(()=>{
        let favoriteJobPostingService = new FavoriteJobPostingService()
        favoriteJobPostingService.getAllByJobSeekerId(1).then(result=>setFavoriteJobPostings(result.data.data))
        return favoriteJobPostings
    },[favoriteJobPostings])

    const handleRemoveFromFavorite = (favoriteJobPosting) =>{
        let favoriteJobPostingService=new FavoriteJobPostingService()
        favoriteJobPostingService.delete(favoriteJobPosting.id)
        dispatch(removeFromFavorite(favoriteJobPosting))
        toast.dark("Favorilerden kaldırıldı")

    }


    return (
        <div>
            <Header>
                Favori İş İlanları
            </Header>

            <Table color="black" celled className="shadow">
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
                        <Table.HeaderCell>Şehir</Table.HeaderCell>
                        <Table.HeaderCell>Pozisyon Adı</Table.HeaderCell>
                        <Table.HeaderCell>Detaylar</Table.HeaderCell>
                        <Table.HeaderCell>Favorilerden Sil</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        favoriteJobPostings.map(favoriteJobPosting => (
                            <Table.Row key={favoriteJobPosting.id}>
                                <Table.Cell>{favoriteJobPosting.jobPosting.employer.companyName}</Table.Cell>
                                <Table.Cell>{favoriteJobPosting.jobPosting.city.cityName}</Table.Cell>
                                <Table.Cell>{favoriteJobPosting.jobPosting.job.title}</Table.Cell>
                                <Table.Cell textAlign="center">
                                    <Button size="tiny" secondary>Detay</Button>
                                </Table.Cell>
                                <Table.Cell textAlign="center">
                                    <Button
                                        onClick={() =>
                                            handleRemoveFromFavorite(favoriteJobPosting)
                                        }
                                        icon='delete'
                                        color="red"
                                        size="tiny"
                                    />
                                </Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>
            </Table>
        </div>
    )
}
