// import React , {useEffect, useState} from 'react'
// import { useLocation } from 'react-router-dom'

// function MaybeShowFooter({children}) {
//     const location = useLocation()
//     const [showFooter, setShowFooter] = useState(false)
//     useEffect(() => {
//         console.log('This is location', location)
//         if(location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forgotPassword'){
//             setShowFooter(false)
//         }else{
//             setShowFooter(true)
//         }
//     }, [location])
    
//   return (
//     <div>{ showFooter && children}</div>
//   )
// }

// export default MaybeShowFooter