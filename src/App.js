import './App.css';
import Button from './components/button/Button';

function App() {
  return (
      <div className="App">
          <Button onClick={() => console.log('Hello')}>
              <div className='default'>
                Default
              </div>
          </Button>
      </div>
  );
}

export default App;
