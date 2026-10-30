
function ProdutoCard({ nome, preco, imagem, descricao }) {
  return (
    <article className="produto-card">
      <img
        src={imagem || "https://placehold.co/600x400?text=Produto"}
        alt={nome}
        className="produto-imagem"
      />

      <div className="produto-info">
        <h3>{nome}</h3>

        <p className="produto-descricao">
          {descricao}
        </p>

        <strong>
          {Number(preco).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
          })}
        </strong>
      </div>
    </article>
  );
}

export default ProdutoCard;
