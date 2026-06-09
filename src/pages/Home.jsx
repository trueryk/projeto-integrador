import { useEffect, useState } from "react"
import CardServico from "../components/CardServico"

export default function Home() {
    const [busca, setBusca] = useState('')
    const [servicos, setServicos] = useState([])
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        authCheck()
        loadServices()
    }, [])

    const loadServices = async () => {

        const response = await fetch(
            'http://localhost:8080/servicos/serviceComplete'
        )

        const data = await response.json()
        setServicos(data)

    }

    const servicosFiltrados = servicos.filter((servico) =>
        servico.nomePrestador.toLowerCase().includes(busca.toLowerCase())
    )

    const authCheck = async () => {
        if (sessionStorage.getItem('username') != null) {
            setCurrentUser({
                username: sessionStorage.getItem('username'),
                cpf: sessionStorage.getItem('cpf'),
                especialidade: sessionStorage.getItem('especialidade')
            })
        }
    }

    return (
        <>
            <div className="container-fluid justify-content-center w-75">
                <div className="head text-blue">
                    <h3 className="mt-5">Conectamos você aos melhores profissionais</h3>
                    <p>Platafroma especializada em conectar clientes e presadores de serviços qualificados e verificado. Sistema de avaliações transparente para decisões mais seguras.</p>
                </div>

                <div className="row justify-content-center py-2">
                    {servicosFiltrados == "" ?
                        <><span className="alert alert-secondary text-center">Sem serviços registrados ainda!</span></> :
                        <>
                            <div className="searchbar border rounded mb-5">
                                <div className="px-5 py-4">
                                    <label for="nome" className="form-label">Nome</label>
                                    <input type="nome" className="form-control " placeholder="Nome do profissional" value={busca} onChange={(e) => { setBusca(e.target.value) }}></input>
                                </div>
                            </div>
                            {servicosFiltrados.map((servico) => (
                                <CardServico 
                                    nome={servico.nomePrestador}
                                    avaliacao={servico.avaliacaoServico}
                                    profissao={servico.especialidade}
                                    estado={servico.estado}
                                    cidade={servico.cidade}
                                    preco={servico.valorServico}
                                />
                            ))}
                        </>
                    }
                </div>
            </div>
        </>
    )
}