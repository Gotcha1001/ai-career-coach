// "use client"
// import Image from "next/image";

// import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";

// export default function Home() {
//   // const user = useAuthContext();
//   // console.log(user?.user)

//   const { user } = useUser();

//   return (
//     <div>
//       <header className="flex  flex-wrap sm:justify-start  sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-neutral-800 dark:border-neutral-700">
//         <nav className="relative  p-4 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8" aria-label="Global">
//           <div className="flex items-center justify-between">
//             <div>
//               <Image src={'/logo.svg'} alt="logo" width={150} height={150} />
//             </div>
//           </div>
//           <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7 cursor-pointer">

//               {/* Clerk Authentication  */}
//               {!user ? <SignInButton mode='modal' signUpForceRedirectUrl={'/dashboard'}>
//                 <div className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6 dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500" >
//                   <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                     <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
//                   </svg>
//                   Get Started
//                 </div>
//               </SignInButton>
//                 :
//                 <UserButton />
//               }
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element.svg')] dark:before:bg-[url('https://preline.co/assets/svg/examples-dark/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
//         <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

//           <div className="flex justify-center">
//             <a className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 ps-3 rounded-full transition hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700 dark:hover:border-neutral-600 dark:text-neutral-200"
//               href="tubeguruji.com" target="_blank">
//               TUBEGURUJI Membership - Join Now
//               <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-neutral-700 dark:text-neutral-400">
//                 <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
//               </span>
//             </a>
//           </div>

//           <div className="mt-5 max-w-2xl text-center mx-auto">
//             <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
//               Build Something
//               <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent"> With NextJs</span>
//             </h1>
//           </div>

//           <div className="mt-5 max-w-3xl text-center mx-auto">
//             <p className="text-lg text-gray-600 dark:text-neutral-400">
//               Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality apps in seconds.</p>
//           </div>

//           <div className="mt-8 gap-3 flex justify-center">
//             <a className="inline-flex justify-center items-center
//       gap-x-3 text-center bg-gradient-to-tl from-blue-600
//        to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent cursor-pointer text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800"
//               href="/dashboard">
//               Get started
//               <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
//             </a>

//           </div>

//         </div>
//       </div>

//       <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">

//           <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
//             <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
//               <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="10" height="14" x="3" y="8" rx="2" /><path d="M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4" /><path d="M8 18h.01" /></svg>
//             </div>
//             <div className="mt-5">
//               <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">25+ templates</h3>
//               <p className="mt-1 text-gray-600 dark:text-neutral-400">Responsive, and mobile-first project on the web</p>
//               <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
//                 Learn more
//                 <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
//               </span>
//             </div>
//           </a>

//           <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
//             <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
//               <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9" /><path d="M14 17H5" /><circle cx="17" cy="17" r="3" /><circle cx="7" cy="7" r="3" /></svg>
//             </div>
//             <div className="mt-5">
//               <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Customizable</h3>
//               <p className="mt-1 text-gray-600 dark:text-neutral-400">Components are easily customized and extendable</p>
//               <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
//                 Learn more
//                 <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
//               </span>
//             </div>
//           </a>

//           <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
//             <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
//               <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
//             </div>
//             <div className="mt-5">
//               <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Free to Use</h3>
//               <p className="mt-1 text-gray-600 dark:text-neutral-400">Every component and plugin is well documented</p>
//               <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
//                 Learn more
//                 <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
//               </span>
//             </div>
//           </a>

//           <a className="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-neutral-800" href="#">
//             <div className="flex justify-center items-center size-12 bg-blue-600 rounded-xl">
//               <svg className="flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" /><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" /></svg>
//             </div>
//             <div className="mt-5">
//               <h3 className="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">24/7 Support</h3>
//               <p className="mt-1 text-gray-600 dark:text-neutral-400">Contact us 24 hours a day, 7 days a week</p>
//               <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
//                 Learn more
//                 <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
//               </span>
//             </div>
//           </a>

//         </div>
//       </div>

//     </div>
//   );
// }

"use client";
import Image from "next/image";

import { SignIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";

export default function Home() {
  const { user } = useUser();

  return (
    <div className="bg-gray-900">
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-900 border-b border-purple-800/30 text-sm py-3 sm:py-0">
        <nav
          className="relative p-4 max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex items-center justify-between">
            <div>
              <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
            </div>
          </div>
          <div
            id="navbar-collapse-with-animation"
            className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end sm:ps-7 cursor-pointer">
              {/* Clerk Authentication  */}
              {!user ? (
                <SignInButton
                  mode="modal"
                  signUpForceRedirectUrl={"/dashboard"}
                >
                  <div className="flex items-center gap-x-2 font-medium text-purple-300 hover:text-purple-200 sm:border-s sm:border-purple-700 py-2 sm:py-0 sm:ms-4 sm:my-6 sm:ps-6">
                    <svg
                      className="flex-shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                    </svg>
                    Get Started
                  </div>
                </SignInButton>
              ) : (
                <UserButton />
              )}
            </div>
          </div>
        </nav>
      </header>

      <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-gradient-to-br before:from-purple-900/20 before:via-indigo-900/20 before:to-gray-900 before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 border border-purple-700/50 text-sm text-purple-200 p-1 ps-3 rounded-full backdrop-blur-sm transition hover:border-purple-600/50"
              href="tubeguruji.com"
              target="_blank"
            >
              🚀 AI-Powered Career Transformation - Join Now
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 font-semibold text-sm text-white">
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="block font-bold text-white text-4xl md:text-5xl lg:text-6xl">
              Accelerate Your
              <span className="bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-purple-600 text-transparent">
                {" "}
                Career Journey
              </span>
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-lg text-gray-300">
              Transform your career with AI-powered coaching, personalized
              roadmaps, resume optimization, and intelligent career guidance
              tailored just for you.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <a
              className="inline-flex justify-center items-center 
      gap-x-3 text-center bg-gradient-to-r from-purple-600
       to-indigo-600 hover:from-purple-700 hover:to-indigo-700 border border-transparent cursor-pointer text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 py-3 px-6 shadow-lg"
              href="/dashboard"
            >
              Start Your Journey
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-gray-900">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6">
          <a
            className="group flex flex-col justify-center hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-indigo-900/20 rounded-xl p-4 md:p-7 border border-gray-800 hover:border-purple-700/50 transition-all duration-300"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg">
              <svg
                className="flex-shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 11H1l6-6v4a7.97 7.97 0 0 1 7 8" />
                <path d="M21 12c0 .8-.2 1.4-.6 2.1l-3.9 5.8c-.6.9-1.8.9-2.4 0L9 15" />
                <path d="M3 19c0-2 3-4 3-4s3 2 3 4-1.3 3-3 3-3-1-3-3" />
                <path d="M21 19c0-2-3-4-3-4s-3 2-3 4 1.3 3 3 3 3-1 3-3" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-purple-300 text-lg font-semibold text-white">
                AI Career Roadmap
              </h3>
              <p className="mt-1 text-gray-400">
                Get personalized career paths with AI-generated milestones and
                actionable steps
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-purple-400 decoration-2 group-hover:underline font-medium">
                Explore Roadmaps
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-indigo-900/20 rounded-xl p-4 md:p-7 border border-gray-800 hover:border-purple-700/50 transition-all duration-300"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg">
              <svg
                className="flex-shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10,9 9,9 8,9" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-purple-300 text-lg font-semibold text-white">
                Resume Optimizer
              </h3>
              <p className="mt-1 text-gray-400">
                AI-powered resume analysis and optimization for maximum impact
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-purple-400 decoration-2 group-hover:underline font-medium">
                Optimize Resume
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-indigo-900/20 rounded-xl p-4 md:p-7 border border-gray-800 hover:border-purple-700/50 transition-all duration-300"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg">
              <svg
                className="flex-shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="M13 8H7" />
                <path d="M17 12H7" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-purple-300 text-lg font-semibold text-white">
                AI Career Coach
              </h3>
              <p className="mt-1 text-gray-400">
                Chat with intelligent AI agents for personalized career advice
                24/7
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-purple-400 decoration-2 group-hover:underline font-medium">
                Start Chatting
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>

          <a
            className="group flex flex-col justify-center hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-indigo-900/20 rounded-xl p-4 md:p-7 border border-gray-800 hover:border-purple-700/50 transition-all duration-300"
            href="#"
          >
            <div className="flex justify-center items-center size-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl shadow-lg">
              <svg
                className="flex-shrink-0 size-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="group-hover:text-purple-300 text-lg font-semibold text-white">
                Smart Analytics
              </h3>
              <p className="mt-1 text-gray-400">
                Track your progress with intelligent insights and career metrics
              </p>
              <span className="mt-2 inline-flex items-center gap-x-1.5 text-sm text-purple-400 decoration-2 group-hover:underline font-medium">
                View Analytics
                <svg
                  className="flex-shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
