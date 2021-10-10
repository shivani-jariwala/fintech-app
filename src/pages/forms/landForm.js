import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button,Row,Col,Modal,ModalBody,FormText,ModalFooter,Table
} from "reactstrap";
import Land from './land.js';

import {Link} from 'react-router-dom'
import cash from '../../pages/dashboard/svg/cash icon.svg'
import Gold from './gols'

//import './BillsForm.css';

class Assets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          modalMini: false,
            modalDemo: false,
            modalGold: false,
            modalCash: false,
            modalLoans: false,
            modalCc: false,
            liabilities:false,
            assets:false
        };
        this.toggleModalDemo = this.toggleModalDemo.bind(this);
        this.toggleModalMini = this.toggleModalMini.bind(this);
        this.toggleModalGold = this.toggleModalGold.bind(this);
        this.toggleModalCash = this.toggleModalCash.bind(this);
        this.toggleModalLoans = this.toggleModalLoans.bind(this);
        this.toggleModalCc = this.toggleModalCc.bind(this);
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
  toggleModalGold(){
    this.setState({
        modalGold: !this.state.modalGold
    });
}
toggleModalCash(){
    this.setState({
        modalCash: !this.state.modalCash
    });
}
toggleModalLoans(){
    this.setState({
        modalLoans: !this.state.modalLoans
    });
}
toggleModalCc(){
    this.setState({
        modalCc: !this.state.modalCc
    });
}
render(){
  return (
      <>
      <h className='d-flex flex-row m-auto' 
    style={{fontWeight:'600',fontSize:'22px',paddingBottom:'50px',paddingTop:'0px'}}>LAND DETAILS</h>
    <h className='d-flex flex-row' style={{justifyContent:'center',fontSize:'14px',fontWeight:'600'}}>Add your Assets</h>
      <Row>
      
      <Col lg={4}>
        <Card style={{fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}} onClick={this.toggleModalDemo} >
        <i 
            className="m-auto fa fa-university fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px',fontSize:'16px',fontWeight:'600',paddingTop:'10px'}}>LAND</p>
        </Card>
        </Col>

        <Col lg={4}>
        <Card style={{fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}} onClick={this.toggleModalCash} >
            
        
        <i
                  className=" m-auto fa fa-money fa-2x"/>
        
        <p className='m-auto' style={{paddingBottom:'0px',fontSize:'16px',fontWeight:'600',paddingTop:'10px'}} >CASH</p>
        </Card>
        </Col>

        <Col lg={4}>
        <Card style={{fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}} onClick={this.toggleModalGold} >
        <Gold/>
        <p className='m-auto' style={{paddingBottom:'0px',fontSize:'16px',fontWeight:'600',paddingTop:'10px'}}>GOLD</p>
        </Card>
        </Col>


      

    </Row>

    <Modal isOpen={this.state.modalDemo} toggle={this.toggleModalDemo}>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight:'600',fontSize:'16px',color:'#f3f2f1'}}>
        Add you land details here
      </h5>
      
    </div>
    <ModalBody>

    <Card>
      <CardBody>
        <form>
        <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Location/Area</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="Surat"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleMobileNo">Size</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="120 sq.ft"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplename" style={{fontWeight:'400',color:'white'}}>Value</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplename"
              placeholder="₹ 20,00,000"
            />
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

<Modal isOpen={this.state.modalCash} toggle={this.toggleModalCash}>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight:'600',fontSize:'16px',color:'#f3f2f1'}}>
        Add you cash details here
      </h5>
      
    </div>
    <ModalBody>

    <Card>
      <CardBody>
        <form>
        <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Total Cash in Hand</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="₹1,20,000"
            />
          </FormGroup>
          
        </form>
      </CardBody>
    </Card>

    </ModalBody>
    <ModalFooter>
        <Link to="/app/created-goals">
        <Button color="primary" onClick={this.toggleModalCash}>
            Submit
        </Button>
        </Link>
    </ModalFooter>
</Modal>

<Modal isOpen={this.state.modalGold} toggle={this.toggleModalGold}>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight:'600',fontSize:'16px',color:'#f3f2f1'}}>
        Add you goal details here
      </h5>
      
    </div>
    <ModalBody>

    <Card>
      <CardBody>
        <form>
        <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Weight</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="2.3kg"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleMobileNo">Value</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="₹3,00,000"
            />
          </FormGroup>
          
      
        </form>
      </CardBody>
    </Card>

    </ModalBody>
    <ModalFooter>
        <Link to="/app/created-goals">
        <Button color="primary" onClick={this.toggleModalGold}>
            Submit
        </Button>
        </Link>
    </ModalFooter>
</Modal>

