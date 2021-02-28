
import React,{useEffect} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, useHistory} from "react-router-dom";

import Dashboard from './components/Dashboard'



import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";



import { useSelector } from "react-redux";
import {useSessionListener} from './hooks/useSessionListener-hook';






function App() {
    useSessionListener();

    
  
  return (
    
   <Router>
      <Authenticate />
     <div className="App">
      
      
      <Dashboard/>    
        
      </div> 
     
   </Router>
  
      ) 


}




export default App;


function Authenticate() {
  const user = useSelector((state) => state.currentUser)
  const history = useHistory()
  const nonAuthenticatedUrl = history.location.pathname;
  console.log('nonAuthenticatedUrl', nonAuthenticatedUrl)
    useEffect(()=> {
        if(user){
          history.push('/Dashboard')
        } else if(nonAuthenticatedUrl === '/Dashboard' || !['/','/signUp'].includes(nonAuthenticatedUrl)){
          history.push('/')
        } else{
          history.push(nonAuthenticatedUrl)
        }
    },[user, nonAuthenticatedUrl])
 
  return (
      <>
      <Route path="/signUp"> 
              <SignUp  />
          </Route>
          <Route exact path="/"> 
              <SignIn  />
          </Route> 
      </>
  );
}











