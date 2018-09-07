import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Card, CardBody, CardHeader, Table, 
    UncontrolledCollapse, UncontrolledTooltip } from 'reactstrap';
import PaginationContainer from '../../../../components/PaginationContainer/PaginationContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getDateFormat } from "../../../../utils/Operations";
import { Link } from 'react-router-dom'
import ButtonLink from '../../../../components/Form/Buttons/ButtonLink';
import PopupContainer from '../../../../components/PopupContainer/PopupContainer';
import Button from '../../../../components/Form/Buttons/Button';

export default function ManagePosts({onLoad, onDelete, isProgress, posts}){
    const title = 'Manage Posts';
    return(
        <Container className='manage-posts'>
            <Row>
                <Col>
                    {
                        <Card className='card-table'>
                            <CardHeader>
                                {title}
                                <div className='manage-posts-tools'>
                                    <Link to={`/editor`}  id='newPost'>
                                        <FontAwesomeIcon icon='plus-square'/>
                                        <UncontrolledTooltip placement="top" target="newPost">
                                            New Post
                                        </UncontrolledTooltip>
                                    </Link>
                                    <FontAwesomeIcon 
                                        icon='sliders-h'
                                        id="toggler"
                                    />
                                </div>
                                <UncontrolledCollapse toggler="#toggler">
                                    <div>

                                    </div>
                                </UncontrolledCollapse>
                            </CardHeader>
                            <CardBody>
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th>Search</th>
                                            <th>Date Posted</th>
                                            <th>Statistics</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        !isProgress &&
                                            posts.map((post, index) => 
                                                <tr key={index}>
                                                    <th scope="row">
                                                        <Link to={'/article/' + post.id}>
                                                            {post.title}
                                                        </Link>
                                                    </th>
                                                    <td>{getDateFormat(post.createdAt)}</td>
                                                    <td>
                                                        <FontAwesomeIcon icon='comments'/>
                                                        {` ${post.commentsCount} comments`}
                                                    </td>
                                                    <td>{
                                                        <div>
                                                            <Link to={`/editor/${post.id}`}>
                                                                <FontAwesomeIcon icon='pencil-alt'/>
                                                            </Link>
                                                            <PopupContainer 
                                                                name="Delete"
                                                                icon={['far', 'trash-alt']}
                                                                type={PopupContainer.type.icon}
                                                                buttons={
                                                                    <Button
                                                                        name='Delete'
                                                                        onClick={() => onDelete(post.id)}
                                                                    />
                                                                }
                                                            >
                                                                Are you sure you want to delete? 
                                                            </PopupContainer>
                                                        </div>
                                                    }</td>
                                                </tr>
                                            )
                                    }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    }
                </Col>
                
            </Row>
            <Row>
                <Col>
                    <PaginationContainer 
                        onLoad={onLoad} 
                        title={title}
                        type={PaginationContainer.type.button}
                        limit={20}
                    />
                </Col>
            </Row>
        </Container>
    )
}

ManagePosts.propTypes = {
    posts: PropTypes.array,
    isProgress: PropTypes.bool,
    onLoad: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}