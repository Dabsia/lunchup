import React, {useState, useEffect} from 'react'
import EmptyTray from '../../components/EmptyTray/EmptyTray'
import Navigation from '../../components/Navigation/Navigation'
import TrayWithItems from '../../components/TrayWithItems/TrayWithItems'


const Tray = () => {

  const [istrayEmpty, setIsTrayEmpty] = useState(true)

  
    useEffect(() => {
      setIsTrayEmpty(false)
    }, [])


    return (
      <div>
            <Navigation />
           {istrayEmpty ? <EmptyTray /> : <TrayWithItems /> } 
      </div>
  )
}

export default Tray