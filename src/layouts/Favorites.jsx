import React from 'react'
import { useSelector } from 'react-redux'
import { Icon, Label } from 'semantic-ui-react'

export default function Favorites() {

    const { favoriteItems } = useSelector(state => state.favorite)


    return (
        <div className="mt-1">
            
            <Label color="red">
                <Icon name='heart' />
                {favoriteItems.length}
                <Label.Detail as="a">Favoriler</Label.Detail>
            </Label>
            
        </div>
    )
}
