import './App.css';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import Ngenilife  from './components/ngeni-life';

function App() {
  return (
    <BrowserRouter>
      <header className="header-link">
        Welcome to nGeni Life
        </header>
    <div className="App">
      <Ngenilife />
     </div>
  </BrowserRouter>
  );
}
export default App;
