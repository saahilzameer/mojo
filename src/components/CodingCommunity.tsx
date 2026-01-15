import React from 'react';
import { Github, Linkedin, Twitter, Mail, Code2, Users, Zap } from 'lucide-react';

interface CommunityMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    mail?: string;
  };
}

// Coding Community Team Members
const codingTeam: CommunityMember[] = [
  {
    id: 1,
    name: "B. Varun Kumar Reddy",
    role: "President",
    bio: "Leading the coding revolution",
    image: "/jbit prompt techies (6) copy.png",
    skills: ["Leadership", "Strategy", "Innovation"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username",
      mail: "mailto:email@example.com"
    }
  },
  {
    id: 2,
    name: "Sindhu Yadav",
    role: "Vice President",
    bio: "Driving community excellence",
    image: "/jbit prompt techies (6).png",
    skills: ["Management", "Coordination", "Growth"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 3,
    name: "Srivani",
    role: "Secretary General",
    bio: "Organizing excellence",
    image: "/jbit prompt techies (7).png",
    skills: ["Organization", "Communication", "Events"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username",
      twitter: "https://twitter.com/username"
    }
  },
  {
    id: 4,
    name: "Varshitha",
    role: "PR & Logistics Head",
    bio: "Building connections & managing ops",
    image: "/20.jpg",
    skills: ["Public Relations", "Logistics", "Coordination"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  { 
    id: 5,
    name: "Akshitha Reddy",
    role: "AI Lead",
    bio: "Pioneering AI solutions",
    image: "/4.jpg",
    skills: ["Machine Learning", "AI", "Python"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 6,
    name: "Nelgi Revanth",
    role: "Documentation Head",
    bio: "Writing clear, concise docs",
    image: "/5.jpg",
    skills: ["Technical Writing", "Documentation", "APIs"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 7,
    name: "Mohammad Aslam",
    role: "Product Lead",
    bio: "Building products that matter",
    image: "/6.jpg",
    skills: ["Product Management", "UX", "Strategy"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 8,
    name: "P. Venkata Krishna Sree Sravani",
    role: "Tech Lead",
    bio: "Leading technical excellence",
    image: "/7.jpg",
    skills: ["Full Stack", "Architecture", "Leadership"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 9,
    name: "E. Premkumar",
    role: "AI Agent Lead",
    bio: "Building intelligent agents",
    image: "/8.jpg",
    skills: ["AI Agents", "LLM", "Automation"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 10,
    name: "Krupal Ameti",
    role: "Code Crew",
    bio: "Crafting clean code",
    image: "/9.jpg",
    skills: ["JavaScript", "React", "Node.js"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 11,
    name: "Ch. Dhanush",
    role: "Code Crew",
    bio: "Building amazing features",
    image: "/10.jpg",
    skills: ["Python", "Django", "APIs"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 12,
    name: "Mohammed Junaid Pasha",
    role: "Content Creation Lead",
    bio: "Creating engaging content",
    image: "/11.jpg",
    skills: ["Content", "Writing", "Social Media"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 13,
    name: "V. Koushal Rao",
    role: "Pixel Pals",
    bio: "Designing beautiful interfaces",
    image: "/12.jpg",
    skills: ["UI/UX", "Figma", "Design"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 14,
    name: "Sri Sai Sushanth",
    role: "Pixel Pals",
    bio: "Creating stunning visuals",
    image: "/13.jpg",
    skills: ["Graphic Design", "Photoshop", "Illustrator"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 15,
    name: "Rohith",
    role: "Development Lead",
    bio: "Leading development teams",
    image: "/14.jpg",
    skills: ["Full Stack", "DevOps", "Leadership"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 16,
    name: "N. Mokshith Reddy",
    role: "Digital Maven",
    bio: "Mastering digital marketing",
    image: "/15.jpg",
    skills: ["Digital Marketing", "SEO", "Analytics"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 17,
    name: "Satvika Kalla",
    role: "Digital Maven",
    bio: "Driving digital engagement",
    image: "/16.jpg",
    skills: ["Social Media", "Branding", "Content"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 18,
    name: "Rohan Harsha",
    role: "Videography Lead",
    bio: "Capturing moments in motion",
    image: "/17.jpg",
    skills: ["Video Editing", "Premiere Pro", "Cinematography"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 19,
    name: "Rakesh Yadav",
    role: "Photography Lead",
    bio: "Freezing perfect moments",
    image: "/18.jpg",
    skills: ["Photography", "Lightroom", "Portrait"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  },
  {
    id: 20,
    name: "V. Architha",
    role: "Steering Committee",
    bio: "Guiding strategic direction",
    image: "19.jpg",
    skills: ["Strategy", "Planning", "Leadership"],
    socials: { 
      github: "https://github.com/username", 
      linkedin: "https://linkedin.com/in/username" 
    }
  }
];

const CodingCommunity: React.FC = () => {
  return (
    <section id="coding-community" className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-slate-900 to-black rounded-2xl my-8">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-20 rounded-2xl overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00f7ff 1px, transparent 1px), linear-gradient(90deg, #00f7ff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code2 className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Professional Coding Community
            </h2>
            <Zap className="w-8 h-8 text-blue-400" />
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Elite developers building the future, one commit at a time
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {codingTeam.map((member, index) => (
            <div
              key={member.id}
              className="group relative"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/30 overflow-hidden">
                {/* Scan line effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent pointer-events-none"
                  style={{
                    animation: 'scan 3s linear infinite'
                  }}
                />

                <div className="relative z-10">
                  <div className="mb-4 relative">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-xl overflow-hidden border-2 border-cyan-500 group-hover:border-blue-400 transition-colors duration-300 shadow-lg shadow-cyan-500/50">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + member.name;
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 rounded-full">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 font-mono">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-3 uppercase text-xs sm:text-sm tracking-wider">{member.role}</p>
                  <p className="text-gray-400 text-xs sm:text-sm mb-4">"{member.bio}"</p>

                  <div className="flex flex-wrap gap-2 mb-4 justify-center">
                    {member.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-mono bg-slate-700/50 text-cyan-400 rounded border border-cyan-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 justify-center">
                    {member.socials.github && (
                      <a 
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700 hover:bg-cyan-500/20 rounded-lg transition-colors border border-slate-600 hover:border-cyan-500"
                        aria-label="GitHub Profile"
                      >
                        <Github className="w-5 h-5 text-cyan-400" />
                      </a>
                    )}
                    {member.socials.linkedin && (
                      <a 
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700 hover:bg-cyan-500/20 rounded-lg transition-colors border border-slate-600 hover:border-cyan-500"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin className="w-5 h-5 text-cyan-400" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a 
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-700 hover:bg-cyan-500/20 rounded-lg transition-colors border border-slate-600 hover:border-cyan-500"
                        aria-label="Twitter Profile"
                      >
                        <Twitter className="w-5 h-5 text-cyan-400" />
                      </a>
                    )}
                    {member.socials.mail && (
                      <a 
                        href={member.socials.mail}
                        className="p-2 bg-slate-700 hover:bg-cyan-500/20 rounded-lg transition-colors border border-slate-600 hover:border-cyan-500"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5 text-cyan-400" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scan {
          0% {
            transform: translateY(-200px);
          }
          100% {
            transform: translateY(400px);
          }
        }
      `}</style>
    </section>
  );
};

export default CodingCommunity;