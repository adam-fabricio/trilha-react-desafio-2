import { Container } from './styles';
import React, { useState } from 'react';

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
      <h3>Olá</h3>
      <p>{repo}</p>
      <a href="google.com" target='_black'> ver repositorio</a><br/>
      <a href="#"> remover</a><br/>
      <hr />
    </Container>
  )
}


function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handlerSearchRepo = async() => {
    setRepos(itens => [...itens, currentRepo]);
    setCurrentRepo('');
    return;
  }

  const handlerRemoveRepo = (value) => {
    console.log(repos);
    setRepos(repos.filter((repo) => value !== repo));
    console.log(repos);
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
