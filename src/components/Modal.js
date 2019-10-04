import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { List } from "react-virtualized";
import '../styles/modal.scss';


function Modal() {

    const [showModal, setShow] = useState(false);

    let toggle = () => {
        setShow(!showModal);
    }

    return (
        <React.Fragment>
            {
                !showModal && <button className="button-default" onClick={toggle}>Show Modal</button>
            }
            {
                showModal &&
                    <div className="modal-overlay">
                        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                            <div className="modal">
                                <div className="modal-header">
                                    <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <p>
                                   Modal window content
                                </p>
                            </div>
                        </div>
                    </div>
            }
        </React.Fragment>

    );
}

export default Modal;