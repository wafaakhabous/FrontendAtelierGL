import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Divider, Form, Input, Row, Tag } from 'antd';
import ItinerariesMap from '../ItinerariesMap';



const Trip = ({trip}) => {
    const itineraries = [];
    const [blogs, setblogs] = useState([]);
    trip.itineraries.map((elem) => {
        itineraries.push({city : elem.cityName})
    })

    const fetchblogs = async () => {
        try {
          const response = await fetch('http://localhost:8093/api/vi/blogs');
          const data = await response.json();
          setblogs(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };

    useEffect(() => {
        fetchblogs();
      }, []);

      const isIdPresentInBlogs = (idToCheck) => {
        return blogs.some((blog) =>
          blog.trip.id == idToCheck
        );
      };

      const onFinish = async(values) => {
        values['trip'] = trip;
        try {
            const response = await fetch('http://localhost:8093/api/vi/blogs', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                 //Add any other headers as needed
              },
              body: JSON.stringify(values),
            })
            if(response.ok){
                console.log("Blog added.");
                //window.location.reload();
                fetchblogs();
            }
        } catch(error){
            console.error('Error : ', error.message);
        }
      }
    return (
                <Col span={12} className='mt-5'>
                    <Card title='Trip card' className='text-center' headStyle={{backgroundColor:'#86B817' , color:'white'}}>
                        <Row className='flex justify-content-between'>
                            <Col span={4}>
                                <Tag>#{trip.id}</Tag>
                            </Col>
                            <Col span={4}>
                                <Tag color='red'>{trip.datestart}</Tag>
                            </Col>
                            <Col span={4}>
                                <Tag color='green'>{trip.dateend}</Tag>
                            </Col>
                        </Row>
                        <Divider/>
                        <span className='text-center'>Itineraries</span>
                        <Row>
                            <Col span={24} style={{height: 100}}>
                              <ItinerariesMap itineraries={itineraries}/>
                            </Col>
                        </Row>
                        <Divider/>
                        {
                            (!isIdPresentInBlogs(trip.id) ? 
                            <Form layout='inline' onFinish={onFinish}>
                            <Form.Item 
                            label='Blog Description' 
                            name='description'
                            rules={[
                                {
                                  required: true,
                                  message: 'Please input your blog description!',
                                },
                              ]}
                            >
                                <Input type='text'/>
                            </Form.Item>
                            <Form.Item>
                                <Button type='primary' htmlType='submit' style={{backgroundColor: '#86B817', color:'white'}}>
                                    Post
                                </Button>
                            </Form.Item>
                        </Form> :
                         <Tag className='mt-2' color="#108ee9">This trip is already associated to a blog</Tag>
                        )
                        }
                        
                    </Card>
                </Col>
    )
}

export default Trip;