'use client'

import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import { usePrevNextButtons } from './EmblaCarouselArrowButtons'
import styles from './embla.module.css'
import clsx from 'clsx'
import Image from 'next/image'

type PropType = {
    slides: string[]
    options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex } =
        useDotButton(emblaApi)

    const {
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className='relative px-6'>

            <button className='absolute bottom-4 xs:bottom-[22px] sm:bottom-10 md:bottom-12 left-6 xs:left-[58px] lg:left-[116px] z-30'>
                <Image className='sm:w-12 sm:h-12' width={40} height={40} src="/arrow.svg" alt='Arrow left'
                    onClick={onPrevButtonClick} />
            </button>
            <button className='absolute bottom-4 xs:bottom-[22px] sm:bottom-10 md:bottom-12 right-6 xs:right-[58px] lg:right-[116px] z-30'>
                <Image width={40} height={40} src="/arrow.svg" alt='Arrow right'
                    className='rotate-180 sm:w-12 sm:h-12' onClick={onNextButtonClick} />
            </button>

            {/* <div className='flex flex-col gap-2 items-center'> */}
            <div className='flex gap-0.5 items-center mx-auto w-fit mb-2 xs:mb-5 sm:mb-6'>
                {slides.slice(0,-1).map((_, index) => (
                    <svg className='xs:w-[41px] sm:w-[50px] xs:h-[23px] sm:h-7' key={`prg-${index}`} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.65943 0.600098C6.13888 0.600098 6.52756 0.988775 6.52756 1.46823V5.17322L9.73613 3.3207C10.1513 3.08097 10.6823 3.22323 10.922 3.63845C11.1618 4.05366 11.0195 4.58461 10.6043 4.82434L7.39561 6.67692L10.6043 8.52951C11.0195 8.76924 11.1618 9.30018 10.922 9.7154C10.6823 10.1306 10.1513 10.2729 9.73613 10.0331L6.52756 8.18063V11.8858C6.52756 12.3653 6.13888 12.754 5.65943 12.754C5.17997 12.754 4.79129 12.3653 4.79129 11.8858V8.18057L1.58263 10.0331C1.16741 10.2729 0.636466 10.1306 0.396732 9.7154C0.156998 9.30018 0.299257 8.76924 0.714476 8.52951L3.92315 6.67692L0.714476 4.82434C0.299257 4.58461 0.156998 4.05366 0.396732 3.63845C0.636466 3.22323 1.16741 3.08097 1.58263 3.3207L4.79129 5.17328V1.46823C4.79129 0.988775 5.17997 0.600098 5.65943 0.600098Z" fill={selectedIndex + 1 > index ? '#1fa49f' : '#424242'} />
                        <path d="M13.209 6.677H21.8903" stroke={selectedIndex + 1 > index ? '#1fa49f' : '#424242'} strokeWidth="1.3022" strokeLinecap="round" />
                    </svg>
                ))}
                <svg className='xs:w-5 sm:w-[25px] xs:h-[23px] sm:h-7' width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.12085 0.600098C6.60031 0.600098 6.98899 0.988775 6.98899 1.46823V5.17322L10.1976 3.3207C10.6128 3.08097 11.1437 3.22323 11.3834 3.63845C11.6232 4.05366 11.4809 4.58461 11.0657 4.82434L7.85703 6.67692L11.0657 8.52951C11.4809 8.76924 11.6232 9.30018 11.3834 9.7154C11.1437 10.1306 10.6128 10.2729 10.1976 10.0331L6.98899 8.18063V11.8858C6.98899 12.3653 6.60031 12.754 6.12085 12.754C5.64139 12.754 5.25272 12.3653 5.25272 11.8858V8.18057L2.04405 10.0331C1.62884 10.2729 1.09789 10.1306 0.858158 9.7154C0.618424 9.30018 0.760683 8.76924 1.1759 8.52951L4.38457 6.67692L1.1759 4.82434C0.760683 4.58461 0.618424 4.05366 0.858158 3.63845C1.09789 3.22323 1.62884 3.08097 2.04405 3.3207L5.25272 5.17328V1.46823C5.25272 0.988775 5.64139 0.600098 6.12085 0.600098Z" fill={selectedIndex + 1 === slides.length ? '#1fa49f' : '#424242'} />
                </svg>
            </div>
            <div className={styles.embla}>
                <div className={styles.embla__viewport} ref={emblaRef}>
                    <div className={styles.embla__container}>
                        {slides.map((str, index) => (
                            <div className={styles.embla__slide} key={`slide-${index}`}>
                                <div className={clsx(styles.embla__slide__number, 
                                    'rounded-[18px] text-[13px] leading-[17px] py-[9px] px-[19px] h-[69px] w-[204px] border border-sulu' +
                                    ' xs:rounded-[40px] xs:text-base xs:leading-5 xs:py-5 xs:px-10 xs:h-[84px] xs:w-[380px] xs:border-2' +
                                    ' sm:rounded-[48px] sm:text-[32px] sm:leading-[43px] sm:py-6 sm:px-[49px] sm:h-[134px] sm:w-[540px]'
                                    )}>{str}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
