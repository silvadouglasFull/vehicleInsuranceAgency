
import { Context } from '@components/forms/contactUs/context';
import type { FormContextType } from '@components/forms/contactUs/context/types';
import { useContext } from 'react';

/**
 * Custom hook to access theme context.
 * @returns Context
 */
export const useContactUs = (): FormContextType => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
