import React, { useState } from 'react'
import {userLogin} from '../api/authenticationService';
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../redux/authAction';
import style from "./login.module.css"

const LoginPage = ({loading,error,...props}) => {

  const [values,setValues] = useState({
    userName:"",
    password:""
  })

  const handleSubmit = e =>{
    e.preventDefault();
    props.authenticate();

    userLogin(values).then((response)=>{
      console.log("response",response);
      if(response.status===200){
          props.setUser(response.data);
          props.history.push('/dashboard');
      }
      else{
        props.loginFailure('Something Wrong!Please Try Again'); 
      }

    }).catch((error)=>{
      if(error && error.response){
        switch(error.response.status){
          case 401:
              console.log("401 status");
              props.loginFailure("Authentication Failed.Bad Credentials");
              break;
          default:
              props.loginFailure('Something Wrong!Please Try Again'); 

      }

      }
    });
  }
  const handleChange = (e) =>{
    e.persist();
    setValues(values =>({
      ...values,
      [e.targert.name]: e.target.value
    }));
  }

  return (
    <div>
      <div className={style.container}>
        <div className={style.info}>
          <h1>Ingresar</h1>
          <span>Made by JAMESESTGER 🧡</span>
        </div>
      </div>

      <div className={style.form}>
        <div className={style.thumbnail}>
          {/* <img src={logo} alt="logo"/> */}
        </div>
        <form onSubmit={handleSubmit} className={style.login__form}  noValidate={false}>
          <input 
          id="username"
          type="text"  
          className={style.input_field} 
          value={values.userName} 
          onChange={handleChange} 
          name="userName"
          placeholder="username" 
          required  
          />
          <input 
          id="password" 
          type="password" 
          className={style.input_field} 
          value={values.password} 
          onChange={handleChange}
          name="password" 
          placeholder="password"
          required
          />

          <button type="submit" className={style.input}>
            Ingresar
            {
              loading && (
                alert("Aceptado")
              )
            }
          </button>
        </form>
        {
          error && (
            alert("Error")
          )
        }
      </div>
    </div>
  )


  
}


const mapStateToProps=({auth})=>{
  console.log("state ",auth)
  return {
      loading:auth.loading,
      error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

  return {
      authenticate :()=> dispatch(authenticate()),
      setUser:(data)=> dispatch(authSuccess(data)),
      loginFailure:(message)=>dispatch(authFailure(message))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
