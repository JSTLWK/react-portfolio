import "tailwindcss/tailwind.css";
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import switchDarkMode from '../utils/darkmode'
import Navigation from '../components/navigation'
import illustrationSectionTwo from '../public/svg/illustration-2.svg'

export default function Home() {

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen">
      <Head>
        <title>Full Stack Developer | Jasper Stolwijk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />

      <main>

        {/* Hero Section */}
        <div className="bg-blue-500">
          <div className="container mx-auto flex flex-wrap py-5 sm:px-10 sm:pt-32 pb-32">
            <div className="w-full sm:w-1/2 px-2 mb-2 sm:mb-0 text-white pr-16">
              <h2 className="text-4xl font-medium"><span className="uppercase">It's me!</span> Jasper Stolwijk</h2>
              <p className="text-lg">Yes, this is me, Jasper Stolwijk. I'm an IT Nerd and also an IT Student living my life in the Netherlands. Besides developing applications, I am a traveller, soccer lover and like gaming.</p>
              <div className="flex mt-4">
                <Link href="/about">
                  <div className="bg-gray-800 flex space-x-3 rounded-md cursor-pointer hover:bg-gray-700 text-white p-3 mr-5">
                    <span>More info</span>  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                </Link>
                <Link href="#projects">
                  <div className="bg-indigo-600 flex space-x-3 rounded-md cursor-pointer hover:bg-indigo-700 text-white p-3 mr-5">
                    <span>Look what I did</span>  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                </Link>
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <div className="coding mb-10 inverse-toggle px-5 pt-4 shadow-lg text-gray-100 text-sm font-mono subpixel-antialiased
                  bg-gray-800 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
                <div className="top mb-2 flex"><div className="h-3 w-3 bg-red-500 rounded-full"></div> <div className="ml-2 h-3 w-3 bg-orange-300 rounded-full"></div> <div className="ml-2 h-3 w-3 bg-green-500 rounded-full"></div></div>

              </div>
            </div>
          </div>
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path d="m0 64 60 26.7c60 26.3 180 80.3 300 90.6 120 10.7 240-21.3 360-42.6 120-21.7 240-31.7 360-21.4 120 10.7 240 42.7 300 58.7l60 16v128h-60-300-360-360-300-60z" fill="#fff"></path></svg>
        </div>

        {/* GIt Section (#1) */}
        <div className="container mx-auto py-10 mb-40 flex flex-wrap">
          <div className="w-full sm:w-1/2 flex justify-center items-center">
            <svg data-name="Layer 1" viewBox="0 0 1144 617.32" xmlns="http://www.w3.org/2000/svg" className="w-full sm:px-24"><title>developer activity</title> <path transform="translate(-28 -141.34)" d="M1172,537.57a181.92,181.92,0,0,1-6.85,49.6,180.06,180.06,0,0,1-19.27,44.28c0,50.1-33.82,93.4-82.91,114a167.3,167.3,0,0,1-64.73,12.8H245.17c-40.25,0-77.55-10.86-108.14-29.36A185.76,185.76,0,0,1,112.2,711c-34-29.22-55.08-69.6-55.08-114.2A180.5,180.5,0,0,1,28,498.08c0-73.36,43.39-136.44,105.55-164.29a174.52,174.52,0,0,1,25.51-9.12q4.63-1.26,9.36-2.26a175.39,175.39,0,0,1,25.51-3.5q4.65-.29,9.35-.33H205c3.46,0,6.89.12,10.3.32l1.12-1.9q2.06-3.44,4.22-6.81,3.9-6.14,8.18-12.1,4.48-6.29,9.35-12.38l.83-1q2.76-3.44,5.64-6.8,9-10.49,19-20.35c72.11-70.68,185.08-116.18,312.08-116.18,98.82,0,189.15,27.55,258.34,73.07A174.18,174.18,0,0,1,920,191.86c97.74,0,177,80.37,177,179.51a184.9,184.9,0,0,1-1,18.78A180,180,0,0,1,1172,537.57Z" fill="#4299e1" opacity=".1"></path> <path transform="translate(-28 -141.34)" d="m263.66 257.52v20.35h-19q8.93-10.48 19-20.35z" fill="#4299e1" opacity=".2"></path> <rect x="245.02" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="279.88" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="314.75" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="349.61" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="384.48" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="419.35" y="111.02" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="454.21" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="489.08" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="523.94" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="558.81" y="111.02" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="593.68" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="628.54" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="663.41" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="698.28" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="733.14" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="768.01" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="802.87" y="111.02" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="837.74" y="111.02" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="872.61" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="907.47" y="111.02" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="942.34" y="111.02" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="977.2" y="111.02" width="25.51" height="25.51" fill="#4299e1"></rect> <path transform="translate(-28 -141.34)" d="m228.8 298.08v12.1h-8.18q3.9-6.18 8.18-12.1z" fill="#4299e1"></path> <rect x="210.15" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="245.02" y="143.33" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="279.88" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="314.75" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="349.61" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="384.48" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="419.35" y="143.33" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="454.21" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="489.08" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="523.94" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="558.81" y="143.33" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="593.68" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="628.54" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="663.41" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="698.28" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="733.14" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="768.01" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="802.87" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="837.74" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="872.61" y="143.33" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="907.47" y="143.33" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="942.34" y="143.33" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="977.2" y="143.33" width="25.51" height="25.51" fill="#4299e1"></rect> <path transform="translate(-28 -141.34)" d="m159.06 324.67v17.83h-25.51v-8.71a174.52 174.52 0 0 1 25.51-9.12z" fill="#4299e1" opacity=".2"></path> <polygon points="165.93 177.57 165.93 201.16 140.42 201.16 140.42 181.07" fill="#4299e1" opacity=".2"></polygon> <rect x="175.28" y="175.65" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="210.15" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="245.02" y="175.65" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="279.88" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="314.75" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="349.61" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="384.48" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="419.35" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="454.21" y="175.65" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="489.08" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="523.94" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="558.81" y="175.65" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="593.68" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="628.54" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="663.41" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="698.28" y="175.65" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="733.14" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="768.01" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="802.87" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="837.74" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="872.61" y="175.65" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="907.47" y="175.65" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="942.34" y="175.65" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="977.2" y="175.65" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="105.55" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="140.42" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="175.28" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="210.15" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="245.02" y="207.96" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="279.88" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="314.75" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="349.61" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="384.48" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="419.35" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="454.21" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="489.08" y="207.96" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="523.94" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="558.81" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="593.68" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="628.54" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="663.41" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="698.28" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="733.14" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="768.01" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="802.87" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="837.74" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="872.61" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="907.47" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="942.34" y="207.96" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="977.2" y="207.96" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="105.55" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="140.42" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="175.28" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="210.15" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="245.02" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="279.88" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="314.75" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="349.61" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="384.48" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="419.35" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="454.21" y="240.28" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="489.08" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="523.94" y="240.28" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="558.81" y="240.28" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="593.68" y="240.28" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="628.54" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="663.41" y="240.28" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="698.28" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="733.14" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="768.01" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="802.87" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="837.74" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="872.61" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="907.47" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="942.34" y="240.28" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="977.2" y="240.28" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="105.55" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="140.42" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="175.28" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="210.15" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="245.02" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="279.88" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="314.75" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="349.61" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="384.48" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="419.35" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="454.21" y="272.59" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="489.08" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="523.94" y="272.59" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="558.81" y="272.59" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="593.68" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="628.54" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="663.41" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="698.28" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="733.14" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="768.01" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="802.87" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="837.74" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="872.61" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="907.47" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="942.34" y="272.59" width="25.51" height="25.51" fill="#4299e1" opacity=".4"></rect> <rect x="977.2" y="272.59" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="105.55" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="140.42" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="175.28" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="210.15" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="245.02" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".7"></rect> <rect x="279.88" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="314.75" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="349.61" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="384.48" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="419.35" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="454.21" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="489.08" y="304.91" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="523.94" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="558.81" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="593.68" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="628.54" y="304.91" width="25.51" height="25.51" fill="#4299e1"></rect> <rect x="663.41" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="698.28" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="733.14" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="768.01" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="802.87" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="837.74" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="872.61" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="907.47" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="942.34" y="304.91" width="25.51" height="25.51" fill="#4299e1" opacity=".2"></rect> <rect x="977.2" y="304.91" width="25.51" height="25.51" fill="#4299e1"></rect> <circle cx="734.52" cy="363.89" r="34.87" fill="#767d9f"></circle> <path transform="translate(-28 -141.34)" d="m760.71 460.87q5.22 22.78 8.86 45.9c0.73 4.58 1.38 9.41-0.28 13.74-1.39 3.61-4.22 6.43-6.44 9.59s-3.9 7.21-2.55 10.83 5.29 5.6 9.05 6.62c10.76 2.9 22.23 0.79 32.94-2.35a53.29 53.29 0 0 0 13.81-5.72c4.54-2.88 8.26-6.88 11.68-11 15.61-18.93 25.83-41.65 35.45-64.23a39.12 39.12 0 0 1-33.11-13.34c-3.94-4.63-6.83-11.08-4.61-16.74-6.51 3.57-14.24 3.81-21.25 6.25a75.49 75.49 0 0 0-12.5 6.15q-7.18 4.15-14.28 8.46c-5.41 3.26-10.48 6.16-16.77 5.84z" fill="#ae6e79"></path> <path transform="translate(-28 -141.34)" d="m833.64 487.05c-6.11 11.89-14.06 23.32-25.41 30.4s-26.63 9-38 2c-5.6-3.42-9.84-8.62-14.73-13s-11-8.13-17.57-7.56c-7.24 0.63-12.91 6.28-17.76 11.69-7.36 8.22-14.47 16.79-19.68 26.52-10 18.7-12.37 40.56-11.93 61.76s3.51 42.29 3.58 63.49c0.1 26.08-4.32 51.95-8.79 77.64 41.1-5.06 82.25 6 123.44 10.19 26.36 2.71 52.92 2.65 79.42 2.58 4.66 0 9.62-0.12 13.5-2.7a18.2 18.2 0 0 0 5.59-6.64c3.66-6.75 5.13-14.45 6.15-22.06 2.59-19.22 2.67-38.68 2.74-58.08 0.18-47 0.35-94.17-5.62-140.8-1.47-11.47-3.35-23-7.75-33.73s-11.58-20.6-21.62-26.35c-6.45-3.7-21.4-10.14-29-6.41-8.53 4.16-12.47 23.1-16.56 31.06z" fill="#767d9f"></path> <path transform="translate(-28 -141.34)" d="M836.68,619.77c-1.55-29-7.86-59.95,5.57-85.69,3.3-6.32-8.54-14.21-4.88-20.33a92.08,92.08,0,0,0,10.06-23.93c.76-2.89,1.37-5.95.65-8.85-1.33-5.29-6.56-8.44-11-11.66-4.9-3.56-7.42-14.41-9-20.28s12.57,1.2,18.26-.89c7.9-2.89,17.94-1.07,25.82,1.86,4.4,1.62,9.18,1.76,13.87,1.88,9.11.24,18.25.47,27.29-.65,4.06-.51,8.13-1.28,12.21-1.05,10.41.59,19.46,7.71,25.62,16.13s10.08,18.23,15.13,27.35c4.21,7.6,9.23,14.78,12.82,22.69,3.18,7,5.19,14.52,7.18,22l5.13,19.19a25.58,25.58,0,0,1,1.26,8.51c-.26,3.07-1.62,5.93-3,8.66A164.12,164.12,0,0,1,971,603.2c-10.79,13.23-23.89,25.16-30.3,41-2.5,6.17-3.89,12.73-5.16,19.27a707.94,707.94,0,0,0-10.9,79.15,174.2,174.2,0,0,0-36.52-12.21,177.61,177.61,0,0,0-19-3c-5.59-.58-12.8.52-18.12-1-8.9-2.53-9.88-17.58-11.23-25.46-2.16-12.55-2.59-25.32-2.67-38C837,648.53,837.45,634.14,836.68,619.77Z" fill="#4c4981"></path> <path transform="translate(-28 -141.34)" d="M641.23,565.54c4.21,24,8.85,48.07,18,70.62-.23.22-.46.42-.69.62-.81.69-1.65,1.34-2.53,2-2.05,1.44-4.3,2.66-6,4.54a8,8,0,0,0-1.5,2.45,5.48,5.48,0,0,0,0,4.47c-4.77,2.11-10.31,1.46-15.66,1.26-4.61-.17-9.08,0-12.78,2.53-5.14,3.54-6.69,10.34-7.52,16.52q-.46,3.38-.79,6.77-.32,3.15-.52,6.32a188.61,188.61,0,0,0-.19,21q.08,1.92.21,3.84c-16.34-.39-31.23-8.91-45.32-17.19-3.22-1.89-6.54-3.88-8.63-7A15.8,15.8,0,0,1,555,674c0-.51.09-1,.16-1.52a41.58,41.58,0,0,1,2.29-8.68,107.2,107.2,0,0,1,19.19-32.65c3.58-4.18,7.61-8.27,9.28-13.52.73-2.29,1-4.72,1.74-7,3.32-9.88,15.3-14.55,19.4-24.14,1-2.29,1.46-4.8,2.7-7a17.63,17.63,0,0,1,4.25-4.75c.73-.61,1.49-1.2,2.24-1.79q10.54-8.26,20.31-17.45,1.82-1.71,3.6-3.46A59.48,59.48,0,0,0,641.23,565.54Z" fill="#4c4981"></path> <path transform="translate(-28 -141.34)" d="M742,494.56c-1.44,1.52-3,2.95-4.53,4.37l-.41.37-1.62,1.5a39,39,0,0,0-7.55,8.79l-.17.28c-5.1,9.13-3.21,20.37-1.79,30.74a261.55,261.55,0,0,1,2.37,39c-.26,18-2.38,35.88-2.42,53.86,0,4.08.09,8.15.27,12.23.29,6.63.79,13.25,1.39,19.87.65,7.26,1.43,14.51,2.16,21.76.58,5.61,1.13,11.21,1.59,16.81.23,2.9.45,5.79.63,8.69.21,3.4.38,6.81.48,10.21h0c.07,2.16.11,4.31.11,6.47,0,1.23,0,2.45,0,3.67q0,3.51-.19,7-.2,4.49-.61,9c-.31,3.27-.86,6.84-3.16,9.14-.14.14-.29.27-.44.4l-3.24-.4a332.72,332.72,0,0,0-67.3-1.2c.49-3.38.94-6.75,1.38-10.14.2-1.6.4-3.21.59-4.82q.33-2.76.63-5.52c.23-2,.44-4,.64-6q.78-7.73,1.37-15.47.87-11.29,1.32-22.62.22-5.41.34-10.83.17-6.72.16-13.45,0-6.54-.11-13.1c0-1.44-.06-2.88-.18-4.31a27.35,27.35,0,0,0-.53-3.83,49.87,49.87,0,0,0-3-8.48c-.22-.52-.43-1-.64-1.55-.12-.27-.23-.55-.34-.82,5.76-5.13,9.86-12,13.8-18.76,6.39-10.89,12.93-22.26,14-34.84s-5.18-26.71-17.2-30.55c-3.27-1-6.73-1.28-10.1-1.87-3.18-.56-9.81-1.83-13.49-4.11q-3,3.08-6,6.05a22.15,22.15,0,0,1,2.17-8.71l1.42.07a2.71,2.71,0,0,1-.16-1c0-1.07.74-2.28,2.32-3.62,4.71-4,12.12-4.89,15.09-10.3,1.24-2.25,1.45-4.93,2.45-7.29,2.87-6.73,11.11-9.21,16.07-14.59s6.2-13,10.21-19a28.62,28.62,0,0,1,12-10c.4-.19.81-.38,1.22-.55,8.3-3.55,18.16-4.36,26.76-4.34,3.34,0,12,.1,16.24,1.79a5.32,5.32,0,0,1,1.85,1.13C752.37,480.61,745.34,491,742,494.56Z" fill="#4c4981"></path> <path transform="translate(-28 -141.34)" d="m642.72 542.69a60.88 60.88 0 0 1 46.74 4.87c7.2 4 13.66 9.58 17.62 16.78 5.95 10.8 5.69 23.82 5.27 36.15-0.21 6.17-0.48 12.56-3.2 18.1-3.15 6.41-9.09 10.81-15.15 14.41a42.24 42.24 0 0 1-12.32 5.33c-6.72 1.46-13.7 0.22-20.47-1-7.36-1.36-15.26-3-20.37-8.48-3-3.18-4.64-7.31-6.26-11.35q-3.49-8.75-7-17.48c-4.05-10.11-5.42-18.52-0.07-28.37 2.43-4.49 5.4-8.69 7.8-13.21 1.2-2.3 5.5-15.16 7.41-15.75z" fill="#4c4981"></path> <path transform="translate(-28 -141.34)" d="M1063,715.56v29.9a167.3,167.3,0,0,1-64.73,12.8H728.58c-.14.14-.29.27-.44.4l-3.24-.4H245.17c-40.25,0-77.55-10.86-108.14-29.36V683.25l230.72-26.63.18,0L502.29,668l34.77,3,18.06,1.53,37.38,3.17,19.23,1.63,28,2.38,3.94.33,20.18,1.71L691.23,684l38.5,3.26,64.18,5.45,45.15,3.83,74.14,6.29,14.1,1.19,1.52.13,1.32.11,18.62,1.58,20.44,1.74,2.37.2Z" fill="#504f60"></path> <polygon points="764 573.12 474.86 523.77 463.65 580.46 596.19 596.33 637 601.44 749.26 579.33" fill="#9c9ca1"></polygon> <path transform="translate(-28 -141.34)" d="m642.33 739.94 144.86-27.23a5 5 0 0 1 5.94 4.93 5 5 0 0 1-4.09 4.93l-141.47 26.49z" fill="#9c9ca1"></path> <path transform="translate(-28 -141.34)" d="M705.17,654.31c4.51-.42,9.08-1.13,13.14-3.13,5-2.49,8.89-6.78,13.52-9.94,10.18-7,23.8-7.94,35.47-3.92s21.41,12.63,28.23,22.91c4.53,6.85,7.93,15.59,4.73,23.15a30.51,30.51,0,0,1-4.12,6.44l-8.34,10.9a29,29,0,0,1-5.66,6.09c-3.12,2.27-7,3.2-10.82,3.76-10.15,1.48-20.48.64-30.71,1.32-17.57,1.17-34.73,6.83-52.34,6.64-10.12-.11-20.11-2.15-30-4.19l-43.77-9c-7.62-1.56-16.23-3.84-19.82-10.75-1.61-3.11-1.91-6.71-2.1-10.21-.52-9.64,0-20.36,6.68-27.31,6.28-6.52,16.21-8.58,23.71-13.4,9.18-5.91,12.21-4,21.89.44A120,120,0,0,0,705.17,654.31Z" fill="#ae6e79"></path> <path transform="translate(-28 -141.34)" d="M705.17,654.31c4.51-.42,9.08-1.13,13.14-3.13,5-2.49,8.89-6.78,13.52-9.94,10.18-7,23.8-7.94,35.47-3.92s21.41,12.63,28.23,22.91c4.53,6.85,7.93,15.59,4.73,23.15a30.51,30.51,0,0,1-4.12,6.44l-8.34,10.9a29,29,0,0,1-5.66,6.09c-3.12,2.27-7,3.2-10.82,3.76-10.15,1.48-20.48.64-30.71,1.32-17.57,1.17-34.73,6.83-52.34,6.64-10.12-.11-20.11-2.15-30-4.19l-43.77-9c-7.62-1.56-16.23-3.84-19.82-10.75-1.61-3.11-1.91-6.71-2.1-10.21-.52-9.64,0-20.36,6.68-27.31,6.28-6.52,16.21-8.58,23.71-13.4,9.18-5.91,12.21-4,21.89.44A120,120,0,0,0,705.17,654.31Z" opacity=".05"></path> <path transform="translate(-28 -141.34)" d="m880.94 640.6c-12.28 4.75-24.63 9.52-37.49 12.35-21.56 4.75-44.12 4-65.51 9.43-11.3 2.88-22.53 7.52-34.14 6.58-5.19-0.42-10.2-2-15.25-3.2-28.37-7-60.62-4.73-83.66 13.27-7.88 6.15-14.33 13.82-20.18 22a14.7 14.7 0 0 0 5.91 21.88 86.62 86.62 0 0 0 28.38 7.57c13.13 1.16 26.32-0.7 39.38-2.56 19.38-2.75 38.77-5.51 58.1-8.6 6.94-1.11 13.88-2.26 20.86-3.14 50.23-6.35 101.37 1.37 151.73-3.93 5.09-0.54 10.27-1.24 14.9-3.41 11.72-5.5 17.52-20 15.1-32.74s-11.76-23.33-23-29.83c-9.42-5.47-19.58-7.68-30.07-10-9.74-2.27-15.68 0.73-25.06 4.33z" fill="#ae6e79"></path> <path transform="translate(-28 -141.34)" d="M988.67,564.44c5.54,7.26,6.72,17,6.12,26.09s-2.76,18.08-3.08,27.21c-.44,12.52,2.58,25,2.07,37.48-.36,8.73-2.43,17.29-4.88,25.67-2.89,9.89-7.07,20.52-16.2,25.27-12.12,6.31-37.54,2.76-50.29,7.7,1.16-7.23,12.28-17.7,13.44-24.93.8-5,1.61-10.14.75-15.15-1.1-6.39-4.85-12.06-9.3-16.78-7.08-7.51-16.32-13.16-26.47-15s-35-.33-43.12,6.08c-1-6.62,17.6-13,24.14-14.43,3.26-.73,7-.32,9.61-2.39,5-3.92,1.37-11.73,1.61-18,.19-5,3.11-9.58,3.7-14.58,1-8-4.22-16.15-2.17-24,.76-2.9,2.45-5.45,3.62-8.21,3.56-8.45,2-18.09.1-27.07-1.18-5.64-2.33-12,.81-16.81,2.91-4.49,11.17,11.5,16.46,10.76,17.47-2.45,33.28-15.4,47.39-4.8,7.19,5.4,8.13,11,11,18.71C976.77,554.6,984,558.36,988.67,564.44Z" opacity=".1"></path> <path transform="translate(-28 -141.34)" d="M991.67,564.44c5.54,7.26,6.72,17,6.12,26.09s-2.76,18.08-3.08,27.21c-.44,12.52,2.58,25,2.07,37.48-.36,8.73-2.43,17.29-4.88,25.67-2.89,9.89-7.07,20.52-16.2,25.27-12.12,6.31-37.54,2.76-50.29,7.7,1.16-7.23,12.28-17.7,13.44-24.93.8-5,1.61-10.14.75-15.15-1.1-6.39-4.85-12.06-9.3-16.78-7.08-7.51-16.32-13.16-26.47-15s-35-.33-43.12,6.08c-1-6.62,17.6-13,24.14-14.43,3.26-.73,7-.32,9.61-2.39,5-3.92,1.37-11.73,1.61-18,.19-5,3.11-9.58,3.7-14.58,1-8-4.22-16.15-2.17-24,.76-2.9,2.45-5.45,3.62-8.21,3.56-8.45,2-18.09.1-27.07-1.18-5.64-2.33-12,.81-16.81,2.91-4.49,8.6-6.19,13.89-6.94a68.42,68.42,0,0,1,50,12.9c7.19,5.4,8.13,11,11,18.71C979.77,554.6,987,558.36,991.67,564.44Z" fill="#4c4981"></path> <path transform="translate(-28 -141.34)" d="M330,517.06,384.37,718a12.55,12.55,0,0,0,10.91,9.21L640,750.72a12.54,12.54,0,0,0,13.38-15.48L593.84,492.86a12.54,12.54,0,0,0-13.12-9.51L341.13,501.27A12.54,12.54,0,0,0,330,517.06Z" fill="#9c9ca1"></path> <ellipse cx="787.11" cy="387.68" rx="26.9" ry="27.25" fill="#fff"></ellipse> <path transform="translate(-28 -141.34)" d="m837.2 479.31s5.67 16.86-11.06 23.95l-2.14 3.74 10.48 10.34s12.92-23.57 11.52-31.94c0 0-2-8.5-8.8-6.09z" fill="#fff"></path> <circle cx="790.2" cy="388.99" r="25.94" fill="#4299e1"></circle> <path transform="translate(-28 -141.34)" d="m846.13 489.23-4.12-6.8-6-0.85c1.28-22.39-4.53-29.06-4.53-29.06l-1.35-0.13-5.88-0.57-11.06-11.48v-3.26c15.54 1.85 24.13 9.23 28.77 17.88 8.2 15.18 4.17 34.27 4.17 34.27z" fill="#4299e1"></path> <path transform="translate(-28 -141.34)" d="m830.18 448.27v4.12l-5.88-0.57-11.06-11.48s17.11 3.83 16.94 7.93z" opacity=".1" stroke="#4c4981" stroke-miterlimit="10"></path> <path transform="translate(-28 -141.34)" d="m846.13 489.23-4.12-6.8v-27.43c8.15 15.14 4.12 34.23 4.12 34.23z" opacity=".1" stroke="#4c4981" stroke-miterlimit="10"></path> <ellipse transform="translate(-185.67 306.64) rotate(-30)" cx="757.11" cy="518.2" rx="14.43" ry="26.32" fill="#fff"></ellipse> <path transform="translate(-28 -141.34)" d="M761,516c7.27,12.59,16.19,21,9.29,25s-27,2-34.27-10.6-.67-30,6.23-34S753.72,503.38,761,516Z" fill="#4299e1"></path> <path transform="translate(-28 -141.34)" d="m825.73 425.3c0 40.23-27.53 79-67.76 79a72.85 72.85 0 0 1 0-145.7c40.23 0.04 67.76 26.46 67.76 66.7z" opacity=".1"></path> <circle cx="729.97" cy="288.15" r="72.85" fill="#ae6e79"></circle> <path transform="translate(-28 -141.34)" d="M751.57,397.21c8.67,3.19,13.8,12.15,21.58,17.14,11,7,25.32,5.19,37.88,1.73,7-1.91,14.32-4.24,21.21-2.12a6,6,0,0,0,3.23.46c1.5-.43,2.24-2.09,2.73-3.57,8.52-25.4,4.69-54.17-8.17-77.67-3.32-6.06-7.3-11.92-12.78-16.13-4.32-3.31-9.4-5.48-14.52-7.33a145,145,0,0,0-28.88-7.13,17.94,17.94,0,0,0-5.27-.17c-2.41.39-4.57,1.69-6.72,2.85A68.78,68.78,0,0,1,732,313.38c-14,.53-30-2.77-40.79,6.21-13,10.77-9.76,31.78-18.19,46.4-5.58,9.67-16.34,16.69-18.11,27.7a25.57,25.57,0,0,0,.63,10.07c4.12,16.94,20.52,30.06,38,30.37a14.42,14.42,0,0,0,7.76-1.59,17.55,17.55,0,0,0,4.09-3.89C716.84,415.09,729.94,389.25,751.57,397.21Z" fill="#444053"></path> <path transform="translate(-28 -141.34)" d="M838.2,403.48c-.49,1.48-1.23,3.14-2.73,3.57a6,6,0,0,1-3.23-.46c-6.89-2.12-14.25.21-21.2,2.12-12.57,3.46-26.92,5.31-37.88-1.73-7.79-5-12.91-14-21.59-17.14-21.63-8-34.73,17.88-46.21,31.44a17.55,17.55,0,0,1-4.09,3.89,14.42,14.42,0,0,1-7.76,1.59c-17.42-.31-33.83-13.43-38-30.37-.23-1-.43-2-.58-3,0,.09,0,.17-.05.26a25.57,25.57,0,0,0,.63,10.07c4.12,16.94,20.53,30.06,38,30.37a14.42,14.42,0,0,0,7.76-1.59,17.55,17.55,0,0,0,4.09-3.89c11.48-13.56,24.58-39.4,46.21-31.44,8.68,3.19,13.8,12.15,21.59,17.14,11,7,25.31,5.19,37.88,1.73,7-1.91,14.31-4.24,21.2-2.12a6,6,0,0,0,3.23.46c1.5-.43,2.24-2.09,2.73-3.57a90.29,90.29,0,0,0,4.48-32.26A88.8,88.8,0,0,1,838.2,403.48Z" opacity=".1"></path></svg>
          </div>
          <div className="text-gray-700 w-full sm:w-1/2 mt-5 sm:mt-0 px-3 sm:px-0 flex flex-col justify-center items-center">
            <h2 className="w-full text-3xl font-bold">GIT is a requirement, not a skill</h2>
            <p className="w-full text-lg">I can't imagine working on a project without using GIT. It has become my first
            instinct when thinking of a new project when developing something I am making sure that GIT is the right
            tool to find all my sources and to push all my code to. Making sure they get reviewed and I am reviewing
                other people their code.</p>
          </div>
        </div>

        <div className="bg-blue-500 text-white">
          <svg viewBox="0 0 1440 288" xmlns="http://www.w3.org/2000/svg"><path transform="translate(1440 320) rotate(180)" d="M0,32,60,42.7C120,53,240,75,360,122.7,480,171,600,245,720,256s240-43,360-48,240,37,300,58.7l60,21.3v32H0Z" fill="#fff" data-name="wave (2)"></path></svg>
          <div className="container mx-auto py-10 flex flex-wrap">
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center px-2 sm:px-0 sm:text-right">
              <h2 className="w-full text-3xl font-bold">Well-known with Laravel and Vue</h2>
              <p className="w-full text-lg">Since 2019 I've been working with Laravel and Vue. Developing more knowledge around these frameworks are
              what I love doing. I've worked with a ton of projects which contained the Laravel framework and love continuing
                    those projects. I want to become one of the VueJS and Laravel Masters in the upcoming years so that is what keeps me driving. If you want to see my projects working with Laravel you can find out a list of projects here.</p>
            </div>
            <div className="w-full sm:w-1/2 mt-5 sm:mt-0 flex justify-center items-center">

            </div>
          </div>
        </div>
      </main>



      <footer>

      </footer>
    </div>
  )
}
