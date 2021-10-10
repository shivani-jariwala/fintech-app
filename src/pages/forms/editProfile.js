import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button,
  Row,FormText
} from "reactstrap";


class EditProfile extends React.Component {

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
        style={{fontWeight:'600',fontSize:'22px',paddingBottom:'50px',paddingTop:'25px'}}>EDIT PROFILE</h>
        
    
    <Card style={{marginLeft:'300px',marginRight:'300px'}}>
      <CardBody>
        <form>
          <FormGroup>
            <Label for="examplename">First Name</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplename"
              placeholder="Philips"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplepass">Last Name</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="Smith"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplename">Phone Number</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplename"
              placeholder="+91-9898998989"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplename">Email</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplename"
              placeholder="philipsmith@gmail.com"
            />
          </FormGroup>
          <FormGroup>
        <Label for="exampleFile" style={{fontWeight:'400',color:'white'}}>Profile Picture</Label>
        <Input type="file" name="file" id="exampleFile" />
      </FormGroup>
          <div className='d-flex flex-row m-auto'>
           <Row className='m-auto'>
                <Button  
                  className='d-flex flex-row '
                  style={{marginTop:'20px',margin:'10px'}}
                  color="primary"
                  id="show-info-message"
                  onClick={() => this.setState({show:true})}
                >
                  Save
                </Button>
                <Button  
                  className='d-flex flex-row'
                  style={{marginTop:'20px',background:'f3f2f1',margin:'10px',color:'black'}}
                  id="show-info-message"
                >
                  Reset
                </Button>
                <Button  
                  className='d-flex flex-row'
                  style={{marginTop:'20px',background:'f3f2f1',margin:'10px',color:'black'}}
                  id="show-info-message"
                >
                  Cancel
                </Button>
            </Row>
                </div>
        </form>
      </CardBody>
    </Card> 
    
        </>
    )
    }

}

export default EditProfile;