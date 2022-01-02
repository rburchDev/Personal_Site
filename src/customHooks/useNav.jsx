import { useRef, useEffect, useContext } from 'react';
import { useOnScreen } from './useOnScreen';
import { NavContext } from '../Context/NavContext';

export const useNav = navLinkId => {
    const ref = useRef(null);

    const { setActiveNavLinkId } = useContext(NavContext);

    const isOnscreen = useOnScreen(ref);

    useEffect(() => {
        if (isOnscreen) {
            setActiveNavLinkId(navLinkId);
        }
    }, [isOnscreen, setActiveNavLinkId, navLinkId]);

    return ref;
};