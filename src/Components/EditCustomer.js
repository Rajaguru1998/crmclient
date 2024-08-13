import React, { useEffect, useState } from "react"
import Base from "../Base/Base"
import { useNavigate, useParams } from "react-router-dom"
import { Button, TextField, Typography } from "@mui/material"
const EditPage = ({ userData, setUserData }) => {
    const [firstName, setFirstName] = useState("")
    const [nickNames, setNickNames] = useState("")
    // const [address, setAddress] = useState("")
    // const [location, setLocation] = useState("")
    const [number, setNumber] = useState("")
    // const [email, setEmail] = useState("")
    const [age, setAge] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] =useState("")
    const [pincode, setPincode] =useState("")
    // const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [sucessMsg, setSucessMessage] = useState("")
    const { id, token } = useParams();
    const navigate = useNavigate()
    console.log()
    useEffect(() => {
        const data = userData?.find((data) => data._id === id)
        if (data) {
            setFirstName(data.firstName)   
            setNickNames(data.nickName)
            // setAddress(data.address)
            // setLocation(data.location)
            setNumber(data.number)
            // setEmail(data.email)
            setAge(data.age)
            setGender(data.gender)
            setAddress(data.address)
            setCity(data.city)
            setState(data.state)
            setPincode(data.pincode)
            // setPassword(data.password)
        }
    }, [id, userData])

    async function handleEditCustomers() {

        const editedCustomers = {
            firstName,
            nickName: nickNames,
            // addres:address,
            // location,
            number,
            // email,
            age,
            gender,
            addres:address,
            city,
            state,
            pincode
            
        }

            // const res = await fetch(`https://crm-a60b.onrender.com/api/customer/edit/${id}`, {
            const res =await fetch(`https://crm-server-l94c.onrender.com/api/customers/edit/${id}`,{  
            method: "PUT",
            body: JSON.stringify(editedCustomers),
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
        const userindex = userData?.findIndex((data, idx) => data._id === id);
        userData[userindex] = data.data;
        await setUserData([...userData])
        setSucessMessage(data.message)
    }

    return (
        <Base>
            <form>
                <TextField label="First Name" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text" />
                <TextField label="NickNames" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the nickName"
                    type="text"
                    value={nickNames}
                    onChange={(e) => setNickNames(e.target.value)}
                />
                {/* <TextField label="Address" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                /> */}
                 <TextField label="Numbers" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the number"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                {/* <TextField label="Email" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> */}
                {/* <TextField label="Location" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the location"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                /> */}
                {/* <TextField label="Numbers" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the number"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <TextField label="email" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the email"
                    type="text"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                /> */}
                 <TextField label="Age" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the age"
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                 <TextField label="Gender" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the gender"
                    type="text"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                />
                <TextField label="Address" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the address"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <TextField label="City" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the city"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <TextField label="State" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the state"
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                 <TextField label="Pincode" variant="outlined" fullWidth sx={{ m: 1 }}
                    placeholder="Enter the pincode"
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                />
                {/* <TextField label="Password" variant="outlined" fullWidth sx={{ m: 1 }}
                    inputProps={{ sx: { height: 100 } }}
                    placeholder="Enter the password"
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> */}
                <div className="btn3">
                    <Button
                        type="submit" variant="contained"
                        onClick={handleEditCustomers}
                    >Edit Customer</Button>


                    <Button
                        type="submit" variant="contained"
                        onClick={() => navigate("/user")}
                    >Home</Button>
                </div>

                {error ?
                    <Typography color={"danger"}>
                        {error}
                    </Typography> : ""}

                {sucessMsg ?
                    <Typography color={"success"}>
                        {sucessMsg}
                    </Typography> : ""}
            </form>

        </Base>
    )
}

export default EditPage;