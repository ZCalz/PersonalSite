function HeaderItem({ Icon, title }) {
    return (
        <div className="flex flex-col items-center cursor-pointer group
        w-12 sm:w-20 lg:hover:text-gray-900">
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="font-semibold opacity-0 lg:opacity-100 group-hover:opacity-100 
            tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem