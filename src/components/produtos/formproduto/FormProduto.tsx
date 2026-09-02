import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
 import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormProduto() {
	const navigate = useNavigate();
	const { id } = useParams<{ id: string }>();

	const [produto, setProduto] = useState<Produto>({
		nome: "",
		preco: 0,
		foto: "",
		categoria: { id: 0, nome: "" },
	});

	const [categorias, setCategorias] = useState<Categoria[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		buscarCategorias();
		if (id !== undefined) buscarPorId(id);
	}, [id]);

	async function buscarCategorias() {
		const dados = await buscar("/categorias");
		setCategorias(dados);
	}

	async function buscarPorId(id: string) {
		const dados = await buscar(`/produtos/${id}`);
		setProduto(dados);
	}

	// Handler pra inputs de texto/número
	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setProduto({
			...produto,
			[e.target.name]: e.target.name === "preco" ? Number(e.target.value) : e.target.value,
		});
	}

	// Handler separado pro select, porque precisa montar o objeto Categoria inteiro
	function atualizarCategoria(e: ChangeEvent<HTMLSelectElement>) {
		const categoriaSelecionada = categorias.find((c) => c.id === Number(e.target.value));
		if (categoriaSelecionada) {
			setProduto({ ...produto, categoria: categoriaSelecionada });
		}
	}

	async function salvar(e: SyntheticEvent) {
		e.preventDefault();
		setIsLoading(true);
		try {
			if (id !== undefined) {
				await atualizar(`/produtos/${id}`, { ...produto, id: Number(id) });
				alert("Produto atualizado com sucesso!");
			} else {
				await cadastrar("/produtos", produto);
				alert("Produto cadastrado com sucesso!");
			}
			navigate("/produtos");
		} catch (error) {
			alert("Erro ao salvar produto.");
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="container flex flex-col items-center px-2 pt-8 mx-auto">
			<h1 className="mb-8 text-3xl md:text-4xl">
				{id !== undefined ? "Editar Produto" : "Cadastrar Produto"}
			</h1>
			<form onSubmit={salvar} className="flex flex-col w-full max-w-md gap-4">
				<div className="flex flex-col gap-2">
					<label htmlFor="nome">Nome</label>
					<input
						type="text" id="nome" name="nome"
						value={produto.nome} onChange={atualizarEstado}
						className="p-2 border-2 rounded border-slate-700" required
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="preco">Preço</label>
					<input
						type="number" id="preco" name="preco" step="0.01"
						value={produto.preco} onChange={atualizarEstado}
						className="p-2 border-2 rounded border-slate-700" required
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="foto">Foto (URL)</label>
					<input
						type="text" id="foto" name="foto"
						value={produto.foto} onChange={atualizarEstado}
						className="p-2 border-2 rounded border-slate-700"
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label htmlFor="categoria">Categoria</label>
					<select
						id="categoria"
						value={produto.categoria?.id ?? 0}
						onChange={atualizarCategoria}
						className="p-2 border-2 rounded border-slate-700"
						required
					>
						<option value={0} disabled>Selecione uma categoria</option>
						{categorias.map((c) => (
							<option key={c.id} value={c.id}>{c.nome}</option>
						))}
					</select>
				</div>

				<button
					type="submit" disabled={isLoading}
					className="py-2 rounded text-white bg-indigo-950 hover:bg-indigo-800"
				>
					{isLoading ? "Salvando..." : (id !== undefined ? "Atualizar" : "Cadastrar")}
				</button>
			</form>
		</div>
	);
}

export default FormProduto;