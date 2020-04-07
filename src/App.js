import React,{useEffect, useState} from 'react';
import Recipe from './Recipe'
import {Form,Button} from 'react-bootstrap';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App =()=>{
  const APP_ID='98c8f2c3';
  const APP_KEY='9b7aaa12383baaa6233a79cfce41529b';
 
  const [recipes,setrecipes]=useState([]);
  const [search,setsearch]=useState('');
  const [query,setquery]=useState('chicken');
  useEffect(() => {
    getrecipes();
  }, [query]);

  const getrecipes=async()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setrecipes(data.hits);
    console.log(data);
  };

  const updataSearch=(e)=>{
    setsearch(e.target.value);
    console.log(search);
  }

  const getSearch=(e)=>{
    e.preventDefault();
    setquery(search);
    setsearch('');
  }


  return(
    <div className='App' > 
    <div className="contianer" style={{margin:'auto'}}>
    
     <h1 style={{margin:'auto'}}>React Recipe Ingredients Finder</h1>
     <div className="form" style={{margin:'40px'}}>
    <form onSubmit={getSearch} >
       
        <Form.Group controlId="formBasicEmail" style={{display: 'flex',width:'75%',margin:'auto'}}>
    
    <Form.Control type="text" style={{flex:'8',marginRight:'5px'}}  placeholder="Enter Food Name" value={search} onChange={updataSearch} />
   <Button variant="primary" style={{flex:'2'}} type="submit">
    Submit
  </Button>
  
  </Form.Group>
 </form>
    </div> 
    </div>
      
<div className='recipes' >
{recipes.map(recipe=>(
          <Recipe key={recipe.recipe.label} title={recipe.recipe.label} ingredients={recipe.recipe.ingredients} calories={recipe.recipe.calories} image={recipe.recipe.image}
          />
        ))}
</div>
        
    </div>
  );
};

export default App;
