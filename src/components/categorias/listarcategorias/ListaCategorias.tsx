import { useEffect, useState } from "react";
 import type Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";
import { buscar } from "../../../service/Service";

function ListaCategorias() {
	const [categorias, setCategorias] = useState<Categoria[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		buscarLista();
	}, []);

	async function buscarLista() {
		setIsLoading(true);
		try {
			const dados = await buscar("/categorias");
			setCategorias(dados);
		} catch (error) {
			alert("Erro ao buscar categorias.");
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
					{categorias.map((categoria) => (
						<CardCategorias key={categoria.id} categoria={categoria} />
					))}
				</div>
			)}
		</div>
	);
}

export default ListaCategorias;