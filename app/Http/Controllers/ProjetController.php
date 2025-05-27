<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjetRequest;
use App\Http\Requests\UpdateProjetRequest;
use App\Models\Projet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjetController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('projets/create_projet');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $projet = new Projet();
        $projet->titre = $request->titre;
        $projet->description = $request->description;
        $projet->lien_github = $request->lien_github;
        $projet->lien_demo = $request->lien_demo;
        $projet->image = $request->image;
        $projet->utilisateur_id = 1;
        $projet->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Projet $projet)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $projet = Projet::find($id);
        return Inertia::render('projets/edit_projet', ['projet' => $projet]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $projet = Projet::find($id);
        $projet->titre = $request->titre;
        $projet->description = $request->description;
        $projet->lien_github = $request->lien_github;
        $projet->lien_demo = $request->lien_demo;
        $projet->image = $request->image;
        $projet->utilisateur_id = 1;
        $projet->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $projet = Projet::find($id);
        $projet->delete();
    }
}
