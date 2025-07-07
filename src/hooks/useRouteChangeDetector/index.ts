import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook that detects when the user is about to:
 * - Close or reload the browser tab/window
 * - Navigate to the previous route
 *
 * @param onExit Callback function triggered on exit attempt
 */
export function useRouteChangeDetector(onExit: () => void) {
    const location = useLocation();


    useEffect(() => {
        let previousPath = location.pathname;

        const observer = new MutationObserver(() => {
            if (window.location.pathname !== previousPath) {
                onExit();
                previousPath = window.location.pathname;
            }
        });

        observer.observe(document, { subtree: true, childList: true });

        return () => {
            observer.disconnect();
        };
    }, [location.pathname, onExit]);
}
