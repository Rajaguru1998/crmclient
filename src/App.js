// // import './App.css';
// // import { Route, Routes } from 'react-router-dom';
// // import Customersdetail from './Components/homepage/CustomerDetail';
// // import LoginPage from './Components/LoginPage';
// // // import Addcontacts from './Components/Addcontacts';
// // // import Contactdetail from './components/Contactdetail';
// // import Addcustomers from './Components/homepage/Addcustomers';
// // import EditPage from './Components/EditCustomer';
// // import UserPage from './Components/UserPage';
// // import { useState } from 'react';
// // import SignupPage from './Components/SignupPage';
// // // import Contactdetail from './Components/homepage/ContactDetail';

// // function App() {
// //   const [userData, setUserData] = useState([]);
// //   return (
// //     <div className="App">
// //       <Routes>

// //         <Route exact path="/"
// //           element={<Customersdetail />} />

// //         <Route path="/login"
// //           element={<LoginPage />}
// //         />

// //         <Route path="/signup"
// //           element={<SignupPage />}
// //         />

// //         <Route path="/add/:token"
// //           element={<Addcustomers
// //             userData={userData}
// //             setUserData={setUserData} />}
// //         />

// //         <Route path="/edit/:id/:token"
// //           element={<EditPage
// //             userData={userData}
// //             setUserData={setUserData}
// //           />}
// //         />

// //         <Route path="/user"
// //           element={<UserPage
// //             userData={userData}
// //             setUserData={setUserData}
// //           />}
// //           />
// //           {/* <Route path="/addContacts/:token"
// //           element={<Addcontacts
// //             userData={userData}
// //             setUserData={setUserData} />}
// //         />
// //           <Route path="/Contactdetail/:token"
// //           element={<Contactdetail
// //             userData={userData}
// //             setUserData={setUserData} />}
// //         /> */}

// //       </Routes>
// //     </div>
// //   );
// // }

// // export default App;




// import './App.css';
// import { Route, Routes } from 'react-router-dom';
// import Customersdetail from './Components/homepage/CustomerDetail';
// import LoginPage from './Components/LoginPage';
// import Addcustomers from './Components/homepage/Addcustomers';
// import EditPage from './Components/EditCustomer';
// import UserPage from './Components/UserPage';
// import SignupPage from './Components/SignupPage';
// import CustomerDetails from './Components/homepage/CustomerDetailsPage';
// import { useState } from 'react';


// function App() {
//   const [userData, setUserData] = useState([]);

//   return (
//     <div className="App">
//       <Routes>
//         <Route exact path="/" element={<Customersdetail />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/signup" element={<SignupPage />} />
//         <Route path="/add/:token" element={<Addcustomers userData={userData} setUserData={setUserData} />} />
//         <Route path="/edit/:id/:token" element={<EditPage userData={userData} setUserData={setUserData} />} />
//         <Route path="/user" element={<UserPage userData={userData} setUserData={setUserData} />} />
//         <Route path="/customer-details/:id" element={<CustomerDetails />} /> {/* Add this route */}
//       </Routes>
//     </div>
//   );
// }

// export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import Customersdetail from './Components/homepage/CustomerDetail';
import LoginPage from './Components/LoginPage';
import Addcustomers from './Components/homepage/Addcustomers';
import EditPage from './Components/EditCustomer';
import UserPage from './Components/UserPage';
import SignupPage from './Components/SignupPage';
import CustomerDetails from './Components/homepage/CustomerDetailsPage'; // Ensure this path is correct
import { useState } from 'react';

function App() {
  const [userData, setUserData] = useState([]); // Ensure this line is correctly written and placed

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Customersdetail />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/add/:token" element={<Addcustomers userData={userData} setUserData={setUserData} />} />
        <Route path="/edit/:id/:token" element={<EditPage userData={userData} setUserData={setUserData} />} />
        <Route path="/user" element={<UserPage userData={userData} setUserData={setUserData} />} />
        <Route path="/customer-details/:id" element={<CustomerDetails />} /> {/* Ensure this path is correct */}
        {/* <Route path="/customer-details/:id" element={<customerDetailsPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;

