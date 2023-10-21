"use client"
import React, { useRef, useState } from 'react';
import CardPanel from './CardPanel';
import ParametresCard from './parametresCard';
import { JaaSMeeting, JitsiMeeting } from '@jitsi/react-sdk';
import Image from "next/image";
import ApexChart from './ApexChart'
import Knob from './knob';

Knob.defaultProps = {
    size: 100,
    min: 10,
    max: 30,
    numTicks: 0,
    degrees: 270,
    value: 0
  };


function PanelLeft() {

    const apiRef = useRef();
    const [ logItems, updateLog ] = useState([]);
    const [ showNew, toggleShowNew ] = useState(false);
    const [ knockingParticipants, updateKnockingParticipants ] = useState([]);

    const printEventOutput = payload => {
        updateLog(items => [ ...items, JSON.stringify(payload) ]);
    };

    const handleAudioStatusChange = (payload, feature) => {
        if (payload.muted) {
            updateLog(items => [ ...items, `${feature} off` ])
        } else {
            updateLog(items => [ ...items, `${feature} on` ])
        }
    };

    const handleChatUpdates = payload => {
        if (payload.isOpen || !payload.unreadCount) {
            return;
        }
        apiRef.current.executeCommand('toggleChat');
        updateLog(items => [ ...items, `you have ${payload.unreadCount} unread messages` ])
    };

    const handleKnockingParticipant = payload => {
        updateLog(items => [ ...items, JSON.stringify(payload) ]);
        updateKnockingParticipants(participants => [ ...participants, payload?.participant ])
    };

    const resolveKnockingParticipants = condition => {
        knockingParticipants.forEach(participant => {
            apiRef.current.executeCommand('answerKnockingParticipant', participant?.id, condition(participant));
            updateKnockingParticipants(participants => participants.filter(item => item.id === participant.id));
        });
    };

    const handleJitsiIFrameRef1 = iframeRef => {
        iframeRef.style.border = '10px solid #3d3d3d';
        iframeRef.style.background = '#3d3d3d';
        iframeRef.style.height = '400px';
        iframeRef.style.marginBottom = '20px';
    };

    const handleJitsiIFrameRef2 = iframeRef => {
        iframeRef.style.marginTop = '10px';
        iframeRef.style.border = '10px dashed #df486f';
        iframeRef.style.padding = '5px';
        iframeRef.style.height = '400px';
    };

    const handleJaaSIFrameRef = iframeRef => {
        iframeRef.style.border = '10px solid #3d3d3d';
        iframeRef.style.background = '#3d3d3d';
        iframeRef.style.height = '400px';
        iframeRef.style.marginBottom = '20px';
    };

    const handleApiReady = apiObj => {
        apiRef.current = apiObj;
        apiRef.current.on('knockingParticipant', handleKnockingParticipant);
        apiRef.current.on('audioMuteStatusChanged', payload => handleAudioStatusChange(payload, 'audio'));
        apiRef.current.on('videoMuteStatusChanged', payload => handleAudioStatusChange(payload, 'video'));
        apiRef.current.on('raiseHandUpdated', printEventOutput);
        apiRef.current.on('titleViewChanged', printEventOutput);
        apiRef.current.on('chatUpdated', handleChatUpdates);
        apiRef.current.on('knockingParticipant', handleKnockingParticipant);
    };

    const handleReadyToClose = () => {
        /* eslint-disable-next-line no-alert */
        alert('Ready to close...');
    };

    const generateRoomName = () => `AUI-AFRICA-GENESIC-YAOUNDE`; //`JitsiMeetRoomNo${Math.random() * 100}-${Date.now()}`;
    const domaine = () => `stream.mawouo.org`;

    // Multiple instances demo
    const renderNewInstance = () => {
        if (!showNew) {
            return null;
        }

        return (
            <JitsiMeeting
                domain = { domaine() }
                roomName = { generateRoomName() }
                getIFrameRef = { handleJitsiIFrameRef2 } />
        );
    };

    const renderButtons = () => (
        <div style = {{ margin: '15px 0' }}>
            <div style = {{
                display: 'flex',
                justifyContent: 'center'
            }}>
                <button
                    type = 'text'
                    title = 'Click to execute toggle raise hand command'
                    style = {{
                        border: 0,
                        borderRadius: '6px',
                        fontSize: '14px',
                        background: '#f8ae1a',
                        color: '#040404',
                        padding: '12px 46px',
                        margin: '2px 2px'
                    }}
                    onClick = { () => apiRef.current.executeCommand('toggleRaiseHand') }>
                    Raise hand
                </button>
                <button
                    type = 'text'
                    title = 'Click to approve/reject knocking participant'
                    style = {{
                        border: 0,
                        borderRadius: '6px',
                        fontSize: '14px',
                        background: '#0056E0',
                        color: 'white',
                        padding: '12px 46px',
                        margin: '2px 2px'
                    }}
                    onClick = { () => resolveKnockingParticipants(({ name }) => !name.includes('test')) }>
                    Resolve lobby
                </button>
                <button
                    type = 'text'
                    title = 'Click to execute subject command'
                    style = {{
                        border: 0,
                        borderRadius: '6px',
                        fontSize: '14px',
                        background: '#df486f',
                        color: 'white',
                        padding: '12px 46px',
                        margin: '2px 2px'
                    }}
                    onClick = { () => apiRef.current.executeCommand('subject', 'New Subject')}>
                    Change subject
                </button>
                <button
                    type = 'text'
                    title = 'Click to create a new JitsiMeeting instance'
                    style = {{
                        border: 0,
                        borderRadius: '6px',
                        fontSize: '14px',
                        background: '#3D3D3D',
                        color: 'white',
                        padding: '12px 46px',
                        margin: '2px 2px'
                    }}
                    onClick = { () => toggleShowNew(!showNew) }>
                    Toggle new instance
                </button>
            </div>
        </div>
    );

    const renderLog = () => logItems.map(
        (item, index) => (
            <div
                style = {{
                    fontFamily: 'monospace',
                    padding: '5px'
                }}
                key = { index }>
                {item}
            </div>
        )
    );

    const renderSpinner = () => (
        <div style = {{
            fontFamily: 'sans-serif',
            textAlign: 'center'
        }}>
            Loading..
        </div>
    );


    return (
    <div className = "content ml-1 transform ease-in-out duration-500 pt-1 px-2 md:px-2 pb-2 ">
        
        <div className = "flex flex-wrap my-1 -mx-4">

            <div className = "w-full h-full lg:w-1/2 lg:h-1/2 ">  
            
                <CardPanel headerText="Paramètres de l'habitable">
                  <ParametresCard />
                </CardPanel> 
               
                <div className = "flex w-full ml-0 mt-1">

                    <CardPanel headerText="Sp02" division="w-1/2">
                        <div className="place-content-center text-center">                            
                            <div className='py-9 lg:text-4xl xl:text-6xl text-gray-400 font-bold'> 97 <span className='py-9 lg:text-2xl xl:text-4xl text-gray-400 font-bold'> %</span> </div> 
                        </div> 
                    </CardPanel>
                    <CardPanel headerText="Fréquence cardiaque" division="w-1/2">
                        <div className="place-content-center text-center">                            
                            <div className='py-9 lg:text-4xl xl:text-6xl text-gray-400 font-bold'> 109 <span className='py-9 lg:text-2xl xl:text-4xl text-gray-400 font-bold'> Bpm</span> </div> 
                        </div> 
                    </CardPanel>
                    
                </div>  

                <div className = "flex w-full ml-0 mt-1">
                    <CardPanel headerText="Caméra interne" division="w-2/3">
                        <JitsiMeeting
                            domain = { domaine() }
                            roomName = { generateRoomName() }
                            spinner = { renderSpinner }
                            configOverwrite = {{
                                subject: 'lalalala',
                                //startScreenSharing: true,
                                defaultRemoteDisplayName : "African Genesic Health",
                                hideConferenceSubject: true,
                                toolbarButtons: [],
                                filmstrip: {
                                    disabled : true
                                },
                                tileView: {
                                    disabled: true,
                                }

                            }}
                            interfaceConfigOverwrite = {{
                                //VIDEO_LAYOUT_FIT: 'nocrop',
                                MOBILE_APP_PROMO: false,
                                TILE_VIEW_MAX_COLUMNS: 4,
                                MAXIMUM_ZOOMING_COEFFICIENT: 1.3
                            }}
                            onApiReady = { externalApi => handleApiReady(externalApi) }
                            onReadyToClose = { handleReadyToClose }
                            getIFrameRef = { handleJitsiIFrameRef1 } />
                        {/*<JaaSMeeting
                            roomName = { generateRoomName() }

                            // Update this with the `8x8.vc` or `stage.8x8.vc` version of interest
                            // and avoid mixing up different domains and release versions
                            // on the same page at the same time, as only the first
                            // external api script will be loaded.
                            // release = 'release-1234'

                            useStaging = { true }
                            getIFrameRef = { handleJaaSIFrameRef } /> */}
                    </CardPanel>
                
                    <CardPanel headerText="Panneau de contrôle" division="w-1/3">
                       
                    </CardPanel>   
                              
                </div>  
                
            </div>  

            <div className = "w-full px-1 lg:w-1/2">
                <div className = "flex w-full ml-0 ">

                    <CardPanel headerText="Consommation" division="w-1/2">                   
                     
                        <div className="flex place-content-center items-center">                          
                          
                            <Image className="py-8"
                                src="/assets/images/bolt.png"
                                width={64}
                                height={64}
                                alt="P"
                            /> 
                               <span className='py-8 lg:text-4xl xl:text-6xl text-gray-400 font-bold'> 0.2</span> <span className='py-8 lg:text-2xl xl:text-4xl text-gray-400 font-bold'> Kwh</span> 
                        </div> 
                    </CardPanel>
                    <CardPanel headerText="Niveau d eau dans le bac" division="w-1/2">
                    <div className="flex place-content-center items-center">                          
                          
                          <Image className="py-8"
                              src="/assets/images/moise.png"
                              width={64}
                              height={64}
                              alt="P"
                          /> 
                             <span className='py-8 lg:text-4xl xl:text-6xl text-gray-400 font-bold space-x-1'> 1.8 </span> <span className='py-8 lg:text-2xl xl:text-4xl text-gray-400 font-bold'> L</span> 
                      </div> 
                    </CardPanel>
                    
                </div>  

                <div className = "flex w-full ml-0 mt-1">
                    <CardPanel headerText="Historique de consommation" division="w-full">    
                      <ApexChart></ApexChart>
                    </CardPanel>
                                        
                </div> 
                <div className = "flex w-full ml-0 mt-1">
                  <CardPanel headerText="Poids du bébé" division="w-full"> 
                  <div className="flex place-content-center items-center">                          
                          
                          <Image className="py-4"
                              src="/assets/images/scale.png"
                              width={100}
                              height={100}
                              alt="P"
                          /> 
                             <span className='py-4 lg:text-4xl xl:text-6xl text-gray-400 font-bold space-x-1'> 2.5 </span> <span className='py-4 lg:text-2xl xl:text-4xl text-gray-400 font-bold'> Kg</span> 
                      </div>                   
                  </CardPanel>                                        
                </div>
                <div className = "flex w-full ml-0 mt-1">
                        <CardPanel headerText="Réglages" division="w-full">
                            <div className='xl:py-8 xl:px-8 lg:py-2 lg:px-2 flex place-content-center items-center'>
                                <Knob 
                                    numTicks={30}
                                    degrees={270}
                                    min={1}
                                    max={100}
                                    value={0}
                                    unit={' °C'}
                                />
                                <Knob 
                                    numTicks={30}
                                    degrees={270}
                                    min={1}
                                    max={100}
                                    value={0}
                                    unit={' %'}
                                />
                                
                            </div>
                        </CardPanel>   
                                                       
                </div>
            </div>       
            
        </div>
        
        
    </div>
    );
}

export default PanelLeft;