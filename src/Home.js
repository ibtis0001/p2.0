import React, { Component } from 'react'
//  import Convert from "./Convert";
import {
    Jumbotron,

    Container,
    Row
 
  } from "react-bootstrap";


export default class Home extends Component {
    render() {
        return (
            <div>
                      <Jumbotron className="jumbo">
       
          <Container>
            <Row> 
               {/* <Cardi />
              <Cardi />
              <Cardi />
              <Cardi />
              <Cardi /> */}
            </Row>
          </Container>
        </Jumbotron>
        <Jumbotron className='jumba'>
  <h1>What Is a Cryptocurrency ?</h1>
  {/* <span>DORNE</span> */}
  <p>
  Cryptocurrency is a digital or virtual currency that is able to operate as a medium of exchange at a person-to-person level, enabling direct payments between individuals.
  </p>
  {/* <ul> */}
      {/* <li> {this.props.x} </li> */}
 
  {/* </ul> */}
</Jumbotron>
            </div>
        )
    }
}
