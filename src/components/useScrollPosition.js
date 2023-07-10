import { useEffect, useState } from 'react'

export const useScrollPosition = () => {

   const [scrollPosition, setPosition] = useState(0)

   useEffect(() => {
    function updatePosition() {
        setPosition(window.scrollY)
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
   }, [])

   return scrollPosition
}