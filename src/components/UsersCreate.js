import React from 'react'
import {Create, SimpleForm, TextInput} from 'react-admin'

const UsersCreate = (props) => {
    return (
    <Create title='Create User' {...props}>
        <SimpleForm>
            <TextInput source = 'name'/>
            <TextInput source = 'email'/>
        </SimpleForm>
    </Create>
    )
}

export default UsersCreate