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
  Table,
  Row,
  Col
} from "reactstrap";
import Modal from "reactstrap/lib/Modal";


class Rewards extends React.Component {

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
        style={{fontWeight:'600',fontSize:'22px',paddingBottom:'30px',paddingTop:'25px'}}>REWARDS</h>
        
        <Row>
      
      <Col lg={4} >
        <Card style={{padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}  >
        <Row>
        <p className='m-auto' style={{paddingBottom:'0px',fontSize:'16px',fontWeight:'600',paddingTop:'0px'}}>Reward Coins   {" "}<i
                  className=" m-auto fa fa-money "/></p>
        
            </Row>
            <Row>
            <p className='m-auto' style={{marginBottom:'20px',fontSize:'16px',paddingTop:'10px'}}>500</p>
            </Row>
        </Card>
        </Col>
        
        <Col lg={4} >
        <Card style={{padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}  >
        <Row>
        <p className='m-auto' style={{paddingBottom:'0px',fontSize:'16px',fontWeight:'600',paddingTop:'0px'}}>Coins Value   {" "}</p>
        
            </Row>
            <Row>
            <p className='m-auto' style={{marginBottom:'20px',fontSize:'16px',paddingTop:'10px'}}>₹250</p>
            </Row>
        </Card>
        </Col>

        <Col lg={4} >
        <Card style={{padding:'20px',margin:'50px',maxWidth:'280px',height:'100px'}}  >
        <Row>
        <p className='m-auto' style={{paddingBottom:'0px',fontSize:'16px',fontWeight:'600',paddingTop:'0px'}}>Validity   {" "}
        <i className="fa fa-calendar"/></p>
        
            </Row>
            <Row>
            <p className='m-auto' style={{marginBottom:'20px',fontSize:'16px',paddingTop:'10px'}}>16 October,2021</p>
            </Row>
        </Card>
        </Col>



      

    </Row>
        <div>
            {!this.state.show ? 
        <Button  
                  className='d-flex flex-row m-auto'
                  style={{marginTop:'20px',fontWeight:'600'}}
                  color="primary"
                  id="show-info-message"
                  onClick={() => this.setState({show:true})}
                >
                  Reward History
                </Button>
                : "" }
                </div>
    {this.state.show ? 
    <Table responsive>
    <thead>
        <tr>
            <th className="text-center">Sr.No</th>
            <th>Date & Time</th>
            <th>Description</th>
            <th className="text-center"></th>
            <th className="text-right">Coins</th>
            <th className="text-right">Cr/Db</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="text-center">1</td>
            <td>2021-09-27 T 10:45 UTC</td>
            <td>Paris tour goal completed</td>
            <td className="text-center"></td>
            <td className="text-right">256</td>
            <td className="text-right">
                <p>
                    Credit
                </p>
                
            </td>
        </tr>
        <tr>
            <td className="text-center">2</td>
            <td>12021-08-15 T 02:15 UTC</td>
            <td>Electricity bill payed successfully</td>
            <td className="text-center"></td>
            <td className="text-right">100</td>
            <td className="text-right">
            <p>
                    Credit
                </p>
            </td>
        </tr>
        <tr>
            <td className="text-center">3</td>
            <td>2021-07-07 T 05:45 UTC</td>
            <td>Invested in SIP</td>
            <td className="text-center"></td>
            <td className="text-right">159</td>
            <td className="text-right">
            <p>
                    Debit
                </p>
            </td>
        </tr>
    </tbody>
</Table>

    
            
     : ""}
      

        </>
    )
    }

}

export default Rewards;







