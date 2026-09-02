import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
 import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../service/Service";

function DeletarCategoria() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();
	const [categoria, setCategoria] = useState<Categoria>({ nome: "" });
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (id !== undefined) buscarDados(id);
	}, [id]);

	async function buscarDados(id: string) {
		const dados = await buscar(`/categorias/${id}`);
		setCategoria(dados);
	}

	async function confirmar() {
		setIsLoading(true);
		try {
			await deletar(`/categorias/${id}`);
			alert("Categoria apagada!");
			navigate("/categorias");
		} catch (error) {
			alert("Erro ao apagar.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="container max-w-md px-4 pt-8 mx-auto">
			<h1 className="mb-4 text-3xl text-center">Deletar Categoria</h1>
			<p className="mb-4 text-center">Tem certeza que deseja apagar?</p>
			<div className="border rounded-2xl overflow-hidden">
				<header className="px-6 py-2 bg-indigo-950 text-white text-2xl">Categoria</header>
				<p className="p-8 text-2xl bg-white">{categoria.nome}</p>
				<div className="flex">
					<button onClick={() => navigate("/categorias")} className="w-full py-2 bg-red-400 text-white">Não</button>
					<button onClick={confirmar} disabled={isLoading} className="w-full py-2 bg-teal-600 text-white">
						{isLoading ? "Apagando..." : "Sim"}
					</button>
				</div>
			</div>
		</div>
	);
}

export default DeletarCategoria;