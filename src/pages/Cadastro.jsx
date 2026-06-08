import { useState, useEffect } from "react";

export default function Cadastro() {

    const [cpf, setCpf] = useState("");
    const [nome, setNome] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [bairro, setBairro] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [numero, setNumero] = useState("");
    const [rua, setRua] = useState("");

    const response = await fetch(
        'http://localhost:8080/enderecos',
        {
            method: 'POST',

        headers: {
          'Content-Type':
            'application/json'
        },

        body: JSON.stringify()
        }
    )

    const validar_cadastro = () => {
        if (cpf == "" || nome == "" || dataNascimento == "" || telefone == "" || email == "" || senha == "" || cep == "") {
            alert("Faltam informações no formulário");
        } else {
            const endereco = {
                
            }
        }
    }


    useEffect(() => {
        if (cep.length === 8) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => {
                    setBairro(data.bairro);
                    setCidade(data.localidade);
                    setEstado(data.uf);
                    setRua(data.logradouro);
                });
        } else {
            setBairro("");
            setCidade("");
            setEstado("");
            setRua("");
            setNumero("");
        }
    }, [cep]);



    return (
        <>
            <div className="my-3 container justify-content-center border rounded p-4 w-75">
                <h3 className="text-center">Cadastro</h3>
                <p className="text-center">Preencha o formulário abaixo para criar sua conta:</p>
                <form class="needs-validation" novalidate>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <div className="form-group mb-2">
                                    <label for="cep" className="form-label">CEP:</label>
                                    <input id="cep" className="form-control mb-2" type="text" value={cep} onChange={(e) => setCep(e.target.value)} />

                                    <label for="rua" className="form-label">Rua: </label>
                                    <input id="rua" className="form-control mb-2" value={rua} disabled />

                                    <label for="bairro" className="form-label">Bairro: </label>
                                    <input id="bairro" className="form-control mb-2" value={bairro} disabled />

                                    <label for="cidade" className="form-label">Cidade: </label>
                                    <input id="cidade" className="form-control mb-2" value={cidade} disabled />

                                    <label for="estado" className="form-label">Estado: </label>
                                    <input id="estado" className="form-control mb-2" value={estado} disabled />
                                </div>
                                <div className="form-group mb-2">
                                    <label for="numero" className="form-label">Número:</label>
                                    <input id="numero" className="form-control" type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group mb-2">
                                <label for="nome" className="form-label">Nome:</label>
                                <input id="nome" className="form-control" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div className="form-group mb-2">
                                <label for="cpf" className="form-label">CPF:</label>
                                <input id="cpf" className="form-control" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Data de Nascimento:</label>
                                <input className="form-control" type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Telefone:</label>
                                <input className="form-control" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Senha:</label>
                                <input className="form-control" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                            </div>
                        </div>

                    </div>
                </form>

                <button className="btn btn-primary align-self-center" onClick={validar_cadastro}>Cadastrar</button>
                <p className="text-center">Já possui uma conta? <a href="/login">Faça login</a></p>
            </div>
        </>
    )
}