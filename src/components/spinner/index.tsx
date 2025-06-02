import type React from 'react';
import { Spinner as ReactBootstrapSpinner } from 'react-bootstrap';

export const Spinner: React.FC = () => {
    return (
        <ReactBootstrapSpinner animation="grow" role="status">
            <p></p>
        </ReactBootstrapSpinner>
    );
}