<h className='d-flex flex-row' style={{justifyContent:'center',fontSize:'14px',fontWeight:'600'}}>Add your Liabilities</h>
      <Row className='d-flex flex-row' style={{justifyContent:'space-evenly'}}>
      
      <Col lg={4}>
        <Card style={{fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}} onClick={this.toggleModalLoans} >
        <i
                  className=" m-auto fa fa-money fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px',fontSize:'16px',fontWeight:'600',paddingTop:'10px'}}>LOANS</p>
        </Card>
        </Col>

        <Col lg={4}>
        <Card style={{fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}} onClick={this.toggleModalCc} >
            
        <i className="m-auto fa fa-credit-card fa-2x"/>
        
        <p className='m-auto' style={{paddingBottom:'0px',fontSize:'16px',fontWeight:'600',paddingTop:'10px'}} >CREDITCARD's</p>
        </Card>
        </Col>

    </Row>

    <Modal isOpen={this.state.modalLoans} toggle={this.toggleModalLoans}>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight:'600',fontSize:'16px',color:'#f3f2f1'}}>
        Add you loan details here
      </h5>
      
    </div>
    <ModalBody>

    <Card>
      <CardBody>
        <form>
        <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Loan Amount</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="₹20,00,000"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleMobileNo">Loan Period</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="20yrs"
            />
          </FormGroup>
          

          
      
        </form>
      </CardBody>
    </Card>

    </ModalBody>
    <ModalFooter>
        <Link to="/app/created-goals">
        <Button color="primary" onClick={this.toggleModalLoans}>
            Submit
        </Button>
        </Link>
    </ModalFooter>
</Modal>

<Modal isOpen={this.state.modalCc} toggle={this.toggleModalCc}>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight:'600',fontSize:'16px',color:'#f3f2f1'}}>
        Add you credit card details here
      </h5>
      
    </div>
    <ModalBody>

    <Card>
      <CardBody>
        <form>
        <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Bank Name</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="Bank of Baroda"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Username</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="Philips Smith"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Password</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="*******"
            />
          </FormGroup>
          
        </form>
      </CardBody>
    </Card>

    </ModalBody>
    <ModalFooter>
        <Link to="/app/created-goals">
        <Button color="primary" onClick={this.toggleModalCc}>
            Submit
        </Button>
        </Link>
    </ModalFooter>
</Modal>

<Modal isOpen={this.state.modalGold} toggle={this.toggleModalGold}>
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel" style={{fontWeight:'600',fontSize:'16px',color:'#f3f2f1'}}>
        Add you goal details here
      </h5>
      
    </div>
    <ModalBody>

    <Card>
      <CardBody>
        <form>
        <FormGroup>
            <Label for="examplepass" style={{fontWeight:'400',color:'white'}}>Weight</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="text"
              name="text"
              id="examplepass"
              placeholder="2.3kg"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleMobileNo">Value</Label>
            <Input
              style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'15px'}}
              type="number"
              name="number"
              id="exampleNumber"
              placeholder="₹3,00,000"
            />
          </FormGroup>
          
      
        </form>
      </CardBody>
    </Card>

    </ModalBody>
    <ModalFooter>
        <Link to="/app/created-goals">
        <Button color="primary" onClick={this.toggleModalGold}>
            Submit
        </Button>
        </Link>
    </ModalFooter>
</Modal>
<Row className='d-flex flex-row ' style={{justifyContent:'center',marginTop:'70px'}}>
    <Button color="primary"  onClick={() =>{this.setState({assets:!this.state.assets})}}>
    View Assets
</Button>
{this.state.assets ? 


<Table responsive style={{marginTop:'25px'}}>
    <thead>
        <tr>
            <th className="text-center">Sr.No</th>
            <th>Asset Type</th>
            <th>Description</th>
            <th className="text-center"></th>
            <th className="text-right">Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>Land</td>
            <td>Surat, 120 sq.ft</td>
            <td className="text-center"></td>
            <td className="text-right">₹20,00,000</td>
            <td className="text-right">
                
                
            </td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>Cash</td>
            <td>In-hand Cash</td>
            <td className="text-center"></td>
            <td className="text-right">₹1,20,000</td>
            <td className="text-right">
            
            </td>
        </tr>
        <tr>
            <td className="text-center">3</td>
            <td>Gold</td>
            <td>2.3kgs</td>
            <td className="text-center"></td>
            <td className="text-right">₹3,00,000</td>
            <td className="text-right">
            
            </td>
        </tr>
    </tbody>
</Table>:""}

      </Row>
      <Row className='d-flex flex-row ' style={{justifyContent:'center',marginTop:'70px'}}>
    <Button color="primary"  onClick={() =>{this.setState({liabilities:!this.state.liabilities})}}>
    View Liabilities
</Button>
      </Row>

      {this.state.liabilities ? 


<Table responsive style={{marginTop:'25px'}}>
    <thead>
        <tr>
            <th className="text-center">Sr.No</th>
            <th>Liabilities Type</th>
            <th>Description</th>
            <th className="text-center"></th>
            <th className="text-right">Amount</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>Loan</td>
            <td>20 yrs</td>
            <td className="text-center"></td>
            <td className="text-right">₹20,00,000</td>
            <td className="text-right">
                
                
            </td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>Credit Card</td>
            <td>Bank of Barodda Credit Card</td>
            <td className="text-center"></td>
            <td className="text-right">₹1,20,000</td>
            <td className="text-right">
            
            </td>
        </tr>
        
        
    </tbody>
</Table>:""}
   
    </>
  );
}
};

export default Assets;

