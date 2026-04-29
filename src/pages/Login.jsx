import { useState } from "react"
import "../Login.css"

export default function Login(){
    
const [Email,setEmail] = useState("");
const [Senha,setSenha] = useState("");
    
    return(
        <>
        <div className="Caixa_Login">
        <img src=""/>
        <h3>Bem-vindo ao ConectaServiços</h3>
        <p>Digite seu email e senha para logar, ou crie uma conta</p>
        <input placeholder="Digite seu Email" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input placeholder="Digite sua senha" value={Senha} onChange={(e)=>{setSenha(e.target.value)}}/>

        <button className="Botao_Login">Logar</button>

        <p>Não é cadastrado? clique aqui:</p>
        <button className="Botao_Cadastro">Cadastrar-se</button>

        </div>

        </>
    )
}