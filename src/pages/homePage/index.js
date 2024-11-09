import Clock from "@/components/clock";
import CockTailBg1 from "@/components/cockTailBg1";
import CockTailBg2 from "@/components/cockTailBg2";
import Collection from "@/components/collection";
import Friends from "@/components/friends";
import HeroBanner from "@/components/heroBanner";
import TimeFor from "@/components/timeFor";

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
