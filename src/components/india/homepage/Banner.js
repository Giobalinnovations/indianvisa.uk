'use client';
import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="relative min-h-[600px] mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="relative w-full h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url("/assets/images/india/home/banner.png")',
            backgroundPosition: 'center',
          }}
        >
          {/* Multiple overlay layers for better content visibility */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-primary/10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 h-full px-4 mx-auto md:px-6 lg:px-8">
        <div className="flex items-center h-full py-16 md:py-20">
          <div className="relative max-w-2xl text-white">
            {/* Content Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-primary/5 backdrop-blur-sm rounded-3xl"></div>

            {/* Actual Content */}
            <div className="relative p-8 md:p-10">
              <div className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                Simplified Visa Process
              </div>

              <h1 className="mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                Your Gateway to{' '}
                <span className="text-primary">Indian Visa</span> Services
              </h1>

              <p className="mb-8 text-base text-gray-200 md:text-lg">
                Experience a streamlined visa application process with our
                advanced digital platform
              </p>

              <div className="mb-12">
                <Link href="/visa/step-one" className="inline-block group">
                  <span className="relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 transform hover:-translate-y-0.5">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary to-accent rounded-xl"></span>
                    <span className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 bg-gradient-to-r from-accent to-primary rounded-xl group-hover:opacity-100"></span>
                    <span className="relative flex items-center text-lg">
                      Apply Now
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Digital Security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Real-time Support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Quick Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default Banner;
