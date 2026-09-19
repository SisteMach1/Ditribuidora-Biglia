import logo from '../assets/logo.png'
export default function Header() {
  return (
    <header className="bg-white border-b sticky top-0 z-20">
      <div className="flex items-center gap-3 px-4 py-3 max-w-6xl mx-auto">
        <img src={logo} alt="DB" className="w-10 h-10 rounded-full object-contain bg-white" />
        <div>
          <p className="text-[10px] tracking-[0.3em] text-biglia-900/70 font-semibold">DISTRIBUIDORA</p>
          <p className="text-xl font-black text-biglia-900 -mt-1 leading-none">BIGLIA</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs text-gray-500">Online</span>
        </div>
      </div>
    </header>
  )
}
