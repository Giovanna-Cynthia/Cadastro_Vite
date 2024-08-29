import "./header.css";

// Define um componente funcional = Header
const Header = () => {
    
    // O componente retorna um elemento JSX que será renderizado na interface
        return (
            <div className="headerContainer">
                {/* Define o elemento <header> para semântica e estrutura, representando a área do cabeçalho da página */}
                <header>
                <ul>
                    <li><a href="#"><b>Home</b></a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                </header>
            </div>
            
        );
    };
    // Exporta o componente Header para ser utilizado em outras partes da aplicação
    export default Header;