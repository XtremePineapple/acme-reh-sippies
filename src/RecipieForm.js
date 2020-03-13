console.log('RecipieForm.js')
import React, {useState, useEffect} from "react"

const RecipieForm = ({ createRecpy }) => {
    const [name, setName] = useState('');
    const onSubmit = (ev)=> {
        ev.preventDefault();
        createRecpy({ name });
    };

    return (
        <section>
            <form onSubmit={ onSubmit }>
                <h2>Create Recipie</h2>
                <input value = { name } onChange = { ev => setName(ev.target.value) } />
                <button>Create Recipie</button>
            </form>
        </section>
    )
}

export default RecipieForm