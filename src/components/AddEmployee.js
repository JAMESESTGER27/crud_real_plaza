import React, { useState } from 'react'
// import EmployeeService from '../services/EmployeeService'
import  {Link} from 'react-router-dom'
import style from "./addEmploye.module.css"
export const AddEmployee = () => {

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [emailId, setEmailOd] = useState("")
	// const history =  useHistory();

	const saveEmployee = (e) =>{
		e.preventDefault();
		// const employee = {firstName,lastName,emailId}

		// EmployeeService.createEmployee(employee)
		// .then((resp)=>{
		// 	console.log(resp.data)
		// 	history.push('/employees');
		// }).catch(error =>{
		// 	console.log(error)
		// })
		
	}

	return (
		<div>
			<div className={style.container}>
				<div className={style.row}>
					<div className={style.card}>
						<h2 className={style.title}>Add Employe</h2>
						<div className={style.body}>
							<form>
								 
								<div className={style.form_container}>
										<label className={style.label}>First Name :</label>
										<input
											type="text"
											placeholder = "Enter first name"
											name="firstName"
											className={style.input}
											value={firstName}
											onChange={(e)=>setFirstName(e.target.value)}
										>
										</input>
								</div>

								<div className={style.form_container}>
										<label className={style.label}>Last Name :</label>
										<input
											type="text"
											placeholder = "Enter last name"
											name="lastName"
											className={style.input}
											value={lastName}
											onChange={(e)=>setLastName(e.target.value)}
										>
										</input>
								</div>

								<div className={style.form}>
										<label className={style.label}>Email :</label>
										<input
											type="text"
											placeholder = "Enter email name"
											name="emailId"
											className={style.input}
											value={emailId}
											onChange={(e)=>setEmailOd(e.target.value)}
										>
										</input>
								</div>
						<div className={style.container_btn}>
						<button 
								className={style.btn_guardar} 
								onClick={(e)=> saveEmployee(e)}
								>
									Submit
								</button>
								<Link to="/employees" className={style.btn_cancelar}>Cancel</Link>
						</div>
							

							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
