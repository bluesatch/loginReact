import { useState, useEffect } from "react"
import axios from "axios"
import Header from "./components/Header"
import Form from "./components/Form"
import Users from "./components/Users"

const App =()=> {

    const [ formData, setFormData ] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: ''
    })

    const [ users, setUsers ] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3005/api/user').then(res => setUsers(res.data))

    }, [])
    
    const handleChange =(event)=> {
        const { name, value } = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =()=> {
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/user/create',
            data: formData
        })
    }

    return (
        <>
            <Header />
            <Form 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
            />
            <Users users={users} />
        </>
    )
}

export default App