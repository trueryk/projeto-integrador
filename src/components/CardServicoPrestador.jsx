export default function CardServicoPrestador(props) {
    return (
        <>
                <div className="card mb-3 mt-5">
                    <div className="card-body ps-3 py-4">
                        <div className="row">
                            <div className="col-8 ps-5">
                                <div><p className="card-title fs-5">{props.nome}</p></div>
                                <div className="avaliacao"> {props.avaliacao} ⭐</div>
                                <div className="text-secondary mb-3">{props.profissao}</div>
                                <p className="card-text">{props.cidade}, {props.estado}</p>
                                <p className="card-text preco">R$ {props.preco}</p>
                                <button className="btn btn-blue me-3" >{props.id_servico}Editar</button>
                                <button className="btn btn-outline-blue">Excluir</button>
                            </div>
                            <div className="col">
                                <div className="badge text-bg-success">Verificado</div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
