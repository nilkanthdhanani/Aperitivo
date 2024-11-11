import AboutBanner from "@/components/about/aboutBanner";
import Contact from "@/components/about/contact";
import DoorStep from "@/components/about/doorStep";
import Heart from "@/components/about/heart";

export default function AboutPage() {
    return (
        <main>
            <AboutBanner />
            <Heart />
            <DoorStep />
            <Contact />
        </main>
    )
}
