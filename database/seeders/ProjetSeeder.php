<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('projets')->insert([
            [
                'titre' => 'CineScope',
                'description' => "Description...",
                'lien_github' => 'https://github.com/mrwnbk/CineScope',
                'lien_demo' => 'Lien démo',
                'image' => 'Image',
                'utilisateur_id' => 1
            ]
        ]);
    }
}
