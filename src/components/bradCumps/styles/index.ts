import type { Style } from "@components/bradCumps/types";

export const styles: Style = {
    section: {
        top: 0,
        width: '100vh',
        height: '50vh',
        position: 'relative',
    }
}

export const stylesDesktop: Style = {
    section: {
        ...styles,
        height: '30vh',
    }
}
export const stylesLargeDesktop: Style = {
    section: {
        ...styles,
        height: '60vh',
    }
} 