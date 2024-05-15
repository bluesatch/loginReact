import { useState } from "react"

const Header =( {users} )=> {

    const [ signinData, setSigninData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event)=> {
        const { name, value }  = event.target

        setSigninData(prevState => {
            return {
                ...prevState,
                [ name ]: value
            }
        })
    }

    const [ access, setAccess] = useState(false)

    const [ user, setUser ] = useState('')

    const handleSubmit =(event)=> {
        event.preventDefault()
        for (let i = 0; i < users.length; i++) {
            if ((users[i].username === signinData.username) && (users[i].password === signinData.password)) {

                setAccess(prevState => !prevState)
                setUser(users[i].username)
                setSigninData({
                    username: '',
                    password: ''
                })
            } 
        }
        console.log(access)
        return access
    }

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <h1 className="display-1 text-capitalize">login form</h1>
                        { access && <p className="access-text">
                            Greetings, {user}
                        </p> }
                    </div>
                    <div className="col-md-5">
                        <form 
                            onSubmit={handleSubmit} className="sign-in-form"
                        >
                            <p className="form-text text-capitalize">Member? Sign in</p>
                            <div className="mb-3">
                                <div className="row">
                                    <div className="col-auto">
                                        <label 
                                            htmlFor="signinUsername" className="form-label"
                                        >Username</label>
                                        <input
                                            type="text"
                                            id="signinUsername"
                                            name="username"
                                            value={signinData.username}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <label 
                                            htmlFor="signinPassword" className="form-label"
                                        >Password</label>
                                        <input
                                            type="password"
                                            id="signinPassword"
                                            name="password"
                                            value={signinData.password}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-auto">
                                        <button 
                                            type="submit" 
                                            className="btn btn-success">
                                            sign in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header