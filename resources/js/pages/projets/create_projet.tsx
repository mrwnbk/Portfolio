import { router } from "@inertiajs/react"
import { useState } from "react"

export default function CreateProjet() {

    const [values, setValues] = useState({
        titre: '',
        description: '',
        lien_github: '',
        lien_demo: '',
        image: '',
        utilisateur_id: 1
    })

    const ajouter = (e) => {
        e.preventDefault()
        router.post('/projet/post', values)
        router.get('/')
    } 

    return (
        <div>
            <h1 className="text-5xl">Create projet :</h1>

            <form onSubmit={ajouter}>
                <label htmlFor="">Titre</label>
                <input className="border" type="text" name="titre" onChange={(e) => setValues({ ...values, titre: e.target.value })} />
                <label htmlFor="">Déscription</label>
                <input className="border" type="text" name="description" onChange={(e) => setValues({ ...values, description: e.target.value })} />
                <label htmlFor="">Lien GitHub</label>
                <input className="border" type="text" name="lien_github" onChange={(e) => setValues({ ...values, lien_github: e.target.value })} />
                <label htmlFor="">Lien démo</label>
                <input className="border" type="text" name="lien_demo" onChange={(e) => setValues({ ...values, lien_demo: e.target.value })} />
                <label htmlFor="">Image</label>
                <input className="border" type="text" name="image" onChange={(e) => setValues({ ...values, image: e.target.value })} />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}