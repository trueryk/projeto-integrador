import { useEffect, useState } from "react"

export default function Home() {
    const [busca, setBusca] = useState('')
    const [servicos, setServicos] = useState([])


    const servicosFiltrados = servicos.filter((servico) =>
        servico.nome.toLowerCase().includes(busca.toLowerCase())
    )

    return (
        <>
            <div className="container-fluid justify-content-center w-75">
                <div className="head">
                    <h3>Conectamos você aos melhores profissionais</h3>
                    <p>Platafroma especializada em conectar clientes e presadores de serviços qualificados e verificado. Sistema de avaliações transparente para decisões mais seguras.</p>
                </div>
                <div className="searchbar border rounded">
                    <div className="px-5 py-4">
                        <label for="nome" className="form-label">Nome</label>
                        <input type="nome" className="form-control " placeholder="Nome do profissional" value={busca} onChange={(e) => { setBusca(e.target.value) }}></input>
                    </div>
                </div>
                <div className="row justify-content-center py-5">
                    { servicosFiltrados.map((servico) =>
                    (
                        <CardServico nome={servico.nome} />
                    )
                    )}
                </div>
            </div>
        </>
    )
}