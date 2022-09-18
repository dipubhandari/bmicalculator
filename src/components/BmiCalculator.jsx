import React, { useState } from 'react';
import "./Bmi.css"

const BmiCalculator = () => {
    const [Bmi, setBmi] = useState("");
    function handleForm(e) {
        e.preventDefault()
        console.log("lciked")
        console.log(e.target[0].value)
        const Wt = e.target[0].value;
        const Height = e.target[1].value
        setBmi(Wt / (Height * Height) * 703)
    }
    function reload() { }
    return (
        <>
            {/* bmi calculator ui */}
            <div className='bmidiv'>
                <form action="" onSubmit={handleForm}>
                    <h2 align="center">This is only for vip (authorised) user</h2>
                    <h1 className='heading'>BMI CALCULATOR</h1>
                    <div className="bmidata">
                        <span className='n'>Weight (in kg)</span><br />
                        <input type="text" name='weight' className='nin' /><br />
                        <span className='n'>Height (in ft)</span><br />
                        <input type="text" name='height' className='nin' /><br />
                        <button className='submit'>Submit</button><br />
                        <button className='reload' onClick={reload}>Reload</button><br />
                    </div>
                </form>
                <div className='resutl'>
                    <span>
                        Your BMI is: {Bmi}
                    </span>

                </div>
            </div>
        </>
    )
}

export default BmiCalculator