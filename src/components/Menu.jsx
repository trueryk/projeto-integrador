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
                cpf: sessionStorage.getItem('cpf'),
                especialidade: sessionStorage.getItem('especialidade')
            })
        }
    }

    const logout = () => {
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('cpf')
        sessionStorage.removeItem('especialidade')
        setCurrentUser([])
        window.location.href = '/login'
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-blue">
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
                                        <a className="nav-link active link-underline" href="/cadastro">Cadastrar-se<i class="bi bi-person-fill-add ms-2"></i> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active link-underline" href="/login">Login<i class="bi bi-box-arrow-in-right ms-2"></i></a>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link active">Bem vindo {currentUser.username}!</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active link-underline" href="/perfil">Perfil<i class="bi bi-person-fill ms-2"></i></a>
                                    </li>
                                    {
                                        currentUser.especialidade != "null" 
                                        ?
                                    <li className="nav-item">
                                        <a className="nav-link active link-underline" href="/servicos">Ver serviços<i class="bi bi-list-nested ms-2"></i></a>
                                    </li>
                                        :
                                        <></> 
                                    }
                                     <li className="nav-item">
                                        <a className="nav-link active link-underline" href="/" onClick={logout}>Logout<i class="bi bi-box-arrow-in-left ms-2"></i></a>
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