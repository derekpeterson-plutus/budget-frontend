import { useState, useEffect } from 'react';
import axios from 'axios';
import Transaction from './Transaction';
import '../Style/Transactions.css';

//REACT API TO RETRIEVE DATA FROM BACKEND
const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    setTotalAmount(
      transactions.reduce((acc, ele) => (acc += Number(ele.amount)), 0)
    );
  }, [transactions]);

  const changeAmountColor = (amount) => {
    return amount > 1000 ? 'green' : amount >= 0 ? 'yellow' : 'red';
  };

  return (
    <section className='transactions'>
      <h2>
        Bank Account Total:{' '}
        <span className={changeAmountColor(totalAmount)}>{totalAmount}</span>
      </h2>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Date</th>
            <th scope='col'>Transaction Name</th>
            <th scope='col'>Amount(in USD)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => {
            return (
              <Transaction
                transaction={transaction}
                key={index}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default Transactions;
