import Head from "next/head";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>

      <main className="bg-black text-white px-10 lg:px-40">
        <div className="max-w-screen-lg mx-auto">
          <section className="mb-20">
            <nav className="py-5 mb-10 flex justify-start">
              <img src="klogo.png" alt="Logo" className="h-10" />
            </nav>
            <div className="flex justify-between items-center mb-8">
              <div className="text-left">
                <p className="mb-4 font-mono">Hi there,👋</p>
                <h2 className="text-5xl py-2 text-teal-500 font-medium font-serif">I'm Kim</h2>
                <h3 className="text-2xl py-2 text-teal-400 font-serif">a software developer dedicated to crafting</h3>
                <h3 className="text-2xl text-teal-400 font-serif mt-0">exceptional digital experiences.</h3>
                <div className="text-5xl flex justify-normal gap-14 mt-10 py-2 text-white">
                  <a href="https://www.linkedin.com/in/boniface-kimani-49ba6030a/" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
                    <AiFillLinkedin />
                  </a>
                  <a href="https://github.com/Kimdev-254/Kimdev-254" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
                    <AiFillGithub />
                  </a>
                  <a href="https://x.com/Kimdev254" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
                    <AiFillTwitterCircle />
                  </a>
                </div>
                <div>
                  <a
                    href="/Resume .pdf"
                    download
                    className="inline-block rounded-md px-4 py-2 font-mono font-semibold text-white bg-green-600 mt-8 ml-20 transform transition-transform duration-300 hover:scale-110"
                  >
                    Resume
                  </a>
                </div>

              </div>
              <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full transform hover:scale-110 transition-transform duration-300 w-80 h-80 overflow-hidden md:h-96 md:w-96 mr-10">
                <Image src="/photo1.jpeg" alt="Profile" width={384} height={384} className="w-full h-full object-cover" />
              </div>
            </div>
          </section>

          <section className="mt-0">
            <div className="bg-background font-serif text-white-900 p-8">
              <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">My Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
              transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-javascript-plain colored text-6xl mb-2"></i>
                  <span>JavaScript</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-python-plain colored text-6xl mb-2"></i>
                  <span>Python</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-nextjs-plain-wordmark text-6xl mb-2"></i>
                  <span>Next.js</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-react-plain colored text-6xl mb-2"></i>
                  <span>React</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-flutter-plain colored text-6xl mb-2"></i>
                  <span>Flutter</span>
                </div>
                <div className="bg-accent text-accent-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-ubuntu-plain colored text-6xl mb-2"></i>
                  <span>Ubuntu</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-git-plain colored text-6xl mb-2"></i>
                  <span>Git Source Control</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-postman-plain colored text-6xl mb-2"></i>
                  <span>Postman</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-mongodb-plain colored text-6xl mb-2"></i>
                  <span>MongoDB</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-html5-plain colored text-6xl mb-2"></i>
                  <span>HTML & CSS</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-postgresql-plain colored text-6xl mb-2"></i>
                  <span>Postgresql</span>
                </div>
                <div className="bg-card text-card-foreground p-4 rounded-lg flex flex-col items-center
                transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                  <i className="devicon-prisma-plain  text-6xl mb-2"></i>
                  <span>Prisma</span>
                </div>
              </div>
            </div>
          </section>

          <section className="px-8 py-10">
            <div className="container mx-auto grid lg:grid-cols-2 gap-x-10 gap-y-12 place-items-center">
              <div className="col-span-2 mx-auto">
                <h2 className="block font-bold text-4xl text-teal-600 text-center mb-9 lg:text-4xl">Projects</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
                  <div className="relative flex flex-col bg-transparent rounded-xl shadow-none border-2 border-blue-600
                  transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <div className="p-8">
                      <h4 className="block font-semibold text-3xl mb-4">Project 1</h4>
                    </div>
                  </div>
                  <div className="relative flex flex-col bg-transparent rounded-xl shadow-none border-2 border-blue-600
                  transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <div className="p-8">
                      <h4 className="block font-semibold text-3xl mb-4">Project 2</h4>
                    </div>
                  </div>
                  <div className="relative flex flex-col bg-transparent rounded-xl shadow-none border-2 border-blue-600
                  transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <div className="p-8">
                      <h4 className="block font-semibold text-3xl mb-4">Project 3</h4>
                    </div>
                  </div>
                  <div className="relative flex flex-col bg-transparent rounded-xl shadow-none border-2 border-blue-600
                  transform hover:scale-110 transition-transform duration-300 overflow-hidden">
                    <div className="p-8">
                      <h4 className="block font-semibold text-3xl mb-4">Project 4</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className="flex justify-center mb-2 font-mono text-teal-600">
              <p className="">Hire me</p>
            </div>
            <div className="flex justify-center mb-10">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bonifacekimani715@gmail.com&su=Hello&body=Hi%20Kim,"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-500 text-white font-serif py-2 px-4 rounded hover:bg-teal-700 transition duration-300"
              >
                Send Me an Email
              </a>
            </div>
          </section>


          <footer>
            {/* Add your footer content here */}
          </footer>
        </div>
      </main>
    </div>
  );
}
