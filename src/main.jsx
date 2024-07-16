import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const Context = createContext({ isUserAuthenticated: false });
export const ContextW = createContext({ isWorkerAuthenticated: false });
// isWorkerAuthenticated: false,
// user: {},
// worker: {},
// setIsUserAuthenticated: () => {},
// setIsWorkerAuthenticated: () => {},
// setUser: () => {},
// setWorker: () => {}
//  });

//  export const ContextW = createContext({ isWorkerAuthenticated: false,
//  });


const AppWrapper = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const [isWorkerAuthenticated, setIsWorkerAuthenticated] = useState(false);
  const [worker, setWorker] = useState({});
  const [token, setToken] = useState("");


  return (
    <Context.Provider
      value={{ isUserAuthenticated, setIsUserAuthenticated,token,setToken, user, setUser }}
    >
      <ContextW.Provider
        value={{ isWorkerAuthenticated, setIsWorkerAuthenticated,token, setToken, worker, setWorker }}
      >
        <App />
      </ContextW.Provider>
    </Context.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(

  <AppWrapper />

)
