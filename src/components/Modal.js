import React from "react";
import "../style/modal.css";

/**
 * Modal Component
 * @returns {JSX} React component
 */

function Modal({ text, handleModal }) {
	return (
		<div className="modal__background" onClick={handleModal}>
			<div className="modal__box" onClick={e => e.stopPropagation()}>
				<button className="modal__button" onClick={handleModal}>X</button>
				<p className="modal__text">{text}</p>
			</div>
		</div>
	);
}

export default Modal;
