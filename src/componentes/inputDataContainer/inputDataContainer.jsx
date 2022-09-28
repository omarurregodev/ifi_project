import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Img_pBritanico from '../../assets/img/p_britanico.jpg';
import Img_muMeter from '../../assets/img/mu_meter.png';
import Img_griptester from '../../assets/img/griptester.jpg';
import Img_scrim from '../../assets/img/scrim.jpg';
import Papa from "papaparse";
import { dataContext } from "../context/dataContext";


function InputData() {

    // This state will store the Equipo Value
    const [equipoValue, setEquipoValue] = useState([]);

    // This state will store the recolected data
    // const [dataFriccion, setDataFriccion] = useState([]);
    // const [dataIri, setDataIri] = useState([]);

    const { addDataFriccion } = useContext(dataContext);
    const { addDataIri } = useContext(dataContext);

    const options = [
        {
          label: "Mu Meter",
          value: "mu_meter",
        },
        {
          label: "Péndulo Británico",
          value: "p_britanico",
        },
        {
          label: "Scrim",
          value: "scrim",
        },
        {
          label: "Griptester",
          value: "griptester",
        },
    ];

    const selectChange = () => {
        setEquipoValue(document.getElementById("equipos").value);      
    }

    useEffect(() => {
        switch (equipoValue) {
            case 'mu_meter':
                document.getElementById('mu_meter_div').classList.remove('hidden');
                document.getElementById('p_britanico_div').classList.add('hidden');
                document.getElementById('scrim_div').classList.add('hidden');
                document.getElementById('griptester_div').classList.add('hidden');
                break; 
            case 'p_britanico':
                document.getElementById('mu_meter_div').classList.add('hidden');
                document.getElementById('p_britanico_div').classList.remove('hidden');
                document.getElementById('scrim_div').classList.add('hidden');
                document.getElementById('griptester_div').classList.add('hidden');
                break; 
            case 'scrim':
                document.getElementById('mu_meter_div').classList.add('hidden');
                document.getElementById('p_britanico_div').classList.add('hidden');
                document.getElementById('scrim_div').classList.remove('hidden');
                document.getElementById('griptester_div').classList.add('hidden');
                break; 
            case 'griptester':
                document.getElementById('mu_meter_div').classList.add('hidden');
                document.getElementById('p_britanico_div').classList.add('hidden');
                document.getElementById('scrim_div').classList.add('hidden');
                document.getElementById('griptester_div').classList.remove('hidden');
                break; 
            default:
                break;
        }
    })

    const changeHandlerFriccion = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
        header: false,
        skipEmptyLines: true,
        complete: function (results) {
            console.log(results.data)
            addDataFriccion(results.data);
            },
        });
    };

    const changeHandlerIri = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
        header: false,
        skipEmptyLines: true,
        complete: function (results) {
            console.log(results.data)
            addDataIri(results.data);
            },
        });
    };

    const validacionCalculo = () => {
        const inputFriccion = document.getElementById("csvInputFriccion").value;
        const inputTextura = document.getElementById("csvInputTextura").value;
        const selectEquipos = document.getElementById("equipos").value;
        if (inputFriccion.length > 0 && inputTextura.length > 0 && selectEquipos.length > 0) {
            const a = document.getElementById("linkCalculo"); //or grab it by tagname etc
            a.click();
        } else {
            alert("Debe de cargar toda la información!")
        }
    }

    return (
        <div className='text-center bg-darkWhite h-full' style={styles.heightContainer}>
            <div className='grid grid-cols-1'>
                <h1 className='pt-28 mt-1 font-bold text-3xl'>Desarrollo del Cálculo del IFI</h1>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='pt-8 pl-14 text-left'>
                    <h3 className='text-2xl font-bold'>Alimentación de Variables</h3>
                    <h4 className='text-xl pt-6 pb-2 font-bold'>Variable Fricción</h4>
                    <h6 className='text-xl pt-2 pb-4'><span className='font-bold'>Paso 1.</span> Seleccione el equipo con el cuál se realizó la medición.</h6>
                    <select id="equipos" className="bg-white border border-gray-300 text-darkGrey text-base rounded-lg focus:ring-green focus:border-green block w-full p-2.5 cursor-pointer" onChange={selectChange}>
                        <option value="">Selecciona una opción</option>
                        {
                            options.map((data) => {
                               return <option value={data.value}>{data.label}</option>
                            })
                        }
                    </select>
                    <h6 className='text-xl pt-4 pb-4'><span className='font-bold'>Paso 2.</span> Cargue el archivo a procesar(los archivos permitidos son archivos con extensión ".csv" en formato: absInicial, absFinal, friccion, velocidad).</h6>
                    <div className='pt-4 text-center'>    
                        <input
                            onChange={changeHandlerFriccion}
                            id="csvInputFriccion"
                            name="file"
                            type="File"
                        />
                        {/* <button className='text-sm border p-2 border-green rounded hover:text-darkWhite hover:bg-green hover:transition' onClick={printArrayData}>Subir archivo .csv</button>           */}
                    </div>
                    <h4 className='text-xl pt-6 pb-2 font-bold'>Variable Textura</h4>
                    <h6 className='text-xl pt-4 pb-4'><span className='font-bold'>Paso 3.</span> Cargue el archivo a procesar(los archivos permitidos son archivos con extensión ".csv" en formato: absInicial, absFinal, textura).</h6>
                    <div className='pt-2 text-center'>
                        <input
                            onChange={changeHandlerIri}
                            id="csvInputTextura"
                            name="file"
                            type="File"
                        />
                    </div>
                    <div className='pt-8 text-center'>
                        <h6 className='text-xl pt-4 pb-4 text-left'><span className='font-bold'>Paso 4.</span> De click en el siguiente botón para realizar el cálculo de la variable IFI.</h6>
                        <button className='text-xl border p-3 border-green rounded hover:text-darkWhite hover:bg-green hover:transition' onClick={validacionCalculo}>Cálcular IFI</button>
                        <Link to={`/result/${equipoValue}`}>
                            <a href="" id="linkCalculo"></a> 
                        </Link>
                    </div> 
                    <div className='text-left pt-10'>
                        <p className='font-sm'><span className='font-bold'>Nota: </span> Los archivos deben de tener el mismo abscisado y mismo numero de filas,<span className='font-bold'> NO</span> se debe de incluir la fila de encabezado.</p>
                    </div>
                </div>
                <div className='grid place-content-center'>
                    <div id='mu_meter_div' className='flex max-w-2xl bg-blue text-darkWhite shadow-lg text-right hidden'>
                        <div className='w-2/3'>
                            <img src={Img_muMeter} alt="" />
                        </div>
                        <div className='w-1/3 px-4'>
                            <h1 className='text-lg font-bold pt-5'>Mu Meter</h1>
                            <p className='text-xs pt-4 text-justify'>Equipo con ruedas oblicuas, de origen británico, tiene dos ruedas, cada una con un ángulo divergente de deriva de 7.5º. Las ruedas giran libremente en un cierto ángulo de esviaje con respecto a la dirección de la trayectoria del vehículo.</p>
                        </div>
                    </div>
                    <div id='p_britanico_div' className='flex max-w-2xl bg-blue text-darkWhite shadow-lg text-right hidden'>
                        <div className='w-2/3'>
                            <img src={Img_pBritanico} alt="" />
                        </div>
                        <div className='w-1/3 px-4'>
                            <h1 className='text-lg font-bold pt-5'>Péndulo Británico</h1>
                            <p className='text-xs pt-4 text-justify'>Equipo tipo estacionario que consiste en un brazo pendular con un patín de caucho en un extremo que se deja caer para que resbale sobre la superficie a medir, midiendo la resistencia al deslizamiento por la pérdida de energía del patín de caucho al resbalar por la superficie.</p>
                        </div>
                    </div>
                    <div id='scrim_div' className='flex max-w-2xl bg-blue text-darkWhite shadow-lg text-right hidden'>
                        <div className='w-2/3'>
                            <img src={Img_scrim} alt="" />
                        </div>
                        <div className='w-1/3 px-4'>
                            <h1 className='text-lg font-bold pt-5'>Scrim</h1>
                            <p className='text-xs pt-4 text-justify'>Equipo con ruedas oblicuas de origen británico provisto de una sola rueda, funciona con un ángulo de deriva del neumático de 20º y está provisto de un sistema de riego autónomo.</p>
                        </div>
                    </div>
                    <div id='griptester_div' className='flex max-w-2xl bg-blue text-darkWhite shadow-lg text-right'>
                        <div className='w-2/3'>
                            <img src={Img_griptester} alt="" />
                        </div>
                        <div className='w-1/3 px-4'>
                            <h1 className='text-lg font-bold pt-5'>Griptester</h1>
                            <p className='text-xs pt-4 text-justify'>Equipo de rueda girada parcialmente bloqueada en la dirección de la trayectoria del vehículo. Permite mediciones continuas, se puede medir el gripnumber en cualquier posición de interés sobre la calzada.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InputData;

const styles = {
    heightContainer: {
        // height: '94vh'
    }
}