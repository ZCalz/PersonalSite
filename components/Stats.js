function Stats({statsVisibility}) {
    return (
        <div className={`relative group grid grid-flow-row gap-1 bg-gray-200 rounded-lg mx-3 p-2 px-4 shadow-2xl ${statsVisibility? '': 'hidden'}`}>
            <h1>Web Development</h1>
            <div className="relative bg-gray-400 h-full w-full rounded-lg overflow-hidden"><h1 className="flex items-center justify-center font-bold text-yellow-400">9 / 10</h1>
                <div className="absolute top-0 -left-full bg-yellow-400 rounded-r-lg h-full w-full group-hover:translate-x-40 transition duration-700 ease-in-out">

                </div>
            </div>
            <h1>Design UI/UX</h1>
            <div className="relative bg-gray-400 h-full w-full rounded-lg overflow-hidden"><h1 className="flex items-center justify-center font-bold text-yellow-400">8 / 10</h1>
                <div className="absolute top-0 -left-full bg-yellow-400 rounded-r-lg h-full w-full group-hover:translate-x-36 transition duration-700 ease-in-out">

                </div>
            </div>
            <h1>Communication</h1>
            <div className="relative bg-gray-400 h-full w-full rounded-lg overflow-hidden"><h1 className="flex items-center justify-center font-bold text-yellow-400">9 / 10</h1>
                <div className="absolute top-0 -left-full bg-yellow-400 rounded-r-lg h-full w-full group-hover:translate-x-40 transition duration-700 ease-in-out">
                    
                </div>
            </div>
            <h1>Serverside/Backend Dev</h1>
            <div className="relative bg-gray-400 h-full w-full rounded-lg overflow-hidden"><h1 className="flex items-center justify-center font-bold text-yellow-400">8 / 10</h1>
                <div className="absolute top-0 -left-full bg-yellow-400 rounded-r-lg h-full w-full group-hover:translate-x-36 transition duration-700 ease-in-out">

                </div>
            </div>
            <h1>Debugging</h1>
            <div className="relative bg-gray-400 h-full w-full rounded-lg overflow-hidden"><h1 className="flex items-center justify-center font-bold text-yellow-400">9.5 / 10</h1>
                <div className="absolute top-0 -left-full bg-yellow-400 rounded-r-lg h-full w-full group-hover:translate-x-44 transition duration-700 ease-in-out">

                </div>
            </div>
            
            
        </div>
    )
}

export default Stats


// absolute inset-y-0 left-0 
//         transform md:relative md:translate-x-0 transition duration-200 ease-in-out