import React from 'react'

function Video() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen">

    <div className="bg-white/40 backdrop-blur-xl border-b border-white/60 px-6 py-3 shadow-sm">
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-900">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <i data-lucide="mic" className="w-4 h-4"></i>
                <span className="font-medium">Voice: English (David - US)</span>
            </div>
            <button className="text-gray-600 hover:text-gray-900 transition-colors hover:bg-white/60 p-1.5 rounded-lg">
                <i data-lucide="x" className="w-4 h-4"></i>
            </button>
        </div>
    </div>


    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-2xl border-b border-white/60 shadow-sm">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
  
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
                    <i data-lucide="arrow-left" className="w-4 h-4"></i>
                    <span className="font-medium text-sm hidden sm:inline">Back</span>
                </button>

           
                <div className="flex-1 text-center px-4">
                    <h1 className="text-base font-semibold text-gray-900 tracking-tight truncate">Introduction to Spanish Pronunciation</h1>
                    <p className="text-xs text-gray-500 mt-0.5">Session #4821 • 14:32 elapsed</p>
                </div>


                <div className="relative">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-xl border border-white/60 hover:bg-white hover:shadow-lg transition-all hover:scale-105 text-gray-900 shadow-sm">
                        <i data-lucide="globe" className="w-4 h-4"></i>
                        <span className="font-medium text-sm hidden sm:inline">English</span>
                        <i data-lucide="chevron-down" className="w-4 h-4"></i>
                    </button>
                </div>
            </div>
        </div>
    </header>


    <main className="max-w-[1800px] mx-auto px-6 py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            
    
            <div className="lg:col-span-3 space-y-4">
         
                <div className="bg-white/70 backdrop-blur-2xl rounded-2xl border border-white/60 overflow-hidden shadow-xl shadow-gray-200/50">
    
                    <div className="px-6 py-5 border-b border-white/60 bg-white/40">
                        <h2 className="text-lg font-semibold text-gray-900 tracking-tight">Video Player</h2>
                        <p className="text-sm text-gray-600 mt-0.5">Interactive learning session</p>
                    </div>

               
                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 aspect-video">
                        <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&h=675&fit=crop" alt="Video" className="w-full h-full object-cover opacity-90"/>
                        
      
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="w-20 h-20 rounded-full bg-white/95 backdrop-blur-xl hover:bg-white flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 border border-white/60">
                                <i data-lucide="play" className="w-8 h-8 text-gray-900 ml-1"></i>
                            </button>
                        </div>


                        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20 backdrop-blur-sm">
                            <div className="h-full bg-gradient-to-r from-gray-900 to-gray-700" style="width: 35%"></div>
                        </div>
                    </div>


                    <div className="px-6 py-6 space-y-5 bg-white/40 backdrop-blur-xl">
                        <div>
                            <h3 className="text-base font-semibold text-gray-900">Spanish Basics: Vowel Sounds</h3>
                            <p className="text-sm text-gray-600 mt-1">Learning Spanish • 12:45 duration</p>
                        </div>


                        <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-xl rounded-xl border border-white/60 shadow-sm">
                            <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                                <i data-lucide="info" className="w-4 h-4 text-white"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm text-gray-900 font-semibold">Learning Language: Spanish</p>
                                <p className="text-xs text-gray-600 mt-1">Click timestamps in AI responses to jump to specific video moments</p>
                            </div>
                        </div>


                        <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center gap-2">
                                <button className="p-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
                                    <i data-lucide="skip-back" className="w-4 h-4"></i>
                                </button>
                                <button className="p-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
                                    <i data-lucide="pause" className="w-4 h-4"></i>
                                </button>
                                <button className="p-2.5 rounded-xl bg-black text-white hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10">
                                    <i data-lucide="skip-forward" className="w-4 h-4"></i>
                                </button>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-900 font-semibold">4:28 / 12:45</span>
                                <button className="p-2.5 rounded-xl bg-white/80 backdrop-blur-xl hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-sm border border-white/60">
                                    <i data-lucide="volume-2" className="w-4 h-4 text-gray-900"></i>
                                </button>
                                <button className="p-2.5 rounded-xl bg-white/80 backdrop-blur-xl hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-sm border border-white/60">
                                    <i data-lucide="maximize" className="w-4 h-4 text-gray-900"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="lg:col-span-2">
                <div className="bg-white/70 backdrop-blur-2xl rounded-2xl border border-white/60 shadow-xl shadow-gray-200/50 flex flex-col h-[calc(100vh-200px)] lg:sticky lg:top-24 overflow-hidden">
                    
 
                    <div className="px-6 py-5 border-b border-white/60 flex items-center gap-3 bg-white/40 backdrop-blur-xl">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <i data-lucide="brain" className="w-5 h-5 text-white"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-base font-semibold text-gray-900 tracking-tight">AI Tutor</h2>
                            <p className="text-xs text-gray-600">Ask questions in your selected language</p>
                        </div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse"></div>
                    </div>

     
                    <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-gradient-to-b from-white/20 to-white/40">
                        
             
                        <div className="flex gap-3 items-start">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                                <i data-lucide="bot" className="w-4 h-4 text-white"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-semibold text-gray-900">AI Tutor</span>
                                    <span className="text-xs text-gray-500">2:34 PM</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-xl rounded-2xl rounded-tl-md px-5 py-3.5 border border-white/60 shadow-sm">
                                    <p className="text-sm text-gray-900 leading-relaxed">Hello! I'm here to help you learn Spanish. This video covers the five vowel sounds in Spanish: A, E, I, O, U. These are pronounced more consistently than in English.</p>
                                    <p className="text-sm text-gray-900 leading-relaxed mt-2.5">Feel free to ask any questions as you watch!</p>
                                </div>
                            </div>
                        </div>

                        
                        <div className="flex gap-3 items-start justify-end">
                            <div className="flex-1 min-w-0 flex flex-col items-end">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs text-gray-500">2:35 PM</span>
                                    <span className="text-xs font-semibold text-gray-900">You</span>
                                </div>
                                <div className="bg-black text-white rounded-2xl rounded-tr-md px-5 py-3.5 max-w-[85%] shadow-lg shadow-black/20">
                                    <p className="text-sm leading-relaxed">Can you explain the difference between the Spanish "e" and English "e"?</p>
                                </div>
                            </div>
                            <div className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-xl border border-white/60 flex items-center justify-center flex-shrink-0 shadow-sm">
                                <i data-lucide="user" className="w-4 h-4 text-gray-900"></i>
                            </div>
                        </div>

           
                        <div className="flex gap-3 items-start">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                                <i data-lucide="bot" className="w-4 h-4 text-white"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-semibold text-gray-900">AI Tutor</span>
                                    <span className="text-xs text-gray-500">2:36 PM</span>
                                </div>
                                <div className="bg-white/80 backdrop-blur-xl rounded-2xl rounded-tl-md px-5 py-3.5 border border-white/60 shadow-sm">
                                    <p className="text-sm text-gray-900 leading-relaxed">Great question! In Spanish, the letter "e" is always pronounced like the "e" in "bed" or "met" - it's a short, clean sound.</p>
                                    <p className="text-sm text-gray-900 leading-relaxed mt-2.5">This is covered at <button className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-xs font-semibold shadow-lg shadow-black/20 hover:scale-105 active:scale-95">
                                        <i data-lucide="play-circle" className="w-3.5 h-3.5"></i>
                                        <span>2:15</span>
                                    </button> in the video. Unlike English, it never has the long "ee" sound.</p>
                                    <p className="text-sm text-gray-900 leading-relaxed mt-2.5 font-semibold">Examples:</p>
                                    <ul className="list-none text-sm text-gray-900 mt-2 space-y-1.5">
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400">•</span>
                                            <span><strong className="font-semibold">mesa</strong> (table) - "MEH-sah"</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400">•</span>
                                            <span><strong className="font-semibold">pelo</strong> (hair) - "PEH-loh"</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-gray-400">•</span>
                                            <span><strong className="font-semibold">leche</strong> (milk) - "LEH-cheh"</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

      
                        <div className="flex gap-3 items-start">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                                <i data-lucide="bot" className="w-4 h-4 text-white"></i>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="bg-white/80 backdrop-blur-xl rounded-2xl rounded-tl-md px-5 py-3.5 w-16 border border-white/60 shadow-sm">
                                    <div className="flex gap-1 items-center justify-center">
                                        <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
                                        <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
                                        <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="px-6 py-5 border-t border-white/60 bg-white/40 backdrop-blur-xl">
                        <div className="flex gap-2">
                            <div className="flex-1 relative">
                                <input 
                                    type="text" 
                                    placeholder="Ask a question about the video..."
                                    className="w-full px-5 py-3.5 pr-12 bg-white/80 backdrop-blur-xl border border-white/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent text-sm placeholder:text-gray-500 transition-all shadow-sm hover:bg-white"
                                />
                            </div>
                            <button className="px-5 py-3.5 bg-black hover:bg-gray-800 text-white rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 font-semibold text-sm shadow-lg shadow-black/20">
                                <i data-lucide="send" className="w-4 h-4"></i>
                            </button>
                            <button className="px-5 py-3.5 bg-white/80 backdrop-blur-xl border border-white/60 hover:bg-white text-gray-900 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 font-semibold text-sm shadow-sm">
                                <i data-lucide="mic" className="w-4 h-4"></i>
                            </button>
                        </div>
                        <p className="text-xs text-gray-500 mt-3 text-center">AI responses are contextual to your current video position</p>
                    </div>

                </div>
            </div>

        </div>
    </main>

</div>
  )
}

export default Video