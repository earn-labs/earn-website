import React from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import ChartButton from '../buttons/chartButton';
import CopyToClipboard from '../copyToClipboard';
import CustomButton from '../buttons/customButton';
import PopUp from './popup';
import IconToClipboard from '../iconToClipboard/iconToClipboard';

type Props = {};

// my-8 lg:my-16 mx-4 sm:mx-8 xl:ml-16
export default function Introduction({ }: Props) {

  return (
    <section id="introduction" className='px-7 my-32 scroll-m-36 h-auto lg:h-[70vh]'>
      <div className='flex justify-center w-full sm:hidden'>
        <Link href="https://t.me/buyholdearn" className=' bg-primary text-black uppercase font-bold rounded-xl py-2 px-4 leading-6 mx-auto duration-500 hover:scale-110 transform hover:bg-primary/80'>GET FREE $EARN!</Link>

      </div>

      <div className=" sm:bg-center h-full w-full grid lg:grid-cols-5 items-center max-w-7xl mx-auto border border-primary mt-4 rounded-2xl relative">
        <Link href="https://t.me/buyholdearn" className='hidden sm:block bg-primary text-black top-8 absolute right-8 uppercase font-bold rounded-xl py-2 px-4 leading-6  duration-500 hover:scale-110 transform hover:bg-primary/80'>GET FREE $EARN!</Link>

        <div className='col-start-1 col-span-3 row-start-1 z-10  sm:max-w-2xl flex flex-col justify-between h-full px-4 py-8 sm:px-16 sm:py-16'>
          <div className=''>
            <div className='my-4 flex gap-4 w-full pl-1'>
              <SocialIcon network="telegram" url="https://t.me/buyholdearn" bgColor="#FF6B10aa" style={{ height: 30, width: 30 }} label="Telegram" />
              <SocialIcon network="x" url="https://twitter.com/buyholdearn" bgColor="#FF6B10aa" style={{ height: 30, width: 30 }} label="X" />
              <SocialIcon network="linkedin" url="https://www.linkedin.com/showcase/holdearn" bgColor="#FF6B10aa" style={{ height: 30, width: 30 }} label="LinkedIn" />
              <Link href="https://etherscan.io/address/0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E#code">
                <Image
                  src="/etherscan.png"
                  width={122}
                  height={122}
                  style={{ width: "30px", height: "auto", opacity: "0.8" }}
                  alt="etherscan"
                />
              </Link>

            </div>
            <h1 className='text-4xl lg:text-6xl font-bold mb-2'>BUY, HOLD, EARN</h1>
            <h2 className='text-2xl lg:text-3xl leading-normal'>The Deflationary Rewards Token</h2>
          </div>

          <div className='w-full h-auto p-1'>
            <div className='mt-16'>
              <h3 className='leading-normal my-4 uppercase opacity-60 lg:text-2xl'>Available on 5 chains:</h3>
              <div className='flex flex-row justify-between xs:gap-8 h-8 xxs:h-10 xs:justify-start'>
                <IconToClipboard imglink="/chainlogos/eth.png" copyText="0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E" iconSize={10}></IconToClipboard>
                <IconToClipboard imglink="/chainlogos/solana.png" copyText="8CuPzHKuZQUyYbear8fi3u6iuTY652WVZT2cHZ2yeNbE" iconSize={10}></IconToClipboard>
                <IconToClipboard imglink="/chainlogos/bnb.png" copyText="0x2ac895feba458b42884dcbcb47d57e44c3a303c8" iconSize={10}></IconToClipboard>
                <IconToClipboard imglink="/chainlogos/base.png" copyText="0x803b629C339941e2b77D2dC499DAc9e1fD9eAC66" iconSize={10}></IconToClipboard>
                <IconToClipboard imglink="/chainlogos/avax.png" copyText="0x806cc7a21bd85e960857ac1e097802fabad6f594" iconSize={10}></IconToClipboard>
              </div>
            </div>

            <div className='mt-4'>
              <h3 className='text-primary opacity-60 text-lg lg:text-2xl font-bold'>Ethereum:</h3>
              <CopyToClipboard
                text="0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
                copyText="0x0b61C4f33BCdEF83359ab97673Cb5961c6435F4E"
              />
              <div className='text-primary text-sm gap-2 my-2'><div>NOW ON MONAD:</div><CopyToClipboard
                text="0x3dB619ff72D877490699276061FB0Fa0618FDf47"
                copyText="0x3dB619ff72D877490699276061FB0Fa0618FDf47"
              /></div>
              <div className='flex gap-5 flex-wrap pt-4'>
                <ChartButton url="https://www.coingecko.com/en/coins/hold-2"></ChartButton>
                <CustomButton url="https://flames.buyholdearn.com/" name="Flames"></CustomButton>
                <CustomButton url="https://flamelings.buyholdearn.com/" name="Flamelings"></CustomButton>
                <CustomButton url="https://app.pwn.xyz/asset/Base/0x803b629C339941e2b77D2dC499DAc9e1fD9eAC66/lend?ref=0xc18a0029637f1803DC347761CD10dD3b5c7A7eF5" name="Lend"></CustomButton>
              </div>
            </div>



          </div>

        </div>

        <div className='col-start-1 col-span-3 row-start-1 z-0 overflow-hidden h-full w-full relative bottom-0 opacity-40 rounded-2xl lg:left-16'>
          <Image
            src="/smoke.gif"
            width={412}
            height={732}
            style={{ width: "400px", height: "100%", bottom: "0", position: "absolute", inset: "0" }}
            alt="flame"
            className='object-cover'
          />
        </div>
        <div className='col-start-4 col-span-2 row-start-1 w-full hidden lg:flex rounded-2xl justify-end'>
          <Link href="https://app.buyholdearn.com/" className='w-full flex justify-center'>
            <Image
              src="/logo_hero.jpg"
              width={321}
              height={560}
              style={{ width: "40%", height: "auto", margin: "" }}
              alt="flame"
            />
          </Link>


        </div>
      </div>
      {/* <PopUp></PopUp> */}
    </section>

  );
}