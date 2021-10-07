import React,{useState} from 'react'
// import EmployeeService from '../services/EmployeeService'
// import  {Link} from 'react-router-dom'
import style from "./addEmploye.module.css"
// import { data } from './data/data';
export const AddEmployee = ({setDba}) => {

	const [name, setName] = useState("")
	const [lastName, setLastName] = useState("")
	const [emailId, setEmaild] = useState("")
	// const [daen,setDaEn] = useState({})
	// const history =  useHistory();

	const saveEmployee = (e) =>{
		e.preventDefault();
		const employee = {name,lastName,emailId}
		setDba(dt=> [...dt,employee])
		setName("");
		setLastName("");
		setEmaild("");
	}

	return (
<>
<div className={style.contenedor}>
  <div className={style.card}>
    <div className={style.card__title}>
      <h1>Agregar</h1>
    </div>
<form >
    <div className={style.card__field}>
      <label htmlFor="name" >Name: </label>
      <input 
			type="text" 
			name ="name" 
			placeholder="Nombres"
			value={name}
			onChange={(e)=>setName(e.target.value)} 
			/>
    </div>
    <div className={style.card__field}>
			<label htmlFor="last">Last Name: </label>
      <input 
			type="text" 
			name = "last" 
			placeholder="Last Name"
			value={lastName}
			onChange={(e)=>setLastName(e.target.value)}
			/>
    </div>
    <div className={style.card__field}>
			<label htmlFor="email">Email: </label>
      <input
			type="email" 
			name="email" 
			placeholder="Email"
			value={emailId}
			onChange={(e)=>setEmaild(e.target.value)}
			/>
    </div>
    <div className={style.container_btn}>
      <button className={style.btn_s} onClick={(e)=>saveEmployee(e)}>Submit</button>
    </div>
</form>
  </div>
</div>
</>
	)
};
