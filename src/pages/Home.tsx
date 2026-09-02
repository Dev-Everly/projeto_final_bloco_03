import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { buscar } from "../service/Service"
import type Produto from "../models/Produto"
import CardProduto from "../components/produtos/cardprodutos/CardProduto"
 
function Home() {
	const [produtos, setProdutos] = useState<Produto[]>([])

	useEffect(() => {
		buscarProdutos()
	}, [])

	async function buscarProdutos() {
		try {
			const dados = await buscar("/produtos")
			setProdutos(dados)
		} catch (error) {
			console.log("Erro ao buscar produtos para a Home.")
		}
	}

	return (
		<>
			{/* Seção de boas-vindas (a que você já tinha) */}
			<div className="w-full min-h-[80vh] bg-cyan-100 flex items-center justify-center">
				<div className="grid grid-cols-1 lg:grid-cols-2 items-center max-w-6xl w-full px-8">
					<div className="flex flex-col gap-4">
						<h1 className="text-4xl font-bold text-slate-900">Seja bem vinde!</h1>
						<p className="text-lg text-slate-700">Aqui você encontra Medicamentos e Cosméticos!</p>
						<Link to="/cadastrarproduto">
							<button className="bg-indigo-950 text-white px-4 py-2 rounded hover:bg-indigo-800 w-fit">
								Cadastrar Produto
							</button>
						</Link>
					</div>
					<div className="flex justify-center">
						<img
							src="https://ik.imagekit.io/up25hc32q3/produtos_farmacia/2546639-ai(1)%201.png"
							alt="Ilustração farmácia"
							className="w-full max-w-md"
						/>
					</div>
				</div>
			</div>

			{/* Seção "Nossos Produtos" */}
			<div className="w-full px-6 py-12 flex flex-col items-center">
				<h2 className="text-3xl font-bold text-slate-900 mb-8">Nossos Produtos</h2>

				{produtos.length === 0 ? (
					<p className="text-slate-500">Nenhum produto cadastrado ainda.</p>
				) : (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
						{produtos.slice(0, 6).map((produto) => (
							<CardProduto key={produto.id} produto={produto} />
						))}
					</div>
				)}
			</div>
		</>
	)
}

export default Home