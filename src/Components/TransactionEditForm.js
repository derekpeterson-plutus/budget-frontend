import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '../Style/TransactionEditForm.css';

//REACT API TO RETRIEVE DATA FROM BACKEND
const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  const { index } = useParams();

  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({
    item_name: '',
    date: '',
    amount: 0,
    from: '',
    category: '',
    type: '',
  });

  const updateTransaction = () => {
    axios
      .put(`${API}/transactions/${index}`, transaction)
      .then((response) => {
        setTransaction(response.data);
        navigate(`/transactions/${index}`);
      })
      .catch((error) => console.error('catch', error));
  };

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((response) => {
        setTransaction(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateTransaction(transaction);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className='edit_form'>
        <div>
          <label htmlFor='date'>Date</label>
          <input
            id='date'
            value={transaction.date}
            type='date'
            onChange={handleTextChange}
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
            required
          ></input>
        </div>
        <br />
        <input type='submit' value='Edit Transaction' />
      </form>
      <Link to={`/transactions/${index}`}>
        <button>Cancel</button>
      </Link>
    </section>
  );
}

export default TransactionEditForm;
