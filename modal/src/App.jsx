import { useState } from 'react'
import './App.css'
import Modal from './components/modal.jsx'

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className='page'>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <div>
          <h1>AGUARDE O LANÇAMENTO</h1>
        </div>
      </Modal>
      <div className = 'conteiner-botao'>
        <button
        className = 'botao' 
        onClick={()=>{
           setModalOpen(!modalOpen);
           }}
           >
            Login
        </button>       
      </div>
    </div>
  )
}

export default App
