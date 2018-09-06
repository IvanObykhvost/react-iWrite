import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Card, CardBody, CardHeader, Table } from 'reactstrap';
import ButtonLink from '../../../components/Form/Buttons/ButtonLink';

export default function ManagePosts({}){
    return(
        <Container className='manage-posts'>
            <Row>
                <Col>
                   <Card className='card-table'>
                        <CardHeader>Manage Posts</CardHeader>
                        <CardBody>
                            <Table bordered>
                            <thead>
                            <tr>
                                <th>Search</th>
                                <th>Date Posted</th>
                                <th>Statistics</th>
                            </tr>
                            </thead>
                            </Table>
                        </CardBody>
                   </Card>
                </Col>
            </Row>
        </Container>
    )
}

ManagePosts.propTypes = {
    
}