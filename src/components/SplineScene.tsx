"use client"
import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState } from "react";

export default function SplineScene() {

    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <div ref={containerRef} className="h-screen w-screen pointer-events-none relative">
            {isVisible &&
                <>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 text-center w-full">
                        <p className="text-[9px] xs:text-xs sm:text-base font-medium">ОДИН ИЗ САМЫХ ПОПУЛЯРНЫХ ТОКЕНОВ НА BLUM</p>
                        <h1 className="h-[130px] xs:text-[108px] sm:text-[144px]">AGENT PI</h1>
                    </div>
                    <Spline
                        scene="https://prod.spline.design/fvRNms5EppbFr72U/scene.splinecode"
                    />
                </>
            }
        </div>
    )
}