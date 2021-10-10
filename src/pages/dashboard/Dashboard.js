import React from "react";
import { Row, Col, Progress, Table, Label, Input,Card,CardBody,CardTitle } from "reactstrap";
import Widget from "../../components/Widget";
import ApexChart from "react-apexcharts";
import { chartData, liveChart, liveChartInterval } from "./mockcopy";

import ReactEchartsCore from "echarts-for-react/lib/core";

import echarts from "echarts/lib/echarts";
//import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  
  // Animation
  import { easeQuadInOut } from "d3-ease";
  import AnimatedProgressProvider from "./AnimatedProgressProvider";
  import ChangingProgressProvider from "./ChangingProgressProvider";
  import GoldCoin from './coins.js'
class Dashboard extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
            cd: chartData,
            ld: liveChart,
            initEchartsOptions: {
              renderer: "canvas",
            },
            sparklineData: {
              series: [{ data: [1, 7, 3, 5, 7, 8] }],
              options1: {
                colors: ["#db2a34"],
                plotOptions: {
                  bar: {
                    columnWidth: "50%",
                  },
                },
              },
              options2: {
                colors: ["#2477ff"],
                plotOptions: {
                  bar: {
                    columnWidth: "50%",
                  },
                },
              },
            },
          
        graph: null,
        checkedArr: [false, false, false],
      };
    }

    render(){
        const { cd, ld, initEchartsOptions, sparklineData } = this.state;
        return(
            <>
            <h style={{fontSize:'20px',fontWeight:'600',color:'white'}}><b><i>Philips Smith</i></b></h>
            <p>Welcome back!</p>
            <Row>
                <Col lg={8} style={{marginRight:'50px'}}>
                    <Card style={{paddingLeft:'50px'}}>
                        <CardBody>
                            <Row>
                                <Col lg={4}>
                                    <Row style={{fontSize:'12px',fontWeight:'100'}}>
                                        Total Amount spent
                                    </Row>
                                    <Row style={{fontWeight:'800',fontSize:'25px',color:'white'}}>
                                    ₹ 5000
                                    </Row>
                                    
                                </Col>

                                <Col lg={4}>
                                <Row style={{fontSize:'12px',fontWeight:'100'}}>
                                Net Worth
                                </Row>
                                <Row style={{fontWeight:'800',fontSize:'25px',color:'white'}}>
                                    ₹ 25,000
                                    </Row>
                                </Col>

                                <Col lg={4}>
                                <Row style={{fontSize:'12px',fontWeight:'100'}}>
                                        Total Amount invested
                                        
                                    </Row>
                                    <Row style={{fontWeight:'800',fontSize:'25px',color:'white'}}>
                                    ₹ 11,000
                                    </Row>
                                </Col>
                            </Row>
                            </CardBody>
                    </Card>
                    <Card style={{marginTop:'25px'}}>
                        <CardBody style={{paddingTop:'10px'}}>
                        <Col >
              <Widget
              style={{background:'none',marginBottom:'0px'}}
                title={
                  <h5>
                      <span className="fw-semi-bold">Investments V/S Expenditure </span>
                    Analysis 
                  </h5>
                }
                close
                collapse
              >
                <ReactEchartsCore
                  echarts={echarts}
                  option={cd.echarts.line}
                  opts={initEchartsOptions}
                  style={{ height: "365px" }}
                />
              </Widget>
            </Col> 
                            
                        </CardBody>
                    </Card>
                    <p className="fw-semi-bold" style={{marginLeft:'20px',marginTop:'25px',marginBottom:'0px'}}>Goals Insights</p>
                    <Row>
                        <Col>
                        <Card style={{marginTop:'25px'}}>
                            <p style={{marginTop:'25px',marginLeft:'45px',fontWeight:'600',fontSize:'18px',marginBottom:'0px'}}>
                                <b><i>Paris Tour 2022</i></b>
                                </p>
                            <CardBody>
                                <Row>
                                    <Col style={{marginLeft:'25px'}}>
                                    <p style={{fontWeight:'800',fontSize:'25px',color:'white',marginTop:'20px'}}>₹ 2,00,000</p>
                                    </Col>
                                    <Col>
                                    <p label="Default animation speed" style={{width:'100px',paddingLeft:'20px'}}>
      <ChangingProgressProvider values={[0, 2,4,7]}>
        {percentage => (
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        )}
      </ChangingProgressProvider>
    </p>
                                    </Col>
                                </Row>
                                
                            </CardBody>
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{marginTop:'25px'}}>
                            <p style={{marginTop:'25px',marginLeft:'45px',fontWeight:'600',fontSize:'18px',marginBottom:'0px'}}>
                                <b><i>Royal Enfield Bike</i></b>
                                </p>
                            <CardBody>
                                <Row>
                                    <Col style={{marginLeft:'25px'}}>
                                    <p style={{fontWeight:'800',fontSize:'25px',color:'white',marginTop:'20px'}}>₹ 1,20,000</p>
                                    </Col>
                                    <Col>
                                    <p label="Default animation speed" style={{width:'100px',paddingLeft:'20px'}}>
      <ChangingProgressProvider values={[0, 2,4,6,8]}>
        {percentage => (
          <CircularProgressbar value={percentage} text={`${percentage}%`} />
        )}
      </ChangingProgressProvider>
    </p>
                                    </Col>
                                </Row>
                                
                            </CardBody>
                        </Card>
                        </Col>
                        
                    </Row>
                           
                        
                </Col>

                <Col lg={3}>
                    <Card>
                        <CardBody>
                
                        <Widget
                        style={{background:'none',marginBottom:'20px'}}
                    title={
                      <h5>
                        Budget{" "}
                        <span className="fw-semi-bold">Categorization</span>
                      </h5>
                    }
                    close
                    collapse
                  >
                    <ApexChart
                      className="sparkline-chart"
                      type={"pie"}
                      height={200}
                      series={cd.apex.pie.series}
                      options={cd.apex.pie.options}
                    />
                  </Widget>
                  <Row className='ml-2 d-flex flex-row'>
                      
                  <svg
                className="d-flex"
                style={{ marginRight: "10px", marginLeft: "10px", marginTop: "3px" }}
                width="10"
                height="10"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill='rgba(255,69,96,1)' />
              </svg>
              
              <p style={{fontWeight:'600',fontSize:'10px'}}>Investments</p>
              
              </Row>
              <Row className='ml-2 d-flex flex-row'>
              <svg
                className="d-flex"
                style={{ marginRight: "10px", marginLeft: "10px", marginTop: "3px" }}
                width="10"
                height="10"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill='rgba(254,176,25,1)' />
              </svg>
              <p style={{fontWeight:'600',fontSize:'10px'}}>Food</p>
              </Row>
              <Row className='ml-2 d-flex flex-row'>
              <svg
                className="d-flex"
                style={{ marginRight: "10px", marginLeft: "10px", marginTop: "3px" }}
                width="10"
                height="10"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill='rgba(0,227,150,1)' />
              </svg>
              <p style={{fontWeight:'600',fontSize:'10px'}}>Clothes</p>
              </Row>
              <Row className='ml-2 d-flex flex-row'>
              <svg
                className="d-flex"
                style={{ marginRight: "10px", marginLeft: "10px", marginTop: "3px" }}
                width="10"
                height="10"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill='rgba(0,143,251,1)' />
              </svg>
              <p style={{fontWeight:'600',fontSize:'10px'}}>Entertainment</p>
              </Row>
              <Row className='ml-2 d-flex flex-row'>
              <svg
                className="d-flex"
                style={{ marginRight: "10px", marginLeft: "10px", marginTop: "3px" }}
                width="10"
                height="10"
                viewBox="0 0 4 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="2" fill='rgba(119,93,208,1)' />
              </svg>
              <p style={{fontWeight:'600',fontSize:'10px'}}>Others</p>
              </Row>
              </CardBody>
              </Card>
              <Card style={{marginTop:'25px'}}>
                  <CardBody>
                  <Row style={{marginTop:'0px',marginBottom:'20px'}}>
                  <p style={{marginTop:'0px',marginLeft:'45px',fontWeight:'600',fontSize:'18px',marginBottom:'0px'}}>Rewards Earned{" "}<GoldCoin/></p>
                      </Row>
                      <Row>
                      <Col style={{marginTop:'0px'}}>
                  <img style={{width:'140px',height:'100px'}} src={require('../images/trans.png')} alt='royal'/>
                  </Col>
                  <Col>
                  
                  <p style={{fontWeight:'800',fontSize:'25px',color:'white',marginTop:'25px'}}>500</p>
                  </Col>

                </Row>

                  </CardBody>
                </Card>
              

              
              
              
                </Col>
                
            </Row>
            </>
        )
    }
  
}

export default Dashboard;
  