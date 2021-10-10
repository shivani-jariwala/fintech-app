import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button
} from "reactstrap";

//import './BillsForm.css';

const BillsForm = () => {
  return (
      <>
    <h className='d-flex flex-row m-auto' 
    style={{fontWeight:'600',fontSize:'22px',paddingBottom:'50px',paddingTop:'0px'}}>RECHARGE</h>
    <Card style={{marginLeft:'300px',marginRight:'300px',marginTop:'50px'}}>
      <CardBody>
        <form>
          <FormGroup>
            <Label for="exampleMobileNo">Mobile Number</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="+91-9898998989"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect1">Operator</Label>
            <Input type="select" name="select" id="exampleSelect1" style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Jio</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Vi</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Airtel</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleAmount">Amount</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="number"
              name="number"
              id="exampleAmount"
              placeholder="$50"
            />
          </FormGroup>
          <div className='m-auto'>
          <Button
                  style={{marginTop:'20px'}}
                  color="primary"
                  id="show-info-message"
                >
                  Pay Bill
                </Button>
          </div>
        </form>
      </CardBody>
    </Card>
    </>
  );
};

export default BillsForm;


//<p >Amount: <span style={{fontWeight:'600',fontSize:'16px'}}>$50</span></p>