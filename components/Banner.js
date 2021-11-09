import {UserIcon} from "@heroicons/react/outline"
import Stats from "./Stats"

function Banner() {
 
    return (
            <div className="w-80 flex items-center justify-center h-full">
         
                <div className={`bg-white text-blue-500 w-72 px-2 space-y-6 h-full shadow-2xl rounded-br-2xl rounded-bl-2xl`}>
                    <div className="h-full w-full px-4">   

                        <a href="#" className="text-blue-500 flex items-center space-x-2">
                            <UserIcon className="w-8 h-8" />
                            <span className="text-2xl font-extrabold">My Portfolio</span>
                        </a>
                        <img
                            className="mt-6 rounded-lg shadow-xl"
                            src="https://cdn.pixabay.com/photo/2021/10/27/19/09/cat-6748193_960_720.jpg"
                            alt="Woman workcationing on the beach"
                        />
                        <nav className="flex justify-center my-6 space-x-2">
                            <a href="" className="font-bold block py-2.5 px-4 hover:bg-gray-200 rounded 
                            cursor-pointer 
                            transition duration-100 transform hover:scale-125 
                            ">Stats</a>
                            <a href="" className="font-bold block py-2.5 px-4 hover:bg-gray-200 rounded
                            cursor-pointer 
                            transition duration-100 transform hover:scale-125 
                            ">Skills</a>
                        </nav>
                        {/* stats */}
                        <Stats />


                    </div>
           
                    
                </div>
        
                
            </div>
    )
}

export default Banner
