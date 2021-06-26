import { Button } from 'semantic-ui-react';
import { Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput';
import EmployerUpdateService from '../services/employerUpdateService';

export default function EmployerUpdatePage() {

    let employerUpdateService = new EmployerUpdateService()

    const initialValues = {employer:{id:"4"},companyName:"",website:"",phone:""}

    const schema=Yup.object({
        companyName: Yup.string().required("Zorunlu"),
        website: Yup.string().required("Zorunlu"),
        phone: Yup.number().required("Zorunlu"),
    })

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    employerUpdateService.add(values).then((result)=> console.log(result))
                    
                }}
            >
                <Form className="ui form">
                    <KodlamaIoTextInput name="companyName" placeholder="Şirket adı" />
                    <KodlamaIoTextInput name="website" placeholder="Web sitesi" />
                    <KodlamaIoTextInput name="phone" placeholder="Telefon numarası" />
                    <Button color="green" type="submit">Güncelle</Button>
                </Form>

            </Formik>
        </div>
    )
}
