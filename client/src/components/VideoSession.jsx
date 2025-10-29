import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, Volume2, Bot, User, Home, AlertCircle, Play, Globe, ArrowLeft, X, Brain, Mic, SkipBack, Pause, SkipForward, Maximize, Info, PlayCircle } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { AiOutlineFileText, AiOutlineLoading3Quarters } from "react-icons/ai";
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'
import mermaid from "mermaid";

// TimeStamp Component for clickable timestamps
const TimeStamp = ({ time, children, onTimestampClick }) => {
    const handleClick = () => {

        if (onTimestampClick) {
            onTimestampClick(time);
        }
    };

    return (
        <button
            onClick={handleClick}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-black text-white rounded-lg hover:bg-gray-800 transition-all text-xs font-semibold shadow-lg shadow-black/20 hover:scale-105 active:scale-95"
            title={`Jump to ${time}`}
        >
            <PlayCircle className="w-3.5 h-3.5" />
            {children && <span>{children}</span>}
        </button>
    );
};

// Language configuration with optimal voices
const LANGUAGE_CONFIG = {
    english: {
        name: 'English',
        code: 'en',
        voices: ['Google US English', 'Microsoft David - English (United States)', 'Alex', 'Samantha'],
        rate: 1.0,
        pitch: 1.0
    },
    hindi: {
        name: 'Hindi',
        code: 'hi',
        voices: ['Microsoft Komal - Hindi (India)', 'Google हिन्दी', 'Lekha'],
        rate: 0.9,
        pitch: 1.0
    },
    kannada: {
        name: 'Kannada',
        code: 'kn',
        voices: ['Microsoft Gagan - Kannada (India)', 'Google ಕನ್ನಡ'],
        rate: 0.9,
        pitch: 1.0
    },
    tamil: {
        name: 'Tamil',
        code: 'ta',
        voices: ['Microsoft Valluvar - Tamil (India)', 'Google தமிழ்'],
        rate: 0.9,
        pitch: 1.0
    },
    marathi: {
        name: 'Marathi',
        code: 'mr',
        voices: ['Microsoft Gaurangi - Marathi (India)', 'Google मराठी'],
        rate: 0.9,
        pitch: 1.0
    },
    punjabi: {
        name: 'Punjabi',
        code: 'pa',
        voices: ['Microsoft Preet - Punjabi (India)', 'Google ਪੰਜਾਬੀ'],
        rate: 0.9,
        pitch: 1.0
    },
    telugu: {
        name: 'Telugu',
        code: 'te',
        voices: ['Microsoft Chitra - Telugu (India)', 'Google తెలుగు'],
        rate: 0.9,
        pitch: 1.0
    },
    bengali: {
        name: 'Bengali',
        code: 'bn',
        voices: ['Microsoft Bani - Bengali (India)', 'Google বাংলা'],
        rate: 0.9,
        pitch: 1.0
    },
    gujarati: {
        name: 'Gujarati',
        code: 'gu',
        voices: ['Microsoft Dhwani - Gujarati (India)', 'Google ગુજરાતી'],
        rate: 0.9,
        pitch: 1.0
    },
    malayalam: {
        name: 'Malayalam',
        code: 'ml',
        voices: ['Microsoft Sanya - Malayalam (India)', 'Google മലയാളം'],
        rate: 0.9,
        pitch: 1.0
    }
};

