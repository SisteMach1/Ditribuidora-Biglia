import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export default function NuevoPedido({ onCreated }: { onCreated: ()=>void }){
  const [productos] = useLocalStorage<any[]>('db_productos', [])
  const [clientes] = useLocalStorage<any[]>('db_clientes', [])
  const [pedidos, setPedidos] = useLocalStorage<any[]>('db_pedidos', [])
  const [cliente, setCliente] = useState('')
  const [items, setItems] = useState<{id:string,nombre:string,cant:number,precio:number}[]>([])

  const total = items.reduce((a,b)=>a+b.cant*b.precio,0)
  const bultos = items.reduce((a,b)=>a+b.cant,0)

  const addItem = (p:any)=>{
    const ex = items.find(i=>i.id===p.id)
    if(ex) setItems(items.map(i=>i.id===p.id?{...i,cant:i.cant+1}:i))
    else setItems([...items, { id:p.id, nombre:p.nombre, cant:1, precio:p.precio }])
  }

  const guardar = ()=>{
    if(!cliente) return alert('Elegí cliente')
    const nuevo = { id: Date.now().toString(), cliente, fecha: new Date().toISOString().slice(0,10), hora: new Date().toLocaleTimeString(), total, bultos, estado:'Pendiente', items }
    setPedidos([nuevo, ...pedidos])
    const msg = `DISTRIBUIDORA BIGLIA%0APedido para ${cliente}%0AFecha: ${nuevo.fecha}%0ABultos: ${bultos}%0ATotal: $${total}%0A%0ADetalle:%0A${items.map(i=>`- ${i.cant}x ${i.nombre}`).join('%0A')}`
    window.open(`https://wa.me/?text=${msg}`, '_blank')
    onCreated()
  }

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-4">
      <div className="bg-white rounded-2xl p-4 border space-y-3">
        <select value={cliente} onChange={e=>setCliente(e.target.value)} className="w-full border rounded-xl px-3 py-3">
          <option value="">Seleccionar cliente</option>
          {clientes.map((c:any)=><option key={c.id} value={c.nombre}>{c.nombre}</option>)}
        </select>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-biglia-50 rounded-xl p-3"><p className="text-xs text-gray-500">Total</p><p className="font-black text-xl text-biglia-900">${total}</p></div>
          <div className="bg-biglia-50 rounded-xl p-3"><p className="text-xs text-gray-500">Bultos</p><p className="font-black text-xl text-biglia-900">{bultos}</p></div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 border">
        <p className="font-bold mb-3">Agregar productos</p>
        <div className="space-y-2 max-h-60 overflow-auto">
          {productos.map((p:any)=><button key={p.id} onClick={()=>addItem(p)} className="w-full text-left border rounded-xl px-3 py-2 hover:bg-biglia-50 flex justify-between"><span>{p.nombre}</span><span className="font-bold">${p.precio}</span></button>)}
        </div>
      </div>

      {items.length>0 && (
        <div className="bg-white rounded-2xl p-4 border space-y-2">
          {items.map(i=><div key={i.id} className="flex justify-between"><span>{i.cant}x {i.nombre}</span><span>${i.cant*i.precio}</span></div>)}
          <button onClick={guardar} className="w-full bg-biglia-900 text-white rounded-xl py-4 font-black mt-3">Guardar y enviar WhatsApp</button>
        </div>
      )}
    </div>
  )
}
