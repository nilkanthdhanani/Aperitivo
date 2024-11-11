import Clock from "@/components/home/clock";
import CockTailBg1 from "@/components/home/cockTailBg1";
import CockTailBg2 from "@/components/home/cockTailBg2";
import Collection from "@/components/home/collection";
import Friends from "@/components/home/friends";
import HeroBanner from "@/components/home/heroBanner";
import TimeFor from "@/components/home/timeFor";

export default function HomePage() {
    return (
        <main>
            <HeroBanner />
            <TimeFor />
            <Collection />
            <CockTailBg1 />
            <Friends />
            <Clock />
            <CockTailBg2 />
        </main>
    )
}
