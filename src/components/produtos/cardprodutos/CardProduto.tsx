import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";

interface CardProdutoProps {
	produto: Produto;
}

function CardProduto({ produto }: CardProdutoProps) {
	return (
		<div className="flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-lg 
	border-2 border-transparent hover:border-teal-600 
	transition-all bg-white justify-between">
			<img src={produto.foto} alt={produto.nome} className="w-full h-40 object-contain bg-white" />
			<div className="p-4 flex flex-col gap-1">
				<span className="text-xs text-slate-500">{produto.categoria?.nome}</span>
				<h3 className="text-xl font-bold">{produto.nome}</h3>
				<p className="text-lg text-indigo-950 font-semibold">
	{Number(produto.preco).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
</p>
			</div>
			<div className="flex">
				<Link to={`/editarproduto/${produto.id}`}
					className="w-full text-slate-100 bg-teal-600 hover:bg-teal-700 flex items-center justify-center py-2">
					Editar
				</Link>
				<Link to={`/deletarproduto/${produto.id}`}
					className="text-slate-100 bg-red-400 hover:bg-red-700 w-full flex items-center justify-center">
					Deletar
				</Link>
			</div>
		</div>
	);
}

export default CardProduto;