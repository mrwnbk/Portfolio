export default function About({ utilisateurs }) {
    return (
        <div id="about" className="min-h-screen bg-[#0f172a] text-white py-2 relative flex flex-col">
            <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight sticky top-0 bg-[#0f172a] z-10 pt-10">
                About Me
            </h1>

            <div className="flex-grow flex items-center justify-center px-5 min-h-screen bg-[#0f172a]">
                {utilisateurs.map((item, index) => (
                    <div key={index} className="bg-gradient-to-br from-slate-800 via-slate-700 py-10 to-slate-600 rounded-2xl shadow-md shadow-slate-900/30 p-5 flex flex-col items-center text-center max-w-3xl w-full mx-auto transition-transform duration-300 border border-slate-500/40">
                        <h1 className="text-2xl md:text-3xl font-semibold text-slate-100 mb-2">{item.prenom} {item.nom}</h1>
                        <div className="mt-10 grid grid-cols-2 gap-x-16 gap-y-4 text-slate-400 mb-8 text-sm md:text-base font-medium max-w-md w-full">
                            <div className="text-left">Age: <span className="text-white">{item.age}</span></div>
                            <div className="text-left">Birthday: <span className="text-white">{item.anniversaire}</span></div>
                            <div className="text-left">Phone: <span className="text-white">{item.tel}</span></div>
                            <div className="text-left">City: <span className="text-white">{item.ville}</span></div>
                        </div>
                        <p className="mt-5 text-slate-200 italic text-base leading-loose font-light px-4">{item.bio}</p>
                    </div>

                ))}
            </div>
        </div>


    )
}