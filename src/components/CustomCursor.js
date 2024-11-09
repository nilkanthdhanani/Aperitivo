"use client";

import { useEffect } from "react";

export default function CustomCursor() {
    useEffect(() => {
        const dot = document.querySelector(".cursor-dot");
        const ring = document.querySelector(".cursor-ring");

        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;
            dot.style.transform = `translate(${x}px, ${y}px)`;
            ring.style.transform = `translate(${x}px, ${y}px)`;
        };

        document.addEventListener("mousemove", moveCursor);
        return () => document.removeEventListener("mousemove", moveCursor);
    }, []);

    return (
        <>
            <div className="cursor-dot" />
            <div className="cursor-ring" />
        </>
    );
}
