import React from 'react';
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

function App() {
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
        <Navbar />
        {/* <Info /> */}

        <div>
          <Routes>
          
          <Route path='/Login' element={<Login />} ></Route>
          <Route path='/SignUp' element={<SignUp />} ></Route>
          <Route path='/home' element={<Home />} ></Route>
            
          </Routes>
        </div> 
      </Router>
      
      <Footer />

        
      </header>
    </div>
  );
}

export default App;