
import { useEffect, useState } from "react";
import ProdutoCard from "../components/ProdutoCard";
import FormProduto from "../components/FormProduto";

function Home() {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProdutos((produtosAtuais) => [
        ...produtosAtuais,
        {
          id: 1,
          nome: "Fone Bluetooth",
          preco: 149.90,
          descricao: "Fone sem fio com excelente qualidade de áudio.",
          imagem: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600"
        },
        {
          id: 2,
          nome: "Smartwatch",
          preco: 299.90,
          descricao: "Relógio inteligente para acompanhar sua rotina.",
          imagem: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600"
        },
        {
          id: 3,
          nome: "Câmera Digital",
          preco: 899.90,
          descricao: "Câmera compacta para registrar seus momentos.",
          imagem: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600"
        }
      ]);

      setCarregando(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  function adicionarProduto(novoProduto) {
    setProdutos((produtosAtuais) => [
      ...produtosAtuais,
      novoProduto
    ]);
  }

  return (
    <main className="container">
      <header className="header">
        <h1>Catálogo de Produtos</h1>
        <p>Encontre os melhores produtos para você.</p>
      </header>

      <section className="form-section">
        <h2>Cadastrar novo produto</h2>
        <FormProduto adicionarProduto={adicionarProduto} />
      </section>

      <section className="catalogo">
        <h2>Nossos produtos</h2>

        {carregando ? (
          <p className="carregando">Carregando produtos...</p>
        ) : (
          <div className="produtos-grid">
            {produtos.map((produto) => (
              <ProdutoCard
                key={produto.id}
                nome={produto.nome}
                preco={produto.preco}
                imagem={produto.imagem}
                descricao={produto.descricao}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Home;
