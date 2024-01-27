import React, { useState } from "react"
import Base from "../Base/Base"
import { Button, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"



const Addcustomers = ({ userData, setUserData }) => {
    const { token } = useParams();    
    const [Firstname, setFirstname] = useState("")
    const [NickNames, setNickNames] = useState("")
    // const [Address, setAddress] = useState("")
    // const [location, setLocation] = useState("")
    const [Number, setNumber] = useState("")
    const [Email, setEmail] = useState("")
    const [Age, setAge] = useState("")
    const [Gender, setGender] = useState("")
    const [Address, setAddress] = useState("")
    const [City, setCity] = useState("")
    const [State, setState] = useState("")
    const [Pincode, setPincode] = useState("")
    // const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [sucessMsg, setSucessMessage] = useState("")



    const navigate = useNavigate()
    // const user = useContext(UserContext);
    async function postNewCustomers() {
         const newCustomers = {               
            Firstname,
            NickName:NickNames,
            // Address,
            // location,
            Number,
            Email,
            Age,
            Gender,
            Address:Address,
            City,
            State,
            Pincode,
            // password,
         postedBy:userData.name
        };
        // const res = await fetch(`https://crm-a60b.onrender.com/api/customers/add`, {
         const res =await fetch(`https://crm-server2-j3em.onrender.com/api/customers/add`,{   
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
                    <TextField label="Firstname" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the firstname"
                        value={Firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        type="text" />
                    <TextField label=" NickNames" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the nickname"
                        type="text"
                        value={NickNames}
                        onChange={(e) => setNickNames(e.target.value)}
                    />
                     {/* <TextField label="Address" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the address"
                        type="text"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField label="Location" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    /> */}
                    <TextField label="Number" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the number"
                        type="text"
                        value={Number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <TextField label="Email" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the email"
                        type="text"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField label="Age" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the age"
                        type="text"
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <TextField label="Gender" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the gender"
                        type="text"
                        value={Gender}
                        onChange={(e) => setGender(e.target.value)}
                    />
                      <TextField label="Address" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the address"
                        type="text"
                        value={Address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField label="City" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the city"
                        type="text"
                        value={City}
                        onChange={(e) => setCity(e.target.value)}
                    />
                     <TextField label="State" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the state"
                        type="text"
                        value={State}
                        onChange={(e) => setState(e.target.value)}
                    />
                     <TextField label="Pincode" variant="outlined" fullWidth sx={{ m: 1 }}
                        placeholder="Enter the pincode"
                        type="text"
                        value={Pincode}
                        onChange={(e) => setPincode(e.target.value)}
                      />
                    {/* <TextField label="Password" variant="outlined" fullWidth sx={{ m: 1 }}
                        // inputProps={{ sx: { height: 100 } }}
                        placeholder="Enter the password"
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /> */}

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