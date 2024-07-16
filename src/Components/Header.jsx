import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context, ContextW } from '../main';
import { toast } from 'react-toastify';
import axios from 'axios';

const Header = () => {
  const { isUserAuthenticated, token, setToken, setIsUserAuthenticated, user } = useContext(Context);
  const { isWorkerAuthenticated, setIsWorkerAuthenticated, worker } = useContext(ContextW);

  const navigateTo = useNavigate();


  const handleLogout = async (e) => {
    e.preventDefault();
    try {

      if (isUserAuthenticated) {
        const { data } = await axios.get(
          // `http://localhost:8000/api/v1/user/${token}/logoutUser`
          `http://localhost:8000/api/v1/user/logoutUser`
          , {
            withCredentials: true,
          })

        if (role === "User") {
          setIsUserAuthenticated(false)
          // setIsWorkerAuthenticated(false)
          console.log(role);
        }

        toast.success('Logout successfully');
      }
      else if (isWorkerAuthenticated) {
        const { data } = await axios.get(
          // `http://localhost:8000/api/v1/user/${token}/logoutWorker`
          `http://localhost:8000/api/v1/user/logoutWorker`
          , {
            withCredentials: true,
          })
        if (role === "Worker") {
          setIsWorkerAuthenticated(false)
          // setIsUserAuthenticated(false);
          console.log(role);
        }
        toast.success('Logout successfully');
      }
      navigateTo("/")
    }
    catch (error) {
      console.log(error);
      toast.error("Cannot logout User")

    }
  };

  return (
    <header className="bg-slate-100 shadow sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/">
          <div className="text-2xl font-bold text-slate-900">Safai</div>
        </Link>

        <nav className="space-x-4">
          {(!isUserAuthenticated && !isWorkerAuthenticated) ? (
            <>
              <Link
                //  to={`/profile/${token}`}
                to={`/profile`}
                className="text-slate-600 hover:text-slate-800">Profile</Link>
              <Link
                //  to={`/servicesPage/${token}`}
                to={`/servicesPage`}
                className="text-slate-600 hover:text-slate-800">Services</Link>
              <Link
                //  to={`/about/${token}`}
                to={`/about`}
                className="text-slate-600 hover:text-slate-800">About Us</Link>
              <Link
                //  to={`/contact/${token}`} 
                to={`/contact`}
                className="text-slate-600 hover:text-slate-800">Contact Us</Link>
            </>
          ) : (
            <>
              <button onClick={handleLogout} className="text-slate-600 hover:text-slate-800 focus:outline-none">Logout</button>
              <Link
                //  to={`/servicesPage/${token}`} 
                to={`/servicesPage`}
                className="text-slate-600 hover:text-slate-800">Services</Link>
              <Link
                //  to={`/profile/${token}`} 
                to={`/profile`}
                className="text-slate-600 hover:text-slate-800">Profile</Link>
              <Link
                //  to={`/contact/${token}`}
                to={`/contact`}
                className="text-slate-600 hover:text-slate-800">Contact Us</Link>


            </>
          )}
        </nav>





      </div>
    </header>
  );
};

export default Header;
