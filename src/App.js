import logo from './logo.svg';
import './App.css';
import Reg from './component/Reg';
import Login from './component/Login';
import AppBar from './component/AppBar';

function App(store) {
  function Page() {
    switch (store.getState()) {
      case "Login":
        return (<div><Login /></div>);
      case "Reg":
        return (<div><Reg /></div>);
      default:
        return null;
    }
  }
  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>placement management system</p>
       
      </header>
      <div className="App-body"> 
      <AppBar  store={store}/>
      <Page/>
        </div>
    </div>
  );
}

export default App; 

