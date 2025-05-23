import EmblaCarousel from "@/components/EmblaCarousel/EmblaCarousel";
import SplineScene from "@/components/SplineScene";
import { EmblaOptionsType } from 'embla-carousel'
import MarketStat from "@/components/MarketStat";
import SocNetCard from "@/components/SocNetCard";
import Stickers from "@/components/Stickers";
import Team from "@/components/Team";
import Markets from "@/components/Markets";
import Tokens from "@/components/Tokens";
import Guarantees from "@/components/Guarantees";
import Achievements from "@/components/Achievements";
import Description from "@/components/Description";


export default function Home() {

  const OPTIONS: EmblaOptionsType = {}
  const SLIDES = [
    '> $1000000 капитализации + пост на Blum',
    '10000 холдеров',
    'Создание видео и продвижение на ютубе',
    'Сожжение 100М токенов (60М уже сожжено)',
    'Создание маркетинг-отдела',
    'Связь с создателем Blum',
    'Листинг на централизованных биржах'
  ]

  return (
    <main>
      <SplineScene />
      <Description/>
      <Guarantees/>
      <Achievements/>
      <section className="flex flex-col gap-6 py-12">
        <h2 className="text-[36px] xs:text-[48px] lg:text-[64px] leading-[48px] xs:leading-[64px] lg:leading-[85px]">Roadmap</h2>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
      <MarketStat/>
      <Team/>
     <Tokens/>
      <Markets/>
      <Stickers/>
      <section className="flex justify-between items-center px-6 py-[58px] xs:px-[58px] xs:py-[90px] sm:py-[70px] md:py-[58px] lg:px-[116px] gap-3 font-medium">
        <SocNetCard href="https://t.me/AgentPi_Official" src="/telegram.svg" alt="Telegram"/>
        <SocNetCard href="https://x.com/AgentPi_OFF" src="/x.svg" alt="X"/>
        <SocNetCard href="https://www.twitch.tv/agentpi_off" src="/twitch.svg" alt="Twitch"/>
      </section>
    </main>
  );
}
