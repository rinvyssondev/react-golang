import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import api from "../api";
import './Products.css'
import { Container } from "react-bootstrap";

export default function Products(){
    const [products, setProducts] = useState<any[]>([]);

    const getProducts = async () => {        
       await api.get("/products").then((response)=> setProducts(response.data));
    };

    const navigate = useNavigate();

    function check(){
        return (
            navigate('/cadastrar')
        )
    }

    useEffect(()=>{
        getProducts();
    }, []);

    return (     
                products ? (                                                         
                <div className="bodyPage" >                                         
                <div className="App">                                                
                <h2 className="h2">Listagem de Produtos</h2>                              
                <br />          
                                <Container fluid="md">
                                <Table bordered responsive>                                                                    
                                    <thead>
                                        <tr>                                        
                                            <th>Nome</th>
                                            <th>Valor</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {products.map((p) => 
                                    <tr className="tr" key={p.ProductID}>
                                        <td>{p.Name}</td> 
                                        <td>{p.Value}</td>
                                    </tr> 
                                    )}                                                                                                            
                                    </tbody>
                                </Table>   
                                </Container>       
                                <br />                                                                                                
                    <button className="btn-products" onClick={check}>Novo produto</button>                               
                    
            </div>            
            </div>) : <div className="bodyPage">
                <div className="App">                
                <h2>Listagem de Produtos</h2>
                <br />
                <Container fluid="md">                
                <Table bordered responsive>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                </Table>
                </Container>
            </div>
            </div>
             )
                   
     }        

