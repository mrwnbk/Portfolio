import Projets from "@/components/portfolio/projets";
import Experiences from "@/components/portfolio/experiences";
import Skills from "@/components/portfolio/skills";

export default function Welcome({ utilisateurs }) {

    console.log(utilisateurs);


    return (
        <div className="p-6">
            <h1 className="text-5xl">Welcome :</h1>

            {utilisateurs.map((item, index) => (
                <div key={index}>
                    <img className="rounded-full w-30 h-30" src={item.photo} alt="" />
                    <p>{item.prenom}</p>
                    <p>{item.nom}</p>
                    <p>{item.bio}</p>
                    <p>{item.email}</p>
                </div>
            ))}
            <hr />

            <Projets utilisateurs={utilisateurs} />
            <hr />

            <Experiences utilisateurs={utilisateurs} />
            <hr />

            <Skills utilisateurs={utilisateurs} />
        </div>
    )
}