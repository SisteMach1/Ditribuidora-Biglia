import { useState } from 'react'
import Header from './components/Header'
import Login from './components/Login'
import PedidosList from './components/PedidosList'
import NuevoPedido from './components/NuevoPedido'
import Catalogo from './components/Catalogo'
import Clientes from './components/Clientes'

type Tab = 'pedidos' | 'nuevo' | 'catalogo' | 'clientes'

export default function App(){
  const [logged, setLogged] = useState(()=> localStorage.getItem('db_logged')==='1')
  const [tab, setTab] = useState<Tab>('pedidos')

  const handleLogin = ()=>{ localStorage.setItem('db_logged','1'); setLogged(true) }

  if(!logged) return <Login onLogin={handleLogin} />

  return (
    <div className="min-h-screen bg-biglia-50">
      <Header />
      {tab==='pedidos' && <PedidosList />}
      {tab==='nuevo' && <NuevoPedido onCreated={()=>setTab('pedidos')} />}
      {tab==='catalogo' && <Catalogo />}
      {tab==='clientes' && <Clientes />}

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t px-2 py-2 flex justify-around max-w-6xl mx-auto rounded-t-[24px] shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <button onClick={()=>setTab('pedidos')} className={`flex flex-col items-center px-4 py-2 rounded-xl ${tab==='pedidos'?'bg-biglia-900 text-white':'text-gray-400'}`}><span className="text-[11px] font-bold">Pedidos</span></button>
        <button onClick={()=>setTab('clientes')} className={`flex flex-col items-center px-4 py-2 rounded-xl ${tab==='clientes'?'bg-biglia-900 text-white':'text-gray-400'}`}><span className="text-[11px] font-bold">Clientes</span></button>
        <button onClick={()=>setTab('nuevo')} className="bg-biglia-900 text-white w-14 h-14 rounded-full -mt-6 shadow-xl font-black text-2xl">+</button>
        <button onClick={()=>setTab('catalogo')} className={`flex flex-col items-center px-4 py-2 rounded-xl ${tab==='catalogo'?'bg-biglia-900 text-white':'text-gray-400'}`}><span className="text-[11px] font-bold">Catálogo</span></button>
        <button onClick={()=>{ localStorage.removeItem('db_logged'); location.reload() }} className="flex flex-col items-center px-4 py-2 rounded-xl text-gray-400"><span className="text-[11px] font-bold">Salir</span></button>
      </nav>
      <div className="h-24" />
    </div>
  )
}
