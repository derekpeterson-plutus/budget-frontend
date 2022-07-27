import errorpage from '../assets/errorpage.png';

function ErrorPage() {
  return (
    <div>
      <h1 style={{ color: 'red', margin: 50 }}>
        You're Busted!!! Page Not Found!!! Click The Home Icon To Go Back!
      </h1>
      <img src={errorpage} alt='Error 404' />
    </div>
  );
}

export default ErrorPage;
