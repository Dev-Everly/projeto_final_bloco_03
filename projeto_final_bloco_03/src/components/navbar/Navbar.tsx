import { useState } from "react"
import { MagnifyingGlassIcon, PlusIcon, ShoppingCartIcon, UserIcon, ListIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <>
      <div className="w-full bg-indigo-950 px-6 py-3">
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-2 text-white font-bold text-xl">
            <PlusIcon size={28} weight="bold" className="text-red-500" />
            <span>FARMÁCIA</span>
          </Link>

          <div className="relative w-80 hidden md:block">
            <input
              type="text"
              placeholder="Procurar"
              className="rounded px-4 py-1 pr-10 w-full bg-white text-slate-700"
            />
            <MagnifyingGlassIcon
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-600"
            />
          </div>

          <div className="hidden md:flex items-center gap-6 text-white">
            <Link to="/categorias" className="hover:underline">Categoria</Link>
            <Link to="/cadastrarcategoria" className="hover:underline">Cadastrar Categoria</Link>
            <UserIcon size={26} />
            <ShoppingCartIcon size={26} />
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            <ListIcon size={28} />
          </button>
        </div>
      </div>

      {menuAberto && (
        <div className="md:hidden flex flex-col gap-3 bg-indigo-950 text-white px-6 py-4">
          <input
            type="text"
            placeholder="Procurar"
            className="rounded px-4 py-1 bg-white text-slate-700"
          />
          <Link to="/categorias" className="hover:underline">Categoria</Link>
          <Link to="/cadastrarcategoria" className="hover:underline">Cadastrar Categoria</Link>
          <div className="flex gap-4">
            <UserIcon size={26} />
            <ShoppingCartIcon size={26} />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar