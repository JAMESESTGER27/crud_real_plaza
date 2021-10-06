import { useState } from 'react'
import style from "./login.module.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

export const LoginScreen = ({history}) => {

  const [username, setUsername] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    history.push(`/employees/${username}`);
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

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
        <form onSubmit={handleSubmit} className={style.login__form}>
          <input type="text" name='username' className={style.input_field} onChange={handleChange} placeholder="username" />
          <Link to={`/employees/${username}`} className={style.input}>Ingresar</Link>
        </form>
      </div>
    </>
  )
}
