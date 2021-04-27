import React, { useEffect, useState } from 'react';
import './styles.scss';
import AdminMenu from 'src/components/AdminMenu';
import Options from './Options';
import OrdersTable from './OrdersTable';
import api from 'src/api';

const AdminOrderPage = () => {
const [ usersData, setUsers ] = useState([])

  useEffect(() => {  
    api.get('/users')
    .then((response) => response.data.users)
      .then((data) => setUsers(data))
      .catch((error) => console.error(error))
      
  },[]);
console.log(usersData)
  return (
  <div className='container'>
    <AdminMenu />
    <h1>Commandes</h1>
    <Options usersData={usersData}/>
    <OrdersTable usersData={usersData}/>
  </div>
)};

export default AdminOrderPage;

