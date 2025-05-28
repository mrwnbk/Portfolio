import { router } from "@inertiajs/react"
import { useState } from "react"

export default function EditSkill({ skill }) {

    const [values, setValues] = useState({
        nom: skill.nom,
        niveau: skill.niveau,
        utilisateur_id: skill.utilisateur_id
    })

    const modif = (e) => {
        e.preventDefault()
        router.put(`/skill/update/${skill.id}`, values)
        router.get('/')
    }

    return (
        <div>
            <h1 className="text-5xl">Edit skill :</h1>

            <form onSubmit={modif}>
                <label htmlFor="">Titre</label>
                <input className="border" type="text" value={values.nom} name="nom" onChange={(e) => setValues({ ...values, nom: e.target.value })} />
                <label htmlFor="">Entreprise</label>
                <input className="border" type="text" value={values.niveau} name="niveau" onChange={(e) => setValues({ ...values, niveau: e.target.value })} />
                <button type="submit">Modifier</button>
            </form>
        </div>
    )
}