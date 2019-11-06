import React, { Component } from "react";
import {
  Navbar,
  Nav,
   // FormControl,
  // Form,
  // Button,
  // Container
} from "react-bootstrap";
import "./index.css";

import {
  BrowserRouter,
  Switch,
  Route,
//   NavLink
 } from "react-router-dom";
import Home from "./Home";
import Stock from "./Stock"
import './index.css'


export default class Navi extends Component {
  render() {
    return (
      <div>

          <BrowserRouter>
                  
          <Navbar fixed= "top" variant="dark">
            <Navbar.Brand href="/"><h1>X Crypto</h1></Navbar.Brand>
            <Nav className="Navbar">
              <Nav.Link href="/"><h6>Home</h6></Nav.Link>
              <Nav.Link href="/chart"><h6>Chart</h6></Nav.Link>
            </Nav>
            </Navbar>




            {/* <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button  style={{ background:' #7443EA' , border:'1px solid black'}}>Search</Button>
            </Form> */}
       

       <Switch>
       <Route exact path="/" component={Home}/>
       <Route path="/chart" component={Stock}/>
       {/* <Route path="/contactus" component={Contact}/> */}
       </Switch>

       </BrowserRouter>



      </div>
    );
  }
}
