import React from 'react'
// import EmployeeService from '../services/EmployeeService'
// import  {Link} from 'react-router-dom'
import style from "./addEmploye.module.css"
export const AddEmployee = () => {

	// const [firstName, setFirstName] = useState("")
	// const [lastName, setLastName] = useState("")
	// const [emailId, setEmailOd] = useState("")
	// const history =  useHistory();

	// const saveEmployee = (e) =>{
	// 	e.preventDefault();
		// const employee = {firstName,lastName,emailId}

		// EmployeeService.createEmployee(employee)
		// .then((resp)=>{
		// 	console.log(resp.data)
		// 	history.push('/employees');
		// }).catch(error =>{
		// 	console.log(error)
		// })
		
	// }

	return (
<>
<div className={style.contenedor}>
  <div className={style.card}>
    <div className={style.card__title}>
      <h1>Agregar</h1>
    </div>
    <div className={style.card__field}>
      <label for="">Name: </label>
      <input type="text" placeholder="Nombres"/>
    </div>
    <div className={style.card__field}>
			<label for="">Last Name: </label>
      <input type="text" placeholder="Last Name"/>
    </div>
    <div className={style.card__field}>
			<label for="">Email: </label>
      <input type="email" placeholder="Email"/>
    </div>
    <div className={style.container_btn}>
      <button className={style.btn_s}>Submit</button>
    	<button className={style.btn_c}>Cancel</button>
    </div>
    
  </div>
</div>
</>
	)
};
