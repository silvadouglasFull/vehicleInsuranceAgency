import type React from 'react';
import { Spinner as ReactBootstrapSpinner, type SpinnerProps } from 'react-bootstrap';

export const Spinner: React.FC<SpinnerProps> = ({ animation, ...rest }: SpinnerProps) => {
    return (
        <ReactBootstrapSpinner size='sm' animation={animation ?? "grow"} role="status" {...rest}>
            <p></p>
        </ReactBootstrapSpinner>
    );
}