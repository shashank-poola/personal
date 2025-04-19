import React from 'react';

export default function PersonalWebsite() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-['Bricolage_Grotesque',_sans-serif] flex items-center justify-center ">
      <div className="flex justify-center">
      <div className="px-4 py-12 w-full max-w-4xl">
        {/* Header */}
        <header className="mb-16 mt-8">
          <h1 className="text-5xl font-bold mb-12">Shashank Poola</h1>
        </header>

        {/* Main Content */}
        <main>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 font-bricolage">
            <div className="md:w-2/3 mb-12">
              <p className="text-lg mb-6">
              I'm a 21-year-old <a href="#" className="">full-stack developer</a> from India, 
              diving into the crypto space and Web3. I'm building a web-based wallet and 
              Tipfinity, a platform where fans can pay creators with crypto using solana.
              </p>
              <p className="text-lg mb-12 font-bricolage">
                I also play bgmi, and Reading books sometime.
              </p>

              <hr className="border-gray-700 my-12" />

              {/* Social Links */}
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>X - <a href="https://x.com/Shanktwt" className="text-white underline">@Shanktwt</a></span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Instagram - <a href="https://instagram.com/mr___shashank__" className="text-white underline">@mr___shashank__</a></span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>GitHub - <a href="https://github.com/shashank-poola" className="text-white underline">@shashank-poola</a></span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Email - <a href="mailto:hi@theshashank.xyz" className="text-white underline">hi@theshashank.xyz</a></span>
                </li>
              </ul>
            </div>
          </div>
      </main>

        {/* Footer */}
        <footer className="mt-32 mb-4 text-center text-sm text-gray-500">
          <p>2025 © theshashank.</p>
        </footer>
      </div>
    </div>
  </div>
  );
}