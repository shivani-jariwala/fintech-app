import React from "react";

import {
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  Button,
  Col,
  Row
} from "reactstrap";

import BillsForm from './BillsForm';
import { Link } from 'react-router-dom';
//import './BillsForm.css';

const Forms = () => {
  return (
      <>
      <h className='d-flex flex-row m-auto' 
        style={{fontWeight:'600',fontSize:'22px',paddingTop:'25px'}}>PAY BILLS</h>
    <Row>
      <Col className='lg-3'>
      <Link style={{color:'white'}} to='/app/electricitybill'>
        <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}} >
        <i className="m-auto fa fa-bolt fa-2x"/> 
        <p className='m-auto' style={{paddingBottom:'0px'}}>Electricity bill</p>
        </Card>
        </Link>
        </Col>

        <Col className='lg-3'>
    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
        <i className="m-auto fa fa-credit-card fa-2x"/>
        <p className='m-auto' tyle={{paddingBottom:'0px'}}>Credit card bill</p>
    </Card>
    </Col>
    
    <Col className='lg-3'>
    <Link style={{color:'white'}} to='/app/billsform'>
    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
    <i className="m-auto fa fa-mobile fa-2x"></i>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Recharge</p>
    </Card>
    </Link>
    </Col>

    <Col className='lg-3'>
    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
        <i className="m-auto fa fa-phone fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Landline bill</p>
    </Card>
    </Col>
    </Row>

    <Row>
    <Col>
    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
        <i className="m-auto fa fa-university"/>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Education fees</p>
    </Card>
    </Col>
    <Col>

    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
        <i className="m-auto fa fa-tint fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Water</p>
    </Card>
    </Col>
    <Col>
    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
        <i className="m-auto fa fa-tv fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Cable TV</p>
    </Card>
    </Col>
    <Col>
    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
        <i className="m-auto fa fa-tv fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Broadband</p>
    </Card>
    </Col>
    </Row>

    <Row>
    <Col>
    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
    <i className="m-auto fa fa-bus fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Bus</p>
    </Card>
    </Col>
    <Col>

    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
        <i className="m-auto fa fa-film fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Movies</p>
    </Card>
    </Col>
    <Col>
    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
    <i className="m-auto fa fa-plane fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Tickets</p>
    </Card>
    </Col>
    <Col>
    <Card style={{background:'#f3f2f1',color:'black',fontWeight:'600',padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}>
        <i className="m-auto fa fa-amazon fa-2x"/>
        <p className='m-auto' style={{paddingBottom:'0px'}}>Gift card</p>
    </Card>
    </Col>
    </Row>
    
    </>
    
  );
};

export default Forms;


//<p >Amount: <span style={{fontWeight:'600',fontSize:'16px'}}>$50</span></p>