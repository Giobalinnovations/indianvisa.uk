export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions',
  alternates: {
    canonical: '/terms-and-conditions',
  },
};

const page = () => {
  return (
    <div className="container px-4 pb-12 bg-white lg:pt-24 lg:py-10 lg:px-0 md:pt-28 md:pb-0 pt-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Terms & Conditions
              <div className="absolute -right-8 -top-8 w-16 h-16 bg-accent/10 rounded-full blur-lg"></div>
              <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-primary/10 rounded-full blur-lg"></div>
            </h1>
          </div>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Our commitment to transparency and fairness. These terms outline our
            mutual responsibilities and the framework of our service
            relationship.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-primary">
                Agreement Overview
              </h2>
            </div>
            <div className="ml-16 bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-xl">
              <p className="text-secondary mb-6">
                By using our services, you agree to these terms. We may update
                them periodically, and your continued use indicates acceptance
                of any changes.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-medium text-primary mb-3">
                    What You Accept
                  </h3>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      Service terms and conditions
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      Privacy policy guidelines
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      Usage responsibilities
                    </li>
                  </ul>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl">
                  <h3 className="font-medium text-primary mb-3">
                    Our Commitment
                  </h3>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      Service quality assurance
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      Data protection measures
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      Transparent communication
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl -z-10"></div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold text-primary mb-8">
                Service Guidelines
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-medium text-primary mb-4">
                    User Conduct
                  </h3>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <p>Maintain accurate and current information</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <p>Follow security best practices</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-medium text-primary mb-4">
                    Service Usage
                  </h3>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <p>Access through authorized channels</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <p>Respect system resources</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-medium text-primary mb-4">Compliance</h3>
                  <ul className="space-y-3 text-secondary">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <p>Adhere to legal requirements</p>
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2"></span>
                      <p>Follow platform policies</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-primary mb-8">
              Legal Framework
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary/5 to-transparent p-6 rounded-xl">
                <h3 className="font-medium text-primary mb-4">
                  Rights & Ownership
                </h3>
                <div className="space-y-4 text-secondary">
                  <p>Our platform content and features are protected by:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Copyright laws
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Trademark regulations
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      Intellectual property rights
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-gradient-to-br from-accent/5 to-transparent p-6 rounded-xl">
                <h3 className="font-medium text-primary mb-4">
                  Liability & Disputes
                </h3>
                <div className="space-y-4 text-secondary">
                  <p>Important considerations regarding:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      Service limitations
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      Dispute resolution
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      Governing jurisdiction
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-transparent p-8 rounded-2xl">
            <h2 className="text-2xl font-semibold text-primary mb-8">
              Updates & Communication
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-primary mb-4">Terms Updates</h3>
                <p className="text-secondary">
                  We may update these terms to reflect service improvements and
                  legal requirements. Continued use after updates constitutes
                  acceptance.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-4">Contact Us</h3>
                <p className="text-secondary">
                  For questions about these terms, reach out through our secure
                  communication channels.
                </p>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-100">
          <div className="text-center">
            <p className="text-sm text-secondary">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
