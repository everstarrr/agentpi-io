import Link from "next/link";

export default function Guarantees() {
  return (
    <section className="flex flex-col gap-6 p-6 xs:px-[58px] lg:px-[116px] lg:py-[58px]">
      <h2>Гарантии</h2>

      <div className="flex flex-col sm:flex-row gap-5 lg:gap-10">
        <div className="border-2 border-sulu rounded-15 xs:rounded-[30px] w-full flex-col flex gap-5 md:gap-10
          px-5 py-25px md:px-10 md:py-[35px]">
          <h4><span className="text-orange">Цифры</span> говорят за нас</h4>
          <ul className="text-xs xs:text-xl lg:text-2xl leading-4 xs:leading-[27px] lg:leading-[32px]">
            <li>200K капитализации в первый день, пик — 700K</li>
            <li>Топ-1 на DEXScreen, 1000+ холдеров в планах</li>
            <li>Крупный кит заблокировал 10 млн токенов — верим в долгосрок!</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-5">
            <h4>Безопасность и рост</h4>
            <ul className="text-xs xs:text-xl lg:text-2xl leading-4 xs:leading-[27px] lg:leading-[32px]">
              <li>40 млн токенов будут сожжены после верификации на TonKeeper</li>
              <li>NFT-коллекции, розыгрыши TON и боты для помощи новичкам — заботимся о комьюнити</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4><span className="text-sulu">Планы</span>, а не фантазии</h4>
            <ul className="text-xs xs:text-xl lg:text-2xl leading-4 xs:leading-[27px] lg:leading-[32px]">
              <li>40 млн токенов будут сожжены после верификации на TonKeeper</li>
              <li>NFT-коллекции, розыгрыши TON и боты для помощи новичкам — заботимся о комьюнити</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-5 lg:gap-10">
        <div className="border-2 border-orange rounded-15 xs:rounded-[30px] flex-col flex gap-5 px-5 py-25px md:px-10 md:py-[35px] w-full">
          <h4><span className="text-sulu">Сила </span>сообщества</h4>
          <ul className="text-xs xs:text-xl lg:text-2xl leading-4 xs:leading-[27px] lg:leading-[32px]">
            <li>Сильнейшее комьюнити в Blum с ежедневными стримами и поддержкой</li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <Link href={'https://t.me/blum/app?startapp=memepadjetton_AGENTPI_Xf5MB-ref_M5d24os956'}
            className="rounded-15 border-3 border-sulu py-4 w-full hover:bg-sulu
           hover:shadow-btn transition-all duration-250 ease-out text-center text-sm xs:text-base ">Купить токен на Blum</Link>
          <Link href="https://t.me/AgentPi_Official" className="py-4 w-full text-center border-b-2 border-transparent
            hover:border-sulu transition-all duration-300 ease-out text-sm xs:text-base ">
            Стать частью сообщества
          </Link>
        </div>
      </div>
    </section >
  )
}