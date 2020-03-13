console.log('ChefForm.js')
import React, {useState, useEffect} from "react"

const ChefForm = ({ createChef }) => {
    const [name, setName] = useState('');
    const onSubmit = (ev)=> {
      ev.preventDefault();
      createChef({ name });
    };

    return (
      <section>
        <form onSubmit={ onSubmit }>
          <h2>Create Chef</h2>
          <input value={ name } onChange={ ev => setName(ev.target.value)} />
          <button>Create Chef</button>
        </form>
      </section>
    )
} 

export default ChefForm