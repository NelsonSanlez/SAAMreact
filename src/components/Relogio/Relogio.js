import "./Relogio.css";

const dataEx = [
    {
        nome: "Manuel",
        horarios: ["12:20", "18:00"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Filipe",
        horarios: ["14:00", "18:10"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:30", "17:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["13:20", "17:25"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:20", "18:00"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:00", "20:00"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:25", "20:00"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["13:00", "20:10"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["14:20", "21:00"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["14:20", "21:00"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["16:20", "21:40"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["15:20", "22:00"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:35", "13:35"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:35", "13:35"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:35", "13:35"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:35", "13:35"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:35", "13:35"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:35", "13:35"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:35", "13:35"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:35", "13:35"],
        enfermeiro: "Maria Santos"
    }, {
        nome: "Manuel",
        horarios: ["12:35", "16:35"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:35", "13:35"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["13:25", "21:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:10", "22:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:10", "22:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:10", "22:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:10", "22:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:10", "22:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["12:10", "22:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["13:10", "22:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["13:10", "22:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["13:10", "22:30"],
        enfermeiro: "Maria Santos"
    },
    {
        nome: "Manuel",
        horarios: ["13:10", "22:30"],
        enfermeiro: "Maria Santos"
    },

]

const Relogio = () => {

    // const meioD = '';
    // const meioDm = '';
    // const uma = 'grey 30deg 45deg';
    // const umaM ='';
    // const duas = '';
    // const duasM = '';
    // const tres = '';
    // const tresM = '';
    // const quatro = '';
    // const quatroM = '';
    // const cinco = '';
    // const cincoM = '';
    // const seis = '';
    // const seisM = '';
    // const sete = '';
    // const seteM = '';
    // const oito = '';
    // const oitoM = '';
    // const nove = '';
    // const noveM = '';
    // const dez = '';
    // const dezM = '';
    // const onze = '';
    // const onzeM = '';



    const cargaHoraria = function () {

        // const data = await fetch(`http://localhost:3000/api/receitas`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // })

        // const receitas = await data.json();

        const receitas = dataEx;

        const horas = {
            meioD: 0,
            meioDm: 0,
            uma: 0,
            umaM: 0,
            duas: 0,
            duasM: 0,
            tres: 0,
            tresM: 0,
            quatro: 0,
            quatroM: 0,
            cinco: 0,
            cincoM: 0,
            seis: 0,
            seisM: 0,
            sete: 0,
            seteM: 0,
            oito: 0,
            oitoM: 0,
            nove: 0,
            noveM: 0,
            dez: 0,
            dezM: 0,
            onze: 0,
            onzeM: 0,
        }

        //Loop para percorrer cada receita
        for (let i = 0; i < receitas.length; i++) {
            const element = receitas[i];


            //Loop para percorrer cada horarios no campo 'horarioss'
            element['horarios'].forEach((elem) => {

                let horaArr = elem.split(':');
                let hora = horaArr[0] + horaArr[1];



                //acresce no counter de cada hora
                if (hora >= "1200" && hora < "1230") {
                    horas.meioD = horas.meioD + 1
                } else if (hora >= "1230" && hora < "1300") {
                    horas.meioDm = horas.meioDm + 1
                } else if (hora >= "1300" && hora < "1330") {
                    horas.uma = horas.uma + 1
                } else if (hora >= "1330" && hora < "1400") {
                    horas.umaM = horas.umaM + 1
                } else if (hora >= "1400" && hora < "1430") {
                    horas.duas = horas.duas + 1
                } else if (hora >= "1430" && hora < "1500") {
                    horas.duasM = horas.duasM + 1
                } else if (hora >= "1500" && hora < "1530") {
                    horas.tres = horas.tres + 1
                } else if (hora >= "1530" && hora < "1600") {
                    horas.tresM = horas.tresM + 1
                } else if (hora >= "1600" && hora < "1630") {
                    horas.quatro = horas.quatro + 1
                } else if (hora >= "1630" && hora < "1700") {
                    horas.quatroM = horas.quatroM + 1
                } else if (hora >= "1700" && hora < "1730") {
                    horas.cinco = horas.cinco + 1
                } else if (hora >= "1730" && hora < "1800") {
                    horas.cincoM = horas.cincoM + 1
                } else if (hora >= "1800" && hora < "1830") {
                    horas.seis = horas.seis + 1
                } else if (hora >= "1830" && hora < "1900") {
                    horas.seisM = horas.seisM + 1
                } else if (hora >= "1900" && hora < "1930") {
                    horas.sete = horas.sete + 1
                } else if (hora >= "1930" && hora < "2000") {
                    horas.seteM = horas.seteM + 1
                } else if (hora >= "2000" && hora < "2030") {
                    horas.oito = horas.oito + 1
                } else if (hora >= "2030" && hora < "2100") {
                    horas.oitoM = horas.oitoM + 1
                } else if (hora >= "2100" && hora < "2130") {
                    horas.nove = horas.nove + 1
                } else if (hora >= "2130" && hora < "2200") {
                    horas.noveM = horas.noveM + 1
                } else if (hora >= "2200" && hora < "2230") {
                    horas.dez = horas.dez + 1
                } else if (hora >= "2230" && hora < "2300") {
                    horas.dezM = horas.dezM + 1
                } else if (hora >= "2300" && hora < "2330") {
                    horas.onze = horas.onze + 1
                } else if (hora >= "2330" && hora < "2400") {
                    horas.onzeM = horas.onzeM + 1
                } else {
                    return
                }
            })
        };

        return horas
    };



    const carga = cargaHoraria();
    const cargaArray = Object.values(carga);
    // console.log(cargaArray)

    const cores = () => {

        //Loop para percorrer o array de valores e atribuir cores consoante o valor
        const gradient = cargaArray.map((valor) => {
            if (valor > 0 && valor < 6) {
                return '#00ffff'
            } else if (valor > 5 && valor < 10) {
                return '#00aaff'
            } else if (valor > 9) {
                return '#0055cf'
            } else {
                return 'lightcyan'
            }
        });

        return gradient
    }

    const cor = cores()
    // console.log(cor)
    // console.log(cor[1])

    return (
        <div className="relContainer">
            
            <div className="circleRel" style={{
                background: `conic-gradient(
        ${cor[0] + " 15deg"},
        ${cor[1] + " 15deg 30deg"},
        ${cor[2] + " 30deg 45deg"},
        ${cor[3] + " 45deg 60deg"},
        ${cor[4] + " 60deg 75deg"},
        ${cor[5] + " 75deg 90deg"},
        ${cor[6] + " 90deg 105deg"},
        ${cor[7] + " 105deg 120deg"},
        ${cor[8] + " 120deg 135deg"},
        ${cor[9] + " 135deg 150deg"},
        ${cor[10] + " 150deg 165deg"},
        ${cor[11] + " 165deg 180deg"},
        ${cor[12] + " 180deg 195deg"},
        ${cor[13] + " 195deg 210deg"},
        ${cor[14] + " 210deg 225deg"},
        ${cor[15] + " 225deg 240deg"},
        ${cor[16] + " 240deg 255deg"},
        ${cor[17] + " 255deg 270deg"},
        ${cor[18] + " 270deg 285deg"},
        ${cor[19] + " 285deg 300deg"},
        ${cor[20] + " 315deg 330deg"},
        ${cor[21] + " 330deg 345deg"},
        ${cor[22] + " 345deg 360deg"}
        

    )`}}>
                <div className="inner"></div>
            </div>
            <div>
                <table>
                    <tr>
                        <td className="free"></td>
                        <td><strong>Nada</strong> a administrar</td>
                    </tr>
                    <tr>
                        <td className="light"></td>
                        <td><strong>1-5</strong> Medicações a administrar</td>
                    </tr>
                    <tr>
                        <td className="moderate"></td>
                        <td><strong>6-10</strong> Medicações a administrar</td>
                    </tr>
                    <tr>
                        <td className="busy"></td>
                        <td><strong>Mais de 10</strong> Medicações a administrar</td>
                    </tr>
                </table>

            </div>

        </div>
    );
}

export default Relogio;