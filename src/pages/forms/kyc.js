import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button,
  Row,
  Col
} from "reactstrap";

import { Checkbox } from 'pretty-checkbox-react';


class KYCForm extends React.Component {

    constructor(props) {
        super(props);

      }
    render(){
    return(
        <>
        <h className='d-flex flex-row m-auto' 
        style={{fontWeight:'600',fontSize:'22px',paddingBottom:'50px',paddingTop:'25px'}}>KNOW YOUR CLIENT(KYC)</h>
        
    
    <Card style={{marginLeft:'300px',marginRight:'300px',marginTop:'0px'}}>
      <CardBody>
        <form>
        <FormGroup>
            <Label for="examplename">Name</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplename"
              placeholder="Philips Smith"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplename">Father/Spouse's Name</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplename"
              placeholder="Jack Smith"
            />
          </FormGroup>
          <Row>
              <Col>
          <FormGroup>
            <Label for="exampleban">Gender</Label>
            <Input type="select" name="select" id="exampleSelect1" style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Male</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Female</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Other</option>
            </Input>
          </FormGroup>
          </Col>
          <Col>
          <FormGroup>
            <Label for="exampleban">Married</Label>
            <Input type="select" name="select" id="exampleSelect1" style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>Yes</option>
              <option style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}>No</option>
            </Input>
          </FormGroup>
          </Col>
          <Col>
          <FormGroup>
            <Label for="examplepass">DOB</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="(dd/mm/yyyy)"
            />
          </FormGroup>
          </Col>
          </Row>
          <Row>
              <Col>
              <FormGroup>
            <Label for="examplepass">PAN Number</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="ABCDE1234F"
            />
            </FormGroup>
              </Col>

              <Col>
              <FormGroup>
            <Label for="examplepass">Aadhar Card(if any)</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="1800 3493 8902"
            />
            </FormGroup>
              </Col>

          </Row>

          <FormGroup>
            <Label for="examplepass">Residence Address</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="ABCDE1234F"
            />
            </FormGroup>

          <Row>
              <Col>
              <FormGroup>
            <Label for="examplepass">City/Town</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="Surat"
            />
            </FormGroup>
              </Col>

              <Col>
              <FormGroup>
            <Label for="examplepass">State</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="Gujarat"
            />
            </FormGroup>
              </Col>

              <Col>
              <FormGroup>
            <Label for="examplepass">Country</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="India"
            />
            </FormGroup>
              </Col>
          </Row>

          <FormGroup>
            <Label for="examplepass">Mobile No</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="+91-989898989"
            />
    </FormGroup>
            <FormGroup>
            <Label for="examplepass">Email address</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="India"
            />
    </FormGroup>

    <Checkbox>Permanent Address same as Residence Address</Checkbox>


          <div className='m-auto'>
          <Button
                  style={{marginTop:'20px'}}
                  color="primary"
                  id="show-info-message"
                >
                  Submit
                </Button>
          </div>
        </form>
      </CardBody>
    </Card> 
        </>
    )
    }

}

export default KYCForm;