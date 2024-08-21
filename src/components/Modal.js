// components/Modal.js
// import React from 'react';
// import '@styles/common/auth/modal.css'; // Ensure this path is correct

// const Modal = ({ show, handleClose, children }) => {
//     if (!show) {
//         return null;
//     }

//     return (
//         <div className="modal-overlay">
//             <div className="modal-content">
//                 <span className="close-button" onClick={handleClose}>&times;</span>
//                 {children}
//             </div>
//         </div>
//     );
// };

// export default Modal;


import React from 'react';
import '@styles/common/auth/modal.css'; // Ensure this path is correct

function Modal({ show, handleClose, url }) {
    if (!show) return null;

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h4>Share this link</h4>
                <input type="text" value={url} readOnly />
                <button onClick={() => navigator.clipboard.writeText(url)}>Copy Link</button>
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    );
}

export default Modal;
