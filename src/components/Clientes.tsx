import { useLocalStorage } from '../hooks/useLocalStorage'
type Cliente = { id:string; nombre:string; whatsapp:string; direccion:string; barrio:string; deuda:number }

export default function Clientes(){
  const [clientes, setClientes] = useLocalStorage<Cliente[]>('db_clientes', [
    { id:'1', nombre:'Kiosco El Sol', whatsapp:'543834123456', direccion:'Av San Martin 123', barrio:'Centro', deuda: 12000 }
  ])
  const [q,setQ] = useState('')
  const filtrados = clientes.filter(c=>c.nombre.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-4">
      <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar cliente..." className="w-full border rounded-2xl px-4 py-3 bg-white" />
      {filtrados.map(c=>(
        <div key={c.id} className="bg-white rounded-2xl p-4 border flex justify-between items-center">
          <div><p className="font-bold">{c.nombre}</p><p className="text-xs text-gray-500">{c.direccion} - {c.barrio}</p></div>
          <div className="text-right">
            <a href={`https://wa.me/${c.whatsapp}`} target="_blank" className="text-xs bg-green-500 text-white px-3 py-1 rounded-full">WhatsApp</a>
            {c.deuda>0 && <p className="text-xs text-red-500 mt-1">Debe ${c.deuda}</p>}
          </div>
        </div>
      ))}
      <button onClick={()=>{
        const nombre=prompt('Nombre cliente'); if(!nombre) return;
        setClientes([...clientes, { id:Date.now().toString(), nombre, whatsapp:'', direccion:'', barrio:'', deuda:0 }])
      }} className="w-full border-2 border-dashed border-biglia-900/20 rounded-2xl py-4 font-bold text-biglia-900">+ Nuevo Cliente</button>
    </div>
  )
}
import { useState } from 'react'
