import { useEffect, useState, useRef } from 'react'
import lixeira from '../../assets/lixeiraRedSvg.svg'
import './style.css'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    let userFromAPi = await api.get('/usuarios')
    setUsers(userFromAPi.data)
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }

  async function deleteUsers(id) {
    await api.delete(`/usuarios/${id}`)
    getUsers()
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder='Nome' type="text" name='nome' ref={inputName}/>
        <input placeholder='Idade' type="number" name='idade' ref={inputAge}/>
        <input placeholder='Email' type="email" name='email' ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map( (user) => (
      <div key={user.id} className='card'>
        <div>
          <p>Nome: <span>{user.name}</span></p>
          <p>Idade: <span>{user.age}</span></p>
          <p>Email: <span>{user.email}</span></p>
        </div>
        <button type="button" onClick={() => deleteUsers(user.id)}>
          <img src={lixeira} />
        </button>
      </div>
      )) }

    </div>
  )
}

export default Home
