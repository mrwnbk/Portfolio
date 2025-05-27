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
                'date_debut' => '2022-06-01',
                'date_fin' => '2024-01-01',
                'utilisateur_id' => 1
            ]
        ]);
    }
}
