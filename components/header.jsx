"use client"
import React, { useState } from 'react';

function HeaderPage() {
    const [open, setOpen] = useState(true);
  return (
    <div className="fixed w-full z-30 flex bg-[#08090b] dark:bg-[#0F172A]  items-center justify-center h-16 pl-10 pr-5">
      <div className="logo ml-12 text-white  transform ease-in-out duration-500 flex-none h-full flex items-center justify-center lg:tracking-tighter">
        Dashboard African Genesic Health - Yaoundé
      </div>
      {/* SPACER */}
      <div className="grow h-full flex items-center justify-center" />

      <div className="flex-none h-full text-center flex items-center justify-center">    

            <div className="inline-flex rounded-md shadow-sm px-2" role="group">
                <button type="button" className="px-4 py-1  bg-dark-grafana -r -b -gray-200  -opacity-10 rounded-[0.16rem] text-xs font-medium text-white  bg-transparent  rounded-l-[0.25rem] hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Profile
                </button>                
                <button type="button" className="px-4 py-1  bg-dark-grafana -r -b -gray-200  -opacity-10 rounded-[0.16rem]text-xs font-medium text-white bg-transparent   rounded-r-[0.25rem] hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Downloads
                </button>
            </div>
            
            <div className="inline-flex rounded-md shadow-sm px-2" role="group">
                <button type="button" className="px-4 py-1 bg-dark-grafana -r -b -gray-200  -opacity-10 rounded-[0.16rem]text-xs font-medium text-white  bg-transparent   rounded-l-[0.25rem] hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Profile
                </button>                
                <button type="button" className="px-4 py-1  bg-dark-grafana -r -b -gray-200  -opacity-10 rounded-[0.16rem]text-xs font-medium text-white bg-transparent   rounded-r-[0.25rem] hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Downloads
                </button>
            </div>

            <button type="button" className="px-2 py-1 bg-dark-grafana -r -b -gray-200  -opacity-10 rounded-[0.16rem]text-xs font-medium text-white  bg-transparent   rounded-[0.25rem] hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Profile
            </button>      

            <div className="inline-flex rounded-md shadow-sm px-2" role="group">
                <button type="button" className="px-4 py-1 bg-dark-grafana -r -b -gray-200  -opacity-10 rounded-[0.16rem]text-xs font-medium text-white  bg-transparent   rounded-l-[0.25rem] hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Profile
                </button>                
                <button type="button" className="px-4 py-1  bg-dark-grafana -r -b -gray-200  -opacity-10 rounded-[0.16rem]text-xs font-medium text-white bg-transparent   rounded-r-[0.25rem] hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Downloads
                </button>
            </div>

            
            <div className="inline-flex rounded-md shadow-sm" role="group">
                <button type="button" className="px-4 py-1 bg-dark-grafana -r -b -gray-200  -opacity-10 rounded-[0.16rem]text-xs font-medium text-white  bg-transparent   rounded-l-[0.25rem] hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    Profile
                </button>                
                <button type="button" onClick={() => setOpen(!open)} className="px-4 py-1  bg-dark-grafana -r -b -gray-200  -opacity-10 rounded-[0.16rem]text-xs font-medium text-white bg-transparent   rounded-r-[0.25rem] hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
                    1m 
                   
                </button>
            </div>
      </div>
      
    </div>
  );
}

export default HeaderPage;
