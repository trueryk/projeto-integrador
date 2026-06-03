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


    return(
        <> 
            <h3 style={{ textAlign: 'center' }}>Cadastro</h3>
            <p style={{textAlign: 'center'}}>Preencha o formulário abaixo para criar sua conta:</p>
            
            <div className="container justify-content-center border rounded p-4 w-50">
            <form style={{display: 'flex', flexDirection: 'column'}} className="form">

                <div className="mb-3">

                <div className="mb-3">
                    <label className="form-label">CEP:</label>
                    <input className="form-control" type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
                </div>

                <div className="mb-3">Rua: {rua}</div>

                <div className="mb-3">Bairro: {bairro}</div>

                <div className="mb-3">Cidade: {cidade}</div>

                <div className="mb-3">Estado: {estado}</div>

                <div className="mb-3">
                    <label className="form-label">Número:</label>
                    <input className="form-control" type="text" value={numero} onChange={(e) => setNumero(e.target.value)} />
                </div>

                </div>

                <div className="mb-3">

                <div className="mb-3">
                    <label className="form-label">Nome:</label>
                    <input className="form-control" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">CPF:</label>
                    <input className="form-control" type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Data de Nascimento:</label>
                    <input className="form-control" type="date" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Telefone:</label>
                    <input className="form-control" type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Senha:</label>
                    <input className="form-control" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                </div>

                <button type="submit" className="btn btn-primary align-self-center">Cadastrar</button>

                

            </form>
            <p style={{textAlign: 'center'}}>Já possui uma conta? <a href="/login">Faça login</a></p>
            </div>
        </>
    )
}