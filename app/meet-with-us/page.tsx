'use client'

import Image from 'next/image'
import GlobalBackground from '@/components/GlobalBackground'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function MeetWithUsPage() {
  return (
    <div className="relative">
      <GlobalBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <section className="section-padding bg-transparent pt-24">
            <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">Meet our leadership</h2>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-400">We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.</p>
              </div>
              <ul role="list" className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <li>
                  <Image
                    src="/images/gojiTeam/roe.jpg"
                    alt="Roe Sivanandan"
                    width={224}
                    height={224}
                    className="mx-auto size-56 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 object-cover grayscale"
                  />
                  <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Roe Sivanandan</h3>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">CEO & Co-Founder</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    <li>
                      <a href="https://www.linkedin.com/in/roe-sivanandan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Image
                    src="/images/gojiTeam/adam.jpeg"
                    alt="Adam Cole"
                    width={224}
                    height={224}
                    className="mx-auto size-56 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 object-cover grayscale"
                  />
                  <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Adam Cole</h3>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">CTO & Co-Founder</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                    
                    <li>
                      <a href="https://www.linkedin.com/in/mradamcole/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Image
                    src="/images/gojiTeam/david.jpeg"
                    alt="David Campbell"
                    width={224}
                    height={224}
                    className="mx-auto size-56 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 object-cover grayscale"
                  />
                  <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">David Campbell</h3>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">VP, Engineering</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                  
                    <li>
                      <a href="https://www.linkedin.com/in/davidcampbell1043/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Image
                    src="/images/gojiTeam/giri.jpeg"
                    alt="Giri Amarakone"
                    width={224}
                    height={224}
                    className="mx-auto size-56 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 object-cover grayscale"
                  />
                  <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Giri Amarakone</h3>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">VP, Product</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                   
                    <li>
                      <a href="https://www.linkedin.com/in/gamarakone/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <Image
                    src="/images/gojiTeam/dennis.jpeg"
                    alt="Dennis Chan"
                    width={224}
                    height={224}
                    className="mx-auto size-56 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 object-cover grayscale"
                  />
                  <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Dennis Chan</h3>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">VP, Engineering</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                   
                    <li>
                      <a href="https://www.linkedin.com/in/dennis-chan-3b294b2/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>
                
                
                <li>
                  <Image
                    src="/images/gojiTeam/jeff.jpeg"
                    alt="Jeff Rogers"
                    width={224}
                    height={224}
                    className="mx-auto size-56 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 object-cover grayscale"
                  />
                  <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Jeff Rogers</h3>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">VP, Engineering</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                   
                    <li>
                      <a href="https://www.linkedin.com/in/jeffdrogers/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <Image
                    src="/images/gojiTeam/george.jpeg"
                    alt="George Smitherman"
                    width={224}
                    height={224}
                    className="mx-auto size-56 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 object-cover grayscale"
                  />
                  <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">George Smitherman</h3>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">VP, Engineering</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                   
                    <li>
                      <a href="https://www.linkedin.com/in/george-smitherman-b01740201/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <Image
                    src="/images/gojiTeam/kia.JPG"
                    alt="Kianoush Haratiannajedi"
                    width={224}
                    height={224}
                    className="mx-auto size-56 rounded-full outline-1 -outline-offset-1 outline-black/5 dark:outline-white/10 object-cover grayscale"
                  />
                  <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900 dark:text-white">Kianoush Haratiannajedi</h3>
                  <p className="text-sm/6 text-gray-600 dark:text-gray-400">VP, Engineering</p>
                  <ul role="list" className="mt-6 flex justify-center gap-x-6">
                   
                    <li>
                      <a href="https://www.linkedin.com/in/kianoush-haratiannejadi/"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:text-gray-400 dark:hover:text-gray-300">
                        <span className="sr-only">LinkedIn</span>
                        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="size-5">
                          <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" fillRule="evenodd" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </li>

              </ul>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  )
}

