import React, {useState} from 'react';
import logo from './logo.svg';

import './css/style.css'

// Import external stylesheets
import './lib/animate/animate.min.css'; // Animation library styles
import './lib/owlcarousel/assets/owl.carousel.min.css'; // Owl Carousel styles
import './lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css'; 

// Import external icon fonts
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome icons
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap icons
import Login from './Components/Login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Info from './Components/Info';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Welcome from './Components/Blogs/Welcome';
import AddTrip from './Components/Trips/AddTrip';
import TripHome from './Components/Trips/TripHome';
import Addproduct from './Components/Addproduct';
import CardProduct from './Components/CardProduct';
import ProductListAdmin from './Components/ProductListAdmin';
import Editproduct from './Components/Editproduct';
import CartItems from './Components/CartItems';
import Profile from './Components/Profile'; 
import UserProfile from './Components/UserProfile'; 
import RequestList from './Components/RequestList';
import CreateRequestForm from './Components/CreateRequestForm';
import useModal from './js/useModal';
function App() {
  const [requests, setRequests] = useState([]);
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString);
  const userId = user ? user.id : null;
  console.log('uerr ID ::: ', userId);
  const handleAddRequest = async (newRequest) => {
    try {
      newRequest.userId = userId;

      const response = await fetch('http://localhost:8035/comp/comp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRequest),
      });

      if (response.ok) {
        const updatedRequests = await response.json();
        setRequests(Array.isArray(updatedRequests) ? updatedRequests : []);
      } else {
        console.error('Failed to add request');
      }
    } catch (error) {
      console.error('Error during API request:', error);
    }
  };
  return (
    <div className="App">
      <header>
        <meta charset="utf-8" />
        <title>Tourist - Travel Agency HTML Template</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta content="" name="keywords" />
        <meta content="" name="description" />

        {/* Favicon */}
        <link href="img/favicon.ico" rel="icon" />

        {/* Google Web Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
     integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
     crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
     integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
     crossorigin=""></script>

        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* Libraries Stylesheet */}
        <link href="lib/animate/animate.min.css" rel="stylesheet" />
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

        {/* Customized Bootstrap Stylesheet */}
        <link href="css/bootstrap.min.css" rel="stylesheet" />

        {/* Template Stylesheet */}
        <link href="css/style.css" rel="stylesheet" />
        

        <Router>
        {/*<Navbar /> */ }
        {/* <Info /> */}

        <div>
          <Routes>       
          <Route path='/Login' element={<Login />} ></Route>
          <Route path='/SignUp' element={<SignUp />} ></Route>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/Welcome' element={<Welcome />} ></Route>
          <Route path='/Trips/Add' element={<AddTrip/>}></Route>
          <Route path='/Trips' element={<TripHome/>}></Route>
          <Route path='/addProduct' element={<Addproduct/>} ></Route>
          <Route path='/Listproducts' element={<CardProduct/>} ></Route>
          <Route path='/ListproductsAdmin' element={<ProductListAdmin/>} ></Route>
          <Route path="/edit-product/:id" element={<Editproduct />} />
          <Route path="/Cart" element={<CartItems />} />
          <Route path='/profile' element={<Profile />} ></Route>
          <Route path='/Userprofile/:userId' element={<UserProfile />} ></Route>
          <Route path="/travel-requests"  element={<RequestList />} ></Route>
          <Route path="/create-request" element={<CreateRequestForm onAddRequest={handleAddRequest} />} ></Route> 
          </Routes>
        </div>
      </Router>
      </header>
    </div>
  );
}

export default App;