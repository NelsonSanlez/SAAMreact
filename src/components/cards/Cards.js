import './cards.css';

export default function Cards(){
    return (
        <section className="container pt-5 cards-container pb-5">
            <div className="row">
                <div className="col card-container-col">
                    <div className="card mb-3 mt-3">
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.This is a
                                        wider card with supporting text below as a natural lead-in to additional
                                        content. This content is a little bit longer.This is a wider card with
                                        supporting text below as a natural lead-in to additional content. This content
                                        is a little bit longer.</p>
                                    <p className="card-text"><a href="#"><small className="text-body-secondary">Ler
                                                mais</small></a></p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <img src={require('../../images/designSemNome1.png')} className="img-fluid rounded-start" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card mb-3 mt-3">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><a href="#"><small className="text-body-secondary">Ler
                                                mais</small></a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card mb-3 mt-3">
                        <div className="row g-0">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><a href="#"><small className="text-body-secondary">Ler
                                                mais</small></a></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}