import { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewAnimal() {
    const INITIAL_STATE = {
        name: '',
        age: '',
        species: '',
        description: '',
        profilePicture: ''
    }

    const navigate = useNavigate()

    const [animal, setAnimal] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        setAnimal({
            ...animal,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        animal.age = Number(animal.age)

        const url = `${process.env.REACT_APP_BACKEND_URL}/animals`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                 'content-type': 'application/json'
            },
            body: JSON.stringify(animal)
        })

        if (response.status !== 201) console.log('ERROR:') // add error handling here
        navigate('/')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={animal.name} name='name' placeholder='name'  />
                <input onChange={handleChange} type='number' value={animal.age} name='age' placeholder='age'  />
                <input onChange={handleChange} value={animal.species} name='species' placeholder='species'  />
                <input onChange={handleChange} value={animal.profilePicture} name='profilePicture' placeholder='profile picture'  />
                <input type="textarea" onChange={handleChange} value={animal.description} name='description' placeholder='description'  />
                <input type="submit" />
            </form>
        </div>
    )
}

export default NewAnimal