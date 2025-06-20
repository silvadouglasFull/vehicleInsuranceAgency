import { ChildrenModal } from '@components/privacyPolicy/modal/childrenModal';
import type { ModalProps } from '@components/privacyPolicy/modal/types';
import { privaciPolicy } from "@flavor/texts/privaciPolicy";
import type React from 'react';
import Modal from 'react-bootstrap/Modal';
const ModalPrivaciPolicy: React.FC<ModalProps> = ({ title, onHide, show }: ModalProps) => {

    return (
        <Modal size='lg' show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ChildrenModal {...privaciPolicy} />
            </Modal.Body>
        </Modal>
    );
}

export default ModalPrivaciPolicy;