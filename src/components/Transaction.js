import React, { Component, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';


export const Transaction = ({ t }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = t.amount < 0 ? '-' : '+';
    return (
        <li className={sign === '+' ? 'plus' : 'minus'}>
            {t.text}<span>{sign}${Math.abs(t.amount)}</span><button onClick={() => deleteTransaction(t.id)} className='delete-btn'>x</button>
        </li>
    )
}


export default Transaction
