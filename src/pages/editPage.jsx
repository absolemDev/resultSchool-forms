import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import EditForm from "../components/edit-form/editForm";
import Modal from "../components/modal";

function EditPage() {
  const [showModal, setShowModal] = useState(false);
  const [ModalBody, setBodyModal] = useState("");
  const history = useHistory();
  const handleShowModal = (body) => {
    setShowModal(true);
    setBodyModal(body);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    history.push("/");
  };
  return (
    <>
      <EditForm onShowModal={handleShowModal} />
      <Modal show={showModal} onClose={handleCloseModal} body={ModalBody} />
    </>
  );
}

export default EditPage;
