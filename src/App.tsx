
import './App.css';
import Header from "../src/Components/Header";
import Footer from './Components/Footer';
import Container from './Components/Container';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
      <div className="row">
        <Header/>
      </div>
      <div className="container">
        <div className="row">
          <Container/>
        </div>
      </div>
      <div className="row">
          <Footer/>
      </div>
    </>
  );
}

export default App;
