import { useEffect, useState } from "react";
 import type Produto from "../../../models/Produto";
import { buscar } from "../../../service/Service";
import CardProduto from "../cardprodutos/CardProduto";
 
function ListaProdutos() {
	const [produtos, setProdutos] = useState<Produto[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		buscarLista();
	}, []);

	async function buscarLista() {
		setIsLoading(true);
		try {
			const dados = await buscar("/produtos");
			setProdutos(dados);
		} catch (error) {
			alert("Erro ao buscar produtos.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="flex justify-center w-full px-6 py-8">
			{isLoading ? (
				<p className="text-xl">Carregando...</p>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
					{produtos.map((produto) => (
						<CardProduto key={produto.id} produto={produto} />
					))}
				</div>
			)}
		</div>
	);
}

export default ListaProdutos;