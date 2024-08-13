// import React, { useEffect, useState } from "react"
// import Base from "../../Base/Base"
// import { useNavigate } from "react-router-dom"
// import { Paper, Typography } from "@mui/material";
// const Customersdetail = () => {
//     const [customers, setCustomers] = useState([]);
//     const [error, setError] = useState("");
//     const navigate = useNavigate()
//     useEffect(() => {
//         if (!localStorage.getItem("token")) {
//             navigate("/login", { replace: true })
//         }
//         let token = localStorage.getItem("token")
//         const fetchAllData = async () => {
//                     const res =await fetch(`https://crm-server-l94c.onrender.com/api/customers/all`,{  
//                 method: "GET",
//                 headers: {
//                     "x-auth-token": token
//                 }
//             });
//             const data = await res.json()
//             if (!data.data) {
//                 setError(data.message)

//             }
//             setCustomers(data.data)
//             console.log(customers)
//         }
//         fetchAllData()
//     }, [navigate, customers])
//     return (
//         <div className=" Customers-container">
//             <Base>
//                 {customers && (
//                     <div className="customers-container">
//                         {customers?.map((data, index) => (
//                             <Paper
//                                 className="customers-paper"
//                                 elevation={6}
//                                 key={data._id}
//                                 sx={{
//                                     padding: '16px',
//                                     marginBottom: '16px',
//                                     backgroundColor: '#f0f0f0',
//                                     border: '1px solid #ddd',
//                                     borderRadius: '8px',
//                                  }}
//                             >
//                                 <p>First name: {data.Firstname}</p>
//                                 <p>Nickname: {data.NickName}</p>
//                                 <p>Number: {data.Number}</p>
//                                 {/* <p>Email: {data.Email}</p> */}
//                                 <p>Age: {data.Age}</p>
//                                 <p>Gender: {data.Gender}</p>
//                                 <p>Address: {data.Address}</p>
//                                 <p>City: {data.City}</p>
//                                 <p>State: {data.State}</p>
//                                 <p>Pincode: {data.Pincode}</p>
//                                 <p>Posted by: {data.user ? data.user.name : 'Unknown User'}</p>
                            
//                             </Paper>

//                         ))}
//                     </div>
//                 )}


//                 {error ?
//                     <Typography color={"danger"}>
//                         {error}
//                     </Typography> : ""}
//             </Base>
//         </div>
//     )
// }

// export default Customersdetail;


import React, { useEffect, useState } from "react";
import Base from "../../Base/Base";
import { useNavigate } from "react-router-dom";
import { Paper, Typography } from "@mui/material";


const Customersdetail = () => {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login", { replace: true });
        }
        let token = localStorage.getItem("token");
        const fetchAllData = async () => {
            const res = await fetch(`https://crm-server-l94c.onrender.com/api/customers/all`, {
                method: "GET",
                headers: {
                    "x-auth-token": token
                }
            });
            const data = await res.json();
            if (!data.data) {
                setError(data.message);
            } else {
                setCustomers(data.data);
            }
        };
        fetchAllData();
    }, [navigate]);

    return (
        <div className="Customers-container">
            <Base>
                {customers.length > 0 ? (
                    <div className="customers-container">
                        {customers.map((data) => (
                            <Paper
                                className="customers-paper"
                                elevation={6}
                                key={data._id}
                            >
                                {data.imageUrl && (
                                    <img
                                        src={data.imageUrl}
                                        alt={`${data.Firstname}'s profile`}
                                        className="customer-image"
                                    />
                                )}
                                <p>First name: {data.Firstname}</p>
                                <p>Nickname: {data.NickName}</p>
                                <p>Number: {data.Number}</p>
                                {/* <p>Email: {data.Email}</p> */}
                                <p>Age: {data.Age}</p>
                                <p>Gender: {data.Gender}</p>
                                <p>Address: {data.Address}</p>
                                <p>City: {data.City}</p>
                                <p>State: {data.State}</p>
                                <p>Pincode: {data.Pincode}</p>
                                <p>Posted by: {data.user ? data.user.name : 'Unknown User'}</p>
                            </Paper>
                        ))}
                    </div>
                ) : (
                    <Typography className="error-message">
                        {error ? error : "No customers found."}
                    </Typography>
                )}
            </Base>
        </div>
    );
};

export default Customersdetail;


