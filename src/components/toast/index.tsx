import { useSetVariant } from '@components/toast/hooks/useSetVariant';
import type { ToastProps } from '@components/toast/types';
import { ToastContainer, Toast as ToastReactBootstrap } from 'react-bootstrap';
import { ToastHeader } from './header';
export const Toast: React.FC<ToastProps> = ({ statusCode, message, show, onclose }: ToastProps) => {
    const { variant } = useSetVariant({ statusCode })
    const handleClose = () => {
        if (onclose) {
            onclose();
        }
    }
    return (
        <ToastContainer
            style={{
                zIndex: 9999,
                position: 'fixed',
                top: 0,
                right: 0,
            }}
        >
            {typeof message === 'string' && (
                <ToastReactBootstrap
                    show={show}
                    delay={3000}
                    autohide
                    onClose={handleClose}
                    className="d-inline-block m-1"
                    bg={variant}
                >
                    <ToastReactBootstrap.Header closeButton={false}>
                        <ToastHeader />
                    </ToastReactBootstrap.Header>
                    <ToastReactBootstrap.Body className={'text-white'}>
                        {message}
                    </ToastReactBootstrap.Body>
                </ToastReactBootstrap>
            )}
            {Array.isArray(message) && (
                message.map((item, i) => (
                    <ToastReactBootstrap
                        key={i}
                        show={show}
                        delay={3000}
                        autohide
                        onClose={handleClose}
                        className="d-inline-block m-1"
                        bg={variant}
                    >
                        <ToastReactBootstrap.Header closeButton={false}>
                            <ToastHeader />
                        </ToastReactBootstrap.Header>
                        <ToastReactBootstrap.Body className={'text-white'}>
                            {item}
                        </ToastReactBootstrap.Body>
                    </ToastReactBootstrap>
                ))
            )}
        </ToastContainer>
    );
}
