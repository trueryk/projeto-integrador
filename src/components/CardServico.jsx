export default function CardServico(props) {
    return (
        <>
            <div className="col-6">
                <div className="card mb-3">
                    <div className="card-body ps-3 py-4">
                        <div className="row container-fluid">
                            <div className="col-8 ps-5">
                                <div><p className="card-title fs-5 d-flex">
                                    <div className="rounded-circle bg-blue p-2 me-2 circle text-center">{props.nome.charAt(0).toUpperCase()}</div>
                                    <div className="name p-2">{props.nome}</div>
                                </p></div>
                                <div className="text-secondary"> Serviço: {props.nomeServico}</div>
                                <div className="text-secondary"> Categoria: {props.categoria}</div>
                                <div className="avaliacao mb-3"> {props.avaliacao} ⭐</div>
                                <p className="card-text">{props.cidade}, {props.estado}</p>
                                <p className="card-text preco">R$ {props.preco}</p>
                                <button className="btn btn-blue me-3">Contratar</button>
                                <button className="btn btn-outline-blue">Avaliar</button>
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