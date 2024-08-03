import React,{useState,useEffect} from 'react'
import Header from './Components/Header'
import ContactForm from './Components/ContactForm'
import ContactList from './Components/ContactList'
import uuid4 from 'uuid4'

const App = () => {
  const localStorageKey='contact'
  const [contact, setcontact] = useState(()=>{
    return JSON.parse(localStorage.getItem(localStorageKey))||[]
  })

  useEffect(() => {
    localStorage.setItem(localStorageKey,JSON.stringify(contact))
  }, [contact])
  
  const addContact= (data)=>{
    console.log(data,"from contact form")
    setcontact([...contact,{id:uuid4(),data}])
  }
  const removeContact=(id)=>{
    const updatedList= contact.filter((val)=>{
      return val.id!==id;
    })
    setcontact(updatedList)
  }
  return (
    <div>
      <Header/>
      <ContactForm addContact={addContact}/>
      <ContactList contact={contact} removeContact={removeContact}/>
    </div>
  )
}

export default App
