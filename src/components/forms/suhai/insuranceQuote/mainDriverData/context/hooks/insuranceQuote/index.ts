
import { Context } from '@components/forms/suhai/insuranceQuote/mainDriverData/context';
import type { FormContextType } from '@components/forms/suhai/insuranceQuote/mainDriverData/context/types';
import { useContext } from 'react';

/**
 * Custom hook to access theme context.
 * @returns Context
 */
export const useInsuranceQuote = (): FormContextType => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('main driver data context must be used within a Provider');
    }
    return context;
};
