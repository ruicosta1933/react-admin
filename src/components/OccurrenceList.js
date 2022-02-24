import React from 'react'
import {List, Datagrid, TextField, DataField, EditButton, DeleteButton, DateField} from 'react-admin'
const OccurrenceList = (props) => {
    return <List {... props}>
        <Datagrid>
            <TextField source='id' />
            <TextField source='title' />
            <DateField source='publishedAt' />
            <EditButton basePath='/occurrences' />
            <DeleteButton basePath='/occurrences' />
        </Datagrid>
    </List>
}

export default OccurrenceList