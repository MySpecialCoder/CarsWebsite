import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Main heading="Check Out Our Cars" />
      <Footer />
    </>
  );
}

export default App;
