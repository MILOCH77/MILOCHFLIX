import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';


function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  
  const [categorias, setCategorias] = useState([]);
  
   useEffect(() => {
      const URL_TOP = 'https://my-json-server.typicode.com/MILOCH77/milochflix-api/categorias';
      // E a ju ama variáveis
      fetch(URL_TOP)
        .then(async (respostaDoServidor) => {
          const resposta = await respostaDoServidor.json();
          setCategorias([
            ...resposta,
          ]);
        });

  }, []);
  
   return (
     
        <PageDefault>
          <h2>Cadastro de Categoria: {values.nome}</h2>

            <form onSubmit={function handleSubmit(infosDoEvento) {
              infosDoEvento.preventDefault();
              setCategorias([
                ...categorias,
                values
              ]);

              clearForm();
            }}>
              
            <FormField
              label="Nome da Categoria:"
              name="nome"
              value={values.nome}
              onChange={handleChange} 
            />

            <FormField
              label="Descrição:"
              type="textarea"
              name="descricao"
              value={values.descricao}
              onChange={handleChange} 
            />

            <FormField
              label="Cor:"
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange} 
            />          

              <Button>
                Cadastrar
              </Button>

            </form>


        {categorias.length === 0 && (
        <div>
          {/* Cargando... */}
          Loading...
        </div>
      )}
      
            <ul>
              {categorias.map((categoria) => (                
                  <li key={`${categoria.id}`}>
                    {categoria.nome}
                  </li>
                ))}
            </ul>

            <Link to="/">
              Voltar para a Home
            </Link>          
        </PageDefault>
      );
    }
export default CadastroCategoria;
