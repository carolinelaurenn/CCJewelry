import React from 'react'
import './SignUp.css'

function SignUp() {
    const [email, setEmail] = React.useState("");
    const [name, setName] = React.useState("");

    const handleSubmit = (event) => {
        console.log(`
        Email: ${email}
        Name: ${name}
        `);

        event.preventDefault();
        setTimeout(function(){window.location.reload();},10);
    }
    return (
        <div className="center">
        <div className="contents-signup">
            <form onSubmit={handleSubmit} className="form">
            <h1 className="signUp">Sign up for our email list!</h1>

            <label className="label">
                Name<br/>
                <input
                name="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required />
            </label>
            <br/>
            <br/>
            
            <label className="label">
                Email<br/>
                <input
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required />
            </label>
            <br/>
            <button className="btn">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default SignUp;