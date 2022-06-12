import React, {useState, useEffect} from 'react'
import './Modal.css'
import EmptyTray from '../../components/EmptyTray/EmptyTray'
import TrayWithItems from '../../components/TrayWithItems/TrayWithItems'
import { connect } from 'react-redux'

const Modal = ({cartItems, CloseModal}) => {

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
        <div className='backDrop' >
            <div className='modalParent'>
                <div className='modalContainer'>
                    {istrayEmpty ? <EmptyTray /> : <TrayWithItems />} 
                    <button className='closeModal' onClick={() => CloseModal()}>X</button>
                </div>    
            </div>
        </div>
  )
}



const mapStateToProps = (state) => ({
    cartItems: state.cartItems
})


export default connect(mapStateToProps)(Modal)