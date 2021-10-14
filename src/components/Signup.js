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


const Signup = () => {

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
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
    

    return (
    <>
        <div className="d-flex flex-column">
        <Button color="secondary" variant='outlined'>   
        <Typography variant='h4' align="center"  >
            SIGNUP
        </Typography>
        </Button>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
        <InputLabel htmlFor="input-with-icon-adornment">
         Email
        </InputLabel>
        <FilledInput 
          type="input"
          id="input-with-icon-adornment"
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
            id="outlined-adornment-password-signup"
            notched='true'
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
          />
        </FormControl> 
        </div>
    </>
    )
}

export default Signup;