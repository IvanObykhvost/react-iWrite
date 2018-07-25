import React from 'react';
// import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import Button from '../../Form/Buttons/Button';

// Modal.setAppElement('#root');

export default function Popup({ isOpen, title, children, onClose}){
    
    return(
        <Modal show={isOpen} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Text in a modal</h4>
                <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    name="Close"
                    color="primary"
                    onClick={onClose}
                />
          </Modal.Footer>
        </Modal>
    )
    // return(
    //     <div>
    //         <Modal
    //             isOpen={isOpen}
    //             onRequestClose={onClose}
    //             contentLabel={contentLabel}
    //             className="modal-popup"
    //             overlayClassName="modal-overlay"
    //         >
    //         {children}
    //         <Button
    //             name="Close"
    //             bsStyle="primary"
    //             onClick={onClose}
    //         />
    //         </Modal>
    //     </div>
    // );
}

Popup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.object,
    onClose: PropTypes.func.isRequired
}