import React from 'react';
import { useGlobalContext } from './context';
import {GiShoppingCart} from 'react-icons/gi';

const Navbar = () => {
  const {amount} =useGlobalContext();

  return (
    <nav>
      <div className='nav-center'>
        <h3>useReducer</h3>
        <div className='nav-container'>
            <GiShoppingCart/>
          <div className='amount-container'>
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
