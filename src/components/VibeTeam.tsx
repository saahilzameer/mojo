import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
  emoji: string;
  glowColor: string;
  socials: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const DEFAULT_IMAGE = "/team-default.png";

const vibeTeam: TeamMember[] = [
  {
    id: 1,
    name: "Shaik Suhaana Zulekha",
    role: "President – Vibe Coding Community",
    bio: "Building scalable solutions",
    image: "/jbit prompt techies (7) copy.png",
    skills: ["Leadership", "Full Stack", "Cloud"],
    emoji: "👑",
    glowColor: "from-yellow-400 to-orange-500",
    socials: {},
  },
    {
    id: 1,
    name: "Vrithika",
    role: "VICE President – Vibe Coding Community",
    bio: "Building scalable solutions",
    image: "/jbit prompt techies (4).png",
    skills: ["Leadership", "Full Stack", "Cloud"],
    emoji: "👑",
    glowColor: "from-yellow-400 to-orange-500",
    socials: {},
  },
  {
    id: 2,
    name: "P. Spandana",
    role: "Secretary General",
    bio: "Ensuring smooth operations",
    image: "/jbit_prompt_techies_(2).png",
    skills: ["Management"],
    emoji: "📋",
    glowColor: "from-pink-400 to-purple-500",
    socials: {},
  },
  {
    id: 3,
    name: "Santhosh Reddy",
    role: "AI Lead",
    bio: "Building AI-driven systems",
    image: "/jbit prompt techies (5).png",
    skills: ["AI", "ML"],
    emoji: "🤖",
    glowColor: "from-green-400 to-emerald-500",
    socials: {},
  },
  {
    id: 4,
    name: "B.S.V.N.S. Mani Kumar",
    role: "Digital Maven",
    bio: "Driving digital innovation",
    image: "b.s.v.n.s.mani.png",
    skills: ["Digital Strategy"],
    emoji: "🌐",
    glowColor: "from-cyan-400 to-blue-500",
    socials: {},
  },
  {
    id: 5,
    name: "Sri Vidya",
    role: "Digital Maven",
    bio: "Crafting digital presence",
    image: "sri_vidya.png",
    skills: ["Branding"],
    emoji: "✨",
    glowColor: "from-fuchsia-400 to-pink-500",
    socials: {},
  },
  {
    id: 6,
    name: "Farjana Shaik",
    role: "Tech Lead",
    bio: "Leading technical excellence",
    image: "farjana.png",
    skills: ["Architecture"],
    emoji: "🧠",
    glowColor: "from-indigo-400 to-purple-500",
    socials: {},
  },
  {
    id: 7,
    name: "Khushi Yadav",
    role: "AI Agent Lead",
    bio: "Designing autonomous agents",
    image: "khushi.png",
    skills: ["AI Agents"],
    emoji: "🧩",
    glowColor: "from-rose-400 to-red-500",
    socials: {},
  },
  {
    id: 8,
    name: "A. Navyasri",
    role: "ChatGPT Lead",
    bio: "Prompting productivity",
    image: "navyasri.png",
    skills: ["Prompt Engineering"],
    emoji: "💬",
    glowColor: "from-teal-400 to-green-500",
    socials: {},
  },
  {
    id: 9,
    name: "Abdul Wasay Shumail",
    role: "Product Lead",
    bio: "Building impactful products",
    image: "abdul.png",
    skills: ["Product"],
    emoji: "📦",
    glowColor: "from-amber-400 to-orange-500",
    socials: {},
  },
  {
    id: 10,
    name: "Amrutha Roshni",
    role: "Development Lead",
    bio: "Delivering scalable apps",
    image:"amrutha.png",
    skills: ["Development"],
    emoji: "🛠️",
    glowColor: "from-lime-400 to-green-500",
    socials: {},
  },
  {
    id: 11,
    name: "B. Vishnu",
    role: "CODE CREW",
    bio: "Core development team",
    image: "b.vishnu.png",
    skills: ["Coding"],
    emoji: "💻",
    glowColor: "from-sky-400 to-blue-500",
    socials: {},
  },
  {
    id: 12,
    name: "D. Tejeswi",
    role: "CODE CREW",
    bio: "Feature implementation",
    image: "d.tejeswi.png",
    skills: ["Logic"],
    emoji: "⚙️",
    glowColor: "from-violet-400 to-purple-500",
    socials: {},
  },
  {
    id: 13,
    name: "Sameer Ansari",
    role: "Pixel Pals",
    bio: "Visual design",
    image: "sameer_ansari.png",
    skills: ["UI Design"],
    emoji: "🎨",
    glowColor: "from-pink-400 to-rose-500",
    socials: {},
  },
  {
    id: 14,
    name: "Ashuthosh Reddy",
    role: "Pixel Pals",
    bio: "Pixel-perfect UI",
    image: "ashuthosh_reddy.png",
    skills: ["Figma"],
    emoji: "🖌️",
    glowColor: "from-purple-400 to-indigo-500",
    socials: {},
  },
  {
    id: 15,
    name: "I. Mahima",
    role: "Documentation Head",
    bio: "Clear documentation",
    image: "i.mahima.png",
    skills: ["Writing"],
    emoji: "📘",
    glowColor: "from-yellow-400 to-amber-500",
    socials: {},
  },
  {
    id: 16,
    name: "Praveen Kumar",
    role: "PR & Logistics Head",
    bio: "Managing outreach",
    image: "praveen_kumar.png",
    skills: ["PR"],
    emoji: "📢",
    glowColor: "from-red-400 to-orange-500",
    socials: {},
  },
  {
    id: 17,
    name: "A. Shiva Keshava",
    role: "Videography & Photography Lead",
    bio: "Capturing moments",
    image: "a_shiva_keshava.png",
    skills: ["Photography"],
    emoji: "📸",
    glowColor: "from-slate-400 to-gray-500",
    socials: {},
  },
  {
    id: 18,
    name: "D. Laxmi",
    role: "Content Creation Lead",
    bio: "Storytelling & content",
    image: "d.laxmi.png",
    skills: ["Content"],
    emoji: "✍️",
    glowColor: "from-orange-400 to-pink-500",
    socials: {},
  },
  {
    id: 19,
    name: "Hasini Kesireddy",
    role: "Steering Committee",
    bio: "Strategic guidance",
    image: "hasini_kesireddy.png",
    skills: ["Leadership"],
    emoji: "🧭",
    glowColor: "from-emerald-400 to-teal-500",
    socials: {},
  },
];

export default function VibeTeam() {
  return (
    <section className="py-24 bg-black">
      {/* 🔥 HEADING SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          ✨ VIBE CODING COMMUNITY ✨
        </h2>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-white">
          Where Code Meets Creativity 🚀
        </p>
      </motion.div>

      {/* TEAM GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {vibeTeam.map((m) => (
          <motion.div
            key={m.id}
            whileHover={{ y: -12 }}
            className="relative group"
          >
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${m.glowColor} blur-xl rounded-3xl opacity-70`}
            />
            <div className="relative bg-black/90 p-6 rounded-3xl border border-white/20 text-center">
              <img
                src={m.image}
                alt={m.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-white mb-4"
              />
              <div className="text-4xl">{m.emoji}</div>
              <h3 className="text-white font-bold text-lg">{m.name}</h3>
              <p
                className={`font-semibold bg-gradient-to-r ${m.glowColor} bg-clip-text text-transparent`}
              >
                {m.role}
              </p>
              <p className="text-yellow-200 text-sm italic mt-2">
                "{m.bio}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
