import React from 'react';

export default function PersonalWebsite() {

  return (
    <div className="w-full min-h-screen bg-black text-white font-[Space+Grotesk] flex items-center justify-center ">
      <div className="flex justify-center">
      <div className="px-4 py-12 w-full max-w-4xl">

        {/* Main Content */}
        <main>
          <div className="flex flex-col md:flex-row justify-center items-start gap-12 font-bricolage">
            <div className="md:w-2/3 mb-12">
                <h1 className="text-5xl font-bold mb-12">Shashank Poola</h1>
              <p> I'm a 21-year-old <a href="#" className="italic">full-stack developer</a> from India, 
              diving into the crypto space and Web3. Building Unique websites like
              Tipfinity, a platform where fans can pay creators with crypto using solana.
              </p>
              <br/>
              <p className="text-lg mb-12 font-bricolage">
                Location: {'\uD83D\uDCCD'}Hyderabad, India
              </p>
              <br/> 

              <div className="md:w-2/3 mb-12">
                    <h3 className="text-2xl font-bold mb-12">Skills:-</h3>
              <p className="text-lg">
                  React.js -- Node.js -- JavaScript -- TypeScript -- Tailwind CSS -- GSAP -- Express -- MongoDB -- Git -- Github -- Vercel
              </p>
              </div>

              <br/>

              <div className="md:w-2/3 mb-12">
                    <h3 className="text-2xl font-bold mb-12">Proof of Work:-</h3>
                    <h5 className="text-xl mb-12">
                      <a href="https://nexora.shasha.ink" className="italic">Nexora</a> -  Nexora is a modern, animated scroll website built with GSAP for smooth, engaging visuals.
                    </h5>

                    <h5 className="text-xl mb-12">
                      <a href="https://nexora.shasha.ink" className="italic">movieflix</a> -  Your go-to movie discovery platform! Explore trending movies, get inspired by what people are searching, and enjoy movies seamless.
                    </h5>

                    <h5 className="text-xl mb-12">
                      <a href="https://github.com/shashank-poola/OpenNote" className="italic">OpenNote</a> -  A minimal and user-friendly task management app to add, edit, and delete your daily tasks. Built with clean UI and real-time updates for better productivity.
                    </h5>
              </div>


              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>X - <a href="https://x.com/shashankpoola" className="text-white underline">@shashankpoola</a></span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Linkedin - <a href="https://linkedin.com/in/shashank-poola" className="text-white underline">@shashank-poola</a></span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>GitHub - <a href="https://github.com/shashank-poola" className="text-white underline">@shashank-poola</a></span>
                </li>
                <li className="flex items-center">
                  <span className="text-gray-400 mr-2">•</span>
                  <span>Email - <a href="mailto:hi@shasha.ink" className="text-white underline">hi@shasha.ink</a></span>
                </li>
              </ul>
            </div>
          </div>
      </main>

        {/* Footer */}
        <footer className="mt-32 mb-4 text-center text-sm text-gray-500">
          <p>2025 © shasha.ink</p>
        </footer>
      </div>
    </div>
  </div>
  );
}