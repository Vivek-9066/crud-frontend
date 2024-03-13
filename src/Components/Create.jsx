import { Button, Grid, TextField } from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addUser, getAllUsers } from "../Redux/action";
import { Link, useNavigate } from "react-router-dom";



const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  fullName: Yup.string().required("Full Name is required"),
  designation: Yup.string().required("Designation is required"),
});
const Create = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      designation: "",
    },
    validationSchema,

    onSubmit: (values) => {
      dispatch(addUser(values));
      navigate("/");
    },
  });

  useEffect(()=>{
    dispatch(getAllUsers());
  },[])
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
                Create
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
    
  );
};

export default Create;
