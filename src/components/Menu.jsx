import { useEffect, useState } from "react"

export default function Menu() {
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        authCheck()
    }, [])

    const authCheck = async () => {
        if (sessionStorage.getItem('username') != null) {
            setCurrentUser({
                username: sessionStorage.getItem('username'),
                cpf: sessionStorage.getItem('cpf')
            })
        }
    }

    const logout = () => {
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('cpf')
        setCurrentUser([])
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Conecta Serviços</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {currentUser == "" ?
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link active link-underline" href="/cadastro">Cadastrar-se</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active link-underline" href="/login">Login</a>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link active">Bem vindo {currentUser.username}</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active link-underline" href="/perfil">Perfil</a>
                                    </li>
                                     <li className="nav-item">
                                        <a className="nav-link active link-underline" href="/" onClick={logout}>Logout</a>
                                    </li>
                                </>
                            }
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}