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
  CardTitle,
  Button,
  Table, Row, Col,Progress,ModalBody,ModalFooter,FormText,Modal,ModalHeader
} from "reactstrap";

import {Link} from 'react-router-dom'
//import CardTitle from "reactstrap/lib/CardTitle";


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
        style={{fontWeight:'600',fontSize:'22px',paddingBottom:'30px',paddingTop:'25px'}}>ACCOUNTS</h>

        <Row>
            <Col >
            <Card style={{fontWeight:'600'}}>
                <CardTitle style={{    margin: '20px',
    fontWeight: '600',
    fontSize: '18px'}}>
                    Account Details
                </CardTitle>
            <CardBody>
                <Row style={{marginLeft:'20px',marginBottom:'20px'}}>
                <Col>
                    <Row >
                        Username
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        Philips Smith
                    </Row>
                    </Col>

                    <Col>
                    <Row >
                        Account No
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        1774248928
                    </Row>
                    </Col>

                    <Col>
                    <Row >
                        Bank Name
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                        Bank of baroda
                    </Row>
                    </Col>

                    <Col>
                    <Row >
                        Balance
                    </Row>
                    <Row style={{fontWeight:'100',fontSize:'12px'}}>
                    ₹ 15,000
                    </Row>
                    </Col>
                </Row>
                </CardBody>
        </Card>
            </Col>
            </Row>

            <Row style={{marginTop:'50px'}}>
            <Col >
            <Card style={{fontWeight:'600'}}>
                <CardTitle style={{    margin: '25px',
    fontWeight: '600',
    fontSize: '18px'}}>
                    Transactions
                </CardTitle>
                <CardBody>
                <Row style={{marginRight:'20px'}}>
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
                </Row>
            </CardBody>
        </Card>
            </Col>
            </Row>

            
                    

               

       


        
        </>
    )
    }

}

export default createdGoals;

/* 

goal creation Modal
goal creation in cache
goal Picture */





