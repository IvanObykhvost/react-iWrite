import React from 'react';
import { connect } from 'react-redux';
import { typeProfile } from "../constants";
import { Row, Col, Media, Card, CardHeader, CardFooter, CardBody, CardText,
         Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Button from '../Button';

class ButtonProfileContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            currentUser: this.props.currentUser,
            hover: false,
            type: typeProfile.button
        }
    }

    handelMouseEnter = () => this.setState({hover: true})
    handelMouseLeave = () => this.setState({hover: false})

    render() {
        let {state} = this;
        
        return(
            <div>
               { state.type === typeProfile.button ?
                    <Button
                        name={state.currentUser.name}
                        onMouseEnter={() => this.handelMouseEnter()}
                        onMouseLeave={() => this.handelMouseLeave()}
                    />
                    :
                    null
               }
                {
                    state.hover && 
                    <div className='card-profile'>
                        <Card>
                            <CardHeader>
                                {state.currentUser.name}
                            </CardHeader>
                        </Card>
                    </div>
                }
            </div>
            
        )

    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(
    mapStateToProps,
    null
)(ButtonProfileContainer);