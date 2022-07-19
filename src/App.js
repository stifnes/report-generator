import './App.css';
import SidebarComponent from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <SidebarComponent/>
      <Main/>
    <Footer/>
    </div>
  );
}

export default App;
