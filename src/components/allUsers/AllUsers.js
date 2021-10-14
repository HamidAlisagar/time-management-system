import React, { useState, useEffect } from "react";
import Styles from "./AllUsers.module.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import deleteAction from "../../redux/actions/deleteAction";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://34.210.129.167/api/users?page=${pageNumber}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setUser(res))
      .catch((error) => {
        console.log(error);
      });
    // eslint-disable-next-line
  }, [pageNumber]);

  const nextPage = () => {
    setPageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    setPageNumber(pageNumber - 1);
  };

  console.log(user);
  const deleteUser = (id) => {
    dispatch(deleteAction(id));
  };

  return (
    <div className={Styles.userActions}>
      <div className={Styles.userRecords}>
        <h2> All Users</h2>
        <table className={Styles.customers}>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {user?.data?.users?.data?.map((registeredUser, index) => {
              return (
                <tr key={index}>
                  <td>{registeredUser.firstName}</td>
                  <td>{registeredUser.lastName}</td>
                  <td>{registeredUser.email}</td>
                  <td>
                    <button className={Styles.showDetail}>Show Detail </button>{" "}
                    <button
                      className={Styles.deleteUser}
                      onClick={() => {
                        deleteUser(registeredUser.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className={Styles.pagination}>
          {pageNumber === 1 ? (
            <>
              <button disabled className={Styles.disablebtn}>
                Prev
              </button>

              <button onClick={nextPage}>Next</button>
            </>
          ) : (
            <>
              <button onClick={prevPage}>Prev</button>
              <button onClick={nextPage}>Next</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
