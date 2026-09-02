 
  
 function Home() {
   return (
     <div className="w-full min-h-[80vh] bg-cyan-100 flex items-center justify-center">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl w-full px-8">
    
    {/* Coluna de texto */}
    <div className=" flex flex-col gap-4">
      <h1 className="text-4xl font-bold text-slate-900">Seja bem vinde!</h1>
      <p className="text-lg text-slate-700">Aqui você encontra Medicamentos e Cosméticos!</p>
       
        <button className="bg-indigo-950 text-white px-4 py-2 rounded hover:bg-indigo-800 w-fit">
          Cadastrar Produto
        </button>
      
    </div>

    {/* Coluna de imagem */}
    <div className="flex justify-center">
      <img src="https://ik.imagekit.io/up25hc32q3/produtos_farmacia/2546639-ai(1)%201.png" alt="Ilustração farmácia" className="w-full max-w-md" />
    </div>

  </div>
</div>
   )
 }
 
 export default Home
 