// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Paper, Typography, Box } from "@mui/material";
// import Base from "../../Base/Base";

// const CustomerDetailsPage = () => {
//     const { id } = useParams(); // Assuming 'id' is the parameter used to fetch customer details
//     const [customer, setCustomer] = useState(null);
//     const [error, setError] = useState("");

//     useEffect(() => {
//         const fetchCustomerDetails = async () => {
//             if (!id) {
//                 setError("No customer ID provided.");
//                 return;
//             }

//             try {
//                 const token = localStorage.getItem("token");
//                 if (!token) {
//                     setError("No authentication token found.");
//                     return;
//                 }

//                 const res = await fetch(`https://crm-server-l94c.onrender.com/api/customers/${id}`, {
//                     method: "GET",
//                     headers: {
//                         "x-auth-token": token,
//                         "Content-Type": "application/json"
//                     }
//                 });

//                 if (!res.ok) {
//                     throw new Error(`HTTP error! status: ${res.status}`);
//                 }

//                 const data = await res.json();
                
//                 if (data.data) {
//                     setCustomer(data.data);
//                 } else {
//                     setError(data.message || "No customer data available");
//                 }
//             } catch (err) {
//                 setError(err.message || "An error occurred while fetching customer details.");
//             }
//         };

//         fetchCustomerDetails();
//     }, [id]);

//     return (
//         <div className="CustomerDetails-container">
//             <Base>
//                 {customer ? (
//                     <Paper
//                         className="customer-details-paper"
//                         elevation={6}
//                         sx={{
//                             padding: '16px',
//                             marginBottom: '16px',
//                             backgroundColor: '#f0f0f0',
//                             border: '1px solid #ddd',
//                             borderRadius: '8px',
//                         }}
//                     >
//                         <Box sx={{ mb: 2, textAlign: 'center' }}>
//                             <img
//                                 src={customer.Image || 'default-pic-url'} // Use 'customer.Image' for picture URL
//                                 alt={customer.Firstname || 'No name'}
//                                 style={{ width: '150px', height: '150px', borderRadius: '50%' }}
//                             />
//                         </Box>
//                         <Typography variant="h6">First name: {customer.Firstname}</Typography>
//                         <Typography variant="body1">Nickname: {customer.NickName}</Typography>
//                         <Typography variant="body1">Number: {customer.Number}</Typography>
//                         {/* Uncomment this if the Email field is available in the response */}
//                         {/* <Typography variant="body1">Email: {customer.Email}</Typography> */}
//                         <Typography variant="body1">Age: {customer.Age}</Typography>
//                         <Typography variant="body1">Gender: {customer.Gender}</Typography>
//                         <Typography variant="body1">Address: {customer.Address}</Typography>
//                         <Typography variant="body1">City: {customer.City}</Typography>
//                         <Typography variant="body1">State: {customer.State}</Typography>
//                         <Typography variant="body1">Pincode: {customer.Pincode}</Typography>
//                         <Typography variant="body1">Posted by: {customer.user ? customer.user.name : 'Unknown User'}</Typography>
//                     </Paper>
//                 ) : (
//                     <Typography>{error ? error : "Loading customer details..."}</Typography>
//                 )}
//             </Base>
//         </div>
//     );
// };

// export default CustomerDetailsPage;
