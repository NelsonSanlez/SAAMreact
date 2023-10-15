import './herosection.css';

export default function HeroSection() {
    return (
        <section className="heroSection">
            <div className="heroImage">

            </div>
            <div className="container">
                <div className="row circlesContainer">
                    <div className="col d-flex justify-content-center">
                        <div className="circle">
                            <h3>Simples e intuitivo</h3>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="circle">
                            <h3>Gestão de Stock</h3>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div className="circle">
                            <h3>Automatize o processo</h3>
                        </div>

                    </div>

                </div>


            </div>
        </section>
    )
};