import HeaderLinks from "./HeaderLinks"
import '../styles/Header.css'
import {useEffect, useRef } from "react"

const Header = ({setHeaderHeight}) => {
    const ref = useRef();
   
    useEffect(() => {
        if (ref.current) {
            setHeaderHeight(ref.current.clientHeight);
        }
    }, [setHeaderHeight])
    

    return (
        <div className="header" ref={ref}>
            <div className="main-title">Simran Bagaria</div>
            <HeaderLinks></HeaderLinks>
        </div>
    )
}

export default Header