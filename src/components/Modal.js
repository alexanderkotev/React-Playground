import React, { useState } from 'react';
import '../styles/modal.scss';


function Modal() {

    const [showModal, setShow] = useState(false);

    let toggle = () => {
        setShow(!showModal);
    }

    return (
        <React.Fragment>
            {
                !showModal && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={toggle}>Show Modal</button>
            }
            {
                showModal &&
                    <div className="modal-overlay">
                        <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
                            <div className="modal">
                                <div className="modal-header">
                                    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-dismiss="modal" aria-label="Close" onClick={toggle}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <p className='text-grey-500 text-lg'>
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