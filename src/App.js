import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';

//IMPORT ROUTES FROM PAGES
import Home from './Pages/Home';
import Index from './Pages/Index';
import New from './Pages/New';
import Show from './Pages/Show';
import Edit from './Pages/Edit';
import ErrorPage from './Pages/ErrorPage';

const App = () => {
  return (
    <div className='App'>
      <NavBar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/transactions' element={<Index />} />
          <Route path='/transactions/new' element={<New />} />
          <Route path='/transactions/:index/edit' element={<Edit />} />
          <Route path='/transactions/:index' element={<Show />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
