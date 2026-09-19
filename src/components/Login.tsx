import { useState } from 'react'
import logo from '../assets/logo.png'

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [pin, setPin] = useState('')
  const [error, setError] = useState('')
  const check = () => {
    const saved = localStorage.getItem('db_pin') ? JSON.parse(localStorage.getItem('db_pin') as string) : '1234'
    if (pin === saved) { onLogin() } else { setError('Clave incorrecta'); setTimeout(()=>setError(''), 2000) }
  }
  return (
    <div className="min-h-screen bg-biglia-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[32px] shadow-2xl p-8 w-full max-w-sm text-center border">
        <img src={logo} alt="Distribuidora Biglia" className="w-28 h-28 mx-auto rounded-full object-contain mb-4 shadow-lg" />
        <p className="text-xs tracking-[0.35em] text-biglia-900/60 font-bold">DISTRIBUIDORA</p>
        <h1 className="text-4xl font-black text-biglia-900 mb-2">BIGLIA</h1>
        <p className="text-sm text-gray-500 mb-6">Acceso Preventista</p>
        <input type="password" inputMode="numeric" value={pin} onChange={e=>setPin(e.target.value)} placeholder="Clave 1234" className="w-full bg-gray-50 border rounded-2xl px-4 py-4 text-center text-xl tracking-widest mb-3 focus:outline-none focus:ring-2 focus:ring-biglia-700" />
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
        <button onClick={check} className="w-full bg-biglia-900 text-white rounded-2xl py-4 font-bold hover:bg-biglia-700 transition">Entrar</button>
        <p className="text-[11px] text-gray-400 mt-4">DB + Camioneta • Azul Corporativo</p>
      </div>
    </div>
  )
}
