import { cache } from "@amcharts/amcharts4/core";
import { number } from "echarts/lib/export";
import { format } from "highcharts";
import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button,
  Table, Row, Col,Progress,ModalBody,ModalFooter,FormText,Modal,ModalHeader
} from "reactstrap";

import {Link} from 'react-router-dom'


class createdGoals extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
            modalLarge: false
        };
        this.toggleModalLarge = this.toggleModalLarge.bind(this);
    }
    toggleModalLarge(){
        this.setState({
            modalLarge: !this.state.modalLarge
        });
    }
    

     

    render(){
    return(
        <>
        <h className='d-flex flex-row m-auto' 
        style={{fontWeight:'600',fontSize:'22px',paddingBottom:'30px',paddingTop:'25px'}}>GOALS CREATED</h>

        <Row>
            <Col lg={6}>
            <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600'}}>
            <CardBody>
                <Row style={{margin:'25px'}}>
                    <Col>
                    <img style={{width:'80px',height:'80px'}} src={require('../images/paris.jpeg')} alt='paris'/>
                    </Col>
                    <Col className='m-auto'>
                    <p>Paris Tour 2022</p>
                    </Col>
                </Row>
                <Row style={{margin:'25px'}}>
                    <Col>
                    <Row >
                        Start Date
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        27 August 2021
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        Maturity Date
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        27 August 2023
                    </Row>
                    </Col>
                    <Col>
                        <div className="text-center">7.5%</div>
                        <Progress value="25" />
                    </Col>
                </Row>
                <p style={{margin:'25px'}}>A much awaited Paris Tour in 2022</p>
                <Row style={{margin:'25px'}}>
                <Col>
                    <Row>
                        Budget
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        2,00,000
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        Saved
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        1500
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        Yet to Save
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        1,98,500
                    </Row>
                    </Col>

                </Row>
                <Row style={{margin:'25px'}}>
                <Button
                  style={{marginTop:'20px'}}
                  color="primary"
                  id="show-info-message"
                  onClick={this.toggleModalLarge}
                >
                  Details
                </Button>
                </Row>
            </CardBody>
        </Card>
            </Col>

            <Col lg={6}>
            <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600'}}>
            <CardBody>
                <Row style={{margin:'25px'}}>
                    <Col>
                    <img style={{width:'80px',height:'80px'}} src={require('../images/royal.webp')} alt='royal'/>
                    </Col>
                    <Col className='m-auto'>
                    <p>Royal Enfield</p>
                    </Col>
                </Row>
                <Row style={{margin:'25px'}}>
                    <Col>
                    <Row>
                        Start Date
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        23 September 2021
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        Maturity Date
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        23 September 2024
                    </Row>
                    </Col>
                    <Col>
                    <div className="text-center">3%</div>
                        <Progress value="25" />
                    </Col>
                </Row>
                <p style={{margin:'25px'}}>Buy a Royal Enfield Bike</p>
                <Row style={{margin:'25px'}}>
                <Col>
                    <Row>
                        Budget
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        1,20,000
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        Saved
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        500
                    </Row>
                    </Col>
                    <Col>
                    <Row>
                        Yet to Save
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        1,19,500
                    </Row>
                    </Col>

                </Row>
                <Row style={{margin:'25px'}}>
                <Button
                  style={{marginTop:'20px'}}
                  color="primary"
                  id="show-info-message"
                >
                  Details
                </Button>
                </Row>
            </CardBody>
        </Card>
                </Col>
            

        </Row>

        <Modal isOpen={this.state.modalLarge} toggle={this.toggleModalLarge} size="lg">
    <ModalHeader style={{fontWeight:'600',fontSize:'16px',color:'#f3f2f1'}}className="justify-content-center" toggle={this.toggleModalLarge}>
        Transactions
    </ModalHeader>
    <ModalBody>
    <div className='m-4' style={{background:'#f3f2f1',color:'black',fontWeight:'600',fontSize:'18px',borderRadius:'10px',border:'5px solid black'}}>
    <Table responsive>
    <thead>
        <tr>
            <th className="text-center">Sr.No</th>
            <th>Date</th>
            <th>Description</th>
            <th className="text-center"></th>
            <th className="text-right">Amount</th>
            <th className="text-right">Cr/Db</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>29/09/2021</td>
            <td>Transfered to Bank Account</td>
            <td className="text-center"></td>
            <td className="text-right">₹ 100</td>
            <td className="text-right">
                <p>
                    Debit
                </p>
                
            </td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>15/08/2021</td>
            <td>Transfered to Bank Account</td>
            <td className="text-center"></td>
            <td className="text-right">₹ 200</td>
            <td className="text-right">
            <p>
                    Debit
                </p>
            </td>
        </tr>
        <tr>
            <td className="text-center">3</td>
            <td>07/07/2021</td>
            <td>Payment towards goal royal enfield</td>
            <td className="text-center"></td>
            <td className="text-right">₹ 600</td>
            <td className="text-right">
            <p>
                    Credit
                </p>
            </td>
        </tr>
    </tbody>
</Table>
</div>

    </ModalBody>
</Modal>


        
        </>
    )
    }

}

export default createdGoals;

/* 

goal creation Modal
goal creation in cache
goal Picture */





