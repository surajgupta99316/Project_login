import React, { Component, useState } from "react";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [department, setDepartment] = useState("");
  const [empid, setEmpid] = useState("");

  const handleSubmit = (e) => {
    if (userType == "Admin" && secretKey != "Manager") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();

      console.log(fname, lname, email, password);
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          department,
          empid,
          password,
          userType,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
          } else {
            alert("Something went wrong");
          }
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up</h3>
          <div>
            Register As
            <input
              type="radio"
              name="UserType"
              value="User"
              onChange={(e) => setUserType(e.target.value)}
            />
            Employee
            <input
              type="radio"
              name="UserType"
              value="Admin"
              onChange={(e) => setUserType(e.target.value)}
            />
            Manager
          </div>
          {userType == "Admin" ? (
            <div className="mb-3">
              <label>Secret Key</label>
              <input
                type="text"
                className="form-control"
                placeholder="Secret Key"
                onChange={(e) => setSecretKey(e.target.value)}
              />
            </div>
          ) : null}

          {userType == "User" ? (
            <div className="mb-3">
              <label> Employee id</label>
              <input
                type="text"
                className="form-control"
                placeholder="Employee id"
                onChange={(e) => setEmpid(e.target.value)}
              />
            </div>
          ) : null}

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>

          {userType == "User" ? (
            <div className="mb-3">
              <label> Department</label>
              <input
                type="text"
                className="form-control"
                placeholder="Department"
                onChange={(e) => setDepartment(e.target.value)}
              />
            </div>
          ) : null}

          {/* {userType == "User" ? (
            <div className="mb-3">
              <label> categoryName</label>
              <input
                type="text"
                className="form-control"
                placeholder="categoryName"
                onChange={(e) => setUserType(e.target.value)}
              />
            </div>
          ) : null} */}

          {/* {userType == "User" ? (
            <div className="mb-3">
              <label>  Department Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Employee id"
                onChange={(e) => setUserType(e.target.value)}
              />
            </div>
          ) : null} */}

          {/* {userType == "User" ? (
            <div className="mb-3">
              <label> Salary</label>
              <input
                type="text"
                className="form-control"
                placeholder="Salary"
                onChange={(e) => setUserType(e.target.value)}
              />
            </div>
          ) : null}  */}

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </div>
    </div>
  );
}
