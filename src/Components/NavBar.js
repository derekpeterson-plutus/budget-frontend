import { Link } from 'react-router-dom';
import { ImHome } from 'react-icons/im';
import { BsTree } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa';
import { AiOutlineTransaction } from 'react-icons/ai';
import '../Style/NavBar.css';

function NavBar() {
  return (
    <nav>
      <Link to='/' style={{ textDecoration: 'none' }}>
        <h1 className='app_name'>
          Sequoia FinInvest <BsTree />
        </h1>
      </Link>

      <Link to='/'>
        <div className='home'>
          <ImHome />
        </div>
      </Link>
      <Link to='/transactions'>
        <div className='show_transactions'>
          <AiOutlineTransaction />
        </div>
      </Link>
      <Link to='/transactions/new'>
        <div className='new_transaction'>
          <FaDollarSign />
        </div>
      </Link>
    </nav>
  );
}

export default NavBar;
