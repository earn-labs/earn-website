"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import ReflectionChecker from '../reflectionChecker/reflectionChecker';


import { useContractReads } from "wagmi";
import { abi } from "../../assets/tokenABI";
import { useState } from "react";
import { formatEther } from "viem";

const TOKEN_CONTRACT = "0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E";

type Props = {};
const tokenContract = {
    address: TOKEN_CONTRACT as `0x${string}`,
    abi: abi,
};
export default function Tokenomics({ }: Props) {
    const [burnBalance, setBurnBalance] = useState<number | null>(null);
    const [totalReflections, setTotalReflections] = useState<number | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    async function fetchTotalBurn() {

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/total-burned`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to fetch total burned');
            }

            const data: { totalBurned: number } = await response.json();
            console.log("Fetched total burned:", data.totalBurned);
            setBurnBalance(data.totalBurned);
        } catch (err) {
            console.error('Error fetching total burned:', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch total burned');
            setBurnBalance(null);
        } finally {
            setLoading(false);
        }
    }

    async function fetchTotalFees() {

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/total-reflections`);

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to fetch total fees');
            }

            const data: { totalReflections: number } = await response.json();
            console.log("Fetched total reflections:", data.totalReflections);
            setTotalReflections(data.totalReflections);
        } catch (err) {
            console.error('Error fetching reflections:', err);
            setError(err instanceof Error ? err.message : 'Failed to fetch reflections');
            setTotalReflections(null);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {


        const timeoutId = setTimeout(() => {
            fetchTotalFees();
            fetchTotalBurn();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, []);

    const [copied, setCopied] = useState<boolean>(false);

    const copylink = async (e: any) => {
        try {
            navigator.clipboard.writeText(TOKEN_CONTRACT);
            setCopied(true);
            console.log("copied: " + TOKEN_CONTRACT);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <section id="tokenomics" className='mt-36 px-7 flex justify-center scroll-m-36'>
            <div className='max-w-7xl w-full'>
                <div>
                    <div className='flex justify-center'>
                        <h1 className='text-4xl font-bold'>TOKENOMICS</h1>
                    </div>
                    <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-100 animate-pulse" />
                </div>

                <div className='mt-16 relative flex justify-center'>
                    <Image
                        className='absolute h-96 w-96 top-1/4'
                        src="/featured_image.jpg"
                        width={605}
                        height={658}
                        style={{ width: "250px", height: "auto" }}
                        alt="flame"

                    />
                    <div className='flex flex-col items-start w-full gap-5 mt-5'>
                        <div className="h-16 flex items-center gap-5 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                            <h1 className='text-gray-300  leading-5 '>Contract Address:</h1>
                            <h1 onClick={copylink} className='font-bold text-ellipsis overflow-hidden  leading-5 cursor-pointer'>0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E</h1>
                        </div>
                        <div className="grid grid-cols sm:grid-cols-2 gap-5 w-full">
                            <div className="h-16 flex items-center gap-5 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Symbol:</h1><h1 className='font-bold'>EARN</h1>
                            </div>
                            <div className="h-16 flex items-center gap-5 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Slippage:</h1><h1 className='font-bold'>3%</h1>
                            </div>
                            <div className="h-16 flex items-center gap-5 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Network:</h1><h1 className='font-bold'>Ethereum</h1>
                            </div>
                            <div className="h-16 flex items-center gap-5 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300  leading-5'>Total Supply:</h1><h1 className='font-bold'>1,000,000,000</h1>
                            </div>
                            <div className="h-16 flex items-center gap-5 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Transaction Fee:</h1><h1 className='font-bold'>2%</h1>
                            </div>
                            <div className="h-16 flex items-center gap-5 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300'>Reflections:</h1><h1 className='font-bold'>2%</h1>
                            </div>
                            <div className="h-16 flex items-center gap-5 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300 leading-5'>Total Burned:</h1><h1 className='font-bold leading-5'>{`${isLoading || burnBalance == null ? "Loading..." : burnBalance?.toLocaleString()
                                    } EARN`}</h1>
                            </div>
                            <div className="h-16 flex items-center gap-5 rounded-md border-l-2 border-primary bg-white/5 backdrop-blur px-5 w-full">
                                <h1 className='text-gray-300 leading-5'>Total Reflections:</h1><h1 className='font-bold leading-5'>{`${isLoading || totalReflections == null ? "Loading..." : totalReflections.toLocaleString()
                                    } EARN`}</h1>
                            </div>

                        </div>
                    </div>


                </div>
                <div id="reflections" className='flex justify-center my-16 w-full scroll-m-36'>
                    <div className='w-full max-w-lg'>
                        <ReflectionChecker></ReflectionChecker>
                    </div>
                </div>


            </div>

        </section>
    );
}