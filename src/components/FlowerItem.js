import React, { Component } from "react";
import {Button,Card} from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';

class FlowerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {


    };
  }

 addToFav=(item)=>{
  const { user } = this.props.auth0();
  const obj={

    ownerEmail: user.email,
    name: item.name,
    photo: item.photo,
    price: item.price,

  }



  
 }




  
  render() {
    return (
      <div>
          hello
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.item.photo} />
          <Card.Body>
            <Card.Title>{this.props.item.name}</Card.Title>
            <Card.Text>
             {this.props.item.instructions}
            </Card.Text>
            <Button variant="primary">Add</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withAuth0(FlowerItem);
