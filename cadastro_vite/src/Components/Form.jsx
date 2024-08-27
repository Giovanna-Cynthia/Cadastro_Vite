import { useState } from "react";
import "./form.css";

const Form = () => {
    const initilForm = {
        nome: "",
        email: "",
        senha: "",
    };

    const [formState, setFormState] = useState(initilForm);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setFormState({...formState, [name]: value,});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState.nome);
        console.log(formState.email);
        console.log(formState.senha);

        setFormState(initilForm);
    };

    return (
        <div className="containerForm">
            <div>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-control">
                        <h2 className="h2Form">Cadastro de Administrador</h2>
                        <hr />
                        <label htmlFor="nome"><i>Nome: </i></label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formState.nome}
                            onChange={handleInput}
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

                    <div className="form-control">
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;
