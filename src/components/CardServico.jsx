export default function CardServico(props) {
    return (
        <>
            <div className="col-6">
                {/* Transformar esse código em componente mais pra frente! */}
                <div className="card mb-3">
                    <div className="card-body ps-3 py-4">
                        <div className="row">
                            <div className="col-8">
                                <div><p className="card-title fs-6">{props.nome}</p></div>
                                <div className="avaliacao"> {props.avaliacao} ⭐</div>
                                <div className="text-secondary mb-3">{props.profissao}</div>
                                <p className="card-text">{props.cidade}, {props.estado}</p>
                                <button className="btn btn-primary me-3">Contratar</button>
                                <button className="btn btn-outline-primary">Avaliar</button>
                            </div>
                            <div className="col">
                                <div className="badge text-bg-success">Verificado</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}