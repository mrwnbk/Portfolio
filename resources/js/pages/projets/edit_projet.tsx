import { useState } from "react"

export default function EditProjet() {

    const [values, setValues] = useState({
        titre: '',
        description: '',
        lien_github: '',
        lien_demo: '',
        image: '',
        utilisateur_id: 1
    })

    return(
        <div>
            <h1 className="text-5xl">Edit projet :</h1>

            <form>
                <label htmlFor="">Titre</label>
                <input type="text" name="titre" onChange={} />
            </form>
        </div>
    )
}