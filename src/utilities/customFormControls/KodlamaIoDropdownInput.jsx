import { useField } from 'formik'
import React from 'react'
import { FormField,FormDropdown, Label } from 'semantic-ui-react'

export default function KodlamaIoDropdownInput({...props}) {

    const [field,meta]=useField(props)

    return (
        <FormField error={!!meta.error}>
            <FormDropdown {...field} {...props}/>
            {meta.touched && !!meta.error ? (
        <Label pointing basic color="red" content={meta.error} />
        ) : null}
        </FormField>
    )
}
