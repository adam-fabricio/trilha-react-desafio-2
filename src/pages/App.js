import axios from 'axios';
import { Container } from './styles';
import React, { useState } from 'react';


const api = axios.create({
  baseURL: 'https://api.github.com'
})



function Input({value, onChange}) {
  return (
    <Container>
      <input value={value} onChange={onChange} />  
    </Container>
  )
}

function Button({onClick}) {
  return (
    <Container>
      <button onClick={onClick}>
        Buscar
      </button>
    </Container>
  )
}


function ItemRepo({repo, handlerRemoveRepo}) {

  const handleRemove = () => {
    handlerRemoveRepo(repo)
  }


  return (
    <Container onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target='_black'> ver repositorio</a><br/>
      <a href="#" rel="noreferrer" classname="remover"> remover</a><br/>
      <hr />
    </Container>
  )
}


function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handlerSearchRepo = async() => {
    const {data} = await api.get(`repos/${currentRepo}`)
    console.log(data);
    setRepos(itens => [...itens, data]);
    setCurrentRepo('');
    console.log("ok");
    return;
  }

  const handlerRemoveRepo = (value) => {
    setRepos(repos.filter((repo) => value.id !== repo.id));
    return;
  }


  return (
    <div className="App">
      <Container>
        <img src="" width={72} height="72" alt="github_logo"/>
        <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
        <Button onClick={handlerSearchRepo}/>
        {repos.map(repo => <ItemRepo handlerRemoveRepo={handlerRemoveRepo} repo={repo}/>)}
      </Container>
    </div>
  );
}
export default App;
