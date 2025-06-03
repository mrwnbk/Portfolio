import { Link, router } from "@inertiajs/react";

export default function Experiences({ utilisateurs }) {

    const supprimer = (e, id) => {
        e.preventDefault()
        router.delete(`/experience/delete/${id}`)
        router.get('/#experiences')
    }

    return (
        <div id="experiences" className="min-h-screen bg-[#0f172a] text-white py-10 px-6 flex flex-col">
            <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight sticky top-0 bg-[#0f172a] z-10 pt-10 mb-10">
                Experiences
            </h1>

            <div className="flex justify-center mb-8">
                <Link href="/experience/create">
                    <button className="bg-[#162447] hover:bg-[#16244772] text-white font-semibold py-2 px-4 rounded-md shadow transition cursor-pointer">
                        Ajouter une nouvelle expérience
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                {utilisateurs.map((item, index) =>
                    item.experience.map((element, i) => (
                        <div
                            key={i}
                            className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-xl shadow-md shadow-slate-900/30 p-5 w-full max-w-md hover:-translate-y-1 hover:shadow-2xl transition duration-300 border border-slate-500/40 flex flex-col justify-between">
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold mb-1 text-white">{element.entreprise}</h2>
                                <p className="text-slate-300 mb-1">{element.titre}</p>
                                <p className="text-sm text-indigo-300">
                                    {element.date_debut} - {element.date_fin}
                                </p>
                            </div>

                            <div className="flex justify-end gap-4 text-sm">
                                <Link href={`/experience/edit/${element.id}`}>
                                    <button className="text-indigo-400 hover:text-indigo-300 transition cursor-pointer">
                                        ✏️ Modifier
                                    </button>
                                </Link>

                                <button onClick={(e) => supprimer(e, element.id)} className="text-red-400 hover:text-red-300 transition cursor-pointer">
                                    🗑️ Supprimer
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}