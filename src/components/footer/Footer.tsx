import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'
 

function Footer() {
  return (
     <div className="w-full bg-indigo-950 py-6">
        <div className="flex flex-col items-center gap-2 text-white text-sm">
        <p className="font-bold">Farmácia Dev-Everly| Copyright: 2026</p>
        <p>Acesse nossas Redes Sociais</p>
        <div className="flex gap-4 mt-2">
          <LinkedinLogoIcon size={20} />
          <InstagramLogoIcon size={20} />
          <FacebookLogoIcon size={20} />
        </div>
      </div>

     </div>
      
   
  )
}

export default Footer
