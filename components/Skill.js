function Skill({skillVisibility}) {
    return (
        <div className={`relative group grid grid-flow-row gap-1 bg-gray-200 rounded-lg mx-3 p-2 px-4 shadow-2xl ${skillVisibility? '': 'hidden'}`}>
            <div className="relative bg-gray-400 h-64 w-full rounded-lg overflow-hidden hover:h-full">
                <h1 className="p-6 flex items-center justify-center align-middle font-semibold text-white text-center">
                    Node.js, React, Next.js, Javascript, HTML, CSS, Express.js, Mocha, Chai,
                    NPM, Git, Github, Yarn, Tailwind, Hardhat, Solidity, MongoDB, C++, Python, AWS, Alexa SDK, Linux Centos, Linux Ubuntu, VirtualBox, VMWare ESXI, Raspberry pi, Arduino, Figma, Adobe XD, Photoshop,
                    Autodesk Inventor, Autodesk Revit, Autodesk AutoCad, Microsoft Office Suite, 
                    Presentation, Collaboration, Research, Data Analysis, Product Design, Writing,
                Communication, Self-motivated, Leadership, Creativity, Adaptability
                </h1>
                {/* <div className="absolute top-0 -left-full bg-pink-300 rounded-r-lg h-full w-full group-hover:translate-x-40 transition duration-700 ease-in-out">

                </div> */}
            </div>
            
        </div>
    )
}

export default Skill
