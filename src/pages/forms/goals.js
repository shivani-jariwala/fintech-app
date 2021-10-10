import { cache } from "@amcharts/amcharts4/core";
import { number } from "echarts/lib/export";
import { format } from "highcharts";
import React from "react";
import { MDBFormInline, MDBInput } from 'mdbreact';

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button,
  Table,
  Modal, ModalHeader, ModalBody, ModalFooter,FormText,Row
} from "reactstrap";

import { Link } from 'react-router-dom';


class Goals extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modalMini: false,
            modalDemo: false,
        };
        this.toggleModalDemo = this.toggleModalDemo.bind(this);
        this.toggleModalMini = this.toggleModalMini.bind(this);
    }

    toggleModalDemo(){
        this.setState({
            modalDemo: !this.state.modalDemo
        });
    }
    toggleModalMini(){
      this.setState({
          modalMini: !this.state.modalMini
      });
  }

     

    render(){
    return(
        <div>
          <h className='d-flex flex-row m-auto' 
        style={{fontWeight:'600',fontSize:'22px',paddingBottom:'50px',paddingTop:'25px'}}>EDIT PROFILE</h>
  <Row>
        <p className='m-auto' style={{fontWeight:'600',fontSize:'18px'}}> <b>Create your Goals here!!</b> </p>
    </Row>

    <Row className='d-flex flex-row ' style={{justifyContent:'center',marginTop:'70px'}}>
    <Button color="primary"  onClick={this.toggleModalMini}>
    Create Goals
</Button>
      </Row>

    
      <Modal isOpen={this.state.modalMini} toggle={this.toggleModalMini} size="sm">
    
    <ModalBody>
    <h5 id="exampleModalLabel" style={{fontWeight:'600',fontSize:'16px',color:'#f3f2f1',marginTop:'25%',marginLeft:'30%'}}>
        KYC Process
      </h5>
      
      
      <Row className='d-flex flex-row ' style={{justifyContent:'center',marginTop:'70px'}}>
    <Button color="primary"  onClick={this.toggleModalDemo}>
    OKAY
</Button>
      </Row>
    </ModalBody>
    


</Modal>

        
<Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo}>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight:'600',fontSize:'16px',color:'#f3f2f1'}}>
        Create your goal
      </h5>
      
    </div>
    <ModalBody>

    <Card>
      <CardBody>
        <form>
        <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Goal Name</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="Paris Tour 2022"
            />
          </FormGroup>
          <FormGroup>
        <Label for="exampleText" style={{fontWeight:'400',color:'white'}}>Goal Description</Label>
        <Input style={{background:'#f3f2f1',color:'black'}} type="textarea" name="text" id="exampleText" />
      </FormGroup>
          <FormGroup>
            <Label for="examplename" style={{fontWeight:'400',color:'white'}}>Target Amount</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplename"
              placeholder="₹ 2,00,000"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Time Period in Months</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="5"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect1">What kind of Investment do you want to make?</Label>
            <Input type="select" name="select" id="exampleSelect1" style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>High Risk</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Low Risk</option>
            </Input>
          </FormGroup> 
          
          <FormGroup>
        <Label for="exampleFile" style={{fontWeight:'400',color:'white'}}>Goal Avatar</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted" style={{fontSize:'8px',fontWeight:'200'}}>
          Choose a picture that represents your goal
        </FormText>
      </FormGroup>
      
        </form>
      </CardBody>
    </Card>

    </ModalBody>
    <ModalFooter>
        <Link to="/app/created-goals">
        <Button color="primary" onClick={this.toggleModalDemo}>
            Submit
        </Button>
        </Link>
    </ModalFooter>
</Modal>
</div>
    )
    }

}

export default Goals;







