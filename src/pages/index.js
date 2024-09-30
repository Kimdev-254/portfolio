import dynamic from "next/dynamic"
import Head from "next/head"
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"
import Image from "next/image"

const IconCloud = dynamic(() => import("@/components/icon-cloud"), {
  ssr: false,
})

const iconSlugs = ["react", "javascript", "typescript", "nextjs", "nodejs"]

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
                <h2 className="text-5xl py-2 text-teal-500 font-medium font-serif">
                  I'm Kim
                </h2>
                <h3 className="text-2xl py-2 text-teal-400 font-serif">
                  a software developer dedicated to crafting
                </h3>
                <h3 className="text-2xl text-teal-400 font-serif mt-0">
                  exceptional digital experiences.
                </h3>
                <div className="text-5xl flex justify-normal gap-14 mt-10 py-2 text-white">
                  <a
                    href="https://www.linkedin.com/in/boniface-kimani-49ba6030a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform duration-300 hover:scale-110"
                  >
                    <AiFillLinkedin />
                  </a>
                  <a
                    href="https://github.com/Kimdev-254/Kimdev-254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform duration-300 hover:scale-110"
                  >
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://x.com/Kimdev254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transform transition-transform duration-300 hover:scale-110"
                  >
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
                <Image
                  src="/photo1.jpeg"
                  alt="Profile"
                  width={384}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mt-0">
            <div className="bg-background font-serif text-white p-8">
              <h2 className="text-3xl font-bold text-teal-600 text-center mb-8">
                My Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  {
                    icon: "devicon-javascript-plain colored",
                    skill: "JavaScript",
                  },
                  { icon: "devicon-python-plain colored", skill: "Python" },
                  { icon: "devicon-nextjs-plain-wordmark", skill: "Next.js" },
                  { icon: "devicon-react-plain colored", skill: "React" },
                  { icon: "devicon-flutter-plain colored", skill: "Flutter" },
                  {
                    icon: "devicon-ubuntu-plain colored",
                    skill: "Ubuntu",
                    bg: "bg-accent",
                    text: "text-accent-foreground",
                  },
                  {
                    icon: "devicon-git-plain colored",
                    skill: "Git Source Control",
                  },
                  { icon: "devicon-postman-plain colored", skill: "Postman" },
                  { icon: "devicon-mongodb-plain colored", skill: "MongoDB" },
                  { icon: "devicon-html5-plain colored", skill: "HTML & CSS" },
                  {
                    icon: "devicon-postgresql-plain colored",
                    skill: "PostgreSQL",
                  },
                  { icon: "devicon-prisma-plain", skill: "Prisma" },
                ].map(
                  (
                    {
                      icon,
                      skill,
                      bg = "bg-card",
                      text = "text-card-foreground",
                    },
                    index
                  ) => (
                    <div
                      key={index}
                      className={`${bg} ${text} p-4 rounded-lg flex flex-col items-center transform hover:scale-110 transition-transform duration-300 overflow-hidden`}
                    >
                      <i className={`${icon} text-6xl mb-2`}></i>
                      <span>{skill}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
          <section className="my-8">
            <IconCloud iconSlugs={iconSlugs} />
          </section>

          <section className="px-8 py-10">
            <div className="container mx-auto grid lg:grid-cols-2 gap-x-10 gap-y-12 place-items-center">
              <div className="col-span-2 mx-auto">
                <h2 className="block font-bold text-4xl text-teal-600 text-center mb-9 lg:text-4xl">
                  Projects
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8">
                  <div
                    className="relative flex flex-col bg-transparent rounded-xl shadow-none border-2 border-blue-600
                  transform hover:scale-110 transition-transform duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <h4 className="block font-semibold text-3xl mb-4">
                        Project 1
                      </h4>
                    </div>
                  </div>
                  <div
                    className="relative flex flex-col bg-transparent rounded-xl shadow-none border-2 border-blue-600
                  transform hover:scale-110 transition-transform duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <h4 className="block font-semibold text-3xl mb-4">
                        Project 2
                      </h4>
                    </div>
                  </div>
                  <div
                    className="relative flex flex-col bg-transparent rounded-xl shadow-none border-2 border-blue-600
                  transform hover:scale-110 transition-transform duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <h4 className="block font-semibold text-3xl mb-4">
                        Project 3
                      </h4>
                    </div>
                  </div>
                  <div
                    className="relative flex flex-col bg-transparent rounded-xl shadow-none border-2 border-blue-600
                  transform hover:scale-110 transition-transform duration-300 overflow-hidden"
                  >
                    <div className="p-8">
                      <h4 className="block font-semibold text-3xl mb-4">
                        Project 4
                      </h4>
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

          <footer>{/* Add your footer content here */}</footer>
        </div>
      </main>
    </div>
  )
}
