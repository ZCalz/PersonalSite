function Stats() {
    return (
        <div className="grid grid-flow-row gap-2 bg-gray-200 rounded-lg mx-3 pl-6 p-2">
            <div className="relative bg-gray-400 h-full w-full rounded-lg overflow-hidden">Skill 1
                <div className="absolute top-0 -left-full bg-pink-300 rounded-r-lg h-full w-full translate-x-full transition duration-700 ease-in-out">

                </div>
            </div>
            <div className="relative bg-gray-400 h-full w-full rounded-lg overflow-hidden">Skill 2
                <div className="absolute top-0 -left-full bg-pink-300 rounded-r-lg h-full w-full translate-x-32 transition duration-700 ease-in-out">

                </div>
            </div>
            <div className="relative bg-gray-400 h-full w-full rounded-lg overflow-hidden">Skill 3
                <div className="absolute top-0 -left-full bg-pink-300 rounded-r-lg h-full w-full translate-x-36 transition duration-700 ease-in-out">

                </div>
            </div>
            <div className="relative bg-gray-400 h-full w-full rounded-lg overflow-hidden">Skill 4
                <div className="absolute top-0 -left-full bg-pink-300 rounded-r-lg h-full w-full translate-x-24 transition duration-700 ease-in-out">

                </div>
            </div>
            
        </div>
    )
}

export default Stats


// absolute inset-y-0 left-0 
//         transform md:relative md:translate-x-0 transition duration-200 ease-in-out