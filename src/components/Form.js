import React, { useState } from "react";

const Form = (props) => {
  const [users, setUsers] = useState({ name: "", email: "", course: "java script" });

  const onsubmitHandler = (event) => {
    //prevent from refreshing page
    event.preventDefault();
    // console.log(users);
    setUsers({name: "", email: "", course: "java script"})
    props.userData(users)

    
  };

  //make empty after sumiting form
 

  const changeHandler = (event) => {
    const fieldData = event.target.name;
    setUsers((prevState) => {
      return { ...prevState, [fieldData]: event.target.value };
    });
  };

  return (
    <>
      <div className="formContainer">
        <h2 className="title">User Registration:</h2>
        <form className="formClass" action="" onSubmit={onsubmitHandler}>
          <label htmlFor="name">Name: </label>
          <input
            className="formfield"
            type="text"
            name="name"
            id="name"
            onChange={changeHandler}
            value={users.name}
          />
          <label htmlFor="email">Email: </label>
          <input
            className="formfield"
            type="email"
            name="email"
            id="email"
            onChange={changeHandler}
            value={users.email}
          />
          <label htmlFor="course">Seleect Course: </label>
          <select
            className="formfield"
            htmlFor="course"
            name="course"
            id="course"
            onChange={changeHandler}
            value={users.course}
          >
            <option value="javascript"> Java Script</option>
            <option value="python"> Python</option>
            <option value="php"> PHP</option>
          </select>
          <button className=" btns">Submit</button>
        </form>
      </div>

    
    </>
  );
};
export default Form;
