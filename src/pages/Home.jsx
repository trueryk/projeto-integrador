import { useEffect, useState } from "react"

export default function Home() {
    const [busca, setBusca] = useState('')
    const [servicos, setServicos] = useState([{
        'nome': 'Ana Luiza',
        'profissao': 'Diarista',
        'estado': 'SP',
        'cidade': 'Indaiatuba',
        'avaliacao': '5'
    }, {
        'nome': 'Murilo Machado',
        'profissao': 'Diarista',
        'estado': 'SP',
        'cidade': 'Indaiatuba',
        'avaliacao': '4.5'
    }])

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
                        <label for="nome" class="form-label">Nome</label>
                        <input type="nome" class="form-control " placeholder="Nome do profissional" value={busca} onChange={(e) => { setBusca(e.target.value) }}></input>
                    </div>
                </div>
                <div className="row justify-content-center py-5">
                    {servicosFiltrados.map((servico) =>
                    (
                        <div className="col-5">
                            {/* Transformar esse código em componente mais pra frente! */}
                            <div class="card">
                                <div class="card-body ps-3 py-4">
                                    <div className="row">
                                        <div className="col-8">
                                            <div><p class="card-title fs-6">{servico.nome}</p></div>
                                            <div className="avaliacao"> {servico.avaliacao} ⭐</div>
                                            <div className="text-secondary mb-3">{servico.profissao}</div>
                                            <p class="card-text">{servico.cidade}, {servico.estado}</p>
                                            <button className="btn btn-primary me-3">Avaliações</button>
                                            <button className="btn btn-outline-primary">Avaliar</button>
                                        </div>
                                        <div className="col">
                                            <div className="badge text-bg-success">Verificado</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}