import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { dataContext } from '../context/dataContext';
import Img_grafica from '../../assets/img/grafica.jpeg';



function ResultsData() {

    const { dataFriccion } = useContext(dataContext);
    const { dataIri } = useContext(dataContext);
    const { equipoId } = useParams();

    const dataResults = [];

    switch (equipoId) {
        case 'mu_meter':
            
            const am = 0.1379;
            const bm = 0.7175;
            
            const aSpm = 14.2;
            const bSpm = 89.7;
            
            const alfam = 7.5;

            for (let i = 0; i < dataIri.length; i++) {
                
                const tx = dataIri[i][2];
                
                const sP = aSpm + bSpm * tx;
                
                const s = dataFriccion[i][3] * Math.sin(alfam);

                const frs = dataFriccion[i][2];

                const fr60 = frs * Math.exp((s-60)/sP)

                const f60 = am + bm * fr60;

                const absIni = dataFriccion[i][0];
                const absFin = dataFriccion[i][1];

                let rowData = {
                    absIni: absIni,
                    absFin: absFin,
                    sP: sP,
                    f60: f60,
                }
                dataResults.push(rowData);               
            }
            break; 
        case 'p_britanico':
            const ap = 0.056;
            const bp = 0.008;
            
            const aSpp = 14.2;
            const bSpp = 89.7;

            for (let i = 0; i < dataIri.length; i++) {
                
                const tx = dataIri[i][2];
                
                const sP = (aSpp + bSpp) * tx;
                
                const s = 10;

                const frs = dataFriccion[i][2];

                const fr60 = frs * Math.exp((s-60)/sP)

                const f60 = ( ap + bp ) * fr60;

                const absIni = dataFriccion[i][0];
                const absFin = dataFriccion[i][1];

                let rowData = {
                    absIni: absIni,
                    absFin: absFin,
                    sP: sP,
                    f60: f60,
                }
                dataResults.push(rowData)          
                 
            }
            break; 
        case 'scrim':
            const as = 0.033;
            const bs = 0.872;
            
            const aSps = 14.2;
            const bSps = 89.7;
            
            const alfas = 7.5; // Corresponde al equipo empleado

            for (let i = 0; i < dataIri.length; i++) {
                
                const tx = dataIri[i][2];
                
                const sP = (aSps + bSps) * tx;
                
                const s = dataFriccion[i][3] * Math.sin(alfas);

                const frs = dataFriccion[i][2];

                const fr60 = frs * Math.exp((s-60)/sP)

                const f60 = ( as + bs ) * fr60;

                const absIni = dataFriccion[i][0];
                const absFin = dataFriccion[i][1];

                let rowData = {
                    absIni: absIni,
                    absFin: absFin,
                    sP: sP,
                    f60: f60,
                }
                dataResults.push(rowData)          
                 
            }
            break; 
        case 'griptester': 
            const ag = 0.082;
            const bg = 0.910;
            
            const aSpg = 14.2;
            const bSpg = 89.7;
            
            const alfag = 7.5; // Corresponde al equipo empleado

            for (let i = 0; i < dataIri.length; i++) {
                
                const tx = dataIri[i][2];
                
                const sP = (aSpg + bSpg) * tx;
                
                const s = dataFriccion[i][3] * Math.sin(alfag);

                const frs = dataFriccion[i][2];

                const fr60 = frs * Math.exp((s-60)/sP)

                const f60 = ( ag + bg ) * fr60;

                const absIni = dataFriccion[i][0];
                const absFin = dataFriccion[i][1];

                let rowData = {
                    absIni: absIni,
                    absFin: absFin,
                    sP: sP,
                    f60: f60,
                }
                dataResults.push(rowData)          
                 
            }
            break; 
        default:
            break;
    }

    function download_csv_file() {  
        console.log(dataResults);
        //define the heading for each row of the data  
        var csv = 'AbsIni,AbsFin,Sp,F60\n';  
          
        //merge the data with CSV  
        dataResults.forEach(function(row) {  
            csv += Object.values(row).join(',');  
            csv += "\n";  
        });  
       
        //display the created CSV data on the web browser   
        //document.write(csv);  
         
        var hiddenElement = document.createElement('a');  
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
        hiddenElement.target = '_blank';  
          
        //provide the name for the CSV file to be downloaded  
        hiddenElement.download = 'resultsIFI.csv';  
        hiddenElement.click();  
    }  
    return (
        <div className='text-center bg-darkWhite' style={styles.heightContainer}>
            <div className='grid grid-cols-1'>
                <h1 className='pt-24 mt-1 font-bold text-3xl'>Resultados del Cálculo del IFI</h1>
            </div>
            <div className='grid grid-cols-2 gap-4'>
                <div className='pt-8 pl-14 text-left'>
                    <h3 className='text-2xl font-bold pb-6'>Resultados Obtenidos</h3>
                    <div className='text-center overflow-y-scroll shadow-lg' style={styles.dataResultsContainer}>
                        <table className='table-auto w-full border-collapse border border-slate-400'>
                            <thead className='font-bold text-xl'>
                                <tr>
                                    <th className='border p-5 bg-darkGrey text-darkWhite'>Abs Ini</th>
                                    <th className='border p-5 bg-darkGrey text-darkWhite'>Abs Fin</th>
                                    <th className='border p-5 bg-darkGrey text-darkWhite'>Sp</th>
                                    <th className='border p-5 bg-darkGrey text-darkWhite'>F60</th>
                                </tr>
                            </thead>
                            <tbody className='font-extralight fon'>
                                {
                                    dataResults.map((data) => {
                                        return(
                                        <>
                                            <tr>
                                                <th className='border bg-white'>{data.absIni}</th>
                                                <th className='border bg-white'>{data.absFin}</th>
                                                <th className='border bg-white'>{data.sP.toFixed(2)}</th>
                                                <th className='border bg-white'>{data.f60.toFixed(4)}</th>
                                            </tr>
                                        </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                        
                    </div>
                </div>
                <div>
                <div className='text-center grid place-content-center gap-10 pt-44'>
                    <div className='max-w-3xl'>
                        <img src={Img_grafica} alt="" />
                    </div>
                    <Link to={'/'}>
                        <button className='text-xl border p-3 border-green rounded hover:text-darkWhite hover:bg-green hover:transition' onClick={download_csv_file}>Descargar resultados en .csv</button>
                    </Link>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ResultsData;

const styles = {
    heightContainer: {
        height: '94vh'
    },

    dataResultsContainer: {
        maxHeight: '60vh'
    }
}