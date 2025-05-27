<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreExperienceRequest;
use App\Http\Requests\UpdateExperienceRequest;
use App\Models\Experience;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ExperienceController extends Controller
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
        return Inertia::render('experiences/create_experience');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $experience = new Experience();
        $experience->titre = $request->titre;
        $experience->entreprise = $request->entreprise;
        $experience->date_debut = $request->date_debut;
        $experience->date_fin = $request->date_fin;
        $experience->description = $request->description;
        $experience->utilisateur_id = 1;
        $experience->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Experience $experience)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $experience = Experience::find($id);
        return Inertia::render('experiences/edit_experience');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $experience = Experience::find($id);
        $experience->titre = $request->titre;
        $experience->entreprise = $request->entreprise;
        $experience->date_debut = $request->date_debut;
        $experience->date_fin = $request->date_fin;
        $experience->description = $request->description;
        $experience->utilisateur_id = 1;
        $experience->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $experience = Experience::find($id);
        $experience->delete();
    }
}
