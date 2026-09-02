import { MagnifyingGlassIcon, PlusIcon, ShoppingCartIcon, UserIcon } from "@phosphor-icons/react"

function Navbar() {
  return (
    <>
      <div className="w-full bg-indigo-950 px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-xl">
            <PlusIcon size={28} weight="bold" className="text-red-500" />
            <span>FARMÁCIA</span>
          </div>

          {/* input + ícone dentro do MESMO container relative */}
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

          {/* links + ícones, tudo num único bloco */}
          <div className="hidden md:flex items-center gap-6 text-white">
            Categoria 
            Cadastrar Categoria 
            <UserIcon size={26} />
            <ShoppingCartIcon size={26} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar