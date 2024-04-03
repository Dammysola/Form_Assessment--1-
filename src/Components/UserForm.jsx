import { useState } from "react"
import Style from './UserForm.module.css'


function UserForm() {
  const [UserDetails, SetUserDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    gender: ""
  })

  const [FormValidation, SetFormValidation] = useState({
    firstName: false,
    lastName: false,
    username: false,
    email: false,
    password: false,
    gender: false
  })

  const Details = (e) => {
    const name = e.target.name
    const value = e.target.value

    SetUserDetails(
      (prevState) => ({
        ...prevState,
        [name]: value
      }
      ))
      HandleFormValidation(e)
  }

  const HandleSubmit = (e) => {
    e.preventDefault()

    HandleFormValidation(e)
    console.log(UserDetails.firstName, UserDetails.lastName,
      UserDetails.username, UserDetails.gender,
      UserDetails.email, UserDetails.password);
  }

  const HandleFormValidation =(e)=>{
    const {firstName, lastName,username, email, password, gender} = FormValidation

    let firstVal = UserDetails.firstName.length > 3 ? false : true;
    let lastVal = UserDetails.lastName.length  > 3 ? false : true;
    let usernameVal = UserDetails.length  > 3 ? false : true;
    let emailVal = UserDetails.email.includes("@") && UserDetails.email.includes(".") ? false : true
    let passVal = UserDetails.password.length  > 8 ? false : true;


    const name = e.target.name

    SetFormValidation({
      ... FormValidation,
      firstName: firstVal,
      username: usernameVal,
      email: emailVal,
      lastName: lastVal,
      password: passVal,
    })
  }



  return (
    <>
      <div id={Style.Div}>
        <form onSubmit={HandleSubmit}>
          <div id={Style.main_div}>
            <h2 id={Style.SignUp}>Sign Up</h2>
            <div id={Style.Name_div}>
              <div className={Style.Input_div}>
                <input className={Style.Name_Input} type="text" name='firstName' placeholder='First Name'
                  value={UserDetails.firstName} onChange={Details} /> 
                  {FormValidation.firstName && <div className={Style.val_text}>*FirstName too short</div> }<br /> <br />
              </div>

              <div className={Style.Input_div}>
                <input className={Style.Name_Input} type="text" name='lastName' placeholder='Last Name'
                  value={UserDetails.lastName} onChange={Details} /> 
                  {FormValidation.lastName && <div className={Style.val_text}>*LastName too short</div> } <br /> <br />
              </div>
            </div>


            <div className={Style.Input_div}>
              <input className={Style.Input} type="text" name='username'
                placeholder="Username" value={UserDetails.username} onChange={Details} /> {FormValidation.username && <div className={Style.val_text}>*Username too short</div> } <br />  <br />
            </div>

            {/* <label>Gender </label>
                <select name="gender"  id={Style.Gender} 
                onChange={Details} value={UserDetails.gender} >
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select> <br/> <br/> */}


            <div className={Style.Input_div}>
              <input className={Style.Input} type="email" name='email' placeholder="Email"
                value={UserDetails.email} onChange={Details} />
                {FormValidation.email && <div className={Style.val_text}>*Incorrect email format</div> }<br /> <br />
            </div>

            <div className={Style.Input_div}>
              <input className={Style.Input} type="password" placeholder="Password" name='password'
                value={UserDetails.password} onChange={Details} /> 
                {FormValidation.password && <div className={Style.val_text}>*Password too short</div> }<br /> <br />
            </div>

            <div id={Style.btn_div}>
              <button type='submit' id={Style.SubmitButton} onSubmit={HandleSubmit}>SUBMIT</button>
            </div>
          </div>

        </form>
      </div>

      {/* <h3>FirstName:{UserDetails.firstName} <br /></h3>
        <h3>LastName:{UserDetails.lastName} <br /></h3>
        <h3>UserName: {UserDetails.username} <br /></h3>
        <h3>Gender: {UserDetails.gender}</h3> */}


    </>
  )
}

export default UserForm
