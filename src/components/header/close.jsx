import React, { useEffect } from 'react'

export default function Close(ref, handler) {
    // close mobile nav menu when clicked outside of it //
    useEffect(() => {
        const listener = event => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    },
        [ref, handler],
    );
    return 
}
