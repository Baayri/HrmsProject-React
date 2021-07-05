import React, { useEffect } from 'react'
import { useState } from 'react'
import { Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import FavoriteJobPostingService from '../services/favoriteJobPostingService'

export default function Favorites() {

    const [favoriteItems, setFavoriteItems] = useState([])

    useEffect(() => {
        let favoriteJobPostingService = new FavoriteJobPostingService()
        favoriteJobPostingService.getAllByJobSeekerId(1).then(result => setFavoriteItems(result.data.data))
    })
    return (
        <div className="mt-1 mr-2">
            <Link to="/favoriteJobPostings">
                <Label color="red">
                    <Icon name='heart' />
                    {favoriteItems.length}
                    <Label.Detail>Favoriler</Label.Detail>
                </Label>
            </Link>


        </div>
    )
}
