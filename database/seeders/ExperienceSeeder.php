<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExperienceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('experiences')->insert([
            [
                'titre' => 'Préparateur de commande',
                'entreprise' => 'Legrand Group Belgium',
                'date_debut' => '01/06/2022',
                'date_fin' => '01/01/2024',
                'utilisateur_id' => 1
            ]
        ]);
    }
}
