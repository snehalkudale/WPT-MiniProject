import React , {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'

function MaybeShowNavBar({children}) {
    const location = useLocation()
    const [showNavBar, setShowNavBar] = useState(false)
    useEffect(() => {
        console.log('This is location', location)
        if(location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forgotPassword'){
            setShowNavBar(false)
        }else{
            setShowNavBar(true)
        }
    }, [location])
    
  return (
    <div>{ showNavBar && children}</div>
  )
}

export default MaybeShowNavBar