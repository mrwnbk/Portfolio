<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UtilisateurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('utilisateurs')->insert([
            [
                'prenom' => 'Marwane',
                'nom' => 'Boulaich Kasmi',
                'bio' => 'Full Stack Web Developer',
                'photo' => '/images/Marwane_Banner.png',
                'email' => 'bkmarwane@gmail.com'
            ]
        ]);
    }
}
