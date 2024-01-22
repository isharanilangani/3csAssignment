// App.js or where you define your routes
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersView from './Components/UsersView'; // Make sure the path is correct
import UserInfoView from './Components/UserInfoView'; // Make sure the path is correct

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersView />} />
        <Route path="/user/:userId" element={<UserInfoView />} />
      </Routes>
    </Router>
  );
};

export default App;
