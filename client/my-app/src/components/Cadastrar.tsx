import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastrar.css'

const Register = () => {

  const [Name, setName] = useState<string>();
  const [Description, setDescription] = useState<string>();
  const [Value, setValue] = useState<string>();
  const [AvailableSale, setAvailableSale] = useState<string>("1");
  const navigate = useNavigate();

  const submit = async () => {    
    try {
      await fetch("http://0.0.0.0:8080/products", {
        method: "POST",
        body: JSON.stringify({
          Name,
          Description,
          Value,
          AvailableSale          
        })        
      }).then(response => {
        navigate("/")
        console.log(response.json)
      })
      
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className='body'>          
    <div className='Register'>
      <h1>Cadastro do Produto</h1>
      <br />
      <form className='form'>
        <label className='labelregister' htmlFor='register'>Nome do Produto:</label>
        <br/>
        <input type="text" name="nome" className='nome' placeholder='Nome do Produto ' onChange={(e)=> setName(e.target.value)}        
        ></input>
        <br />
        <label htmlFor='descricao'>Descrição:</label>
        <br />
        <input type="text" name="descricao" className='descricao' placeholder='Descrição do produto' 
        onChange={(e)=> setDescription(e.target.value)}
        ></input>
        <br />
        <label htmlFor='valor'>Valor:</label>
        <br />
        <input className='valor' type="input" name="valor" id='valor' placeholder='Valor do produto' 
        onChange={(e)=> setValue(e.target.value)}
        ></input>
        <br />
        <br />
        <label className='label' htmlFor='register'>Disponível para compra</label>        
        <select name="sale" id="sale" onChange={(e)=> setAvailableSale(e.target.value)} >          
          <option value='1'>Sim</option>
          <option value='0'>Não</option>
        </select>
        <br />                
        <button className='button' type='submit' onClick={submit}>Cadastrar</button>
        
      </form>

    </div>
    </div>
  );
};

export default Register
