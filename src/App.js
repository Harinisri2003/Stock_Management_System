
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Pricing from './components/Pricing/Pricing';
import PartiesPage from './components/Parties/Parties';
import ProductsPage from './components/Stock/Stock';
import Footer from './components/Footer/Footer';
import Invoice from './components/Invoice/Invoice';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route
      path='/'
      element={
        <>
          <Header />
          <Home />
        </>
              }
        />
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route 
        path='/pricing'
        element={
          <>
          <Header></Header>
          <Pricing/>
          </>
        }
        />
        <Route 
        path='/parties'
        element={
          <>
          <Header></Header>
          <PartiesPage/>
          </>
        }
        />
        <Route 
        path='/stock'
        element={
          <>
          <Header></Header>
          <ProductsPage/>
          </>
        }
        />
        <Route 
        path='/invoice'
        element={
          <>
          <Header></Header>
          <Invoice/>
          </>
        }
        />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
