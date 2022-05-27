import React, {useState, useEffect} from 'react'
import EmptyTray from '../../components/EmptyTray/EmptyTray'
import Navigation from '../../components/Navigation/Navigation'
import TrayWithItems from '../../components/TrayWithItems/TrayWithItems'
import { connect } from 'react-redux'

const Tray = ({cartItems}) => {

  const [istrayEmpty, setIsTrayEmpty] = useState(true)

  
    useEffect(() => {
      
          if (cartItems.length > 0) {
            setIsTrayEmpty(false)
        }
          else {
          setIsTrayEmpty(true)   
        }
      
    }, [cartItems.length])


    return (
      <div>
            <Navigation />
           {istrayEmpty ? <EmptyTray /> : <TrayWithItems /> } 
      </div>
  )
}

const mapStateToProps = (state) => ({
    cartItems: state.cartItems
})


export default connect(mapStateToProps)(Tray)