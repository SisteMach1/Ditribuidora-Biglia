import { useLocalStorage } from '../hooks/useLocalStorage'

type Producto = { id:string; nombre:string; categoria:string; precio:number; costo:number; stock:number; codigo:string }

const EJEMPLO: Producto[] = [
  { id:'1', nombre:'Sifón Soda 500ml x 6', categoria:'Soda', precio: 3200, costo: 2400, stock: 100, codigo:'SIF500' },
  { id:'2', nombre:'Bidón Agua 20L', categoria:'Agua', precio: 4500, costo: 3000, stock: 50, codigo:'AG20' },
  { id:'3', nombre:'Soda Sifón 1L Retornable', categoria:'Soda', precio: 1800, costo: 1200, stock: 200, codigo:'SIF1L' },
]

export default function Catalogo(){
  const [productos, setProductos] = useLocalStorage<Producto[]>('db_productos', EJEMPLO)
  const [q,setQ] = useState('')
  const filtrados = productos.filter(p=>p.nombre.toLowerCase().includes(q.toLowerCase()) || p.codigo.toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-4">
      <div className="flex gap-2">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar sifón, agua..." className="flex-1 border rounded-2xl px-4 py-3 bg-white" />
        <button onClick={()=>{
          const nombre = prompt('Nombre producto'); if(!nombre) return;
          const precio = Number(prompt('Precio venta')||'0');
          setProductos([...productos, { id: Date.now().toString(), nombre, categoria:'General', precio, costo: precio*0.7, stock:0, codigo: nombre.slice(0,4).toUpperCase() }])
        }} className="bg-biglia-900 text-white px-5 rounded-2xl font-bold">+ Nuevo</button>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {filtrados.map(p=>(
          <div key={p.id} className="bg-white rounded-2xl p-4 border flex justify-between">
            <div><p className="font-bold text-biglia-900">{p.nombre}</p><p className="text-xs text-gray-500">{p.codigo} • Stock {p.stock}</p></div>
            <div className="text-right"><p className="font-black">${p.precio}</p><p className="text-xs text-green-600">Ganancia ${p.precio - p.costo}</p></div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { useState } from 'react'
