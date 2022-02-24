import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import OccurrencesList from './components/OccurrenceList'
import OccurrencesCreate from './components/OccurrenceCreate'
import OccurrencesEdit from './components/OccurrenceEdit'

import UsersList from './components/UsersList'
import UsersCreate from './components/UsersCreate'
import UsersEdit from './components/UsersEdit'


import OccurrencesIcon from '@material-ui/icons/BookOutlined';
import UserIcon from '@material-ui/icons/PeopleOutline';

function App() {
  return (
   <Admin dataProvider={restProvider('http://localhost:3000')}>
     <Resource name="occurrences" list={OccurrencesList} create={OccurrencesCreate} edit={OccurrencesEdit} icon={OccurrencesIcon}/>
     <Resource name="users" list={UsersList} create={UsersCreate} edit={UsersEdit} icon={UserIcon}/>
   </Admin>
  );
}

export default App;
