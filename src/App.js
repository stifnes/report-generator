import './App.css';
import SidebarComponent from './components/Sidebar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <SidebarComponent/>
    <Header/>
      <Main/>
    <Footer/>
    </div>
  );
}

export default App;
