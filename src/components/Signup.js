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
import { FormHelperText } from '@mui/material';


const Signup = (props) => {

  let history = useHistory();

  const [values, setValues] = React.useState({
      password: '',
      email: '',
      pfp:'',
      showPassword: false,
      cpassword:'',
      name:''
    });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
      console.log(prop)
      // if (prop==='pfp') {
      //   var input = document.getElementById("pfp").files[0].name;
      //   console.log(input)
      //   setValues({...values, [prop]:`${input}`})
      // }
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
        
        const user = {
          name: values.name,
          password: values.password,
          email: values.email,
          pfp: values.pfp,
        }
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('pfp', user.pfp);
        console.log(...formData)
          const response = await fetch('http://localhost:5000/api/auth/createuser', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              
              //'Content-Type': 'multipart/form-data',
            },
            body: formData// body data type must match "Content-Type" header
          });
          const json = await response.json();
          console.log(json)
          if(json.success && values.password===values.cpassword){

            localStorage.setItem('token',json.authToken);
            history.push('/login')
            props.showAlert('Account Created Succesfully','success')
          }else{
            props.showAlert('invalid credentials','error')

          }
        
    };

    return (
    <>

      <form action='http://localhost:5000/api/auth/createuser' id='signup' method='post' onSubmit={handleSubmit} encType="multipart/form-data">

        <div className="container row"
        style={{
          border: '1.5rem',
          margin: 'auto',
          width: '655px',
          textAlign: 'center',
          paddingInline: '100px'
        }}
      >
        <Typography className='mx-2 my-2' variant='h4'>
          Make a new Account by Signing up
        </Typography>
        <FormControl className='mb-3' sx={{ margin: 'auto', width: '25ch' }} variant="filled">
        <InputLabel htmlFor="input-with-icon-adornment">
         Email
        </InputLabel>
        <FilledInput 
          type="input"
          name="email"
          id="input-with-icon-adornment"
          onChange={handleChange('email')}
          endAdornment={
            <InputAdornment position="end">
              <AccountCircleRounded />
            </InputAdornment>
          }
        />
        </FormControl>
        <FormControl className='mb-3' sx={{ margin: 'auto', width: '25ch' }} variant="filled">
        <InputLabel htmlFor="input-with-icon-adornment">
         User Name
        </InputLabel>
        <FilledInput 
          type="input"
          name="username"
          id="input-with-icon-adornment-username"
          onChange={handleChange('name')}
        />
        </FormControl>
      
           <FormControl className='mb-3' sx={{ margin: 'auto', width: '25ch' }} variant="filled">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <FilledInput
            id="outlined-adornment-password-signup"
            notched='true'
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
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
            required
            inputProps={{
              minLength:'5'
            }}
          />
        </FormControl> 
           <FormControl className='mb-3' sx={{ margin: 'auto', width: '25ch' }} variant="filled">
          <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
          <FilledInput
            id="outlined-adornment-cpassword-signup"
            notched='true'
            type={values.showPassword ? 'text' : 'password'}
            value={values.cpassword}
            onChange={handleChange('cpassword')}
            label="confirm Password"
            required
            inputProps={{
              minLength:'5'
            }}
          />
        </FormControl> 
        
        <FormControl className='mb-1' sx={{ margin: 'auto', width: '30ch' }} variant="filled">
        <FormHelperText htmlFor="pfp">Profile Pic</FormHelperText>
          <FilledInput
          name="pfp"
          area-aria-describedby="my-helper-text"
          type="file"
          inputComponent="input"
          id="pfp"
          onChange={handleChange('pfp')}
          />
          
        </FormControl>
        <Button 
        disabled={values.password<5 || values.email<5? true : false}
        fullWidth={false} 
        type='submit'
        component='button'
        className='mb-3'
        sx={{
          width:'20%',
          margin: 'auto',
        }} variant="contained" color='secondary' placeholder='LogIn' endIcon={<Fingerprint />}>
        submit
        </Button>
        </div>
        
      </form>
    </>
    )
}

export default Signup;