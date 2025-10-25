import React,{useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useLocation ,useNavigate} from "react-router-dom";
import {  ArrowLeft} from 'lucide-react';
import { useParams } from "react-router-dom";

const VideoSummary = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [summarydata,setSummaryData] = useState()
    const { sessionId } = useParams();
    useEffect(() => {
        if(location?.state?.summary){

            setSummaryData(location?.state?.summary)
        }else {
            setSummaryData(localStorage.getItem(sessionId))
        }
    },[])

    console.log("loc ",location)
  return (
    summarydata && (
        <>
            <header className="fixed top-10 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-transparent ">
                <div className="max-w-[450px] mx-auto px-6 py-0  bg-transparent border-none ">
                    <div className="flex items-center justify-between  ">

                        <nav className="md:w-[800px] w-screen m-auto rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm sticky top-5 z-50">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex justify-between items-center h-16">
                                    <div className="flex items-center space-x-2">

                                        {/* Back Button */}
                                        <button
                                            onClick={() => navigate(-1)}
                                            className="flex items-center gap-2 px-4 py-2.5 rounded-3xl bg-black text-white hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/10"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            <span className="font-medium text-sm hidden sm:inline">Back</span>
                                        </button>
                                    </div>

                                   

                                </div>
                            </div>
                        </nav>

                    </div>

                </div>
            </header>
      <div className="max-w-7xl mx-auto  bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-10 shadow-xl transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        {/* === GRID: 50% / 50% LAYOUT === */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-10">

          {/* === LEFT COLUMN: Summary Overview === */}
          <div className="space-y-8 flex flex-col justify-between">
            <div>
              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-10 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Summary Overview
                </h2>
              </div>

              {/* Markdown Summary */}
              <div className="prose prose-gray max-w-none leading-relaxed">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  rehypePlugins={[rehypeHighlight]}
                  components={{
                    h1: ({ node, ...props }) => (
                      <h1
                        className="text-2xl font-bold text-gray-800 mb-3 pb-2 border-b border-gray-100"
                        {...props}
                      />
                    ),
                    h2: ({ node, ...props }) => (
                      <h2
                        className="text-lg font-semibold text-gray-700 mt-5 mb-2"
                        {...props}
                      />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3
                        className="font-medium text-gray-700 mt-3 mb-2"
                        {...props}
                      />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        className="text-gray-600 leading-relaxed mb-3"
                        {...props}
                      />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul className="space-y-2 mb-3 list-disc list-inside" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                      <li
                        className="text-gray-600 leading-snug marker:text-blue-500"
                        {...props}
                      />
                    ),
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      if (match && match[1] === "mermaid") {
                        return (
                          <div className="my-6">
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-sm font-medium text-gray-700">
                                Diagram
                              </span>
                            </div>
                            <pre className="bg-gray-50 border border-gray-200 text-sm p-4 rounded-xl overflow-x-auto">
                              {children}
                            </pre>
                          </div>
                        );
                      }
                      return !inline ? (
                        <div className="my-3">
                          <pre className="bg-gray-50 border border-gray-200 text-sm p-4 rounded-xl overflow-x-auto">
                            <code {...props}>{children}</code>
                          </pre>
                        </div>
                      ) : (
                        <code className="bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-lg border border-gray-200">
                          {children}
                        </code>
                      );
                    },
                  }}
                >
                  {summarydata}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: Key Insights === */}
          <div className="space-y-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-10 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Key Insights
                </h2>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-blue-700">95%</div>
                  <div className="text-sm text-blue-600 mt-1">Accuracy</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-green-700">24h</div>
                  <div className="text-sm text-green-600 mt-1">Processing</div>
                </div>
              </div>

              {/* Main Takeaways */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Main Takeaways
                </h3>
                <div className="space-y-3">
                  {[
                    "Data shows significant improvement in processing efficiency.",
                    "Machine learning models achieved 95% prediction accuracy.",
                    "User engagement increased by 40% quarter over quarter.",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-600">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6 mt-6">
                <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  Recommendations
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Based on the analysis, consider implementing the suggested optimizations to further improve performance metrics and user satisfaction scores.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* === FOOTER === */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            Last updated: {new Date().toLocaleDateString()}
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
              Export
            </button>
            <button className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
              Share
            </button>
          </div>
        </div>
      </div>
        </>
    )
  );
};

export default VideoSummary;
