import React, {useState} from "react";
import "./styles.css"

const Modal = ({
                   title, isOpen, cancel, children,
               }) => {

    return (
        <>
        { isOpen &&
        <div className="modalOverlay">
            <div className="modalWindow">
                <div className="modalHeader">
                    <div className="modalTitle">{title}</div>
                </div>
                <div className="modalBody">
                    {children}
                </div>
                <div className="modalFooter">
                    <button onClick={cancel}>Cancel</button>
                </div>
            </div>
        </div>
        }
        </>
    );
};

export default Modal;