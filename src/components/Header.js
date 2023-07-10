import HeaderLinks from "./HeaderLinks"
import '../styles/Header.css'
import {useEffect, useRef } from "react"
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';

const Header = ({headerHeight, setHeaderHeight, aboutStart, projectsStart, contactStart}) => {
    const ref = useRef();
   
    useEffect(() => {
        if (ref.current) {
            setHeaderHeight(ref.current.clientHeight);
        }
    }, [setHeaderHeight])
    

    return (
        <div className="header" ref={ref}>
            <div className="main-title">Simran Bagaria</div>
            <HeaderLinks headerHeight={headerHeight}
                         aboutStart={aboutStart}
                         projectsStart={projectsStart}
                         contactStart={contactStart}></HeaderLinks>
            <Icon path={mdiMenu} size={1} />

        </div>
    )
}

export default Header