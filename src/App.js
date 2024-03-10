import logo from './logo.svg';
import './App.css';
import TimerFunc from './Timer/timer'
function App() {
  return (
    <div className="App">
      
<TimerFunc timerInsec={10} widthPercentage={20} ></TimerFunc>
    </div>
  );
}

export default App;
