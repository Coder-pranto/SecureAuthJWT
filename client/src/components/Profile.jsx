import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const [Username, setUsername] = useState(null);
  const [Id, setId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:8999/profile", {
      headers: {
        Authorization: token,
      }
    }).then((res) => {
      setUsername(res.data.user.username);
      setId(res.data.user.id);
    })
      .catch((err) => {
        navigate('/login');
      })
  }, [])
  
  return (
    <div>
    <h2>Welcome to Profile</h2>
     {Username && (
        <div>
          <h3>Username: {Username}</h3>
          <p>Your current ID: {Id}</p>
        </div>
      )}
  </div>
  )
}

export default Profile