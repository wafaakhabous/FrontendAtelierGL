import React, { useEffect, useState } from 'react';
import NavBar from './Navbar';
import SideBar from './SideBar';
import { Col, Row } from 'antd';
import Blog from './Blog';
import UserSideBar from './UserSideBar';

const Welcome = ({user}) => {
    const [blogs, setblogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [users, setusers] = useState([]);
    
    useEffect(() => {
      const fetchblogs = async () => {
        try {
          const response = await fetch('http://localhost:8093/api/vi/blogs');
          const data = await response.json();
          setblogs(data);
          setLoading(false);
          console.log(data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
          setLoading(false);
        }
      };
      fetchblogs();
    }, []);  

    useEffect(() => {
      const fetchusers = async () => {
        try {
          const response = await fetch('http://localhost:8035/users');
          const data = await response.json();
          setusers(data);
          setLoading(false);
          console.log(data);
        } catch (error) {
          console.error('Error fetching users:', error);
          setLoading(false);
        }
      };
      fetchusers();
    }, []); 
  return (
     <div   >
        <NavBar></NavBar>
        <Row style={{height: '100vh'}} gutter={[16, 16]}>
           <Col span={4} style={{width: 'max-content'}} >
              <SideBar/>
           </Col>
           <Col span={16}>
              {
                blogs.map((blog) => (
                  <Row>
                    <Col span={24}>
                      <Blog firstname={users.map((user) => {if(user.trips.some(obj => obj.id === blog.trip.id)) return user.firstname})} 
                            lastname={users.map((user) => {if(user.trips.some(obj => obj.id === blog.trip.id)) return user.lastname})}
                      description={(blog.description != null ? blog.description : "No description has been added for this blog")} itineraries={blog.trip.itineraries} commentaires={blog.comments} datestart={blog.trip.datestart} dateend={blog.trip.dateend}/>
                    </Col>
                  </Row>
                ))
              }
              {/* {
                ( users != undefined ? users.map((user) => (
                    user.blogs.map((blog) => (
                        <Row>
                          <Col span={24}>
                            <Blog description={blog.description} itineraries={blog.trip.itineraries} firstname={user.firstname} lastname={user.lastname} commentaires={blog.comments} datestart={blog.trip.datestart} dateend={blog.trip.dateend}/>
                          </Col>
                        </Row>
                    )) 
                )): <Col></Col> )
              } */}
           </Col>
           <Col span={4}>
              <UserSideBar/>
           </Col>
        </Row>   
     </div>
      
  );
};

export default Welcome;
