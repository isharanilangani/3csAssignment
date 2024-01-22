// UserInfoView.js
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const UserInfoView = () => {
  const [userInfo, setUserInfo] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    // Fetch user data from the API based on the user ID
    axios.get(`https://reqres.in/api/users/${userId}`)
      .then(response => {
        setUserInfo(response.data.data);
      })
      .catch(error => {
        console.error(`Error fetching user info for user ${userId}:`, error);
      });
  }, [userId]);

  return (
    <div>
      <Link to="/" style={{ display: 'flex', textAlign: 'center', height: '10vh', background: 'blue', color: 'white', textDecoration: 'none',padding:'8px' }}>
        <h2>Back</h2>
      </Link>
      {userInfo ? (
        <div style={{ display: 'flex', marginTop: '20px', padding: '100px', gap: '150px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginRight: '20px', background: '#ccc', borderRadius: '8px', border: '1px solid gray', justifyContent: 'center', alignItems: 'center' }}>
            <img src={userInfo.avatar} alt={`User ${userInfo.id}`} style={{ width: '200px', height: '200px', borderRadius: '50%',margin:'5px 5px 5px 5px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column',fontSize:'18px',background: '#ccc', borderRadius: '8px', border: '1px solid gray', justifyContent: 'center',width:'500px',height:'100px',padding:'20px',lineHeight: '0.3',marginTop:'30px'}}>
            <p>First Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userInfo.first_name}</p>
            <p>Last Name  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{userInfo.last_name}</p>
            <p>Email      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Link to="/" style={{color:'black',textDecoration:'none'}}>{userInfo.email}</Link></p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserInfoView;
