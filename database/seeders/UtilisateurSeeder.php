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
                'nom' => 'BOULAICH KASMI',
                'age' => '27',
                'anniversaire' => '18/05/1998',
                'tel' => '+32 465 46 79 98',
                'bio' => 'Je suis un développeur web passionné, curieux et toujours en quête d’apprentissage. J’accorde une grande importance à la rigueur, à l’autonomie et au travail bien fait.

                            Actuellement en formation à MolenGeek, je construis des projets web modernes en utilisant des technologies comme HTML, CSS, JavaScript, Tailwind, PHP, Laravel, et React.

                            Mon objectif : rejoindre une équipe dynamique où je pourrai continuer à apprendre, relever des défis techniques et contribuer à des projets concrets avec impact.',
                'ville' => 'VILVOORDE, BE',
                'photo' => '/images/Marwane_Banner.png',
                'email' => 'bkmarwane@gmail.com'
            ]
        ]);
    }
}
