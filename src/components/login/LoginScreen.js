import React from 'react'
import style from "./login.module.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
export const LoginScreen = () => {
  return (
    <>
    
      <div className={style.container}>
        <div className={style.info}>
          <h1>Ingresar</h1>
          <span>Made by JAMESESTGER 🧡</span>
        </div>
      </div>

      <div className={style.form}>
        <div className={style.thumbnail}>
          <img src={logo} alt="logo"/>
        </div>
        <form className={style.login__form}>
          <input type="text" className={style.input_field} placeholder="username" />
          <input type="password" className={style.input_field} placeholder="password" />
          <Link to="/employees"  className={style.input}>Ingresar</Link>
          {/* <p className="message">Not registered? <a href="#">Create an account</a></p> */}
        </form>
      </div>

      
    </>
  )
}
