import './App.css';
import Header from './component/navbar/header';
import Home from "./views/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from "./component/footer/footer";
// import 'antd/dist/antd.css';
import Service from "./views/service";
import Contact from "./views/contact";
import Team from "./views/team";
import About from "./views/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App" style={{overFlow:"hidden"}}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/team" element={<Team/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
