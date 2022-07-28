import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../Style/TransactionNewForm.css';

//REACT API TO RETRIEVE DATA FROM BACKEND
const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const [transaction, setTransaction] = useState({
    item_name: '',
    amount: 0,
    date: '',
    from: '',
    category: '',
    type: '',
  });

  const navigate = useNavigate();

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API}/transactions`, newTransaction)
      .then(() => {
        navigate(`/transactions`);
      })
      .catch((e) => console.error('catch', e));
  };

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTransaction(transaction);
  };

  return (
    <section className='new_form'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            value={transaction.date}
            type='date'
            onChange={handleTextChange}
            className='form-control'
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor='item_name'>Name</label>
          <input
            id='item_name'
            value={transaction.item_name}
            type='text'
            onChange={handleTextChange}
            className='form-control'
            placeholder='transaction name...'
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor='amount'>Amount</label>
          <input
            id='amount'
            value={transaction.amount}
            type='number'
            onChange={handleTextChange}
            className='form-control'
            placeholder='.....'
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor='from'>From</label>
          <input
            id='from'
            value={transaction.from}
            type='text'
            onChange={handleTextChange}
            className='form-control'
            placeholder='.....'
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor='category'>Category</label>
          <input
            id='category'
            value={transaction.category}
            type='text'
            onChange={handleTextChange}
            className='form-control'
            placeholder='.....'
            required
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor='type'>Type</label>
          <input
            id='type'
            value={transaction.type}
            type='text'
            onChange={handleTextChange}
            className='form-control'
            placeholder='.....'
            required
          ></input>
        </div>
        <br />
        <input
          style={{
            backgroundColor: 'lightgreen',
            fontSize: 18,
            height: 30,
            width: 150,
          }}
          name='submit'
          type='submit'
          value='Add transaction'
        />
      </form>

      <button
        style={{
          margin: 20,
          backgroundColor: 'transparent',
          border: 'none',
          fontSize: 20,
        }}
      >
        <Link to='/transactions'>Go Back</Link>
      </button>
    </section>
  );
}

export default TransactionNewForm;
