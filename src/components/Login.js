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
import Fingerprint from '@material-ui/icons/Fingerprint';
import { useHistory } from 'react-router';




const Login = (props) => {

  let history = useHistory();

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
          try {
            
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
          
          if(json.success){
              localStorage.setItem('token',json.authToken);
              props.showAlert('Logged In succesfully','success')
              history.push('/')

            }else{

              props.showAlert('invalid Login Details, Please Retry','error')
              history.push('/signup')
            }
          
          
          
        } catch (error) {
            alert('invalid')
        }

      };


    return (
    <>

      <div className="container d-flex justify-content-center flex-column"
        style={{
          border: '1.5rem',
          margin: 'auto',
          width: '655px',
          textAlign: 'center',
          paddingInline: '100px'
        }}
      >
        <Typography className='mx-2 my-2' variant='h4'>
          LogIn to your Account
        </Typography>
        <FormControl className='my-3' sx={{ margin: 'auto', width: '25ch' }} variant="filled">
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
           <FormControl className='my-3' sx={{ margin: 'auto', width: '25ch' }} variant="filled">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <FilledInput
          required
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
        <Button 
        fullWidth={false} sx={{
          width:'20%',
          margin: 'auto',


        }} variant="contained" color='secondary' onClick={handleSubmit} placeholder='LogIn' endIcon={<Fingerprint />}>
        submit
        </Button>
      </div>
    </>
    )
}

export default Login;