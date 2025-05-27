<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('skills')->insert([
            [
                'nom' => 'HTML5',
                'niveau' => 'Avancé',
                'utilisateur_id' => 1
            ],
            [
                'nom' => 'CSS',
                'niveau' => 'Avancé',
                'utilisateur_id' => 1
            ],
            [
                'nom' => 'TailwindCSS',
                'niveau' => 'Avancé',
                'utilisateur_id' => 1
            ],
            [
                'nom' => 'JavaScript',
                'niveau' => 'Avancé',
                'utilisateur_id' => 1
            ],
            [
                'nom' => 'React',
                'niveau' => 'Avancé',
                'utilisateur_id' => 1
            ],
            [
                'nom' => 'PHP',
                'niveau' => 'Avancé',
                'utilisateur_id' => 1
            ]
        ]);
    }
}
