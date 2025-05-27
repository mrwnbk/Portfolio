import { Link } from "@inertiajs/react";

export default function Projets({ utilisateurs }) {
    return (
        <div>
            <h1 className="text-5xl"><span className="font-bold">Section :</span> Projets</h1>

            {utilisateurs.map((item, index) => (
                <div key={index}>
                    {item.projet.map((element, index) => (
                        <div key={index}>
                            <p>{element.titre}</p>
                            <p>{element.description}</p>
                            <a href={element.lien_github}>Lien GitHub</a>
                            <p>{element.lien_demo}</p>
                            <p>{element.image}</p>
                            <Link href={`/projet/edit/${element.id}`}>
                                <button className="border p-1">Modifier</button>
                            </Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}