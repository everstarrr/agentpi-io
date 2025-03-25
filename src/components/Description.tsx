import Link from "next/link";

export default function Description() {
    return (
        <section className="p-6 xs:px-[58px] lg:px-[116px] lg:py-[58px] xl:px-[220px] flex flex-col gap-1.5 xs:gap-6">
            <div className="py-8 xs:py-4 sm:py-14 md:py-[50px] lg:py-4 content-center
             text-[13px] xs:text-xl md:text-[32px] lg:text-[40px] 
             leading-4 xs:leading-7 md:leading-[42px] lg:leading-[53px]
             ">
                <p className="font-medium">
                    <span className="text-sulu">AGENTPI</span> — это не просто мемкоин.
                </p>
                <span className="text-secondary">Это цифровая революция под предводительством Перри Утконоса,
                    который объявил войну злодеям криптомира: FPI Банку, Фуфелшмерцу и nowkie!
                    Наша миссия — разрушить скучные шаблоны и дать сообществу токен с реальной ценностью,
                    а не пустыми обещаниями</span>
            </div>
            <Link href={'https://t.me/blum/app?startapp=memepadjetton_AGENTPI_Xf5MB-ref_M5d24os956'}
                className="rounded-15 border-3 border-sulu py-4 px-[30px] w-full xs:w-fit hover:bg-sulu
           hover:shadow-btn transition-all duration-250 ease-out text-center text-sm xs:text-base mx-auto">Купить токен на Blum</Link>
        </section>
    )
}