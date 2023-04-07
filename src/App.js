import './App.css';
import * as React from 'react';
import logo from './cdlogo.png';
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Box } from '@mui/system';



function App() {
  const [product, setProduct] = React.useState('');
  const handleChange = (event) => {
    setProduct(event.target.value)
  }

  const [values, setValues] = React.useState({
    password: '',
    socialSecurity: '',
    showPassword: false,
  });

  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value});
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={5}>
          <img class="responsive-img" src={logo} alt="City Distributions Logo" />
        </Grid>
      </Grid>

      <div class="container col s12">
        <h1 class="center-align">Thank you for using Collective Clinic!</h1>
        <h2 class="center-align">We are happy to serve you!</h2>
        <h4 class="center-align">Please answer the following questions so we can further assist you. Thank you!😃 </h4>
        <h5 class="center-align">*Required Fields</h5>
      </div>


      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" />
              <label for="first_name">Legal First Name:</label>
            </div>
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" />
              <label for="last_name">Legal Last Name:</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="email" type="email" class="validate" />
              <label for="email">Email:</label>
            </div>
            <div class="input-field col s6">
              <input id="phone_number" type="number" class="validate" />
              <label for="phone_number">Phone Number:</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="social" type="number" class="validate" />
              <label for="social_security">Social Security Number:</label>
            </div>
            <div class="input-field col s6">
              <input type="date" class="datepicker" />
              <label for="birthday">Date of Birth:</label>
            </div>
          </div>
          <Box
            direction="row"
            sx={{ minWidth: 120 }}
          >
            <FormControl fullWidth>
              <InputLabel id="productType">Select Product Type</InputLabel>
              <Select
                labelId="productLabel"
                id="productType"
                value={product}
                label="Select Product Type"
                onChange={handleChange}
              >
                <MenuItem value="medCard">Medical Card</MenuItem>
                <MenuItem value="medCardCult">Medical Card with Cultivation</MenuItem>
                <MenuItem value="medCardRenew">Medical Card Renewal</MenuItem>
                <MenuItem value="medCardCultRenew">Medical Card with Cultivation Renewal</MenuItem>
                <MenuItem value="cultUpgrade">Cultivation Upgrage</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            direction="row"
          >
            <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
              <InputLabel htmlFor="standard-password">Password</InputLabel>
              <Input 
                id='password'
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
              />
            </FormControl>
          </Box>
        </form>
      </div>
    </>
  );
}

export default App;
