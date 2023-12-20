import "./InfoProdutoPage.css";
import Produto from "../components/content/Produto";
import ProdutosRelacionados from "../components/content/ProdutosRelacionados";
import VendedorInfo from "../components/content/VendedorInfo";
import Comentarios from "../components/content/Comentarios/Comentarios";
import Perguntas from "../components/content/Perguntas";

export default function InfoProdutoPage() {

  const imgUrl = "https://images.pexels.com/photos/"

  const produto = {
    info: {
      nome: "Motosung E7 plus",
            descricao: "O iPhone é uma linha de smartphones desenvolvida pela empresa de tecnologia Apple Inc. Renomado por sua combinação de design elegante, tecnologia inovadora e integração perfeita com o ecossistema da Apple, o iPhone se estabeleceu como um dos dispositivos móveis mais populares e influentes do mundo. Com um chassi de alumínio ou vidro, o iPhone incorpora um design minimalista, com atenção aos detalhes e uma estética moderna. Sua tela de alta resolução oferece cores vibrantes e nítidas, proporcionando uma experiência visual envolvente. O sistema operacional iOS, exclusivo da Apple, alimenta o iPhone, proporcionando uma interface de usuário intuitiva e acesso a uma vasta gama de aplicativos na App Store. Os iPhones são conhecidos por sua potência de processamento, desempenho eficiente e câmeras de alta qualidade. ",
            preco: 8000.00,
            nota: 4.5,
      imagens: [
        `${imgUrl}4386323/pexels-photo-4386323.jpeg`,
        `${imgUrl}1092644/pexels-photo-1092644.jpeg`,
        `${imgUrl}1092671/pexels-photo-1092671.jpeg`,
        `${imgUrl}887751/pexels-photo-887751.jpeg`
      ],
    },
    vendedor: {
      nome: "José Rodrigues",
      nota: 4.8,
      email: "joserodrigues@minhaloja.com",
      telefone: 11921212222,
    },
    produtosRelacionados: [
      {nome: "iPhone X", preco: 5000.00, img: `${imgUrl}4386323/pexels-photo-4386323.jpeg`},
      {nome: "iPhone 5", preco: 5000.00, img:  `${imgUrl}1092644/pexels-photo-1092644.jpeg`},
      {nome: "MCbook PRO", preco: 20000.00, img: "https://images.pexels.com/photos/18105/pexels-photo.jpg"},
      {nome: "iPhone 11", preco: 6000.00, img: `${imgUrl}1092671/pexels-photo-1092671.jpeg`},
      {nome: "iPhone 12", preco: 7000.00, img: `${imgUrl}887751/pexels-photo-887751.jpeg`},
      {nome: "iPhone 13", preco: 8000.00, img:  `${imgUrl}1092644/pexels-photo-1092644.jpeg`},
    ],
    comentarios: [
        { nome: "Carlos", dataPublicacao: "2023-01-15", mensagem: "Ótimo smartphone, estou adorando!", nota: 4.8 },
        { nome: "Ana", dataPublicacao: "2023-02-02", mensagem: "Design elegante e desempenho poderoso.", nota: 4.5 },
        { nome: "Lucas", dataPublicacao: "2023-02-10", mensagem: "Câmera incrível, mas a bateria poderia durar mais.", nota: 4.0 },
        { nome: "Maria", dataPublicacao: "2023-03-05", mensagem: "Rápido e eficiente, recomendo!", nota: 4.7 },
        { nome: "Pedro", dataPublicacao: "2023-03-20", mensagem: "Preço um pouco alto, mas vale a pena.", nota: 4.2 },
        { nome: "Isabela", dataPublicacao: "2023-04-08", mensagem: "Funcionalidades avançadas, mas a interface poderia ser mais amigável.", nota: 3.8 },
        { nome: "João", dataPublicacao: "2023-05-02", mensagem: "Leve e fácil de usar, estou satisfeito.", nota: 4.5 },
        { nome: "Camila", dataPublicacao: "2023-06-15", mensagem: "Entrega rápida, produto em perfeitas condições.", nota: 5.0 },
        { nome: "Rafael", dataPublicacao: "2023-07-01", mensagem: "Atualizações frequentes mantêm o desempenho em alta.", nota: 4.6 },
        { nome: "Juliana", dataPublicacao: "2023-07-20", mensagem: "Boa relação custo-benefício.", nota: 4.3 }
      ],
    perguntas: [
        {
          nome: "Fernanda", 
          dataPublicacao: "2023-01-20", 
          pergunta: "Qual é a capacidade da bateria?", 
          resposta: "A bateria tem uma capacidade de 4000mAh."
        },
        { nome: "Gabriel", dataPublicacao: "2023-02-05", pergunta: "Esse modelo suporta carregamento sem fio?"},
        { nome: "Mariana", dataPublicacao: "2023-02-18", pergunta: "É resistente à água?", resposta: "Sim, o smartphone possui certificação IP68, sendo resistente à água e poeira." },
        { nome: "Carlos", dataPublicacao: "2023-03-10", pergunta: "Quantos megapixels tem a câmera frontal?", resposta: "A câmera frontal tem 20 megapixels." },
        { nome: "Juliana", dataPublicacao: "2023-03-25", pergunta: "Vem com fones de ouvido na caixa?", resposta: "Sim, o produto inclui fones de ouvido na embalagem." },
        { nome: "Rafael", dataPublicacao: "2023-04-12", pergunta: "Posso expandir a memória com um cartão SD?", resposta: "Infelizmente, este modelo não suporta expansão de memória via cartão SD." },
        { nome: "Luiza", dataPublicacao: "2023-05-05", pergunta: "Qual é o sistema operacional pré-instalado?", resposta: "O smartphone vem com o sistema operacional Android 12 pré-instalado." },
        { nome: "Gustavo", dataPublicacao: "2023-06-18", pergunta: "Existem opções de cores disponíveis?", resposta: "Sim, oferecemos o smartphone nas cores preto, branco e azul." },
        { nome: "Isabela", dataPublicacao: "2023-07-02", pergunta: "O produto tem garantia?", resposta: "Sim, o smartphone possui garantia de 1 ano contra defeitos de fabricação." },
        { nome: "Thiago", dataPublicacao: "2023-07-22", pergunta: "Qual é o prazo de entrega para a minha região?", resposta: "O prazo de entrega varia de acordo com a sua localização, geralmente entre 5 a 7 dias úteis." }
      ]
  };

  return (
    <>
      <Produto produto = {produto.info}/>
      <VendedorInfo vendedor = {produto.vendedor} />
      <Comentarios comentarios = {produto.comentarios} />
      <Perguntas perguntas = {produto.perguntas} />
      <ProdutosRelacionados produtos={produto.produtosRelacionados} />
    </>
  );
}
