import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import '../App.css';
import Swal from 'sweetalert2';
import login_logo from '../login_logo.png';
import Publiclayout from './Layout/Publiclayout';



const Login = () => {
  const navigate = useNavigate();
  const { register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const admin_username = "hexabrain";
  const admin_password = "admin";

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [flaguser, setFlaguser] = useState(false);
  const [flagpass, setFlagpass] = useState(false);



  function submitdata(e) {

    if (admin_username === username && admin_password === password) {
      Swal.fire({
        icon: 'success',
        title: "Successfully logged in !",
        showConfirmButton: false,
        timer: 1000,
      })
      navigate("/home");
    }
    else {
      Swal.fire({
        icon: 'error',
        title: "Error!",
        text: "Sorry! Invalid username or password",
        showConfirmButton: true,
      });
    }
  }


  function submitUsername(e) {
    setUsername(e.target.value);
    if (e.target.value.length > 10)
      setFlaguser(true);
    else
      setFlaguser(false);
  }

  function submitPassword(e) {
    setPassword(e.target.value);
    if (e.target.value.length > 10)
      setFlagpass(true);
    else
      setFlagpass(false);
  }

  return (
    <Publiclayout>

      <div className="login">
        <div class="row align-items-center" style={{ height: "100vh", width: "100%" }} >
          <div class="mx-auto col-10 col-md-8 col-lg-6" >

            <div className="contain">

              <div className='login-logo'>
                <img src={login_logo} alt="login logo" />
              </div>
              <br /> <h1>Login</h1>  <br />
              <Form onSubmit={handleSubmit(submitdata)} >
                <Form.Group className="mb-3" controlId="formUsername" as={Row} >
                  <Form.Label column sm={2} > Username: </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="text" name="username" placeholder="Enter username" {...register("username", { required: true })} onChange={submitUsername} />
                    {errors.username && <p style={{ textAlign: "left", color: "red" }}> This field is required.</p>}
                    {flaguser && <p style={{ textAlign: "left", color: "red" }}> Username length should be less than 11 </p>}
                  </Col>
                </Form.Group> <br /> <br />

                <Form.Group className="mb-3" controlId="formPassword" as={Row} >
                  <Form.Label column sm={2} > Password: </Form.Label>
                  <Col sm={9}>
                    <Form.Control type="password" name="password" placeholder="Enter password" {...register("password", { required: true })} onChange={submitPassword} />
                    {errors.password && <p style={{ textAlign: "left", color: "red" }} > This field is required.</p>}
                    {flagpass && <p style={{ textAlign: "left", color: "red" }}> Password length should be less than 11 </p>}
                  </Col>
                </Form.Group> <br /> <br />

                <Button variant="outline-primary" size="lg" type='submit'>Login</Button>

                <br /> <br />

              </Form>
            </div>
          </div>
        </div>
      </div>
    </Publiclayout>

  );

}

export default Login;