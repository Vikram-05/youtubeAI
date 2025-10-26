import React from 'react'
import { useNavigate } from 'react-router-dom'

function Footer() {
    const navigate = useNavigate()
    return (
        <footer className="border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <div onClick={() => navigate('/')} className="cursor-pointer flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                                <span className="text-white text-sm font-semibold tracking-tight">YT</span>
                            </div>
                            <span className="font-semibold tracking-tight">YouTube AI Tutor</span>
                        </div>
                        <p className="text-sm text-gray-600">Transform any YouTube video into an interactive learning experience.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Product</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Features</a></li>
                            <li><a href="/price" className="hover:text-gray-900 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">API</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Changelog</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="/about" className="hover:text-gray-900 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
                            <li><a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-sm">Legal</h4>
                        <ul className="space-y-3 text-sm text-gray-600">
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Terms</a></li>
                            <li><a href="#" className="hover:text-gray-900 transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <p className="text-sm text-gray-600">© 2024 YouTube AI Tutor. All rights reserved.</p>
                    <div className="flex items-center space-x-6">
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                            <i data-lucide="twitter" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                            <i data-lucide="github" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                            <i data-lucide="linkedin" className="w-5 h-5"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer