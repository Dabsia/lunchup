import React, {useContext} from 'react';
import './EmptyTray.css';
import AuthContext from '../../store/auth-context';
import No_food from '../../assets/no-food-available 2.png'
import { useNavigate } from 'react-router-dom';

const EmptyTray = () => {

    const Navigate = useNavigate()

    const authCtx = useContext(AuthContext)

    const trayRedirect = () => {
        if (authCtx.isLoggedIn === true) {
            Navigate('/shop')
        }
        else {
            Navigate('/signin')
        }
        
    }



  return (
      <div className='emptyTray'>
          <div className='emptyBox'>
                <img src={No_food} alt = 'empty cart' className='no-food' />
              <p className='emptyText'>It seems you do not  have any food on your tray</p>
          </div>
          
            <button onClick={trayRedirect} className='createTrayBtn'>Create Your Tray</button>
          
      </div>
  )
}

export default EmptyTray