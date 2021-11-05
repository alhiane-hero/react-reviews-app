import Reviews from './components/Reviews';
import './sass/all.scss';

function App() {
  return (
    <div className="App">
      <div className='Heading'>
        <h2>Our Reviews</h2>
        <div className='UnderLine'></div>
      </div>
      <Reviews />
    </div>
  );
}

export default App;
