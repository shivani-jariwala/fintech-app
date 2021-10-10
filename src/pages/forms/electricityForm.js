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


class ElectricityBill extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
            word: false
        };
    
       
      }
      render(){

  return (
      <>
    <h className='d-flex flex-row m-auto' 
    style={{fontWeight:'600',fontSize:'22px',paddingBottom:'50px',paddingTop:'25px'}}>ELECTRICITY BILLS</h>
    <Card style={{marginLeft:'300px',marginRight:'300px',marginTop:'50px'}}>
      <CardBody>
        <form>
          <FormGroup>
            <Label for="exampleSelect1">Select State</Label>
            <Input type="select" name="select" id="exampleSelect1" style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Andra Pradesh</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Assam</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Delhi</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Gujarat</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Karnataka</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Rajasthan</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Goa</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Maharashtra</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect1">Select Board</Label>
            <Input type="select" name="select" id="exampleSelect1" style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Dakshin Gujarat Vij</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Gift Power</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Torrent Power</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Uttar Gujarat Vij</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Paschim Gujarat Vij</option>
            </Input>
          </FormGroup>
          {this.state.show ? 
          <FormGroup>
            <p style={{marginTop:'5px',fontSize:'14px'}}>Amount:<span style={{fontWeight:'600',fontSize:'16px'}}>$50</span></p>
          </FormGroup> : "" }
          <div className='m-auto'>
          <Button
                 onClick={() => this.setState({show:true,word:true})}
                  color="primary"
                  id="show-info-message"
                >
                  {this.state.word ? <span>Pay Bill</span> : <span>Generate Bill</span> } 
                </Button>
          </div>
        </form>
      </CardBody>
    </Card>
    </>
  );
          }
};

export default ElectricityBill;


//<p >Amount: <span style={{fontWeight:'600',fontSize:'16px'}}>$50</span></p>