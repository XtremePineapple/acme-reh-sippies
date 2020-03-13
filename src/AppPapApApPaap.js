console.log('appPapApApPaap')
import React, {useState, useEffect} from "react"
import axios from 'axios'

import ChefForm from './ChefForm'
import RecipieForm from './RecipieForm'

const AppPapApApPaap = ()=>{
    const [error, setError] = useState('');
    const [chefs, setChefs] = useState([]);
    const [recpy, setRecpy] = useState([]);

    const createChef = async(chef) => {
        try{
          const created = (await axios.post('/api/chefs', chef)).data;
          setChefs([...chefs, created]);
          setError('');
        }
        catch(ex){
          setError(ex.response.data.message)
        }
    }
    const createRecpy = async(recpy)=> {
      try{
        const created = (await axios.post('/api/recipies', recpy)).data;
        setRecpy([...recpy, created]);
        setError('');
      }
      catch(ex){
        setError(ex.response.data.message)
      }
    };

    return (
        <div>
            <h1>Chef-ipies</h1>
            <ChefForm createChef = { createChef } />
            <RecipieForm createRecpy = { createRecpy } />
        </div>
    )
}

export default AppPapApApPaap