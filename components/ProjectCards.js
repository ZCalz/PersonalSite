function ProjectCards({source, href, info, click}) {
    return (
            <div className="space-y-8 m-4 h-auto cursor-pointer 
                    transition duration-100 transform hover:scale-110">
                <div className="group relative h-64 bg-white w-60 p-4 flex flex-col space-y-3 rounded-2xl items-center justify-center">
                    <div className="overflow-hidden h-50">
                        <img
                            className="rounded-lg shadow-xl h-48 sm:w-full object-cover object-center"
                            src={source}
                            alt="Woman workcationing on the beach"
                        />
                        </div>
                    <a
                        className="hover:animate-bounce hover:bg-red-500
                        inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm"
                        href={href}
                        >
                        {click}
                        
                    </a>
                    <h1 className="text-sm flex flex-col bg-white bg-opacity-80 rounded-lg p-1 px-2 absolute bottom-0 translate-y-9 font-semibold max-w-xs opacity-0 group-hover:opacity-100">
                        {info}
                    </h1>
                    
                </div>
            </div>
    )
}

export default ProjectCards


       {/* <div className="space-y-8 p-4 h-28">
                    <div className="overflow-hidden h-50 ">
                        <img
                            className="object-cover min-w-full"
                            src="https://cdn.pixabay.com/photo/2021/10/27/19/09/cat-6748193_960_720.jpg"
                            alt="Woman workcationing on the beach"
                        />
                     </div>
                    <a
                        className="cursor-pointer 
                        transition duration-100 transform hover:scale-125
                        inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-white uppercase tracking-wider font-semibold text-sm"
                        href="#"
                        >
                        Book your escape
                    </a>
                </div> */}