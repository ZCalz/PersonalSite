import React, { forwardRef, useRef } from 'react'

function Contact({contactRef, scrollFunc}) {
    return (
        <div className="mt-24 w-80 flex items-center justify-center h-auto">
            <div ref={contactRef} className={`p-10 bg-white text-indigo-500 w-72 px-6 space-y-6 h-full shadow-2xl rounded-2xl`}>
                <div className="h-full w-full px-4 space-y-2">   
                    
                    <div className="text-indigo-500 flex items-center space-x-2">
                        <span className="text-2xl font-extrabold">Contact</span>
                    </div>
                    <p className="text-sm font-normal">
                            For inquires, please contact me through my email, thanks!
                        </p>
                    <h1 className='font-bold'>Email:</h1>
                        <p className="text-sm font-normal">
                            Calvinsze.coding@gmail.com
                        </p>
                    {/* stats */}
            
                </div>      
            </div>
        </div>
    )
}

export default Contact
