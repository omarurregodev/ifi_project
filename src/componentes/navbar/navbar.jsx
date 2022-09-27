import React, { useState } from 'react';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import logo_gevial from '../../assets/img/logo_gevial.png';
import logo_javeriana from '../../assets/img/logo_javeriana.png';

  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  function Navbar(props) {
    const [open, setOpen] = useState(0);
 
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

    const [ togglesidebar, setTogglesidebar ] = useState(false);


    const sidebarToggle = () => {
        setTogglesidebar(true);
    }
    const closeSidebar = () => {
        setTogglesidebar(false);
    }
    return (
        <div className='relative flex'>
            <div className= 'text-gray-100 flex justify-between row-auto w-screen h-auto fixed bg-green shadow-md'>
                <button className="sidebar-menu-btn px-6 rounded focus:outline-none focus:bg-gray-700 " onClick={sidebarToggle}>
                    <svg className="text-darkWhite h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" style={styles.iconColor}><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
                <div className="w-3/4 text-end p-6">
                    <h1 className='font-sains text-2xl text-white'>IFI EASY</h1>
                    <h1 className='font-sains text-sm text-darkWhite'>Cálculo de Índice de Fricción Internacional IFI mediante la metodología PIARC</h1>
                </div>
            </div>
            {togglesidebar
            ? 
            <div className="text-blue sidebar w-96 space-y-6 py-4 px-2 fixed inset-y-0 left-0 transform duration-200 ease-in-out bg-darkWhite shadow-lg z-50">
                <div className='w-full flex justify-end pr-4' onClick={closeSidebar}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <nav>
                    <h4 className='text-center font-bold  text-2xl pb-4'>Menu</h4>
                    <Accordion
                        open={open === 1}
                        icon={<Icon id={1} open={open} />}
                        onClick={() => handleOpen(1)} 
                        className="py-0 px-6 rounded  transition duration-200 hover:bg-darkGrey hover:text-white"
                    >
                        <AccordionHeader>Descripción</AccordionHeader>
                        <AccordionBody >
                        <p className='text-xs pl-4'>Plataforma web para el cálculo de IFI empleado equipos de medición de fricción de tipo rueda oblicua, Equipo estacionario y Equipo de rueda parcialmente bloqueada y de textura tipo perfilómetro de alta resolución. Teniendo en cuenta que las normativas no exigen un tipo de equipo realizar el análisis del coeficiente de rozamiento y que los resultados no son comparables entre sí, emplear una metodología integral puede aportar en el análisis de un parámetro de seguridad vial. Haciendo uso del “Experimento internacional para comparar y armonizar la textura del pavimento y los métodos de medición de la resistencia al deslizamiento” realizado por la PIARC.</p> 
                        </AccordionBody>
                    </Accordion>
                    <Accordion
                        open={open === 2}
                        icon={<Icon id={2} open={open} />}
                        onClick={() => handleOpen(2)}
                        className="py-0 px-6 rounded transition duration-200 hover:bg-darkGrey hover:text-white"
                    >
                        <AccordionHeader>Definiciones</AccordionHeader>
                        <AccordionBody>
                            <h4 className='text-sm font-bold pl-4'>Índice de Fricción Internacional:</h4>
                            <p className='text-xs py-2 pl-8'>Designado como IFI, es serie de indicadores internacionales que definen el estado de una 
                            carretera, basado en el modelo PIARC donde se definen los parámetros F60 y Sp, el primer 
                            valor representa la fricción y el segundo la macrotextura. 
                            </p>
                            <h4 className='text-sm font-bold pl-4'>Fricción:</h4>
                            <p className='text-xs py-2 pl-8'>Fuerza tangencial sobre una superficie que se opone al deslizamiento de un objeto a través 
                            de una superficie adyacente con la que está en contacto, La fuerza de fricción es paralela 
                            a la superficie y opuesta, en sentido, a su movimiento. 
                            </p>
                            <h4 className='text-sm font-bold pl-4'>Macrotextura:</h4>
                            <p className='text-xs py-2 pl-8'>Intersticios de distribución de agregado en la superficie que afecta la capacidad de drenaje 
                            que tiene la superficie del pavimento para despejar el agua de la superficie, lo cual permite 
                            un mejor contacto entre el neumático y la superficie de rodado.  
                            </p>
                        </AccordionBody>
                    </Accordion>
                </nav>
                <div className='flex w-100 justify-center'>
                    <h1 className='font-bold text-xl text-blue'>Agradecimientos especiales a:</h1>
                </div>
                <div className='flex w-100 justify-center'>
                    <img src={logo_gevial} alt="logo_gevial" className='max-h-24'/>
                </div>
                <div className='flex w-100 justify-center w-full'>
                    <img src={logo_javeriana} alt="logo_gevial" className='max-h-24' />
                </div>
            </div>
            : <div className="text-darkWhite sidebar w-96 space-y-6 py-4 px-2 fixed inset-y-0 left-0 transform -translate-x-full duration-200 ease-in-out bg-darkWhite"></div>
            }
        </div>
    );
}

export default Navbar;

const styles = {  
    iconColor: {
        fill: '#ffffff'
    }
}