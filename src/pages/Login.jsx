import { useState } from "react"
import "../Login.css"

export default function Login(){
    
const [Email,setEmail] = useState("");
const [Senha,setSenha] = useState("");
    
    return(
        <>
        <h3 style={{ textAlign: 'center' }}>Login</h3>
        <p style={{textAlign: 'center'}}>Faça login para acessar sua conta:</p>

        <div className="container justify-content-center border rounded p-4 w-50">
            <form style={{display: 'flex', flexDirection: 'column'}} className="form">
                <div className="mb-3">
                    <label className="form-label">Email:</label>
                    <input className="form-control" type="email" value={Email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Senha:</label>
                    <input className="form-control" type="password" value={Senha} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <button className="btn btn-primary align-self-center" type="submit">Logar</button>
            </form>
            <p style={{textAlign: 'center'}}>Não possui uma conta? <a href="/cadastro">Cadastre-se</a></p>
        </div>
        </>
    )
}