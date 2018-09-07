import React from 'react';
// import PropTypes from 'prop-types';
import { Row, Col, Container } from 'reactstrap';
import LibraryBookIcon from 'material-ui/svg-icons/av/library-books';
import ButtonIcon from '../../../../components/Form/Buttons/ButtonIcon';
import ButtonLink from '../../../../components/Form/Buttons/ButtonLink';

export default function Stories(){
    return(
        <Container className='manage-stories'>
            <Row>
                <Col className="title">
                    <ButtonIcon
                        icon={<LibraryBookIcon/>}
                    />
                    <div className='text-big'>
                        Stories
                    </div>
                    <ButtonLink className="right-col"
                        name='New Story'
                        to={'/storyEditor'}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={10} className='title text-small'>
                    Search
                </Col>
                <Col xs={1}>
                    Last Modified
                </Col>
                <Col xs={1}>
                    Statistics
                </Col>
            </Row>
            <Row>
                <Col className="title">
                    <div className="text-small">
                        Basic Information
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                
                </Col>
            </Row>
        </Container>
    )
}