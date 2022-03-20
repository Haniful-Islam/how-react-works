import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/watch/watch';

function App() {
  return (
    <div className="App" style={{ border: "5px solid lime", margin: '15px' }}>
      <Device name={'i-phone'} price="1500"></Device>
      {/* <Device name='Samsung Phone'></Device> */}
      <Watch></Watch>
    </div>
  );
}

export default App;
