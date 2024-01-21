import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Animal() {
    const [animal, setAnimal] = useState(null)

    const { id } = useParams()

    useEffect(() => {
        async function fetchData() {
            const url = `${process.env.REACT_APP_BACKEND_URL}/animals/${id}`
            const response = await fetch(url)
            const data = await response.json()
            setAnimal(data)
        }

        fetchData()
    }, [id])

    const display = animal && (
        <div>
            <img src={animal.profilePicture} alt='animal' height={'100px'} />
            <h2>name: {animal.name}</h2>
            <h3>age: {animal.age}</h3>
            <h3>species: {animal.species}</h3>
            <p>description: {animal.description}</p>
        </div>
    )

    return (
        <div>
            {display}
        </div>
    )
}

export default Animal