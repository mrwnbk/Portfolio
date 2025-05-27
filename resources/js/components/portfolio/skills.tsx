export default function Skills({ utilisateurs }) {
    return (
        <div>
            <h1 className="text-5xl"><span className="font-bold">Section :</span> Skills</h1>

            {utilisateurs.map((item, index) => (
                <div key={index}>
                    {item.skill.map((element, index) => (
                        <div key={index}>
                            <p>{element.nom}</p>
                            <p>{element.niveau}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}