import dogmoney from '../assets/dogmoney.png';

const Home = () => {
  return (
    <div style={{ margin: 50 }}>
      <h1>Welcome to Sequoia FinInvest App</h1>
      <img style={{ width: 800 }} src={dogmoney} alt='dog money' />
    </div>
  );
};

export default Home;
