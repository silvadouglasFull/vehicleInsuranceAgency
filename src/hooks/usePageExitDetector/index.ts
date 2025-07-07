import { useEffect } from 'react';

/**
 * Hook that detects when the user is about to:
 * - Close or reload the browser tab/window
 * - Navigate to the previous route
 *
 * @param onExit Callback function triggered on exit attempt
 */
export function usePageExitDetector(onExit: () => void) {

    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            onExit();
            event.preventDefault();
            event.returnValue = '';
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [onExit]);
}
