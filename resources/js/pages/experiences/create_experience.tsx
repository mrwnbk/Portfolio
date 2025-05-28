import { router } from "@inertiajs/react"
import { useState } from "react"

export default function CreateExperience() {

    const [values, setValues] = useState({
        titre: '',
        entreprise: '',
        date_debut: '',
        date_fin: '',
        utilisateur_id: 1
    })

    const ajouter = (e) => {
        e.preventDefault()
        router.post('/experience/post', values)
        router.get('/')
    }

    return (
        <div>
            <h1 className="text-5xl">Create experience :</h1>

            <form onSubmit={ajouter}>
                <label htmlFor="">Titre</label>
                <input className="border" type="text" name="titre" onChange={(e) => setValues({ ...values, titre: e.target.value })} />
                <label htmlFor="">Entreprise</label>
                <input className="border" type="text" name="entreprise" onChange={(e) => setValues({ ...values, entreprise: e.target.value })} />
                <label htmlFor="">Date debut</label>
                <input className="border" type="date" name="date_debut" onChange={(e) => setValues({ ...values, date_debut: e.target.value })} />
                <label htmlFor="">Date fin</label>
                <input className="border" type="date" name="date_fin" onChange={(e) => setValues({ ...values, date_fin: e.target.value })} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}