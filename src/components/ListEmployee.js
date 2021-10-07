import React, { useState }  from 'react'
// import EmployeeService from '../services/EmployeeService';
// import { Link } from 'react-router-dom';
import { AddEmployee } from './AddEmployee';
import { data } from './data/data';
import { Header } from './Header';
import styles from "./ListEmployeeStyles.module.css";
export const ListEmployee = () => {

// No me funciona el backend
  // useEffect(()=>{
  //   EmployeeService.getAllEmployees()
  //   .then((resp)=>{
  //     setEmployees(resp.data)
  //   }).catch(error=>console.log(error))
  // },[])
  const [dba,setDba] = useState(data);

  return (
    <>
    <Header/>
    <div style={{display: "flex",alignItems: "center",alignContent:"center"}}>
    <AddEmployee setDba={setDba}/>
    <div className={styles.container}>
      <h2 className={styles.title}>List Employes</h2>
      <div className={styles.containerbtn}>
      {/* <Link to="/add-employee" className={styles.button}> Add Employe </Link> */}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employe Firsts Name</th>
            <th>Employe Last Name</th>
            <th>Employe Email Id</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {
            dba.map(
              employe =>
                <tr key={employe.name}>
                  <td>{employe.name}</td>
                  <td>{employe.lastName}</td>
                  <td>{employe.emailId}</td>
                </tr>
            )
          }
        </tbody>
      </table>
    </div>
    </div>
    </>
  )
}
