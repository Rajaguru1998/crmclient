import './App.css';
import { Route, Routes } from 'react-router-dom';
import Customersdetail from './Components/CustomerDetail';
import LoginPage from './Components/LoginPage';
// import Addcustomers from './Components/AddCustomers ';
import Addcustomers from './Components/Addcustomers';
import EditPage from './Components/EditCustomer';
import UserPage from './Components/UserPage';
import { useState } from 'react';
import SignupPage from './Components/SignupPage';

function App() {
  const [userData, setUserData] = useState([]);
  return (
    <div className="App">
      <Routes>

        <Route exact path="/"
          element={<Customersdetail />} />

        <Route path="/login"
          element={<LoginPage />}
        />

        <Route path="/signup"
          element={<SignupPage />}
        />

        <Route path="/add/:token"
          element={<Addcustomers
            userData={userData}
            setUserData={setUserData} />}
        />

        <Route path="/edit/:id/:token"
          element={<EditPage
            userData={userData}
            setUserData={setUserData}
          />}
        />

        <Route path="/user"
          element={<UserPage
            userData={userData}
            setUserData={setUserData}
          />}
        />

      </Routes>
    </div>
  );
}

export default App;