"use Client";

export default function Home() {
  return (
    <>

      <nav className="border-gray-950 border-b border-green-400">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <a href="#" className="flex items-center space-x-3">
            <span className="text-2xl font-semibold text-green-400">
              Portfolio
            </span>
          </a>

          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-400 rounded-lg md:hidden hover:bg-gray-800"
          >
            ☰
          </button>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col md:flex-row md:space-x-8 font-medium">
              <li><a href="#about" className="text-green-500">About</a></li>
              <li><a href="#projects" className="text-green-500">Project</a></li>
              <li><a href="#about" className="text-green-500">Skills</a></li>
              <li><a href="#contact" className="text-green-500">Contact</a></li>
            </ul>
          </div>

        </div>
      </nav>

      
  <section className="bg-gray-950 text-white py-20">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6">
      
     <div>
      <p className="text-gray-50 mb-2">Xavier Jacques</p>
      <h1 className="text-5xl font-bold text-green-600 mb-4">
      Full Stack Developer
      </h1>

      <p className="text-gray-50 mb-6 max-w-lg">
        As a new software developer, I’m excited to begin my journey in the tech industry. 
        I’m eager to gain real-world experience, explore different areas of development, 
        and continue improving my skills through hands-on projects and collaboration. 
        Every opportunity to learn and build is a step forward in growing as a developer.
      </p>
      </div>
 
      <div className="flex justify-center">
        <img
        src="/Images/image4.jpeg"
        alt="profile"
        className="rounded-2xl bg-green-500 p-2 w-110">
        </img>
      </div>
       </div>
       </section>
      <section id="about" className="bg-gray-950 text-white py-20">
       
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10 px-6">

<div className="flex justify-center">
         <img
         src="/Images/image5.jpeg"
         alt="about me"
         className="rounded-2xl bg-green-500 p-2 w-110"
         />
        </div>

       <div>
        <h2 className="text-5xl font-bold text-green-500 mb-4">
          About Me
        </h2>

        <p className="text-gray-50 mb-6 max-w-lg">
          Hi, I’m a software developer passionate about building modern web applications with JavaScript,
           React, Node.js, and databases. As a new developer, I enjoy learning new technologies, solving 
           problems, and turning ideas into real projects while growing my skills.
        </p>

        <div className="flex flex-wrap justify-center gap-2">
      <span className="border border-green-500 px-3 py-1 rounded">React</span>
      <span className="border border-green-500 px-3 py-1 rounded">Next.js</span>
      <span className="border border-green-500 px-3 py-1 rounded">CSS</span>
       <span className="border border-green-500 px-3 py-1 rounded">C#</span>
      <span className="border border-green-500 px-3 py-1 rounded">HTML</span>
       <span className="border border-green-500 px-3 py-1 rounded">Javascript</span>
        <span className="border border-green-500 px-3 py-1 rounded">Azure</span>
         <span className="border border-green-500 px-3 py-1 rounded">SQL</span>
</div>
        </div>
        </div>
      </section>

      <section id="projects" className="bg-gray-950 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-green-400 mb-10 text-center">
            Projects
          </h2>

        <div className="grid md:grid-cols-2 gap-8">

        <div className="bg-gray-900 border border-green-500 rounded-lg overflow-hidden">
          <img src="/Images/image1.png" alt="My Person" className="w-full h-60 object-cover" />

          <div className="p-5">

            <h3 className="text-xl font-bold text-green-400">
               Influence Person
            </h3>

          <p className="text-gray-300 mt-2">
            This is a Next.JS project that was talking about my 
            influence and I go into details about their origins, about 
            them in the story of where they are, how I connected with them,
            his stand ability in details and what it does this was our first 
            Next.js project that use pages so it was fun and very cool to learn
            about it and how it works.
          </p>

          <div className="flex gap-3 mt-4">

            <a
  href="https://my-app-jade-ten-31.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-black px-3 py-1 rounded inline-block text-center"
>
  Live Demo
</a>
            
            <a href="https://github.com/xavierjacques2442-cpu/my-app"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-green-500 px-3 py-1 rounded text-green-500">Git Hub</a>
        </div>
        </div>
        </div>
          <div className="bg-gray-900 border border-green-500 rounded-lg overflow-hidden">
          <img src="/Images/image3.png" alt="project2"  className="w-full h-60 object-cover" />

          <div className="p-5">

            <h3 className="text-xl font-bold text-green-400">
               Weather Application
            </h3>

          <p className="text-gray-300 mt-2">
          This a project we had to make a weather app but 
          with a twist as our design was switched to another
          person and we had to design their instead and it was a challenge
          but it was a good one because it taught me that anything can change and
          you have to ready for it and it was fun finding the working for this project.
          </p>

          <div className="flex gap-3 mt-4">

           <a
  href="https://weather-aplication-theta.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-black px-3 py-1 rounded inline-block text-center"
>
  Live Demo
</a>
            
              <a href="https://github.com/xavierjacques2442-cpu/Weather-aplication"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-green-500 px-3 py-1 rounded text-green-500">Git Hub</a>
        </div>
        </div>
        </div>
        <div className="md:col-span-2 flex justify-center">
          <div className="bg-gray-900 border border-green-500 rounded-lg overflow-hidden">
          <img src="/Images/image2.png" alt="project3"  className="w-100 h-60 object-cover mx-auto rounded-lg " />

          <div className="p-5">

            <h3 className="text-xl font-bold text-green-400">
               Pokemon API 
            </h3>

          <p className="text-gray-300 mt-2">
            This was our first API and fetch app and this
            project was very learning is how api works,
            fetch the API to show how search, fetching 
            and changes of the color or favorites, it list
            for favorite and unfavorite, the stars for the favorite,
            this is my favorite one to teach use about fetching and getting
            the api to work for the whole project.
          </p>

          <div className="flex gap-3 mt-4">

            <a
  href="https://pokemonv2-neon.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-500 text-black px-3 py-1 rounded inline-block text-center"
>
  Live Demo
</a>
            
             <a href="https://github.com/xavierjacques2442-cpu/pokemon"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-green-500 px-3 py-1 rounded text-green-500">Git Hub</a>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </section>
      <section id="contact" className="bg-gray-950 text-white py-20">
        <div className="text-center">

          <h2 className="text-5xl font-bold text-green-500 mb-4">
            Contact
          </h2>

          <p>Email: your@email.com</p>
          <p>Phone: 123-456-7890</p>

          <div className="flex justify-center gap-6 mt-4 text-green-500">
          <a href="https://github.com/xavierjacques2442-cpu"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-green-500 px-3 py-1 rounded text-green-500">Github</a>
           <a href="https://www.linkedin.com/feed/?trk=onboarding-landing"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-green-500 px-3 py-1 rounded text-green-500">LinkIn</a>
            <a href="https://docs.google.com/document/d/1LacisYNcZZf8MIAHNuKWTLqKnPhZpWtic1iE5wld1PI/edit?tab=t.0#heading=h.x8fm1uorkbaw"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-green-500 px-3 py-1 rounded text-green-500">Resume</a>
          </div>
        </div>

      </section>  
  

    </>
  );
}
