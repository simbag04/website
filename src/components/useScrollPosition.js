import { useLayoutEffect, useState } from 'react'

export const useScrollPosition = () => {

   const [scrollPosition, setPosition] = useState(0)

   useLayoutEffect(() => {
    function updatePosition() {
        console.log("here")
        setPosition(window.scrollY)
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
   }, [])

   return scrollPosition
}