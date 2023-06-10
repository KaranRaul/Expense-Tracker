import React, { useContext, useState } from 'react'

import { GlobalContext } from '../context/GlobalState';


const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);

    const submit = e => {

        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        const a = document.getElementsByClassName('txt').setText = '';
        console.log(a);
    }
    return (
        <>
            <form onSubmit={submit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" className='txt' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter Text .. ' />

                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense,positive - income)
                    </label>
                    <input type="number" className='num' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' />

                </div>
                <button type='submit' className="btn">Add Transaction</button>
            </form>
        </>
    )
}

export default AddTransaction
