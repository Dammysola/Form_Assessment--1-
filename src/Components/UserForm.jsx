import { useState } from "react"
import Style from './UserForm.module.css'


function UserForm() {
    const [UserDetails,SetUserDetails] = useState({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      gender: ""
    })
  
    const Details =(e)=>{
      const name = e.target.name
      const value = e.target.value
  
      SetUserDetails(
        (prevState)=>({
          ...prevState,
          [name]: value
     }
     ) )
    }
    
    const HandleSubmit =(e)=>{
      e.preventDefault()
      console.log(UserDetails.firstName, UserDetails.lastName, 
        UserDetails.username, UserDetails.gender,
        UserDetails.email, UserDetails.password );
    }
  
  
  
    return (
      <>
        <form onSubmit={HandleSubmit}>
            <div id={Style.main_div}>
              <h2>Sign Up</h2>
                <div id={Style.Name_div}>
                  <div className={Style.Input_div}>
                    {/* <label>First Name</label> */}
                    <input className={Style.Name_Input} type="text" name='firstName' placeholder='First Name'
                    value={UserDetails.firstName} onChange={Details} /> <br /> <br />
                  </div>
          
                  <div className={Style.Input_div}>
                    {/* <label>Last Name </label>  */}
                    <input className={Style.Name_Input} type="text" name='lastName' placeholder='Last Name'
                    value={UserDetails.lastName} onChange={Details} />  <br /> <br />
                  </div>
                </div>
        
        
                <div className={Style.Input_div}>
                  {/* <label>Username </label> */}
                  <input className={Style.Input} type="text" name='username'
                 placeholder="Username" value={UserDetails.username} onChange={Details} />  <br />  <br />
                </div>
        
                {/* <label>Gender </label>
                <select name="gender"  id={Style.Gender} 
                onChange={Details} value={UserDetails.gender} >
                    <option value=""></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select> <br/> <br/> */}
                
                
                <div className={Style.Input_div}>
                  {/* <label>Email </label> */}
                  <input className={Style.Input} type="email" name='email' placeholder="Email"
                  value={UserDetails.email} onChange={Details} /> <br /> <br />
                </div>
        
                <div className={Style.Input_div}>
                  {/* <label>Password </label>  */}
                  <input className={Style.Input} type="password" placeholder="Password" name='password'
                  value={UserDetails.password}  onChange={Details}/> <br/> <br/>
                </div>
        
                <button type='submit' id={Style.SubmitButton} onSubmit={HandleSubmit}>SUBMIT</button>
            </div>
  
        </form>
            
        {/* <h3>FirstName:{UserDetails.firstName} <br /></h3>
        <h3>LastName:{UserDetails.lastName} <br /></h3>
        <h3>UserName: {UserDetails.username} <br /></h3>
        <h3>Gender: {UserDetails.gender}</h3> */}
  
         
      </>
    )
  }
  
  export default UserForm
  