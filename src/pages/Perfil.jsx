import { useEffect, useState } from "react"

export default function Perfil() {
    const [currentUser, setCurrentUser] = useState([])
    const [perfil, setPerfil] = useState([])

    useEffect(() => {
        authCheck()
        loadUserInfo()
    }, [])

    const loadUserInfo = async () => {
        const cpf = await sessionStorage.getItem('cpf')
        const response = await fetch(
            `
            http://localhost:8080/pessoas/${cpf}
            `
        )
        const text = await response.text()
        const textJson = [text]
        const data = JSON.parse(textJson)
        setPerfil(data)
    }

    const authCheck = async () => {
        if (sessionStorage.getItem('username') != null) {
            setCurrentUser({
                username: sessionStorage.getItem('username'),
                cpf: sessionStorage.getItem('cpf'),
                especialidade: sessionStorage.getItem('especialidade')
            })
        }
    }

    const data = (dataEntrada) => {
        const date = new Date(dataEntrada)
        const dataReturn = date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()
        return dataReturn
    }


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="fs-5 d-flex mt-5">
                            <div className="rounded-circle bg-blue p-2 me-2 circle text-center">{perfil.nome?.charAt(0).toUpperCase()}</div>
                            <div className="name p-2">{perfil.nome}</div>
                        </div>
                        <div className="ms-3 mt-3 text-secondary">
                            Membro desde: {data(perfil.dataCadastro)}
                        </div>
                        <div className="ms-3 mt-3">
                            <label className="form-label text-blue">Nome de usuário</label>
                            <input className="form-control" type="text" value={perfil.username} disabled />
                        </div>
                        <div className="ms-3 mt-3">
                            <label className="form-label text-blue">Email</label>
                            <input className="form-control" type="text" value={perfil.email} disabled />
                        </div>
                        <div className="ms-3 mt-3">
                            <label className="form-label text-blue">Telefone</label>
                            <input className="form-control" type="text" value={perfil.telefone} disabled />
                        </div>
                        <div className="ms-3 mt-3">
                            <label className="form-label text-blue">Data de nascimento</label>
                            <input className="form-control" type="text" value={data(perfil.dataNascimento)} disabled />
                        </div>
                    </div>
                    <div className="col-6 mt-5">
                        {currentUser.especialidade != "null" ?
                            <>
                                <div className="avaliacao ms-3 mt-3">
                                    {perfil.mediaAvaliacao} ⭐
                                </div>
                                <div className="servicesCont ms-3 mt-2 text-blue">
                                    Serviços registrados: {perfil.servicos?.length}
                                </div>
                                <div>
                                    <a className="btn btn-blue ms-3 mt-3" href="/servicos">Ver serviços</a>
                                </div>
                            </>
                            :
                            <>
                                <div className="ms-3 mt-2 text-blue">
                                    Quer se tornar prestador de serviços no site?
                                </div>
                                
                            </>
                        }
                    </div>
                </div>
            </div >
        </>
    )
}