const VideoSession = () => {
    const { sessionId } = useParams();
    const navigate = useNavigate();
    const [session, setSession] = useState(null);
    const [question, setQuestion] = useState('');
    const [conversation, setConversation] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sessionLoading, setSessionLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentVideoTime, setCurrentVideoTime] = useState(0);
    const [selectedLanguage, setSelectedLanguage] = useState('english');
    const [availableVoices, setAvailableVoices] = useState([]);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const [isSummaryLoading, setIsSummaryLoading] = useState(false)
    const [summarydata, setSummartdata] = useState()
    const [showLoc, setShowLoc] = useState(true)

    // Speech Recognition States
    const [isListening, setIsListening] = useState(false);
    const [isSpeechSupported, setIsSpeechSupported] = useState(false);
    const [speechError, setSpeechError] = useState('');

    const chatEndRef = useRef(null);
    const speechSynth = useRef(null);
    const videoIframeRef = useRef(null);
    const currentUtterance = useRef(null);
    const speechRecognition = useRef(null);
    // Import useEffect, useRef, etc. are already present

    useEffect(() => {
        let saveInterval;

        function initializeYouTubePlayer() {
            if (!session?.videoId) return;

            // Destroy old player if exists
            if (videoIframeRef.current?.player) {
                videoIframeRef.current.player.destroy();
                videoIframeRef.current.player = null;
            }

            // Create new YouTube player
            videoIframeRef.current.player = new window.YT.Player("youtube-player", {
                videoId: session.videoId,
                playerVars: {
                    autoplay: 1,
                    rel: 0,
                    start: Number(sessionStorage.getItem(`videoTime_${sessionId}`)) || 0,
                },
                events: {
                    onReady: (event) => event.target.playVideo(),
                    onStateChange: (event) => {
                        // Save progress when playing
                        if (event.data === window.YT.PlayerState.PLAYING) {
                            if (!saveInterval) {
                                saveInterval = setInterval(() => {
                                    if (videoIframeRef.current?.player) {
                                        const time = videoIframeRef.current.player.getCurrentTime();
                                        sessionStorage.setItem(`videoTime_${sessionId}`, time);
                                    }
                                }, 2000);
                            }
                        } else {
                            // Clear interval when paused or ended
                            if (saveInterval) {
                                clearInterval(saveInterval);
                                saveInterval = null;
                            }
                        }
                    },
                },
            });
        }

   
        if (!window.YT) {
            const tag = document.createElement("script");
            tag.src = "https://www.youtube.com/iframe_api";
            document.body.appendChild(tag);
            window.onYouTubeIframeAPIReady = initializeYouTubePlayer;
        } else {
            initializeYouTubePlayer();
        }

        return () => {
            // Clean up player and interval on unmount
            if (saveInterval) clearInterval(saveInterval);
            if (videoIframeRef.current?.player) {
                videoIframeRef.current.player.destroy();
                videoIframeRef.current.player = null;
            }
        };
    }, [session, sessionId]);


    const handleTimestampClick = (timestamp) => {
        const parts = timestamp.split(":").map(Number);
        const seconds =
            parts.length === 3
                ? parts[0] * 3600 + parts[1] * 60 + parts[2]
                : parts[0] * 60 + parts[1];

        if (videoIframeRef.current?.player) {
            videoIframeRef.current.player.seekTo(seconds, true);
            videoIframeRef.current.player.playVideo();
            sessionStorage.setItem(`videoTime_${sessionId}`, seconds);
        }
    };



    useEffect(() => {

        mermaid.initialize({ startOnLoad: true, theme: "neutral" });
        mermaid.run();
        
    }, [summarydata]);

    useEffect(() => {
        fetchSession();
        initializeSpeechSynthesis();
        initializeSpeechRecognition();

        // Set up interval to track video time
        const timeInterval = setInterval(() => {
            setCurrentVideoTime(prev => prev + 1);
        }, 1000);

        return () => {
            clearInterval(timeInterval);
            stopSpeech();
            stopSpeechRecognition();
        };
    }, [sessionId]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [conversation]);

    // Initialize Speech Recognition
    const initializeSpeechRecognition = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (!SpeechRecognition) {
            console.warn('Speech Recognition not supported in this browser');
            setIsSpeechSupported(false);
            setSpeechError('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
            return;
        }

        setIsSpeechSupported(true);
        speechRecognition.current = new SpeechRecognition();
        speechRecognition.current.continuous = false;
        speechRecognition.current.interimResults = true;
        speechRecognition.current.lang = LANGUAGE_CONFIG[selectedLanguage]?.code || 'en-US';

        speechRecognition.current.onstart = () => {
            setIsListening(true);
            setSpeechError('');
        };

        speechRecognition.current.onresult = (event) => {
            const transcript = Array.from(event.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            setQuestion(transcript);
        };

        speechRecognition.current.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            setIsListening(false);

            switch (event.error) {
                case 'not-allowed':
                case 'permission-denied':
                    setSpeechError('Microphone permission denied. Please allow microphone access.');
                    break;
                case 'audio-capture':
                    setSpeechError('No microphone found. Please check your microphone connection.');
                    break;
                case 'network':
                    setSpeechError('Network error occurred during speech recognition.');
                    break;
                default:
                    setSpeechError(`Speech recognition error: ${event.error}`);
            }
        };

        speechRecognition.current.onend = () => {
            setIsListening(false);
        };
    };

    // Update speech recognition language when selected language changes
    useEffect(() => {
        if (speechRecognition.current && LANGUAGE_CONFIG[selectedLanguage]) {
            speechRecognition.current.lang = LANGUAGE_CONFIG[selectedLanguage].code;
        }
    }, [selectedLanguage]);

    const startSpeechRecognition = () => {
        if (!isSpeechSupported) {
            setSpeechError('Speech recognition is not supported in your browser.');
            return;
        }

        if (isListening) {
            stopSpeechRecognition();
            return;
        }

        try {
            setQuestion('');
            setSpeechError('');
            speechRecognition.current.start();
        } catch (error) {
            console.error('Failed to start speech recognition:', error);
            setSpeechError('Failed to start microphone. Please check permissions.');
        }
    };

    const stopSpeechRecognition = () => {
        if (speechRecognition.current && isListening) {
            speechRecognition.current.stop();
            setIsListening(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!youtubeUrl) return

        setLoading(true)
        setError('')
        setSuccess('')

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/transcript/get-enhanced-transcript`, {
                youtubeUrl
            }, {
                timeout: 30000
            })

            if (response.data.success) {
                navigate(`/session/${response.data.sessionId}`)
            } else {
                throw new Error(response.data.error || 'Failed to process video')
            }
        } catch (err) {
            console.error('Video processing error:', err)
            let errorMessage = 'Failed to process video. ';

            if (err.code === 'ECONNABORTED') {
                errorMessage += 'Request timed out. Please try again.';
            } else if (err.response?.data?.error) {
                errorMessage = err.response.data.error;
            } else if (err.response?.data?.details) {
                errorMessage += err.response.data.details;
            } else if (err.message) {
                errorMessage += err.message;
            }

            setError(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    const initializeSpeechSynthesis = () => {
        speechSynth.current = window.speechSynthesis;

        // Load available voices
        const loadVoices = () => {
            const voices = speechSynth.current.getVoices();
            setAvailableVoices(voices);
        };

        loadVoices();

        // Chrome loads voices asynchronously
        if (speechSynth.current.onvoiceschanged !== undefined) {
            speechSynth.current.onvoiceschanged = loadVoices;
        }
    };

    const fetchSession = async () => {
        try {
            setSessionLoading(true);
            const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/videos/session/${sessionId}`);

            if (response.data.success) {
                setSession(response.data.session);
            } else {
                setError('Failed to load session');
            }
        } catch (error) {
            console.error('Failed to fetch session:', error);
            setError('Session not found or expired');
        } finally {
            setSessionLoading(false);
        }
    };

    // Find the best available voice for selected language
    const getBestVoiceForLanguage = (languageCode) => {
        const languageConfig = LANGUAGE_CONFIG[selectedLanguage];
        if (!languageConfig || !availableVoices.length) return null;

        // First, try to find exact voice matches
        for (const voiceName of languageConfig.voices) {
            const voice = availableVoices.find(v =>
                v.name.includes(voiceName) && v.lang.startsWith(languageConfig.code)
            );
            if (voice) return voice;
        }

        // Fallback: find any voice for the language
        const fallbackVoice = availableVoices.find(v =>
            v.lang.startsWith(languageConfig.code)
        );

        if (fallbackVoice) return fallbackVoice;

        // Final fallback: use default voice
        return availableVoices.find(v => v.default) || availableVoices[0];
    };

    // Enhanced speech synthesis with language support
    const speakText = (text) => {
        if (!speechSynth.current || !('SpeechSynthesisUtterance' in window)) {
            console.warn('Speech synthesis not supported');
            return;
        }

        stopSpeech(); // Stop any ongoing speech

        try {
            const languageConfig = LANGUAGE_CONFIG[selectedLanguage];
            const voice = getBestVoiceForLanguage(languageConfig.code);

            if (!voice) {
                console.warn(`No voice found for ${languageConfig.name}`);
                return;
            }

            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = voice;
            utterance.rate = languageConfig.rate;
            utterance.pitch = languageConfig.pitch;
            utterance.volume = 0.8;
            utterance.lang = languageConfig.code;

            utterance.onstart = () => {
                console.log(`Speaking in ${languageConfig.name} with voice: ${voice.name}`);
            };

            utterance.onerror = (event) => {
                console.error('Speech synthesis error:', event);
                setError(`Speech error: ${event.error}. Try changing language or check browser support.`);
            };

            utterance.onend = () => {
                currentUtterance.current = null;
            };

            currentUtterance.current = utterance;
            speechSynth.current.speak(utterance);

        } catch (error) {
            console.error('Speech synthesis failed:', error);
            setError('Speech synthesis failed. Please try another language.');
        }
    };

    const stopSpeech = () => {
        setShowLoc(false)
        if (speechSynth.current) {
            speechSynth.current.cancel();
            currentUtterance.current = null;
        }
    };

    const parseTimestamp = (timeString) => {
        if (!timeString) return 0;

        const parts = timeString.split(':');
        if (parts.length === 2) {
            const minutes = parseInt(parts[0]);
            const seconds = parseInt(parts[1]);
            return minutes * 60 + seconds;
        }

        if (parts.length === 3) {
            const hours = parseInt(parts[0]);
            const minutes = parseInt(parts[1]);
            const seconds = parseInt(parts[2]);
            return hours * 3600 + minutes * 60 + seconds;
        }

        return 0;
    };

    // const handleTimestampClick = (timestamp) => {
    //     const timeInSeconds = parseTimestamp(timestamp);

    //     if (videoIframeRef.current) {
    //         console.log(`Would seek to: ${timestamp} (${timeInSeconds} seconds)`);
    //         setCurrentVideoTime(timeInSeconds);

    //         setError(`Seeking to ${timestamp} - YouTube API integration required for full functionality`);
    //         setTimeout(() => setError(''), 3000);
    //     }
    // };

    const processContentWithTimestamps = (content, onTimestampClick) => {
        if (!content) return null;

        const parts = [];
        let remainingContent = content;

        while (remainingContent.length > 0) {
            const timestampMatch = remainingContent.match(/<TimeStamp time="([^"]+)">([^<]*)<\/TimeStamp>/);

            if (timestampMatch) {
                const [fullMatch, time, timestampContent] = timestampMatch;
                const matchIndex = remainingContent.indexOf(fullMatch);

                if (matchIndex > 0) {
                    const beforeText = remainingContent.substring(0, matchIndex);
                    parts.push(
                        <ReactMarkdown key={`text-${parts.length}`}>
                            {beforeText}
                        </ReactMarkdown>
                    );
                }

                parts.push(
                    <TimeStamp key={`timestamp-${parts.length}`} time={time} onTimestampClick={onTimestampClick}>
                        {timestampContent}
                    </TimeStamp>
                );

                remainingContent = remainingContent.substring(matchIndex + fullMatch.length);
            } else {
                if (remainingContent.length > 0) {
                    parts.push(
                        <ReactMarkdown key={`text-${parts.length}`}>
                            {remainingContent}
                        </ReactMarkdown>
                    );
                }
                break;
            }
        }

        return parts.length > 0 ? parts : <ReactMarkdown>{content}</ReactMarkdown>;
    };

    const cleanTextForSpeech = (text) => {
        if (!text) return '';

        // Remove TimeStamp tags
        let clean = text.replace(/<TimeStamp[^>]*>([^<]*)<\/TimeStamp>/g, '$1');

        // Remove all HTML tags
        clean = clean.replace(/<\/?[^>]+(>|$)/g, '');

        // Optional: remove Markdown symbols (backticks, asterisks, underscores)
        clean = clean.replace(/[*_`~]/g, '');

        return clean;
    };

    const handleAskQuestion = async (e) => {
        e.preventDefault();
        if (!question.trim() || loading) return;

        const userQuestion = question.trim();
        setQuestion('');
        setLoading(true);
        setError('');

        stopSpeech();
        stopSpeechRecognition();

        const userMessage = {
            type: 'user',
            content: userQuestion,
            timestamp: new Date().toISOString()
        };
        setConversation(prev => [...prev, userMessage]);

        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat/ask-question`, {
                sessionId,
                question: userQuestion,
                currentTime: currentVideoTime,
                language: selectedLanguage
            });

            if (response.data.success) {
                const aiMessage = {
                    type: 'ai',
                    content: response.data.answer,
                    timestamp: response.data.timestamp,
                    demo: response.data.demo || false,
                    rawContent: response.data.answer
                };
                setConversation(prev => [...prev, aiMessage]);

                // Clean text for speech (remove timestamp markup)
                const cleanText = cleanTextForSpeech(response.data.answer);
                speakText(cleanText);
            } else {
                throw new Error(response.data.error || 'Failed to get AI response');
            }

        } catch (error) {
            console.error('Failed to get AI response:', error);

            try {
                const demoResponse = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat/ask-question-demo`, {
                    sessionId,
                    question: userQuestion,
                    currentTime: currentVideoTime,
                    language: selectedLanguage
                });

                if (demoResponse.data.success) {
                    const demoMessage = {
                        type: 'ai',
                        content: demoResponse.data.answer + ' (Demo Mode)',
                        timestamp: demoResponse.data.timestamp,
                        demo: true,
                        rawContent: demoResponse.data.answer
                    };
                    setConversation(prev => [...prev, demoMessage]);
                    setError('Using demo mode - AI API not configured');
                } else {
                    throw new Error('Demo mode also failed');
                }
            } catch (demoError) {
                const errorMessage = {
                    type: 'error',
                    content: 'AI service is currently unavailable. Please check your API configuration.',
                    timestamp: new Date().toISOString()
                };
                setConversation(prev => [...prev, errorMessage]);
                setError(error.response?.data?.error || 'AI service unavailable');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleGetSummary = async (e) => {
        e.preventDefault();
        setIsSummaryLoading(true)
        const oldSummary = localStorage.getItem(sessionId)
        if (oldSummary) {
            setSummartdata(oldSummary)
        } else {

            try {
                const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat/generate-summary`, {
                    sessionId,
                });

                console.log("summary b", response.data)
                localStorage.setItem(sessionId, response.data)
                setSummartdata(response.data)

            } catch (error) {
                console.error('Failed to get AI response:', error);
            } finally {
                setIsSummaryLoading(false)
            }
        }

    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    if (sessionLoading) {
        return (
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading your learning session...</p>
                </div>
            </div>
        );
    }

    if (error && !session) {
        return (
            <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex items-center justify-center">
                <div className="max-w-md w-full bg-white/70 backdrop-blur-2xl rounded-2xl border border-white/60 shadow-xl shadow-gray-200/50 p-8 text-center">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Session Error</h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => navigate('/')}
                        className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/20"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    const currentVoice = getBestVoiceForLanguage(selectedLanguage);

    return (
        <div className="bg-gradient-to-br  m-auto from-gray-50 via-white to-gray-100 min-h-screen">

            {/* Header */}
            <header className="fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-transparent ">
                <div className="max-w-[450px] mx-auto px-6 py-0  bg-transparent border-none ">
                    <div className="flex items-center justify-between  ">

                        <nav className="md:w-[800px] w-screen m-auto rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm sticky top-5 z-50">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between items-center h-16">
                                    <div className="flex items-center space-x-2">

                                        {/* Back Button */}
                                        <button
                                            onClick={() => navigate('/')}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-3xl bg-black text-white hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            <span className="font-medium text-sm hidden sm:inline">Back</span>
                                        </button>
                                    </div>

                                    {/* Language Selector */}
                                    <div className="relative">
                                        <button
                                            onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/80 backdrop-blur-xl border border-white/60 hover:bg-white hover:shadow-lg transition-all hover:scale-105 text-gray-900 shadow-sm"
                                        >
                                            <Globe className="w-4 h-4" />
                                            <span className="font-medium text-sm hidden sm:inline">
                                                {LANGUAGE_CONFIG[selectedLanguage]?.name}
                                            </span>
                                            <Play className="w-4 h-4 transform rotate-90" />
                                        </button>

                                        {isLanguageMenuOpen && (
                                            <div className="absolute right-0 mt-2 w-48 bg-white/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/60 z-10 max-h-60 overflow-y-auto">
                                                {Object.entries(LANGUAGE_CONFIG).map(([key, config]) => (
                                                    <button
                                                        key={key}
                                                        onClick={() => {
                                                            setSelectedLanguage(key);
                                                            setIsLanguageMenuOpen(false);
                                                            stopSpeech();
                                                        }}
                                                        className={`w-full text-left px-4 py-2 hover:bg-black/5 transition-colors ${selectedLanguage === key ? 'bg-black/10 text-gray-900 font-semibold' : 'text-gray-700'
                                                            }`}
                                                    >
                                                        {config.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </nav>

                    </div>

                </div>
            </header>

            {/* Voice Status Bar */}
            {
                showLoc &&
                <div className="absolute top-5 right-5 z-50  rounded-md bg-white/40 backdrop-blur-xl border border-white/60 px-6 py-3 shadow-sm">
                    <div className="max-w-[1800px] mx-auto flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-900">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <Mic className="w-4 h-4" />
                            <span className="font-medium">Voice: {LANGUAGE_CONFIG[selectedLanguage]?.name.length > 20 ? LANGUAGE_CONFIG[selectedLanguage]?.name.split(0, 20) + "..." : LANGUAGE_CONFIG[selectedLanguage]?.name} ({currentVoice?.name.length > 10 ? currentVoice?.name.split(0, 10) + "..." : currentVoice?.name || 'Default'})</span>
                        </div>
                        <button
                            onClick={stopSpeech}
                            className="text-gray-600 hover:text-gray-900 transition-colors hover:bg-white/60 p-1.5 rounded-lg"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            }

            {/* Error Alert */}
            {error && (
                <div className="max-w-[1800px] mx-auto px-6 py-3">
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        {error}
                    </div>
                </div>
            )}

            {/* Speech Recognition Error Alert */}
            {speechError && (
                <div className="max-w-[1800px] mx-auto px-6 py-3">
                    <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 px-4 py-3 rounded-xl flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2" />
                        {speechError}
                    </div>
                </div>
            )}

            {/* Main Content */}
            <main className="max-w-[1800px]   mx-auto px-6  ">
                <div className="grid grid-cols-1 lg:grid-cols-5 ">
                    {/* Video Player Section */}
                    <div className="lg:col-span-3 space-y-3">
                        <div className="bg-white/70 backdrop-blur-2xl rounded-md border border-white/60 overflow-hidden shadow-xl shadow-gray-200/50">
                            {/* Video Header */}
                            <div className="px-6 py-5 border-b border-white/60 bg-white/40">
                                <h2 className="text-lg font-semibold text-gray-900 tracking-tight">Video Player</h2>
                                <p className="text-sm text-gray-600 mt-0.5">Interactive learning session</p>
                            </div>

                            {/* Video Player */}
                            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 aspect-video">
                                {session?.videoId && (
                                    <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 aspect-video">
                                        <div id="youtube-player" ref={videoIframeRef} className="w-full h-full"></div>
                                    </div>

                                )}
                            </div>

                            {/* Video Info */}
                            <div className="px-6 py-6 space-y-5 bg-white/40 backdrop-blur-xl">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-900">{session?.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">Learning Session</p>
                                </div>

                                {/* Info Card */}
                                <div className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-xl rounded-xl border border-white/60 shadow-sm">
                                    <div className="w-9 h-9 rounded-xl bg-black flex items-center justify-center flex-shrink-0">
                                        <Info className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-gray-900 font-semibold">
                                            Learning Language: {LANGUAGE_CONFIG[selectedLanguage]?.name}
                                        </p>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Click timestamps in AI responses to jump to specific video moments
                                        </p>
                                    </div>
                                    {
                                        summarydata || (localStorage.getItem(sessionId)) ?
                                            (
                                                <button onClick={() => { navigate(`/summary/${sessionId}`, { state: { summary: summarydata } }) }} className="rounded-md bg-black text-white px-4 py-2"> View </button>)
                                            :

                                            <button
                                                onClick={handleGetSummary}
                                                disabled={isSummaryLoading}
                                                className={`
    relative px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300
    flex items-center justify-center gap-2
    ${isSummaryLoading
                                                        ? "bg-gray-200 text-gray-600 cursor-not-allowed"
                                                        : "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white hover:from-gray-800 hover:to-gray-900 hover:scale-105 active:scale-95 shadow-md shadow-gray-700/30"}
  `}
                                            >
                                                {isSummaryLoading ? (
                                                    <>
                                                        <AiOutlineLoading3Quarters className="animate-spin text-lg" />
                                                        <span>Loading...</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <AiOutlineFileText className="text-lg" />
                                                        <span>Summary</span>
                                                    </>
                                                )}
                                            </button>

                                    }
                                </div>


                            </div>
                        </div>
                    </div>

                    {/* Chat Interface */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-br from-white via-gray-50 to-gray-100 backdrop-blur-3xl rounded-md border border-white/70 shadow-2xl shadow-gray-300/50 flex flex-col h-[calc(100vh-30px)] lg:sticky lg:top-5 overflow-hidden">

                            {/* Chat Header */}
                            <div className="px-6 py-2 border-b w-[80%] m-auto border-white/70 flex items-center gap-3 bg-gradient-to-r from-white/80 via-white/70 to-gray-50/60 backdrop-blur-2xl ">
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center shadow-lg shadow-gray-600/30">
                                    <Brain className="w-5 h-5 text-white animate-bounce " />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h2 className="text-base font-semibold text-gray-900 tracking-tight">AI Tutor</h2>
                                    <p className="text-xs text-gray-600">
                                        Ask questions in {LANGUAGE_CONFIG[selectedLanguage]?.name}
                                    </p>
                                </div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_8px_3px_rgba(34,197,94,0.4)] animate-pulse"></div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6 bg-gradient-to-b from-white/60 to-gray-50/60">
                                {conversation.length === 0 && (
                                    <div className="text-center text-gray-500 py-8">
                                        <Bot className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                                        <p className="text-sm font-medium text-gray-900">Welcome to your AI Tutor session!</p>
                                        <p className="text-xs mt-2 text-gray-600">
                                            Ask questions about the video content in {LANGUAGE_CONFIG[selectedLanguage]?.name}.
                                        </p>
                                        <div className="mt-4 text-xs text-gray-500 space-y-1">
                                            <p>Try questions like:</p>
                                            <p>"Can you explain the main concept?"</p>
                                            <p>"What did they mean at 2:30?"</p>
                                            <p>"Summarize the key points"</p>
                                        </div>
                                        {!isSpeechSupported && (
                                            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                                                <p className="text-xs text-yellow-700">
                                                    Voice input is not supported in your browser. Please use Chrome or Edge for voice features.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {conversation.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex gap-3 items-start ${message.type === "user" ? "justify-end" : "justify-start"
                                            }`}
                                    >
                                        {message.type !== "user" && (
                                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center flex-shrink-0 shadow-md shadow-gray-700/30">
                                                <Bot className="w-4 h-4 text-white" />
                                            </div>
                                        )}

                                        <div
                                            className={`flex-1 min-w-0 ${message.type === "user" ? "flex flex-col items-end" : ""
                                                }`}
                                        >
                                            <div className="flex items-center gap-2 mb-2">
                                                {message.type === "user" && (
                                                    <>
                                                        <span className="text-xs text-gray-500">
                                                            {new Date(message.timestamp).toLocaleTimeString([], {
                                                                hour: "2-digit",
                                                                minute: "2-digit",
                                                            })}
                                                        </span>
                                                        <span className="text-xs font-semibold text-gray-900">You</span>
                                                    </>
                                                )}
                                                {message.type === "ai" && (
                                                    <>
                                                        <span className="text-xs font-semibold text-gray-900">AI Tutor</span>
                                                        <span className="text-xs text-gray-500">
                                                            {new Date(message.timestamp).toLocaleTimeString([], {
                                                                hour: "2-digit",
                                                                minute: "2-digit",
                                                            })}
                                                        </span>
                                                    </>
                                                )}
                                            </div>

                                            <div
                                                className={`
                rounded-2xl px-5 py-3.5 border shadow-sm transition-all duration-200 hover:shadow-md
                ${message.type === "user"
                                                        ? "bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white border-gray-800 shadow-black/20 hover:shadow-gray-700/30 max-w-[85%]"
                                                        : message.type === "error"
                                                            ? "bg-red-100 text-red-800 border-red-300"
                                                            : "bg-gradient-to-r from-white/90 via-white/80 to-gray-50/80 border-white/70 text-gray-900 hover:shadow-gray-300/40"
                                                    }
              `}
                                            >
                                                <div className="whitespace-pre-wrap text-sm leading-relaxed">
                                                    {message.type === "ai" ? (
                                                        processContentWithTimestamps(
                                                            message.rawContent || message.content,
                                                            handleTimestampClick
                                                        )
                                                    ) : (
                                                        <ReactMarkdown>{message.content}</ReactMarkdown>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {message.type === "user" && (
                                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-white/90 to-gray-50 border border-white/60 flex items-center justify-center flex-shrink-0 shadow-sm shadow-gray-200/50">
                                                <User className="w-4 h-4 text-gray-900" />
                                            </div>
                                        )}
                                    </div>
                                ))}

                                {loading && (
                                    <div className="flex gap-3 items-start">
                                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <Bot className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="bg-white/80 backdrop-blur-xl rounded-2xl px-5 py-3.5 w-16 border border-white/60 shadow-sm">
                                                <div className="flex gap-1 items-center justify-center">
                                                    <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" />
                                                    <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce delay-150" />
                                                    <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce delay-300" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div ref={chatEndRef} />
                            </div>

                            {/* Input Form */}
                            <div className="px-6 py-5 border-t bg-gradient-to-br from-white/90 to-gray-50 border border-white/60 backdrop-blur-xl ">
                                <form onSubmit={handleAskQuestion} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                        placeholder={`Ask a question in ${LANGUAGE_CONFIG[selectedLanguage]?.name}...`}
                                        className="flex-1 px-5 py-3.5 bg-white/90 backdrop-blur-xl border border-gray-200 rounded-xl text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all hover:shadow-md hover:bg-white/95"
                                        disabled={loading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading || !question.trim()}
                                        className="px-5 py-3.5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 font-semibold text-sm shadow-md shadow-gray-700/30"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                    <button
                                        type="button"
                                        onClick={stopSpeech}
                                        className="px-5 py-3.5 bg-gradient-to-r from-white/90 to-gray-50 border border-gray-200 text-gray-900 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 font-semibold text-sm shadow-sm hover:shadow-md"
                                    >
                                        <Volume2 className="w-4 h-4" />
                                    </button>
                                    {/* Microphone Button */}
                                    <button
                                        type="button"
                                        onClick={startSpeechRecognition}
                                        disabled={!isSpeechSupported || loading}
                                        className={`px-5 py-3.5 rounded-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 font-semibold text-sm shadow-md ${isListening
                                            ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse shadow-red-500/30'
                                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-blue-500/30'
                                            } ${!isSpeechSupported ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        <Mic className="w-4 h-4" />
                                    </button>
                                </form>

                                {/* Speech Recognition Status */}
                                {isListening && (
                                    <div className="mt-3 flex items-center justify-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                                        <p className="text-xs text-red-600 font-medium">Listening... Speak now</p>
                                    </div>
                                )}

                                <p className="text-xs text-gray-500 mt-3 text-center">
                                    AI responses are contextual to your current video position
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
};

export default VideoSession