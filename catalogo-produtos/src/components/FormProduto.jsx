
import { useState } from "react";

function FormProduto({ adicionarProduto }) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const novoProduto = {
      id: Date.now(),
      nome,
      preco: Number(preco),
      descricao,
      imagem: ""
    };

    adicionarProduto(novoProduto);

    setNome("");
    setPreco("");
    setDescricao("");
  }

  return (
    <form className="produto-form" onSubmit={handleSubmit}>
      <div className="campo">
        <label htmlFor="nome">Nome do produto</label>
        <input
          id="nome"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          placeholder="Ex: Fone Bluetooth"
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="preco">Preço (R$)</label>
        <input
          id="preco"
          type="number"
          min="0.01"
          step="0.01"
          value={preco}
          onChange={(event) => setPreco(event.target.value)}
          placeholder="Ex: 199.90"
          required
        />
      </div>

      <div className="campo">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
          placeholder="Descreva o produto..."
          required
        />
      </div>

      <button type="submit" className="btn-adicionar">
        Adicionar produto
      </button>
    </form>
  );
}

export default FormProduto;
