import React, { Component } from 'react'
//reactstrap
import { Container, Row, Col, Card, CardBody } from 'reactstrap'
class Main extends Component {
    render () {
        const { dataStore } = this.props
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='card'>
                            <div className='card-body'>
                                <ul>
                                {dataStore.store.sample.map((data, key)=>{
                                    return (
                                        <li key={key}>
                                            {data.title} 
                                        </li>  
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <Container className='main'>
            //     <Row>
            //         <Col md='12'>
            //             <Card className='mb-3'>
            //                 <CardBody>
            //                     <ul>
            //                     {dataStore.store.sample.map((data, key)=>{
            //                         return (
            //                             <li key={key}>
            //                                 {data.title} 
            //                             </li>  
            //                         )
            //                     })}
            //                     </ul>
            //                 </CardBody>
            //             </Card>
            //         </Col>
            //     </Row>
            // </Container>
        )
    }
}

export default Main