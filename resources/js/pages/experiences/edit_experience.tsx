import { router } from "@inertiajs/react"
import { useState } from "react"

export default function EditExperience({ experience }) {

    const [values, setValues] = useState({
        titre: experience.titre,
        entreprise: experience.entreprise,
        date_debut: experience.date_debut,
        date_fin: experience.date_fin,
        utilisateur_id: experience.utilisateur_id
    })

    const modif = (e) => {
        e.preventDefault()
        router.put(`/experience/update/${experience.id}`, values)
        router.get('/')
    }

    return (
        <div>
            <h1 className="text-5xl">Edit experience :</h1>

            <form onSubmit={modif}>
                <label htmlFor="">Titre</label>
                <input className="border" type="text" name="titre" value={values.titre} onChange={(e) => setValues({ ...values, titre: e.target.value })} />
                <label htmlFor="">Entreprise</label>
                <input className="border" type="text" name="entreprise" value={values.entreprise} onChange={(e) => setValues({ ...values, entreprise: e.target.value })} />
                <label htmlFor="">Date debut</label>
                <input className="border" type="date" name="date_debut" value={values.date_debut} onChange={(e) => setValues({ ...values, date_debut: e.target.value })} />
                <label htmlFor="">Date fin</label>
                <input className="border" type="date" name="date_fin" value={values.date_fin} onChange={(e) => setValues({ ...values, date_fin: e.target.value })} />
                <button type="submit">Modifier</button>
            </form>
        </div>
    )
}