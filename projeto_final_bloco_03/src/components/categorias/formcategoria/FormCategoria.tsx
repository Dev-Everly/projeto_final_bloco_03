import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
 import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormCategoria() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();

	const [categoria, setCategoria] = useState<Categoria>({ nome: "" });
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (id !== undefined) {
			buscarPorId(id);
		}
	}, [id]);

	async function buscarPorId(id: string) {
		try {
			const dados = await buscar(`/categorias/${id}`);
			setCategoria(dados);
		} catch (error) {
			alert("Erro ao buscar categoria.");
		}
	}

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setCategoria({ ...categoria, [e.target.name]: e.target.value });
	}

	async function salvar(e: SyntheticEvent) {
		e.preventDefault();
		setIsLoading(true);
		try {
			if (id !== undefined) {
				await atualizar(`/categorias/${id}`, { ...categoria, id: Number(id) });
				alert("Categoria atualizada com sucesso!");
			} else {
				await cadastrar("/categorias", categoria);
				alert("Categoria cadastrada com sucesso!");
			}
			navigate("/categorias");
		} catch (error) {
			alert("Erro ao salvar categoria.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="container flex flex-col items-center px-2 pt-8 mx-auto">
			<h1 className="mb-8 text-3xl md:text-4xl">
				{id !== undefined ? "Editar Categoria" : "Cadastrar Categoria"}
			</h1>
			<form onSubmit={salvar} className="flex flex-col w-full max-w-md gap-4">
				<div className="flex flex-col gap-2">
					<label htmlFor="nome">Nome</label>
					<input
						type="text"
						id="nome"
						name="nome"
						value={categoria.nome}
						onChange={atualizarEstado}
						className="p-2 border-2 rounded border-slate-700"
						required
					/>
				</div>
				<button
					type="submit"
					disabled={isLoading}
					className="py-2 rounded text-white bg-indigo-950 hover:bg-indigo-800"
				>
					{isLoading ? "Salvando..." : (id !== undefined ? "Atualizar" : "Cadastrar")}
				</button>
			</form>
		</div>
	);
}

export default FormCategoria;