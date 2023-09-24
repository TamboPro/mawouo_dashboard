import React from 'react';

function CardPanel(props) {
    return (
            <div className={`box-border ${props.margin}  ${props.heigth} ${props.width}  ${props.division} focus:outline-none focus:shadow-outline rounded-sm bg-dark-grafana shadow border ml-[0.14rem] border-gray-200 border-opacity-10`}>
                        <header>
                            <nav className="navbar navbar-expand-lg h-7  font-sans  hover:bg-dark-grafana-button shadow-md dark-grafana-header place-content-center text-center flex items-center w-full">
                                <span className='ml-2   text-1xl font-light text-gray-400'>{props.headerText}</span>
                            </nav>
                        </header> 

                        {props.children}
                        
                </div>
      
    );
}

export default CardPanel;

  {/*<div className={`box-border ${props.margin} ml-0.5 ${props.heigth} ${props.width} focus:outline-none focus:shadow-outline rounded-sm bg-dark-grafana shadow border border-gray-200 border-opacity-10`}>
        <header>
            <nav className="navbar navbar-expand-lg h-7  text-center font-sans  hover:bg-dark-grafana-button shadow-md dark-grafana-header relative flex items-center w-full justify-between">
                <h2 className='ml-2 text-center text-1xl font-semiBold text-gray-600'>{props.headerText}</h2>
            </nav>
        </header>
      
          {props.children}
     
    </div>*/}