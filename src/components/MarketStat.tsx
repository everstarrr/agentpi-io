'use client'

import axios from "axios"
import { useEffect, useState } from "react";

export default function MarketStat() {

    const [data, setData] = useState<any>(null);

    const apiService = axios.create({
        baseURL: "https://api.dexscreener.com"
    });

    async function fetchData() {
        try {
            const response = await apiService.get('/token-pairs/v1/ton/EQBzDYQE6nBlwIMgERlwbPkzb9fBXXPey1gkjxPC6LKSDITU');
            setData(response.data);
        } catch (error: any) {
            console.error(error);
        }
    }

    function shortenNumber(number: number) {
        const divided = number / 1000;
        const rounded = divided.toFixed(1); // Фиксируем один знак после запятой
        return parseFloat(rounded); // Преобразуем строку обратно в число
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <section className="p-6 xs:px-[58px] lg:py-[58px] lg:px-[116px]">
            <div className="bg-mcap w-full bg-cover bg-no-repeat aspect-39/25 flex justify-between
        p-6 pb-8 xs:p-10 xs:pb-16 sm:px-[56px] sm:pt-[41px] sm:pb-[76px] md:px-[92px] md:pt-[58px] md:pb-[90px]
        lg:px-[84px] lg:pt-[58px] lg:pb-[100px] xl:pl-[104px] xl:pt-[50px] xl:pr-[166px] xl:pb-[90px]">
                <div className="flex flex-col">
                    <p className="text-[6px] xs:text-[13px] md:text-[18px] xl:text-[24px]
                     leading-[8px] xs:leading-[17px] md:leading-[24px] xl:leading-[32px]">
                        Рыночная капитализация</p>
                    <p className="font-bold text-2xl xs:text-[50px] md:text-[72px] xl:text-[96px]
                        leading-[34px] xs:leading-[67px] md:leading-[96px] xl:leading-[128px]">
                        ${!!data && shortenNumber(data[0].marketCap)}K</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-5 md:gap-[30px] xl:gap-10 sm:items-end h-full justify-between">
                    <div className="flex flex-col items-end">
                        <p className="text-[9px] xs:text-[13px] md:text-[18px] xl:text-[24px] 
                        leading-[13px] xs:leading-[17px] md:leading-[24px] xl:leading-[32px] whitespace-nowrap">Объём торгов (24ч)</p>
                        <p className="font-semibold text-[19px] xs:text-[25px] md:text-[36px] xl:text-[24px]
                        leading-[25px] xs:leading-[34px] md:leading-[48px] xl:leading-[64px]">
                            ${!!data && data[0].volume.h24}</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-[9px] xs:text-[13px] md:text-[18px] xl:text-[24px]
                        leading-[13px] xs:leading-[17px] md:leading-[24px] xl:leading-[32px] whitespace-nowrap">
                            Транзакции (24ч)</p>
                        <p className="font-semibold text-[19px] xs:text-[25px] md:text-[36px] xl:text-[24px]
                        leading-[25px] xs:leading-[34px] md:leading-[48px] xl:leading-[64px]">
                            {!!data && data[0].txns.h24.buys + data[0].txns.h24.sells}</p>
                    </div>
                    <div className="flex flex-col items-end">
                        <p className="text-[9px] xs:text-[13px] md:text-[18px] xl:text-[24px]
                        leading-[13px] xs:leading-[17px] md:leading-[24px] xl:leading-[32px] whitespace-nowrap">
                            Ликвидность</p>
                        <p className="font-semibold text-[19px] xs:text-[25px] md:text-[36px] xl:text-[24px]
                        leading-[25px] xs:leading-[34px] md:leading-[48px] xl:leading-[64px]">
                            ${!!data && data[0].liquidity.usd}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}