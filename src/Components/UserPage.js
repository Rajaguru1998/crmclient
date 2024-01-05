import React, { useEffect, useState } from "react"
import Base from "../Base/Base"
import { Button, Paper, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"
const UserPage = ({ userData, setUserData }) => {
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const [tokenId, setTokenId] = useState("");

    function handleDelete(_id) {
        console.log(_id)

    };
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login", { replace: true })
        }
        let token = localStorage.getItem("token")
        setTokenId(token)
        const fetchUserData = async () => {
            const res = await fetch(`https://crm-a60b.onrender.com/api/customers/user`, {
                method: "GET",
                headers: {
                    "x-auth-token": token
                }
            });
            const data = await res.json()
            if (!data.data) {
                setError(data.message)

            }
            setUserData(data.data)
            console.log(userData)
        }
        fetchUserData()
    }, [navigate, setUserData, userData])


    return (
        <Base>
            <div className="btnn">
                <Button
                    // edge="end"
                    // color="inherit"

                    aria-label="add students"
                    onClick={() => navigate(`/add/${tokenId}`)}
                    sx=
                    {{
                        mr: 2,
                        color: 'white',
                        border: '1px solid black',
                        backgroundColor: 'blue'
                    }}>
                    Add Cutomers
                </Button>
            </div>

            {userData && (
                <div>
                    {userData?.map((data, index) => (
                        <div className="paper">
                            <Paper
                                elevation={6}
                                key={data._id}
                                sx={{
                                    padding: '16px',
                                    marginBottom: '16px',
                                    backgroundColor: '#f0f0f0',
                                    display: 'grid',
                                    gridTemplateColumns: '3fr ',
                                    gap: '8px',


                                }}

                            >

                                <p>First name: {data.firstName}</p>
                                <p>Nick name: {data.date}</p>
                                <p>address:{data.address}</p>
                                <p>Location:{data.location}</p>                               
                                <p>Genter: {data.genter}</p>
                                <p>Number: {data.number}</p>
                                <p>Email: {data.email}</p>
                                <p>Password: {data.password}</p>
                                <p>Posted by: {data.user.name}</p>

                                <div className="bt">
                                    <Button onClick={() => navigate(`/edit/${data._id}/${tokenId}`)}>Edit</Button>


                                    <Button onClick={() => handleDelete(data._id)}>Delete</Button>
                                </div>
                            </Paper>
                        </div>
                    ))}
                </div>

            )
            }

            {
                error ?
                    <Typography color={"danger"}>
                        {error}
                    </Typography> : ""
            }
        </Base >
    )
}

export default UserPage