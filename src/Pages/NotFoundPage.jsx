import React from 'react';
import Footer from '../components/Footer';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Breadcrumb + Content Wrapper */}
            <div className="flex-grow p-8 flex flex-col">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-6">
                    Home / <span className="text-black">404 Error</span>
                </nav>

                {/* Centered Content */}
                <main className="flex flex-col items-center justify-center text-center flex-grow gap-8">
                    <h1 className="text-6xl md:text-8xl font-bold text-red-600">404</h1>
                    <h2 className="text-2xl md:text-3xl font-semibold">Page Not Found</h2>
                    <p className="text-gray-600 max-w-md">
                        The page you're looking for doesn’t exist or was moved.
                    </p>
                    <button
                        className="px-6 py-3 mt-4 bg-[#DB4444] text-white rounded hover:bg-[#c03b3b] transition"
                        onClick={() => window.location.href = '/'}
                    >
                        Back To Home
                    </button>
                </main>
            </div>

            {/* Sticky Footer at Bottom */}
            <Footer />
        </div>
    );
};

export default NotFoundPage;
