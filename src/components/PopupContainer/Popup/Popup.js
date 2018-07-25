import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalHeader, ModalBody, ModalFooter  } from 'reactstrap';
import Button from '../../Form/Buttons/Button';


export default function Popup({ isOpen, isButtonClose, title, children, onClose}){
    
    return(
        <Modal isOpen={isOpen} centered toggle={onClose}>
            <ModalHeader toggle={onClose}>
                {title}
            </ModalHeader >
            <ModalBody className="centered">
                {children}
            </ModalBody>
            {
                isButtonClose && 
                    <ModalFooter>
                        <Button
                            name="Close"
                            color="primary"
                            onClick={onClose}
                        />
                    </ModalFooter>
            }
            
        </Modal>
    )
}

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    isButtonClose: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.object,
    onClose: PropTypes.func.isRequired
}