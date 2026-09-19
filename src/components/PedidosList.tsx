import { useLocalStorage } from '../hooks/useLocalStorage'

type Pedido = { id:string; cliente:string; fecha:string; total:number; bultos:number; estado:string }

export default function PedidosList(){
  const [pedidos] = useLocalStorage<Pedido[]>('db_pedidos', [
    { id:'1', cliente:'Kiosco El Sol', fecha: new Date().toISOString().slice(0,10), total: 12800, bultos: 4, estado:'Pendiente' }
  ])
  const totalDia = pedidos.filter(p=>p.fecha===new Date().toISOString().slice(0,10)).reduce((a,b)=>a+b.total,0)
  return (
    <div className="p-4 max-w-6xl mx-auto space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-biglia-900 text-white rounded-2xl p-4"><p className="text-xs opacity-70">Vendido Hoy</p><p className="text-xl font-black">${totalDia}</p></div>
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Pedidos Hoy</p><p className="text-xl font-black">{pedidos.length}</p></div>
        <div className="bg-white rounded-2xl p-4 border"><p className="text-xs text-gray-500">Bultos</p><p className="text-xl font-black">{pedidos.reduce((a,b)=>a+b.bultos,0)}</p></div>
      </div>
      <div className="space-y-3">
        {pedidos.map(p=>(
          <div key={p.id} className="bg-white rounded-2xl p-4 border flex justify-between">
            <div><p className="font-bold">{p.cliente}</p><p className="text-xs text-gray-500">{p.fecha} • {p.bultos} bultos</p></div>
            <div className="text-right"><p className="font-black">${p.total}</p><span className="text-[10px] bg-biglia-50 text-biglia-900 px-2 py-1 rounded-full font-bold">{p.estado}</span></div>
          </div>
        ))}
      </div>
    </div>
  )
}
