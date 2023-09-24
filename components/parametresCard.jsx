import React from 'react';

function ParametresCard() {
    return (
        <div class = "flex  flex-row w-full ">
            <div className="flex-auto h-8 lg:h-20 xl:h-32 mr-1 pb-24 bg-[#31ad3f] w-1/2">
                <div className="grid grid-cols-1 gap-2 place-content-center text-center">
                    <div className='xl:py-2'> </div> 
                    <div className='xl:py-1'> T Interne </div> 
                    <div className='lg:text-2xl xl:text-3xl'> 32.5 °C </div> 
                </div>                
            </div>
            <div className="flex-auto h-8 lg:h-20 xl:h-32 mr-1 pb-24 text-center bg-[#31ad3f] w-1/2">
                <div className="grid grid-cols-1 gap-2 place-content-center text-center">
                    <div className='xl:py-2'> </div> 
                    <div className='xl:py-1'> H Interne </div> 
                    <div className='lg:text-2xl xl:text-3xl'> 68 % </div> 
                </div> 
            </div>
            <div className="flex-auto h-8 lg:h-20 xl:h-32 mr-1 pb-24 text-center bg-[#31ad3f] w-1/2">
                <div className="grid grid-cols-1 gap-2 place-content-center text-center">
                    <div className='xl:py-2'> </div> 
                    <div className='xl:py-1'> T Externe </div> 
                    <div className='lg:text-2xl xl:text-3xl'> 32.5 °C </div> 
                </div> 
            </div>
            <div className="flex-auto h-8 lg:h-20 xl:h-32 mr-1 pb-24 text-center bg-[#31ad3f] w-1/2">
                <div className="grid grid-cols-1 gap-2 place-content-center text-center">
                    <div className='xl:py-2'> </div> 
                    <div className='xl:py-1'> H Externe </div> 
                    <div className='lg:text-2xl xl:text-3xl'> 74 % </div> 
                </div> 
            </div>
            <div className="flex-auto h-8 lg:h-20 xl:h-32  pb-24 text-center bg-[#31ad3f] w-1/2">
                <div className="grid grid-cols-1 gap-2 place-content-center text-center">
                    <div className='xl:py-2'> </div> 
                    <div className='xl:py-1'> T Interne </div> 
                    <div className='lg:text-2xl xl:text-3xl'> 36.5 °C </div> 
                </div> 
            </div>                                             
        </div>
    );
}

export default ParametresCard;