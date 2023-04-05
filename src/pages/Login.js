import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import login from '../assets/login.svg';
import { Link } from "react-router-dom";
import '../App.css';
const theme = createTheme();

export default function Login() {
    const [setLoading] = useState(true);

    const [values, setValues] = useState({
        password: "",
        username: "",
    });

    const handleChanges = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
        console.log(values);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const history = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get("username"),
            password: data.get("password"),
        });
        createacc();
        // window.location.href = '/home';
    };

    async function createacc() {
        try {
            let result = await fetch(
                "https://hacknova2.pythonanywhere.com/login/login/",
                {
                    method: "POST",
                    body: JSON.stringify({
                        password: values.password,
                        username: values.username,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                }
            );
            result = await result.json();
            console.log(result);
            if (result.token) {
                Swal.fire("Logged in Successfully!", "success", "success");
                // sessionStorage.setItem('name', result.user.username);
                // sessionStorage.setItem('user_id', JSON.parse(JSON.stringify(result.user.id)));
                sessionStorage.setItem('token', result.token)
                history("/")
            }
            else {
                Swal.fire("Oops!!", "Some error while login", "error");
            }
        } catch (error) {
            console.log("Error" + error);
            setLoading(false);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                component="main"
                sx={{ height: "100vh", width: "200vh", paddingLeft: "3rem" }}
            >
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                        `url(${login})`,
                        backgroundRepeat: "no-repeat",
                        backgroundColor: (t) =>
                            t.palette.mode === "light"
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: "300",
                        backgroundPosition: "center",
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Login
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={values.username}
                                onChange={handleChanges}
                                autoComplete="name"
                                autoFocus
                                color="secondary"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                value={values.password.trim()}
                                onChange={handleChange("password")}
                                autoComplete="current-password"
                                color="secondary"
                            />
                            <Link to="/home">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                color="secondary"
                            >
                                Login
                            </Button>
                            </Link>
                            Don't have an account?
                            <Link to="/" style={{textDecoration:"none"}}>
                                Signup
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}