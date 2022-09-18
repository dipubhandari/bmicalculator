import react, { useState } from 'react'
import BmiCalculator from './components/BmiCalculator'
import "./app.css"
import Header from './components/Header'
import { Route, BrowserRouter, } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Login from './components/Login'
import Account from './components/Account'

const App = () => {

    const login = localStorage.getItem('login')
    console.log(login)
    return (
        <div>
            <BrowserRouter>

                <>

                    <Header />
                    {/* */}
                    <Routes>

                        <Route path="/login" element={<Login />} />
                        <Route path="/account" element={<Account />} />
                        <Route path="/success" element={(localStorage.getItem('login')) ? <BmiCalculator /> : <Login />} />

                    </Routes>

                </>
            </BrowserRouter>


        </div>

    )
}

export default App