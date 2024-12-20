import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';
import Button from '../../../components/UI/Button/Button';
import "./DeleteModal.scss"

const DeleteModal = ({ showModal, setShowModal, deletePost }) => {

    const handleClose = () => setShowModal(false)
    return (
        <>
            <Modal
              show={showModal}
              onHide={handleClose}
              className='delete-modal'
              centered
              backdrop="static"
            >
                <Modal.Header closeButton>
                  <Modal.Title>Delete Post Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>Are you sure you want to delete this post?</p>
                </Modal.Body>
                <Modal.Footer>
                   <Button
                        name={"Cancel"}
                        shape="oval"
                        className="center pointerCursor min-width80 no-bg"
                        disabled={false}
                        onClick={handleClose} />
                    <Button
                        name={"Confirm"}
                        shape="oval"
                        className="center pointerCursor min-width80"
                        disabled={false}
                        onClick={deletePost} />
                </Modal.Footer>
            </Modal>
        </>
    );
};

DeleteModal.propTypes = {
    deletePost: PropTypes.func,
    showModal: PropTypes.bool,
    setShowModal: PropTypes.func
}

export default DeleteModal;