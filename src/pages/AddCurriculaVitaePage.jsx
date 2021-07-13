import React from 'react'
import { Card } from 'semantic-ui-react'
import { Formik } from 'formik'

export default function AddCurriculaVitaePage() {

    return (
        <div>
            <Formik
            
            >
                <Card fluid className="shadow">
                    <Card.Content header="Özgeçmiş" />
                    <Card.Content>
                        
                    </Card.Content>
                </Card>
            </Formik>
        </div>
    )
}
