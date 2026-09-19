import {useState} from 'react'
import Header from './components/Header'
import Login from './components/Login'
import PedidosList from './components/PedidosList'
import NuevoPedido from './components/NuevoPedido'
import Catalogo from './components/Catalogo'
import Clientes from './components/Clientes'
type Tab='pedidos'|'nuevo'|'catalogo'|'clientes'
export default function App(){
const [logged,setLogged]=useState(()=>localStorage.getItem('db_logged')==='1')
const [tab,setTab]=useState<Tab>('pedidos')
if(!logged) return <Login onLogin={()=>{localStorage.setItem('db_logged','1');setLogged(true)}}/>
return(<div className='min-h-screen bg-biglia-50'><Header/>{tab==='pedidos'&&<PedidosList/>}{tab==='nuevo'&&<NuevoPedido onCreated={()=>setTab('pedidos')}/>}{tab==='catalogo'&&<Catalogo/>}{tab==='clientes'&&<Clientes/>}<nav className='fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2 rounded-t-[24px] max-w-6xl mx-auto'><button onClick={()=>setTab('pedidos')} className={`px-4 py-2 rounded-xl text-[11px] font-bold ${tab==='pedidos'?'bg-biglia-900 text-white':'text-gray-400'}`}>Pedidos</button><button onClick={()=>setTab('clientes')} className={`px-4 py-2 rounded-xl text-[11px] font-bold ${tab==='clientes'?'bg-biglia-900 text-white':'text-gray-400'}`}>Clientes</button><button onClick={()=>setTab('nuevo')} className='bg-biglia-900 text-white w-14 h-14 rounded-full -mt-6 font-black text-2xl'>+</button><button onClick={()=>setTab('catalogo')} className={`px-4 py-2 rounded-xl text-[11px] font-bold ${tab==='catalogo'?'bg-biglia-900 text-white':'text-gray-400'}`}>Catálogo</button><button onClick={()=>{localStorage.removeItem('db_logged');location.reload()}} className='px-4 py-2 text-[11px] text-gray-400 font-bold'>Salir</button></nav><div className='h-24'/></div>)}
