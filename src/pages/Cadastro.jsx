import { useState } from "react";

export default function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <> 
            <h3 style={{ textAlign: 'center' }}>Cadastro</h3>
            <p style={{textAlign: 'center'}}>Preencha o formulário abaixo para criar sua conta:</p>
            
            <div className="container justify-content-center border rounded p-4 w-50">
            <form style={{display: 'flex', flexDirection: 'column'}} className="form">

                <div className="mb-3">
                    <label className="form-label">Nome:</label>
                    <input className="form-control" type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>

                <div className="mb-3">
                <label className="form-label">Email:</label>
                    <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

        
                <div className="mb-3">
                    <label className="form-label">Senha:</label>
                    <input className="form-control" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary align-self-center">Cadastrar</button>
            </form>
            <p style={{textAlign: 'center'}}>Já possui uma conta? <a href="/login">Faça login</a></p>
            </div>
        </>
    )
}