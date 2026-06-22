"use client";

export default function Home() {
  return (
    <main className="bg-gray-950 text-white">

      {/* NAV */}
      <nav className="border-b border-green-400 border-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <span className="text-2xl font-semibold text-green-400">
            Portfolio
          </span>

          <div className="hidden md:block">
            <ul className="flex space-x-6 font-medium">
              <li><a href="#about" className="text-green-500">About</a></li>
              <li><a href="#projects" className="text-green-500">Projects</a></li>
              <li><a href="#contact" className="text-green-500">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          <div>
            <p className="text-3xl text-gray-200 mb-2">Xavier Jacques</p>

            <h1 className="text-5xl font-bold text-green-600 mb-4">
              Frontend Developer
            </h1>

            <p className="text-gray-300 max-w-lg">
   As a new Junior Frontend Developer, I’m passionate about building modern, responsive, and user-friendly web applications.
  I’m excited to begin my journey in the tech industry and grow my skills through real-world projects and hands-on experience.
  I enjoy exploring frontend development, improving my understanding of UI/UX design, and learning how to turn ideas into clean, functional interfaces.
  I’m also motivated to collaborate with others and continuously improve as a developer.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/Images/image4.png"
              alt="profile"
              className="rounded-2xl bg-green-500 p-2 w-[410px]"
            />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">

          <div className="flex justify-center">
            <img
              src="/Images/image5.png"
              alt="about me"
              className="rounded-2xl bg-green-500 p-2 w-[410px]"
            />
          </div>

          <div>
            <h2 className="text-5xl font-bold text-green-500 mb-4">
              About Me
            </h2>

            <p className="text-gray-300 mb-6 max-w-lg">
   I’m a Frontend developer focused on building modern, responsive web applications and APIs.
   My experience includes JavaScript, TypeScript, React, Next.js, Node.js, and backend development using C# and ASP.NET Core.
   I work with SQL databases and enjoy designing scalable, user-friendly systems.
  I’m also comfortable using tools like Azure, GitHub, Postman, Swagger, and Figma to support development from design to deployment.
  I’m continuously learning new technologies and improving my ability to turn ideas into real-world applications.
            </p>

            <div className="space-y-6">

            <div>
            <h3 className="text-lg font-semibold text-green-500 mb-2">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="border border-green-500 px-3 py-1 rounded">CSS</span>
              <span className="border border-green-500 px-3 py-1 rounded">JavaScript</span>
              <span className="border border-green-500 px-3 py-1 rounded">HTML</span>
              <span className="border border-green-500 px-3 py-1 rounded">C#</span>
              <span className="border border-green-500 px-3 py-1 rounded">TypeScript</span>
              <span className="border border-green-500 px-3 py-1 rounded">SQL</span>

              <div>
                  <h3 className="text-lg font-semibold text-green-500 mb-2">
                Frameworks/Libraries
              </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-green-500 px-3 py-1 rounded">React</span>
                  <span className="border border-green-500 px-3 py-1 rounded">Next.js</span>
                  <span className="border border-green-500 px-3 py-1 rounded">Unity</span>
                 <span className="border border-green-500 px-3 py-1 rounded">Node.js</span>
                 <span className="border border-green-500 px-3 py-1 rounded">Asp.Net Core</span>
              </div>

               <h3 className="text-lg font-semibold text-green-500 mb-2">
                Tools/Platforms
              </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-green-500 px-3 py-1 rounded">Azure</span>
                  <span className="border border-green-500 px-3 py-1 rounded">Github</span>
                  <span className="border border-green-500 px-3 py-1 rounded">Postman</span>
                  <span className="border border-green-500 px-3 py-1 rounded">Swagger</span>
                  <span className="border border-green-500 px-3 py-1 rounded">Figma</span>
                  <span className="border border-green-500 px-3 py-1 rounded">Bootstrap</span>
                </div>
              </div>
              </div>
             </div>
            </div>
          </div>
          </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-green-400 mb-10 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <div className="bg-gray-900 border border-green-500 rounded-lg overflow-hidden">
              <img src="/Images/image1.png" alt="project1" className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-400">Influence Person</h3>
                <p className="text-gray-300 mt-2">
                  Next.js project about influential people and their stories, I choose someone from a anime series, wrote why I choose him, all his facts and achievements in a next.js project.
                </p>
                <div className="flex gap-3 mt-4">
                  <a href="https://my-app-jade-ten-31.vercel.app/" target="_blank" className="bg-green-500 text-black px-3 py-1 rounded">Live</a>
                  <a href="https://github.com/xavierjacques2442-cpu/my-app" target="_blank" className="border border-green-500 px-3 py-1 rounded text-green-500">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-gray-900 border border-green-500 rounded-lg overflow-hidden">
              <img src="/Images/image3.png" alt="project2" className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-400">Weather App</h3>
                <p className="text-gray-300 mt-2">
                  Weather application built with API integration, was a challenging as mine was switch with other person who I did instead, they did mine instead and it came out just like her designed, use a api key which I do not have because it will cost money but it works fine.
                </p>
                <div className="flex gap-3 mt-4">
                  <a href="https://weather-aplication-theta.vercel.app/" target="_blank" className="bg-green-500 text-black px-3 py-1 rounded">Live</a>
                  <a href="https://github.com/xavierjacques2442-cpu/Weather-aplication" target="_blank" className="border border-green-500 px-3 py-1 rounded text-green-500">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className=" bg-gray-900 border border-green-500 rounded-lg overflow-hidden">
              <img src="/Images/image2.png" alt="project3" className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-400">Pokemon API V.2 </h3>
                <p className="text-gray-300 mt-2">
                  First API project using fetch, search, and favorites system, later on we upgrade it designed, it's function where it don't show you a pokemon until you search for it or press randomize button.
                </p>
                <div className="flex gap-3 mt-4">
                  <a href="https://pokemon-app-self-iota.vercel.app/" target="_blank" className="bg-green-500 text-black px-3 py-1 rounded">Live</a>
                  <a href="https://github.com/xavierjacques2442-cpu/pokemon-app" target="_blank" className="border border-green-500 px-3 py-1 rounded text-green-500">GitHub</a>
                </div>
              </div>
            </div>

             {/* Project 4 */}
            <div className=" bg-gray-900 border border-green-500 rounded-lg overflow-hidden">
              <img src="/Images/image6.png" alt="project3" className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-400">Venn Group Project</h3>
                <p className="text-gray-300 mt-2">
                  This was our group project that I help to with to build Called Venn a planning website for meetings, or meet ups, was our final project of the school, it went thought the internship will still working on it.
                </p>
                <div className="flex gap-3 mt-4">
                  <a href="https://venn-iota.vercel.app/" target="_blank" className="bg-green-500 text-black px-3 py-1 rounded">Live</a>
                  <a href="https://github.com/duartemjoseph-spec/vennfrontend.git" target="_blank" className="border border-green-500 px-3 py-1 rounded text-green-500">GitHub</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 text-center">
        <h2 className="text-5xl font-bold text-green-500 mb-4">Contact</h2>

        <p>Email: xavierjacques@att.net</p>
        <p>Phone: (209)-422-9991</p>

        <div className="flex justify-center gap-6 mt-4">
          <a className="border border-green-500 px-3 py-1 rounded" href="https://github.com/xavierjacques2442-cpu">GitHub</a>
          <a className="border border-green-500 px-3 py-1 rounded" href="https://www.linkedin.com">LinkedIn</a>
          <a className="border border-green-500 px-3 py-1 rounded" href="https://docs.google.com/document/d/1LacisYNcZZf8MIAHNuKWTLqKnPhZpWtic1iE5wld1PI/edit?tab=t.0">Resume</a>
        </div>
      </section>

    </main>
  );
}