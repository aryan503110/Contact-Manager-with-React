import React,{useState} from 'react'
import './ContactForm.css'

function ContactForm({addContact}) {
    const [ContactData, setContactData] = useState({name:"",email:""})
    function handleChange(e){
        if(e.target.name=="name"){
            setContactData({...ContactData,name:e.target.value})
        }
        else{
            setContactData({...ContactData,email:e.target.value})
        }
    }
    function handleSubmit(e){
      if(ContactData.name==="" || ContactData.email===""){
        alert("Please fill up the Form")
      }
      else{ 
        console.log(ContactData)
        addContact(ContactData)
        setContactData({name:"",email:""})
    }
  }

  return (
    <div className='formContainer'>
      <form className='form' >
        <div className="inputGroup">
        <label className='label'>Enter Your Name:</label>
        <input className='input' type='text' placeholder='Enter Your Name' name='name' value={ContactData.name} onChange={handleChange}></input>
        </div>
        <br/>
        <div className="inputGroup">
        <label  className='label'>Enter Your Email:</label>
        <input className='input' type='email' placeholder='Enter Your Email' name='email' value={ContactData.email} onChange={handleChange}></input>
        </div>
      </form>
      <button className='button' onClick={handleSubmit}>Add Contact</button>
    </div>
  )
}

export default ContactForm
