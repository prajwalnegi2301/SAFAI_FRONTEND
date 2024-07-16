import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { Context, ContextW } from './main';
import axios from 'axios'
import Login from './Pages/Login';
import Register from './Pages/Register';
import WhoIAm from './Pages/WhoIAm';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Header from './Components/Header';
import About from './Pages/About';
import Contact from './Pages/Contact';
import FeedbackForm from './Pages/FeedbackForm';
import Footer from './Components/Footer';
import ServicesPage from './Pages/ServicesPageComponent';
import WorkerDetail from './Pages/WorkerDetail';



const App = () => {

  const { isUserAuthenticated, setIsUserAuthenticated, setUser } = useContext(Context);
  const { setIsWorkerAuthenticated, isWorkerAuthenticated, setWorker } = useContext(ContextW);

  const {token,setToken} = useContext(Context);


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/v1/user/userProfile', {
          withCredentials: true,
        });

        setIsUserAuthenticated(true);
        setUser(data.user);

      } catch (error) {
        setIsUserAuthenticated(false);
        setUser({});
      }
    };

    const fetchWorker = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/v1/user/workerProfile', {
          withCredentials: true,
        });

        setIsWorkerAuthenticated(true);
        setWorker(data.worker);

      } catch (error) {
        setIsWorkerAuthenticated(false);
        setWorker({});
      }
    };
    fetchUser();
    fetchWorker();


    // const generateUniqueId = () => {
    //   let uniqueId = localStorage.getItem('uniqueId');
    //   if (!uniqueId) {
    //     uniqueId = uuidv4();
    //     localStorage.setItem('uniqueId', uniqueId);
    //   }
    //   return uniqueId;
    // };

    // const generateToken = async () => {
    //   try {
    //     const {data} = await axios.post('http://localhost:8000/api/v1/visitor/generatetoken');
    //     const  token = data.visitor.token;
    //     localStorage.setItem('token', token);
    //     console.log('Token generated and stored:', token);
    //     setToken(token);
    //   } catch (error) {
    //     console.error('Error generating token:', error);
    //   }
    // };

    
    // generateToken();


  }, [isUserAuthenticated, isWorkerAuthenticated, setUser, setWorker]);


  // useEffect(() => {
  //   const generateUniqueId = () => {
  //     let uniqueId = localStorage.getItem('uniqueId');
  //     if (!uniqueId) {
  //       uniqueId = uuidv4();
  //       localStorage.setItem('uniqueId', uniqueId);
  //     }
  //     return uniqueId;
  //   };

  //   const generateToken = async (uniqueId) => {
  //     try {
  //       const {data} = await axios.post('http://localhost:8000/api/v1/visitor/generatetoken', { uniqueId });
  //       const  token  = data.visitor._id;
  //       localStorage.setItem('token', token);
  //       console.log('Token generated and stored:', token);
  //     } catch (error) {
  //       console.error('Error generating token:', error);
  //     }
  //   };

  //   const uniqueId = generateUniqueId();
  //   generateToken(uniqueId);
  // }, []);


  return (
    <BrowserRouter>
      <Header />

      <Routes>


        <Route path='/' element={<Home />} />


        <Route path='/whoIAm' element={<WhoIAm />} />
        {/* <Route path={`/login/${token}`} element={<Login />} />
        <Route path={`/register/${token}`} element={<Register />} />
        <Route path={`/profile/${token}`} element={<Profile />} />
        <Route path={`/about/${token}`} element={<About />} />
        <Route path={`/contact/${token}`} element={<Contact />} />
        <Route path={`/feedback/:id/${token}`} element={<FeedbackForm />} />
        <Route path={`/servicesPage/${token}`} element={<ServicesPage />} />
        <Route path={`/worker/:id/${token}`} element={<WorkerDetail />} /> */}


        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
        <Route path={`/profile`} element={<Profile />} />
        <Route path={`/about`} element={<About />} />
        <Route path={`/contact`} element={<Contact />} />
        <Route path={`/feedback/:id`} element={<FeedbackForm />} />
        <Route path={`/servicesPage`} element={<ServicesPage />} />
        <Route path={`/worker/:id`} element={<WorkerDetail />} />



      </Routes>

      
      <Footer />
    </BrowserRouter>
  )
}

export default App
