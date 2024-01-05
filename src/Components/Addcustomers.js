import React, { useState } from "react"
import Base from "../Base/Base"
import { Button, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"



const Addcustomers = ({ userData, setUserData }) => {
    const { token } = useParams();    
    const [firstName, setFirstName] = useState("")
    const [nickNames, setNickNames] = useState("")
    const [address, setAddress] = useState("")
    const [location, setLocation] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [sucessMsg, setSucessMessage] = useState("")



    const navigate = useNavigate()
    // const user = useContext(UserContext);
    async function postNewCustomers() {
         const newCustomers = {               
            firstName,
            nickName: nickNames,
            address,
            location,
            number,
            email,
            password,
         postedBy:userData.name
        }
        // const res = await fetch(`https://crm-a60b.onrender.com/api/customers/add`, {
         const res =await fetch(`https://crmserver-7k9y.onrender.com/api/customers/add`,{   
            method: "POST",
            body: JSON.stringify(newCustomers),
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token,
            }
        });

        const data = await res.json();
        if (!data.data) {
            setError(data.message)
            setSucessMessage("")
        }
        setUserData([...userData, data.data])
        setSucessMessage(data.message)
        navigate("/user")
    }

    return (
        <Base>
            <div className="add-customers-form">
                <form>                    
                    <TextField label="First Name" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text" />
                    <TextField label="NickNames" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the nickName"
                        type="text"
                        value={nickNames}
                        onChange={(e) => setNickNames(e.target.value)}
                    />
                     <TextField label="Address" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField label="Location" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <TextField label="Numbers" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the number"
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <TextField label="Email" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField label="Password" variant="outlined" fullWidth sx={{ m: 1 }}
                        // inputProps={{ sx: { height: 100 } }}
                        placeholder="Enter the password"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        className="add-customers-button"
                        type="submit" variant="contained"
                        onClick={postNewCustomers}
                    >Add Customers</Button>

                    {error ?
                        <Typography color={"danger"}>
                            {error}
                        </Typography> : ""}

                    {sucessMsg ?
                        <Typography color={"danger"}>
                            {sucessMsg}
                        </Typography> : ""}
                </form>
            </div>
        </Base>
    )
}

export default Addcustomers;