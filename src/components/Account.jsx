import React from 'react'
import { useState } from 'react'


const Acount = () => {
    const [userinput, setUserInput] = useState({})
    const [msg, setMsg] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userinput.email)
        console.log(userinput.key)
        if (!localStorage.getItem(userinput.email)) {
            localStorage.setItem(userinput.email, userinput.key)
            setMsg("Signuped")
        }
        else{
            setMsg("User is alredy registerd")
        }
    }
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUserInput(
            { ...userinput, [name]: value }
        )
    }

    return (
        <div>
            Acount Maker Page

            <form action="" onSubmit={handleSubmit}>
                {msg}
                <input type="text" name="email" value={userinput.email || ''} onChange={handleChange} placeholder="Enter email" />
                <input type="text" name="key" onChange={handleChange} placeholder="Enter Password" />
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default Acount 