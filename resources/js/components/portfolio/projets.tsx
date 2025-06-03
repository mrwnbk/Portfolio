import { Link, router } from "@inertiajs/react";

export default function Projets({ utilisateurs }) {

    const supprimer = (e, id) => {
        e.preventDefault()
        router.delete(`/projet/delete/${id}`)
        router.get('/#projets')
    }

    return (
        <div id="projets" className="min-h-screen bg-[#0f172a] text-white py-2 relative flex flex-col">
            <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tight sticky top-0 bg-[#0f172a] z-10 pt-10">
                Projets
            </h1>

            <div className="flex-grow px-5 py-10 bg-[#0f172a]">
                <div className="flex justify-center mb-6">
                    <Link href="/projet/create">
                        <button className="bg-[#162447] hover:bg-[#16244772] text-white font-semibold py-2 px-4 rounded-md shadow cursor-pointer">
                            Ajouter un nouveau projet
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
                    {utilisateurs.map((item, index) =>
                        item.projet.map((element, i) => (
                            <div
                                key={i}
                                className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-xl shadow-md shadow-slate-900/30 p-4 w-full max-w-md hover:-translate-y-1 hover:shadow-2xl transition duration-300 border border-slate-500/40"
                            >
                                <h2 className="text-xl font-semibold mb-1 text-white">{element.titre}</h2>
                                <p className="text-slate-300 text-sm mb-3">{element.description}</p>

                                <div className="text-sm text-indigo-300 space-y-1 mb-4">
                                    <a href={element.lien_github} className="hover:underline">Lien GitHub</a><br />
                                    <a href={element.lien_demo} className="hover:underline">Lien Démo</a><br />
                                    <span className="text-slate-400">Image : {element.image}</span>
                                </div>

                                <div className="flex gap-4 justify-end">
                                    <Link href={`/projet/edit/${element.id}`}>
                                        <button className="text-indigo-400 hover:text-indigo-300 transition text-sm cursor-pointer">
                                            ✏️ Modifier
                                        </button>
                                    </Link>
                                    <button onClick={(e) => supprimer(e, element.id)} className="text-red-400 hover:text-red-300 transition text-sm cursor-pointer">
                                        🗑️ Supprimer
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>

    )
}