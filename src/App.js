import './App.css';
import { Route, Routes } from 'react-router-dom';
import Customerdetail from './Components/Customerdetail';
import LoginPage from './Components/LoginPage';
// import Addcustomers from './Components/AddCustomers ';
import Addcustomers from './Components/Addcustomers.js';

import EditPage from './Components/EditCustomres';
import UserPage from './Components/UserPage';
import { useState } from 'react';
import SignupPage from './Components/SignuPage';

function App() {
  const [userData, setUserData] = useState([]);
  return (
    <div className="App">
      <Routes>

        <Route exact path="/"
          element={<Customerdetail />} />

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