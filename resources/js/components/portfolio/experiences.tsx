export default function Experiences({ utilisateurs }) {
    return (
        <div>
            <h1 className="text-5xl"><span className="font-bold">Section :</span> Experiences</h1>

            {utilisateurs.map((item, index) => (
                <div key={index}>
                    {item.experience.map((element, index) => (
                        <div key={index}>
                            <p>{element.titre}</p>
                            <p>{element.entreprise}</p>
                            <p>{element.date_debut}</p>
                            <p>{element.date_fin}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}