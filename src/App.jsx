import React from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './Components/header/Header';
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import CoursesPage from "./Pages/CoursesPage";
import AdmissionsPage from "./Pages/AdmissionPage";
import Footer from "./Components/footer/Footer";
import ChatbotComponent from "./Components/Chatboat/ChatbotComponents";


const App = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/home" element={< HomePage/>}/>
                <Route path="/about" element={< AboutPage/>}/>
                <Route path="/contact" element={< ContactPage/>}/>
                <Route path="/courses" element={< CoursesPage/>}/>
                <Route path="/admission" element={< AdmissionsPage/>}/>              
            </Routes>
            < ChatbotComponent/>
            <Footer/>
        </Router>
    )
}


export default App;