import { router } from "@inertiajs/react"
import { useState } from "react"

export default function CreateSkill() {

    const [values, setValues] = useState({
        nom: '',
        niveau: '',
        utilisateur_id: 1
    })

    const ajouter = (e) => {
        e.preventDefault()
        router.post('/skill/post', values)
        router.get('/')
    }

    return (
        <div>
            <h1 className="text-5xl">Create skill :</h1>

            <form onSubmit={ajouter}>
                <label htmlFor="">Nom</label>
                <input className="border" type="text" name="nom" onChange={(e) => setValues({ ...values, nom: e.target.value })} />
                <label htmlFor="">Niveau</label>
                <input className="border" type="text" name="niveau" onChange={(e) => setValues({ ...values, niveau: e.target.value })} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}