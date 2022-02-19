import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './components/PostList'
import PostCreate from './components/PostCreate'
import PostEdit from './components/PostEdit'

import UsersList from './components/UsersList'
import UsersCreate from './components/UsersCreate'
import UsersEdit from './components/UsersEdit'

function App() {
  return (
   <Admin dataProvider={restProvider('http://localhost:3000')}>
     <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} />
     <Resource name="users" list={UsersList} create={UsersCreate} edit={UsersEdit} />
   </Admin>
  );
}

export default App;
