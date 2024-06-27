import React, { useContext, useState } from 'react';
import 'react-dropdown/style.css';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {  currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }
    return(
        <div>

            <select onChange={handleCurrencyChange}>
    
                <option value={'$'}>$ Dollar</option>
        
                <option value={'£'}>£ Pound</option>
        
                <option value={'€'}>€ Euro</option>

                <option value={'₹'}>₹ Rupee</option>
    
            </select>
   
        </div>
        //<Dropdown options={options} onChange={handleCurrencyChange} value={defaultOption} placeholder=""/> 
    );
}

export default Currency;