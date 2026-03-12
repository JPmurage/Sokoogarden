import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router ,Routes,Route,Link} from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import MpesaPayment from './components/MpesaPayment';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';

function App() {
    

  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <h1 className='text-warning'>Sokogarden-Buy and sell online</h1>
      </header>
<nav>

<Link to="/signup" >Sign Up</Link>
<Link to="/signin">Sign In</Link>
<Link to="/getproducts">Get Products</Link>

<Link to="/addproducts">Add Products</Link>



</nav>


<Routes>

<Route path='/signup'   element={<SignUp/>} ></Route>
<Route path='/signin'   element={<SignIn/>} ></Route>
<Route path='/addproducts'   element={<AddProducts/>} ></Route>
<Route path='/mpesapayment'   element={<MpesaPayment/>} ></Route>
<Route path='/getproducts'   element={<GetProducts/>} ></Route>



    </Routes>

    </div>

   </Router>
  );
}

export default App;
