import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Base({ title, description, children }) {
    //const history = useHistory() v5
    // const navigate = useNavigate()
    // function handleLogut() {
    //     localStorage.removeItem("token")
    //     navigate("/login")
    // }
    const navigate = useNavigate()
    let tokenId = localStorage.getItem("token")
    function handleAuthentication() {
        if (tokenId) {

            localStorage.removeItem("token");
            navigate("/login");
        } else {

            navigate("/login");
        }
    }
    return (
        <div className='main-container'>
            <header>
                <nav>
                    <AppBar position="static" sx={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}>
                        <Toolbar variant="dense" sx={{ justifyContent: 'center' }}>
                            {/* <Typography sx={{ flexGrow: 1, textAlign: 'center', fontSize: '1.5rem' }}>
                                Interview-Notes
                            </Typography> */}
                            <Typography sx={{
                                flexGrow: 1,
                                textAlign: 'left',
                                fontSize: '1.5rem',
                                fontFamily: 'Arial, sans-serif',
                                color: '#333',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                justifyContent: 'flex-start',


                            }}>
                               WELCOME TO CRM
                            </Typography>
                            <IconButton
                                edge="end"
                                color="inherit"
                                onClick={() => navigate("/")}
                                aria-label="customersdetail" sx={{ mr: 2 }}>
                                Cutomersdetail
                            </IconButton>

                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="students"
                                onClick={() => navigate("/user")}
                                sx={{ mr: 2 }}>
                                CustomerId
                            </IconButton>

                            {/* <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="add students"
                                onClick={() => navigate("/login")}
                                sx={{ mr: 2 }}>
                                Login
                            </IconButton> */}

                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="add students"
                                onClick={() => navigate("/signup")}
                                sx={{ mr: 2 }}>
                                Signup
                            </IconButton>

                            {/* <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="add students"
                                onClick={handleLogut}
                                sx={{ mr: 2 }}>
                                logout
                            </IconButton> */}
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label={tokenId ? "logout" : "login"}
                                onClick={handleAuthentication}
                                sx={{ mr: 2 }}
                            >
                                {tokenId ? "Logout" : "Login"}
                            </IconButton>

                        </Toolbar>
                    </AppBar>
                </nav>
            </header>
            <main>
                <h1>{title}</h1>
                <h4>{description}</h4>
                <div className='contents'>
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Base