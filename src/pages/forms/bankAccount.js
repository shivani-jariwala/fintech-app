import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button
} from "reactstrap";

import {Link} from 'react-router-dom';

class BankAccount extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        };
    
       
      }

     

    render(){
    return(
        <>
        <h className='d-flex flex-row m-auto' 
        style={{fontWeight:'600',fontSize:'22px',paddingBottom:'50px',paddingTop:'25px'}}>LINK ACCOUNTS</h>
        <h className='d-flex flex-row m-auto' 
        style={{fontWeight:'600',fontSize:'22px',justifyContent:'center',paddingBottom:'50px',paddingTop:'0px'}}>Uhh! You need to link your bank account to trace your net worth</h>
        <div>
            {!this.state.show ? 
        <Button  
                  className='d-flex flex-row m-auto'
                  style={{marginTop:'20px',background:'green'}}
                  color="primary"
                  id="show-info-message"
                  onClick={() => this.setState({show:true})}
                >
                  Add Account
                </Button>
                : "" }
                </div>
    {this.state.show ? 
    <Card style={{marginLeft:'300px',marginRight:'300px',marginTop:'50px'}}>
      <CardBody>
        <form>
          <FormGroup>
            <Label for="exampleban">Bank Name</Label>
            <Input type="select" name="select" id="exampleSelect1" style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>HDFC</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>State bank Of India</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Bank of Baroda</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="examplename">Username</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplename"
              placeholder="Philips Smith"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplepass">Password</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="*******"
            />
          </FormGroup>
          <div className='m-auto'>
              <Link to="/app/bankdetails">
          <Button
                  style={{marginTop:'20px'}}
                  color="primary"
                  id="show-info-message"
                >
                  Submit
                </Button>
                </Link>
          </div>
        </form>
      </CardBody>
    </Card> : ""}
        </>
    )
    }

}

export default BankAccount;