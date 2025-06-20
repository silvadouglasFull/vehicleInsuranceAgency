import type { ModalProps } from '@components/proposal/suhai/modal/proposal/types';
import type React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalQuote: React.FC<ModalProps> = ({ children, title, onHide, show }: ModalProps) => {
    return (
        <Modal size='lg' show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    );
}

export default ModalQuote;