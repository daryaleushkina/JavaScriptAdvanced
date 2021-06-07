import React,{useEffect} from 'react';
import somePlugin from 'plugin'
export const Effect = () => {
    // what effect does
    useEffect(() => {
        const handler = () => {}
        document.addEventListener('click', handler)
        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    useEffect(function initPlugin() {
        somePlugin.init()

        return () => {
            somePlugin.destroy()
        }
    }, [])
    return <div></div>
}