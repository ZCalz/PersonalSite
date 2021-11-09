// import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    SearchIcon,
    UserIcon,
} from "@heroicons/react/outline";
function Header({stateProject, setStateProject}) {
    return (
        <div className='flex bg-white h-24 items-center justify-center rounded-bl-3xl shadow-2xl'>
<header>
                <div className="flex lg:mx-10 xl:mx-20 2xl:mx-32 3xl:mx-44 flex-col lg:flex-row m-5 justify-between items-center space-y-4">
            
                    <div className="flex flex-grow justify-evenly max-w-2xl lg:space-x-16 h-auto">      
                        <button onClick={() => setStateProject(!stateProject)}><HeaderItem title='HOME' Icon={HomeIcon} /></button>
                        <button onClick={() => setStateProject(!stateProject)}><HeaderItem title='ABOUT' Icon={UserIcon} /></button>
                        <button onClick={() => setStateProject(!stateProject)}><HeaderItem title='EXPERIENCE' Icon={BadgeCheckIcon} /></button>
                        <button onClick={() => setStateProject(!stateProject)}><HeaderItem title='PROJECTS' Icon={CollectionIcon}/></button>
                        <button onClick={() => setStateProject(!stateProject)}><HeaderItem title='CONTACT' Icon={SearchIcon} /></button>
                    </div>
                        {/* <Image 
                        className="object-contain"
                        src="https://links.papareact.com/ua6" 
                        width={200} 
                        height={100} /> */}
                </div>
            </header>
        </div>
    )
}

export default Header
