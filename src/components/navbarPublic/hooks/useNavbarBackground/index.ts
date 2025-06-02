/**
 * useNavbarBackground
 * Changes navbar background based on scroll position.
 *
 * @returns {hasBackground} - true if scroll position > 0, false if at top
 */

import type { UseNavbarBackgroundResult } from '@components/navbarPublic/hooks/useNavbarBackground/types';
import { useEffect, useState } from 'react';


export const useNavbarBackground = (): UseNavbarBackgroundResult => {
    const [hasBackground, setHasBackground] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            const isScrolled = window.scrollY > 0;
            setHasBackground(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        // Check initial position in case the page is already scrolled
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return { hasBackground };
};
