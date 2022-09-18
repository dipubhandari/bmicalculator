import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [msg, setMsg] = useState("")
  const history = useNavigate()
  const [input, setInput] = useState({})
  const handleChange = (e) => {

    const name = e.target.name
    const input = e.target.value
    setInput({ ...input, [name]: input })
  }
  function handleSubmit(e) {
    e.preventDefault()
    const user = localStorage.getItem(input.email)
    console.log("useris" + user)
    if (user) {
      history('/success')

      localStorage.setItem('login', 'true')
    }
    else {
      console.log('not login')
    }
    console.log(user)
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        Login Page

        <input type="text" name="email" onChange={handleChange} placeholder="Enter email" />
        <input type="submit" /> </form>

      {msg}
    </div>
  )
}

export default Login