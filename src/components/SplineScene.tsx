import Spline from "@splinetool/react-spline";

export default function SplineScene() {
    return (
        <div className="h-screen w-screen pointer-events-none relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 text-center w-full">
                <p className="text-[9px] xs:text-xs sm:text-base font-medium">ОДИН ИЗ САМЫХ ПОПУЛЯРНЫХ ТОКЕНОВ НА BLUM</p>
                <h1 className="h-[130px] xs:text-[108px] sm:text-[144px]">AGENT PI</h1>
            </div>
            <Spline
                scene="https://prod.spline.design/fvRNms5EppbFr72U/scene.splinecode"
            />
        </div>
    )
}