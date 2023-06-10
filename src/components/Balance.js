import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
const Balance = () => {
    const { transaction } = useContext(GlobalContext);
    const amount = transaction.map(t => t.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your Blalance</h4>
            <h1 id="balance">${total}</h1>
        </>
    )
}

export default Balance
