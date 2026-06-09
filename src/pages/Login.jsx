import { useState, useEffect } from "react"
import "../Login.css"

export default function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    useEffect(() => {
        if(sessionStorage.getItem('username') != null){
            redirectTo()
        }
    },[])

    const login = async () => {
        const response = await fetch(
            `http://localhost:8080/usuarios/${email}`
        )
        const data = await response.json()
        if (data == "") {
            alert("Este email não está cadastrado.")
        } else {
            if (data[0].password == senha) {
                sessionStorage.setItem('username', data[0].username)
                sessionStorage.setItem('cpf', data[0].cpf)
                setEmail("")
                setSenha("")
                redirectTo()
            } else {
                alert("Email ou senha incorretos!")
                setSenha("")
            }
        }
    }

    const redirectTo = () => {
        window.location.href = '/'
    }

    return (
        <>
            <div className="container_all">
                <div className="container justify-content-center border rounded p-5 w-50">
                    <h3 className="text-center">Login</h3>
                    <p className="text-center mb-5">Faça login para acessar sua conta:</p>
                    <form style={{ display: 'flex', flexDirection: 'column' }} className="form">
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Senha:</label>
                            <input className="form-control" type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>
                    </form>
                    <button className="btn btn-primary align-self-center my-3" onClick={login}>Logar</button>
                    <p className="text-center">Não possui uma conta? <a href="/cadastro">Cadastre-se</a></p>
                </div>
            </div>
        </>
    )
}