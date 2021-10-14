import * as React from 'react';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from  '@material-ui/icons/VisibilityOff';
import AccountCircleRounded from '@material-ui/icons/AccountCircleRounded';
import { Typography, Button } from '@mui/material';



const Login = () => {


    const [values, setValues] = React.useState({
        password: '',
        email: '',
        showPassword: false,
      });

    const handleChange =(event) => {
      setValues({...values, [event.target.name]: event.target.value})
    };

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      const handleSubmit= async (e)=>{
          e.preventDefault();
          console.log('click')
          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({email: values.email, password: values.password}) // body data type must match "Content-Type" header
          });
          const json = await response.json();
          console.log(json)

      };


    return (
    <>
        <form  className="d-flex flex-column">
         <Button onClick={handleSubmit} color="info" variant='outlined'>   
        <Typography variant='h4' align="center"  >
            LOGIN
        </Typography>
        </Button>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
        <InputLabel htmlFor="input-with-icon-adornment">
         Email
        </InputLabel>
        <FilledInput 
          type="input"
          id="input-with-icon-adornment"
          name='email'
          onChange={handleChange}
          value={values.email}
          endAdornment={
            <InputAdornment position="end">
              <AccountCircleRounded />
            </InputAdornment>
          }
        />
      </FormControl>
           <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <FilledInput
            id="outlined-adornment-password"
            notched='true'
            name='password'
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl> 
        </form>
    </>
    )
}

export default Login;