import React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Avatar, TextField, Checkbox, Button, Typography, Link } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import FormControlLabel from "@mui/material/FormControlLabel";
const Login=()=> {
    const paperStyle={
        padding: "20px",
        height: "80vh",
        width: 300,
        margin: "20px auto"
    }
    const avatarStyle={
        backgroundColor:"white"
    }
    const avatarStylee={
        backgroundColor:"blue"
    }
    const btnstyle={
        margin:"8px 0"
    }
    const textfield={
        margin:"10px"
    }
    return(
         <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align="center">
                <img src="https://a.espncdn.com/redesign/assets/img/logos/espnplus/ESPN+.svg" alt="NCC-HopeCenter" width="100" height="100"></img>
                </Grid>
        <TextField label="Username or Email Address" placeholder="Username or Email Address" fullWidth required></TextField>
        <br>
        </br>
        <br>
        </br>
        <TextField label="Password (case sensitive)" placeholder="Password (case sensitive)" type="password" fullWidth required></TextField>
            <Button
                type="Submit"
                color="primary"
                border-radius= "100px"
                variant="contained"
                style={btnstyle}
                fullWidth
                >
                    Log In
            </Button>
            <Typography style={textfield}>
                    <Link href="#">
                        Need help logging in?
                    </Link>
                    </Typography>
            <Typography style={textfield}>
                Facebook Log In is no longer available. For help logging in, please use the link above.
            </Typography>
            <Button
            //onclick=document.getElementById("bb").style.background-color: #009900; color = #FFFFF
                type="Submit"
                color="primary"
                border-radius= "100px"
                variant="outlined"
                style={btnstyle}
                fullWidth
                >
                    Sign Up
            </Button>

        </Paper>
        </Grid>
    )
}
export default Login;