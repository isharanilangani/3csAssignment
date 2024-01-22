// UsersView.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UsersView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //fetch user data
    axios.get('https://reqres.in/api/users?page=1')
      .then(response => {
        console.log('Users data:', response.data.data);
        setUsers(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  console.log('Users state:', users);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', background: 'blue', color: 'white' }}>
        <h1>Users View</h1>
      </div>
      <div style={{ padding: '15px', marginTop: '10px' }}>
        <h1>Users</h1>
      </div>
      <div style={{ padding: '30px', marginLeft: '100px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: '10px', justifyContent: 'space-around' }}>
        {users.length > 0 ? (
          users.map(user => (
            <Link key={user.id} to={`/user/${user.id}`} style={{ textDecoration: 'none' }}>
              <div style={{ margin: '10px', cursor: 'pointer', border: '1px solid #ccc', padding: '10px', borderRadius: '8px', width: '250px', transition: '0.3s' }}>
                <div style={{ background: '#ccc', borderRadius: '8px', border: '1px solid gray', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', transition: '0.3s' }}>
                  <img
                    src={user.avatar}
                    alt={`User ${user.id}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      border: '1px solid #ccc',
                      margin:'5px 5px 5px 5px',
                      transition: 'transform 0.3s',
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>
                <div style={{ padding: '5px', color: 'black', lineHeight: '0.5', marginBottom: '15px', textDecoration: 'none' }}>
                  <h2>{user.first_name}</h2>
                  <small>{user.email}</small>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </div>
    </div>
  );
};

export default UsersView;
