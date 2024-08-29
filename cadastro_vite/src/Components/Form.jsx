import { useState } from "react";
import "./form.css";

// Constante
const Form = () => {
    // Estado inicial do formulário, com campos para nome, email e senha
    const initilForm = {
        nome: "",
        email: "",
        senha: "",
    };

    // useState inicializa o estado do formulário com o objeto initilForm
    const [formState, setFormState] = useState(initilForm);

    // Função para lidar com as mudanças nos campos de input
    const handleInput = (event) => {
        const { name, value } = event.target; // Extrai o nome e valor do campo que foi alterado
        setFormState({ ...formState, [name]: value }); // Atualiza o estado do formulário com o novo valor
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
        console.log(formState.nome); // Exibe o valor do campo nome no console
        console.log(formState.email); // Exibe o valor do campo email no console
        console.log(formState.senha); // Exibe o valor do campo senha no console

        setFormState(initilForm); // Reseta o estado do formulário
    };

   
    return (
        <div className="containerForm"> {/* Div principal que envolve o formulário */}
            <div>
                <form onSubmit={handleSubmit}> {/* handleSubmit vinculada ao evento de envio */}
                    
                    <div className="form-control">
                        <h2 className="h2Form">Cadastro de Administrador <hr/> </h2> 
                        
                        <label htmlFor="nome"><i>Nome: </i></label>
                        <input
                            type="text" // Campo de entrada para texto
                            id="nome" // ID do campo
                            name="nome" // Nome do campo (usado para identificar no estado)
                            value={formState.nome} // Valor vinculado ao estado do formulário
                            onChange={handleInput} // Função para lidar com mudanças neste campo
                        />

                        <label htmlFor="email"><i>Email: </i></label> 
                        <input
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formState.email} 
                            onChange={handleInput}
                        />

                        <label htmlFor="senha"><i>Senha: </i></label> 
                        <input
                            type="password" 
                            id="senha"
                            name="senha" 
                            value={formState.senha} 
                            onChange={handleInput} 
                        />
                    </div>

                    <div className="form-control"> {/*  controle do botão  */}
                        <button type="submit">Enviar</button> {/* Botão para enviar no formulário */}
                    </div>
                </form>
            </div>
        </div>
    );
};

// Exporta o componente Form para ser utilizado em outras partes da aplicação
export default Form;
