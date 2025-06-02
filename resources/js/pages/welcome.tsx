import About from "@/components/portfolio/about";
import Projets from "@/components/portfolio/projets";
import Experiences from "@/components/portfolio/experiences";
import Skills from "@/components/portfolio/skills";
import AppLayout from "@/layouts/app-layout";

export default function Welcome({ utilisateurs }) {

    console.log(utilisateurs);


    return (
        <AppLayout>
            <div>
                <div className="h-screen">
                    <img src="/images/imgAbout.png" alt="" className="h-[100vh]" />
                </div>
                <div className="h-16 bg-gradient-to-b from-[#060910] to-[#0f172a]"></div>

                <About utilisateurs={utilisateurs} />
                <div className="h-16 bg-gradient-to-b from-[#0f172a] to-[#1b294b]"></div>
                <Projets utilisateurs={utilisateurs} />
                <div className="h-16 bg-gradient-to-b from-[#0f172a] to-[#1b294b]"></div>
                <Experiences utilisateurs={utilisateurs} />
                <div className="h-16 bg-gradient-to-b from-[#0f172a] to-[#1b294b]"></div>
                <Skills utilisateurs={utilisateurs} />
                <div className="h-16 bg-gradient-to-b from-[#0f172a] to-[#1b294b]"></div>
            </div>
        </AppLayout>
    )
}