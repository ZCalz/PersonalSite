
function About({aboutRef, scrollFunc}) {
  
    return (
        <div className="mt-36 w-80 flex items-center justify-center h-auto">
            <div ref={aboutRef} className={`p-10 bg-white text-indigo-500 w-72 px-6 space-y-6 h-full shadow-2xl rounded-2xl`}>
                <div className="h-full w-full px-4 space-y-2">   
                    
                    <div className="text-indigo-500 flex items-center space-x-2">
                        <span className="text-2xl font-extrabold">About</span>
                    </div>
            
                    <h1 className='font-bold'>Quick Bio: </h1>
                        <p className="text-sm font-normal">
                            My name is Calvin Sze. I began my journey in development with getting small gadgets that require installation of Node.js.
                            I would run into bugs and errors getting things to work. This drove me to search for information
                            from getting small hobby projects working tp bigger projects.
                        </p>

                        <p className="text-sm font-normal">
                            I love exploring how technology integrate with eachother and getting things to working condition.
                            It is the joy of bettering my skills that keeps me going.
                        </p>
                        <h1 className='font-bold'>My Github:</h1>
                        <p className="text-sm font-normal hover:text-red-500">
                            <a href="https://github.com/DuhCompuder">Github.com/DuhCompuder</a>
                        </p>
                        <h1 className='font-bold'>Code for this site:</h1>
                        <p className="text-sm font-normal hover:text-red-500">
                            <a href="https://github.com/DuhCompuder/PersonalSite">{"https://github.com/DuhCompuder/PersonalSite"}</a>
                        </p>
                    {/* stats */}
            
                </div>      
            </div>
        </div>
    )
}

export default About
