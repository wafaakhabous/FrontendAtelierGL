import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Col, Menu, Row, Dropdown, List, Button } from 'antd';
import axios from 'axios';
import UserProfile from '../UserProfile'; // Import the UserProfile component


const InvitationDropdown = ({ invitations }) => {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [userSenderData, setUserSenderData] = useState({});
  const [requestDetails, setRequestDetails] = useState({});
  useEffect(() => {
    const fetchUserSenderData = async (userSenderId) => {
      try {
        const response = await axios.get(`http://localhost:8035/users/${userSenderId}`);
        if (response.status === 200) {
          setUserSenderData(prevState => ({
            ...prevState,
            [userSenderId]: response.data.username
          }));
        }
      } catch (error) {
        console.error('Error fetching user sender data:', error);
      }
    };
    const fetchRequestDetails = async (requestId) => {
      try {
        const response = await axios.get(`http://localhost:8035/comp/${requestId}`);
        if (response.status === 200) {
          setRequestDetails((prevState) => ({
            ...prevState,
            [requestId]: response.data,
          }));
        }
      } catch (error) {
        console.error('Error fetching request details:', error);
      }
    };
  
    invitations.forEach((invitation) => {
      if (!userSenderData[invitation.userSender]) {
        fetchUserSenderData(invitation.userSender);
      }
      if (!requestDetails[invitation.requestId]) {
        fetchRequestDetails(invitation.requestId);
      }
    });
  }, [invitations, userSenderData, requestDetails]);

  const handleUserClick = (userId) => {
    const userProfileURL = `http://localhost:3000/Userprofile/${userId}`;
    window.open(userProfileURL, '_blank');
  };

  return (
    <Menu>
    {invitations.map((invitation) => (
      <Menu.Item key={invitation.id} style={{ padding: '0' }}>
        <List.Item>
          <a href="#" onClick={() => handleUserClick(invitation.userSender)}>
            {userSenderData[invitation.userSender] || 'Loading...'} invited you for a trip from{' '}
            {requestDetails[invitation.requestId]?.source || 'Loading...'} to{' '}
            {requestDetails[invitation.requestId]?.destination || 'Loading...'}
          </a>
        </List.Item>
      </Menu.Item>
    ))}
    <Menu.Item key="view-all" style={{ padding: '0' }}>
      <Button type="primary" block>
        View All Invitations
      </Button>
    </Menu.Item>
  </Menu>
  );
};
const NavBar = () => {
  const [current, setCurrent] = useState('blogs');
  const [invitations, setInvitations] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const receiverId = user ? user.id : null;

  useEffect(() => {
    const fetchInvitations = async () => {
      try {
        const response = await axios.get(`http://localhost:8035/inv/inv/${receiverId}`);
        setInvitations(response.data);
      } catch (error) {
        console.error('Error fetching invitations:', error);
      }
    };

    if (receiverId) {
      fetchInvitations();
    }
  }, [receiverId]);

  const menuItems = [
    
    {
      label: 'Blogs',
      key: 'blogs',
      icon: <Avatar src='https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150268421.jpg?size=626&ext=jpg&ga=GA1.2.2027902285.1696892702&semt=sph' />
    },
    {
      label: 'Voyages',
      key: 'voyages',
      icon: <Avatar src='https://img.freepik.com/free-vector/travel-elements-collection-flat-style_23-2147763912.jpg?size=626&ext=jpg&ga=GA1.1.2027902285.1696892702&semt=ais' />
    },
    {
      label: 'Travel Requests',
      key: 'travel-requests',
      icon: <Avatar src='https://www.flaticon.com/free-icon/request_1436708?term=requests&page=1&position=3&origin=search&related_id=1436708' />,
      link: '/travel-requests'
    }
  ];

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Row>
      <Col span={24}>
        <Menu onClick={onClick} selectedKeys={[current]} mode='horizontal' className='flex justify-content-start'>
          {menuItems.map(item => (
            <Menu.Item key={item.key} className='flex align-items-center'>
              <Link to={item.link || '/'}>
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </Menu.Item>
          ))}
          <Menu.Item key="invitations" className='flex align-items-center'>
            <Dropdown overlay={<InvitationDropdown invitations={invitations} />} trigger={['click']}>
              <span>
                <Avatar src='https://example.com/invitation-icon.jpg' />
                <span>Invitations</span>
              </span>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default NavBar;