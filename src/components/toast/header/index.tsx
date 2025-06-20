import { Icon } from '@components/icons';
import { logo } from "@flavor/assets";
import { nameFlavor } from '@flavor/index';
import { getTimeInHoursMinutes } from '@utils/date';

import type React from "react";

export const ToastHeader: React.FC = () => {
    return (
        <div className='d-flex justify-content-between align-items-center w-100'>
            <div>
                <img
                    src={logo}
                    className="rounded me-2"
                    alt={`Logo da ${nameFlavor}`}
                    style={{
                        width: 100
                    }}
                />
            </div>
            <div>
                <small className='d-flex d-flex-nowrap align-items-center'><Icon name='fa-solid fa-clock' /> {getTimeInHoursMinutes()}</small>
            </div>
        </div>
    )
}