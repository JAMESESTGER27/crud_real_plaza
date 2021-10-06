import React  from 'react'
// import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';
import { data } from './data/data';
import { Header } from './Header';
import styles from "./ListEmployeeStyles.module.css";
export const ListEmployee = () => {

  // const [data, setEmployees] = useState([]);
// No me funciona el backend
  // useEffect(()=>{
  //   EmployeeService.getAllEmployees()
  //   .then((resp)=>{
  //     setEmployees(resp.data)
  //   }).catch(error=>console.log(error))
  // },[])

  return (
    <>
    <Header/>
    <div className={styles.container}>
      <h2 className={styles.title}>List Employes</h2>
      <div className={styles.containerbtn}>
      <Link to="/add-employee" className={styles.button}> Add Employe </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <th>Employe Id</th>
          <th>Employe Firsts Name</th>
          <th>Employe Last Name</th>
          <th>Employe Email Id</th>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {
            data.map(
              employe =>
                <tr key={employe.id}>
                  <td>{employe.id}</td>
                  <td>{employe.name}</td>
                  <td>{employe.lastName}</td>
                  <td>{employe.emailId}</td>
                </tr>
            )
          }
        </tbody>
      </table>
    </div>
    </>
  )
}
