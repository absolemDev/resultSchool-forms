import React from "react";
import Button from "react-bootstrap/Button";
import ModalBootstrap from "react-bootstrap/Modal";
import PropTypes from "prop-types";

const Modal = ({ show, onClose, body }) => {
  return (
    <ModalBootstrap show={show} onHide={onClose} centered>
      <ModalBootstrap.Body>{body}</ModalBootstrap.Body>
      <ModalBootstrap.Footer>
        <Button variant="primary" onClick={onClose}>
          Закрыть
        </Button>
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  );
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  body: PropTypes.string.isRequired,
};

export default Modal;
