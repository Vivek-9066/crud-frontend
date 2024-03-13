import { Button, Grid, TextField } from '@mui/material'
import { blue, green } from '@mui/material/colors'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup'
import axios from 'axios'

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  fullName: Yup.string().required("Full Name is required"),
  designation: Yup.string().required("Designation is required"),
});

const Edit = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);

 
  useEffect(() => {
    axios.get(`http://localhost:8080/api/user/`+id)
    .then(res => {
      setUserData(res.data[0])
      console.log(res)})
      .catch(err => console.log(err));
  },[id]);


  const updateUser = async(id,values) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/users/update/`+id, values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }


  // const formik = useFormik({
  //   initialValues: {
  //     fullName: '',
  //     email: '',
  //     designation: '',
  //   },
  //   validationSchema,
  //   onSubmit: (values) => {
  //     updateUser(id,values);
  //     navigate("/");
  //   },
  // });

  const formik = useFormik({
    initialValues: {
      fullName:  '',
      email:  '',
      designation: '',
    },
    validationSchema,
    onSubmit: (values) => {
      updateUser(id, values);
      navigate("/");
    },
  });
  useEffect(() => {
    if (userData) {
      formik.setValues({
        fullName: userData.full_name || '',
        email: userData.email || '',
        designation: userData.designation || '',
      });
    }
  }, [userData]);

  
 
  return (
    <div className="d-flex vh-100 bg-secondary justify-content-center align-items-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=600')", 
    backgroundSize: 'cover'}}>
      <div className='d-flex w-50 h-60 justify-content-center bg-transparent'>

        
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex justify-content-center align-items-center vh-100"
        >
          <Grid container sx={{ width: "50%" }} spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                variant="outlined"
                size="large"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                size="large"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Designation"
                name="designation"
                variant="outlined"
                size="large"
                value={formik.values.designation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.designation &&
                  Boolean(formik.errors.designation)
                }
                helperText={
                  formik.touched.designation && formik.errors.designation
                }
              />
            </Grid>

            <Grid
              item
              xs={12}
              className="mt-20 justify-content-around align-items-center d-flex"
            >
              <Button
                variant="contained"
                type="submit"
                size="large"
                sx={{ borderRadius: "29px", py: "15px", bgcolor: green[500] }}
              >
                Update
              </Button>

              <Link to="/">
                <Button
                  variant="contained"
                  size="large"
                  sx={{ borderRadius: "29px", py: "15px", bgcolor: blue[500] }}
                >
                  Back
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
        </div>
      </div>
  )
}

export default Edit
