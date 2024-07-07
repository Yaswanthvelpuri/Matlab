import {BrowserRouter,Route,Routers}from 'react-router-dom';

import Layout from './LayOut';

import Home from './Home';
import Blogs from './Blogs';

import Contact from './Contact';

import NoPage from '/NoPage';

function App() {

 return (

  <BrowserRouter>

  <Routers>

   <Route path="/"eliment={<LayOut/>}>

   <Route index eliments={<Home/>}/>

   <Route path="blogs" eliments={<Blogs/>}/>

   <Route path="contact" eliment={<Contact/>}/>

   <Route path="*"eliment={<NoPage/>}/>

   </Route>

   </Routers>

   </BrowserRouter>

 );

}

