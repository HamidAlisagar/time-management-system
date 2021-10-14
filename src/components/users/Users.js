import React from 'react'
import Styles from "./Users.module.css";

const Users = () => {
    return (
        <div className={Styles.userActions}>
      <div className={Styles.userRecords}>
          <h2>  Users Logs</h2>
        <table className={Styles.customers}>
        <thead>
          <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Actions</th>
          </tr>
          </thead>
         
         
          <tbody>
          <tr>
            <td>Hamid ALi</td>
            <td>Khan</td>
            <td><button className={Styles.showDetail}>Show Detail </button> <button className={Styles.deleteUser}>Delete</button></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default Users
