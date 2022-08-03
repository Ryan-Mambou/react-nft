import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import NavbarDesktop from './Components/NavbarDesktop';
import Content from './Components/Content';
import NavbarMobile from './Components/NavbarMobile';

function App() {
  return (
    <div className='App'>
    <NavbarDesktop />
    <NavbarMobile />
    <Content />
    </div>
  );
}

export default App;
