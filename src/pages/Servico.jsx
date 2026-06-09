import { useEffect, useState } from "react"

export default function Servico() {
    const [servicos, setServicos] = useState([])
    const [currentUser, setCurrentUser] = useState([])
    const [status, setStatus] = useState('A')
    const [statusText, setStatusText] = useState('Adicionar serviço')
    const [categoria, setCategoria] = useState("")
    const [nome, setNome] = useState("")
    const [valor, setValor] = useState("")
    const [avaliacao, setAvaliacao] = useState("")
    const [editId, setEditId] = useState("")

    useEffect(() => {
        loadServices()
        authCheck()
    }, [])

    const adicionarServico = async () => {
        try {
            const responsePres = await fetch(`http://localhost:8080/prestadores/${currentUser.cpf}`)
            const prestador = await responsePres.json()
            const dadosServico = {
                nomeServico: nome,
                categoria: categoria,
                mediaAvaliacao: 5,
                valorServico: valor,
                prestador: {
                    especialidade: prestador.especialidade,
                    mediaAvaliacao: prestador.mediaAvaliacao,
                    cpf: prestador.cpf
                }
            }

            const responseServ = await fetch('http://localhost:8080/servicos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosServico)
            });

            if (!responseServ.ok) {
                throw new Error("Erro ao cadastrar o servico.");
            }

            limpar()
            window.location.reload()

        } catch (error) {
            console.error("Ocorreu um erro no fluxo de cadastro de serviço:", error);
        }
    };

    const authCheck = () => {
        if (sessionStorage.getItem('username') != null && sessionStorage.getItem('especialidade') != 'null') {
            setCurrentUser({
                username: sessionStorage.getItem('username'),
                cpf: sessionStorage.getItem('cpf'),
                especialidade: sessionStorage.getItem('especialidade')
            })
        } else {
            window.location.href = '/'
        }
    }

    const loadServices = async () => {
        let cpf = sessionStorage.getItem('cpf')
        const response = await fetch(
            `http://localhost:8080/servicos/prestador/${cpf}`
        )
        const data = await response.json()
        setServicos(data)
    }

    const initEdit = async (id) => {
        const response = await fetch(
            `http://localhost:8080/servicos/${id}`
        )
        const data = await response.json()
        setCategoria(data[0].categoria)
        setNome(data[0].nomeServico)
        setValor(data[0].valorServico)
        setAvaliacao(data[0].mediaAvaliacao)
        setEditId(id)
        setStatus('E')
        setStatusText(`Editando serviço: ${data[0].nomeServico}`)
    }

    const verificarServico = async () => {
        if (categoria == '' || valor == '' || nome == '') {
            alert("Faltam dados!")
        } else {
            adicionarServico()
        }
    }

    const editarServico = async (id) => {
        const dialogue = confirm("Deseja editar este serviço?")
        if (dialogue) {
            try {
                const responsePres = await fetch(`http://localhost:8080/prestadores/${currentUser.cpf}`)
                const prestador = await responsePres.json()
                const dadosServico = {
                    nomeServico: nome,
                    categoria: categoria,
                    mediaAvaliacao: 5,
                    valorServico: valor,
                    prestador: {
                        especialidade: prestador.especialidade,
                        mediaAvaliacao: prestador.mediaAvaliacao,
                        cpf: prestador.cpf
                    }
                }

                const responseServ = await fetch(`http://localhost:8080/servicos/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(dadosServico)
                });

                if (!responseServ.ok) {
                    throw new Error("Erro ao editar o servico.");
                }

                limpar()
                window.location.reload()

            } catch (error) {
                console.error("Ocorreu um erro no fluxo de ediçao de serviço:", error);
            }
        }
    };


    const verificarServicoEditar = async (id) => {
        if (categoria == '' || valor == '' || nome == '') {
            alert("Faltam dados!")
        } else {
            editarServico(id)
        }
    }

    const limpar = async () => {
        setCategoria('')
        setNome('')
        setValor('')
        setEditId('')
    }

    const cancel = async () => {
        limpar()
        setAvaliacao('')
        setStatus('A')
        setStatusText('Adicionar serviço')
    }

    const excluirServico = async (id) => {
        const dialogue = confirm("Deseja excluir este serviço?")
        if (dialogue) {
            const responseServ = await fetch(`http://localhost:8080/servicos/${id}`, {
                method: 'DELETE',
            });
            window.location.reload()
        }
    }

    return (
        <>
            <div className="container overflow-y-hidden">
                <div className="row">
                    <div className="col-5">
                        {servicos == "" ?
                            <>
                                <div className="d-flex justify-content-center mb-3 mt-5">
                                    <span className="alert alert-secondary text-center mt-5">Sem serviços registrados ainda!</span>
                                </div>
                            </>
                            :
                            <>
                                {servicos.map((servico) => (
                                    <div className="card mb-3 mt-5">
                                        <div className="card-body ps-3 py-4">
                                            <div className="row">
                                                <div className="col-8 ps-5">
                                                    <div><p className="card-title fs-5">{servico.nomePrestador}</p></div>
                                                    <div className="avaliacao"> {servico.avaliacaoServico} ⭐</div>
                                                    <div className="text-secondary mb-3">{servico.categoria}</div>
                                                    <p className="card-text">{servico.cidade}, {servico.estado}</p>
                                                    <p className="card-text preco">R$ {servico.preco}</p>
                                                    <button id={servico.idServico} className="btn btn-blue me-3" onClick={(e) => { initEdit(e.target.id) }}>Editar</button>
                                                    <button id={servico.idServico} className="btn btn-outline-blue" onClick={(e) => { excluirServico(e.target.id) }}>Excluir</button>
                                                </div>
                                                <div className="col">
                                                    <div className="badge text-bg-success">Verificado</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}</>
                        }
                    </div>
                    <div className="col-7 px-5 overflow-hide">
                        <form style={{ display: 'flex', flexDirection: 'column' }} className="form mt-5">
                            <h4 className="text-blue">{statusText}</h4>
                            {status == 'E' ? <p>{avaliacao}⭐</p> : <></>}
                            <div className="mt-3 mb-3">
                                <label className="form-label">Categoria</label>
                                <input className="form-control" type="text" value={categoria} onChange={(e) => { setCategoria(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Nome do serviço</label>
                                <input className="form-control" type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Valor do serviço</label>
                                <div className="d-flex">
                                    <span className="me-2 fs-6 text-center align-self-center">R$</span> <input className="form-control" type="text" value={valor} onChange={(e) => { setValor(e.target.value) }} />
                                </div>
                            </div>
                        </form>
                        {
                            status == 'A' ?
                                <>
                                    <div className="row d-flex justify-content-center">
                                        <button className="btn btn-blue col-5" onClick={verificarServico}>Adicionar</button>
                                        <button className="btn btn-outline-blue col-5 ms-5" onClick={limpar}>Limpar</button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="row d-flex justify-content-center">
                                        <button id={editId} className="btn btn-blue col-5" onClick={(e) => { verificarServicoEditar(e.target.id) }}>Editar</button>
                                        <button className="btn btn-outline-blue col-5 ms-5" onClick={cancel}>Cancelar</button>
                                    </div>
                                </>
                        }

                    </div>
                </div >
            </div >
        </>
    )
}