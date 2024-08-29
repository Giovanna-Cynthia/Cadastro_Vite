import "./rodape.css";

// Define um componente funcional = Rodape
const Rodape = () => {
    // O componente retorna um elemento JSX que será renderizado na interface
    return (

    // Define o elemento <footer> que representa o rodapé da página
        <footer>
            <div className="rodape">
            <div><a href="#">Contato: 11 4209-6398</a></div>
            <div><a href="#">Localização: Avenida Paulista - São Paulo</a></div>
            <div><a href="#">Suporte: cadastroadm@gmail.com</a></div>
            </div>
        </footer>
    )

}

// Exporta o componente Rodape para ser utilizado em outras partes da aplicação
export default Rodape;