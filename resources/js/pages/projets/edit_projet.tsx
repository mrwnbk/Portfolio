import { router } from "@inertiajs/react"
import { useState } from "react"

export default function EditProjet({ projet }) {

    const [values, setValues] = useState({
        titre: projet.titre,
        description: projet.description,
        lien_github: projet.lien_github,
        lien_demo: projet.lien_demo,
        image: projet.image,
        utilisateur_id: projet.utilisateur_id
    })

    const modif = (e) => {
        e.preventDefault()
        router.put(`/projet/update/${projet.id}`, values)
        router.get('/')
    }

    return (
        <div>
            <h1 className="text-5xl">Edit projet :</h1>

            <form onSubmit={modif}>
                <label htmlFor="">Titre</label>
                <input className="border" type="text" name="titre" onChange={(e) => setValues({...values, titre: e.target.value})} />
                <label htmlFor="">Déscription</label>
                <input className="border" type="text" name="description" onChange={(e) => setValues({...values, description: e.target.value})} />
                <label htmlFor="">Lien GitHub</label>
                <input className="border" type="text" name="lien_github" onChange={(e) => setValues({...values, lien_github: e.target.value})} />
                <label htmlFor="">Lien démo</label>
                <input className="border" type="text" name="lien_demo" onChange={(e) => setValues({...values, lien_demo: e.target.value})} />
                <label htmlFor="">Image</label>
                <input className="border" type="text" name="image" onChange={(e) => setValues({...values, image: e.target.value})} />
                <button type="submit">Modifier</button>
            </form>
        </div>
    )
}