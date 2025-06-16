import { Container } from "@/components/shared/main/Container"
import { SectionTitle } from "@/components/shared/main/SectionTitle"
import { useEffect, type JSX } from "react"
import CountUp from 'react-countup'

interface TeamMember {
  name: string
  position: string
  image: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

interface CompanyValue {
  title: string
  description: string
  icon: JSX.Element
}

export default function Company() {
    
  useEffect(() => {
    document.title = "Company | WindReact"
  }, [])

  const team: TeamMember[] = [
    {
      name: "John Doe",
      position: "CEO/Founder",
      image: "/images/team/1.jpg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Jane Smith",
      position: "CTO",
      image: "/images/team/2.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Mike Johnson",
      position: "Head of Design",
      image: "/images/team/3.png",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    },
    {
      name: "Sarah Williams",
      position: "Head of Marketing",
      image: "/images/team/4.webp",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      },
    }
  ]

  const companyValues: CompanyValue[] = [
    {
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to solve complex problems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Collaboration",
      description: "We believe great ideas come from working together and sharing diverse perspectives.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Customer Focus",
      description: "Our customers' success is our success. We're dedicated to delivering exceptional value.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    }
  ]

  return (
    <Container>
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center w-full">
          <div className="text-center">

            <SectionTitle
                preTitle="About"
                title="About WindReact"
                align="center"  
            >
                We're a dynamic team of creative minds, developers, and marketers committed to transforming ideas into impactful digital experiences.
            </SectionTitle>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 mt-16 text-center lg:grid-cols-4">
            <div className="flex flex-col">
              <dt className="text-lg font-medium text-gray-600 dark:text-gray-400">Founded</dt>
              <dd className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                <CountUp end={2035} duration={20} />
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-lg font-medium text-gray-600 dark:text-gray-400">Employees</dt>
              <dd className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                <CountUp end={120} duration={5} suffix="+" />
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-lg font-medium text-gray-600 dark:text-gray-400">Countries</dt>
              <dd className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                <CountUp end={12} duration={10} />
              </dd>
            </div>
            <div className="flex flex-col">
              <dt className="text-lg font-medium text-gray-600 dark:text-gray-400">Projects</dt>
              <dd className="text-4xl font-bold tracking-tight text-indigo-600 dark:text-indigo-400">
                <CountUp end={1000} duration={12} suffix="+" />
              </dd>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="py-10">
          <SectionTitle
            preTitle="Our Values"
            title="What drives us forward"
            align="center"
          >
            These core values shape everything we do and guide our decisions.
          </SectionTitle>

            <div className="grid gap-8 mt-12 md:grid-cols-3 max-w-screen-xl mx-auto">
              {companyValues.map((value) => (
                <div key={value.title} className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <div className="flex items-center justify-center w-12 h-12 text-white bg-indigo-600 dark:bg-indigo-500 rounded-lg">
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        {/* Team Section */}
        <div className="py-20">
          <SectionTitle
            align="center"
            preTitle="Our Team"
            title="The amazing team behind WindReact"
          >
            Highly skilled professionals who are passionate about creating exceptional digital experiences.
          </SectionTitle>

            <div className="grid gap-10 mt-16 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center">
                  <div className="relative rounded-full overflow-hidden w-40 h-40">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-gray-600 dark:text-gray-400">{member.position}</p>
                    <div className="flex justify-center mt-4 space-x-4">
                      {member.social.twitter && (
                        <a
                          href={member.social.twitter}
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <span className="sr-only">Twitter</span>
                          <Twitter />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <Linkedin />
                        </a>
                      )}
                      {member.social.github && (
                        <a
                          href={member.social.github}
                          className="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                        >
                          <span className="sr-only">GitHub</span>
                          <Github />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
    </Container>
  )
}

// Social Icons Components
function Twitter() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  )
}

function Linkedin() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  )
}

function Github() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  )
}