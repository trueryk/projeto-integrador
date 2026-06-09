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

    const finalizarCadastro = async () => {
        try {
            const dadosEndereco = {
                cep: cep,
                rua: rua,
                numero: numero,
                bairro: bairro,
                cidade: cidade,
                estado: estado
            };

            const responseEnd = await fetch('http://localhost:8080/enderecos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosEndereco)
            });

            if (!responseEnd.ok) {
                throw new Error("Erro ao cadastrar o endereço.");
            }

            const enderecoSalvo = await responseEnd.json();

            const idDoEnderecoCriado = enderecoSalvo.id_Endereco;

            const dadosUsuario = {
                cpf: cpf,
                dataCadastro: new Date().toISOString().split('T')[0],
                dataNascimento: dataNascimento,
                email: email,
                nome: nome,
                password: senha,
                status: "Usuario",
                telefone: telefone,
                username: nome,
                endereco: {
                    id_Endereco: idDoEnderecoCriado
                }
            };

            const responseUsu = await fetch('http://localhost:8080/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosUsuario)
            });

            if (responseUsu.ok) {
                alert("Cadastro de endereço e usuário realizado com sucesso!");
                setCep("")
                setNumero("")
                setNome("")
                setCpf("")
                setDataNascimento("")
                setTelefone("")
                setEmail("")
                setSenha("")
                window.location.href = '/login'
            } else {
                console.error("Erro ao cadastrar usuário");
            }

        } catch (error) {
            console.error("Ocorreu um erro no fluxo de cadastro:", error);
        }
    };

    const validar_cadastro = () => {
        if (cpf == "" || nome == "" || dataNascimento == "" || telefone == "" || email == "" || senha == "" || cep == "") {
            alert("Faltam informações no formulário");
        } else {
            finalizarCadastro()
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
            <div className="container justify-content-center border rounded px-4 py-2 my-2 w-75">
                <h3 className="text-center">Cadastro</h3>
                <p className="text-center">Preencha o formulário abaixo para criar sua conta:</p>
                <form className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col">
                            <div className="mb-3">
                                <div className="form-group mb-2">
                                    <label htmlFor="cep" className="form-label">CEP:</label>
                                    <input id="cep" className="form-control mb-2" type="text" value={cep} onChange={(e) => setCep(e.target.value)} />

                                    <label htmlFor="rua" className="form-label">Rua: </label>
                                    <input id="rua" className="form-control mb-2" value={rua} disabled />

                                    <label htmlFor="bairro" className="form-label">Bairro: </label>
                                    <input id="bairro" className="form-control mb-2" value={bairro} disabled />

                                    <label htmlFor="cidade" className="form-label">Cidade: </label>
                                    <input id="cidade" className="form-control mb-2" value={cidade} disabled />

                                    <label htmlFor="estado" className="form-label">Estado: </label>
                                    <input id="estado" className="form-control mb-2" value={estado} disabled />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="numero" className="form-label">Número:</label>
                                    <input id="numero" className="form-control" type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group mb-2">
                                <label htmlFor="nome" className="form-label">Nome:</label>
                                <input id="nome" className="form-control" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="cpf" className="form-label">CPF:</label>
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
                <button className="btn btn-primary align-self-center" onClick={() => { validar_cadastro() }}>Cadastrar</button>
                <p className="text-center">Já possui uma conta? <a href="/login">Faça login</a></p>
            </div>
            <a href="/">
                <div className="fixed-top ms-5 mt-5 py-2 px-3 rounded back">
                    <i class="bi bi-house"></i>
                </div>
            </a>
        </>
    )
}