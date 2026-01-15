import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3001;

// NVIDIA API Configuration
const NVIDIA_API_KEY = process.env.VITE_NVIDIA_API_KEY || '';
const NVIDIA_API_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';

// Middleware
app.use(cors());
app.use(express.json());

// PromptBot context about the club
const CLUB_CONTEXT = `
You are PromptBot, the AI assistant for Prompt Techies - CMRIT's premier student tech club. Here's what you should know:

ABOUT PROMPT TECHIES:
- Official student tech club of CMR Institute of Technology, Hyderabad
- Focus areas: AI, Web Development, Innovation, Community Building
- Motto: "Dream. Develop. Deploy."

CORE TEAM:
- Shaik Saahil Zameer: Founder & President
- Varshitha Reddy: Founder Vice President
- Jyothi Swaroop: Digital Maven
- Muhammad Zaid: Digital Maven
- Yashwanth Kumar: PR and Logistics Head
- Durga Prasad: Creative Division Committee
- Manaswini Reddy: Public Relations Lead
- Sheetal: Steering Committee
- Neeli Vaishnavi: AI Lead
- Sriya Kandukuri: Tech Lead (AI Specialist)

RECENT EVENTS:
- CYBERSPHERE (Feb 9, 2024): Exploring the Digital Frontier
- SPECTRUM SPARKS (Mar 18, 2024): Bright Ideas. Bold Futures
- JNTU X CMRIT (Apr 23, 2024): United for Innovation
- SNIST X CMRIT (Jul 23, 2024): Empowering Student Collaboration
- AI GANESHA (Sep 6, 2024): When Devotion Meets Intelligence
- Student Tribe Meet at CMRIT (Sep 20, 2024)

UPCOMING EVENTS:
- SAWIT.AI – Gen AI Learning Challenge (Feb 18, 2025): Empowering Women in AI Education
- AI No-Code Workshop (Coming Soon): Build Without Code. Think With AI
- App Testing at Student Tribe HQ (Mar 2, 2025)
- Prompt Techies x Crypto Wala (Jun 22, 2025): Tech Synergy: AI Meets Blockchain
- SMARTZY × PROMPT TECHIES HACKATHON 2025 (Nov 29, 2025): Hyderabad's Biggest Student Hackathon

PARTNERSHIPS:
- Student Tribe: Dynamic student-led community providing opportunities and internships
- Edam Community: Tech-forward community empowering students through AI-driven learning

CONTACT INFO:
- Email: prompt_techies@cmrithyderabad.edu.in
- Phone: +91 80080 87702
- Location: CMR Institute of Technology, Hyderabad, Telangana, India
- WhatsApp Group: https://chat.whatsapp.com/D9akvV5WlvN8bJW78GIG9Y
- Application Form: https://forms.gle/FCvFaMWWVcoztz9J7

SOCIAL MEDIA:
- Instagram: @cmrit_prompt_techies
- LinkedIn: cmrit-prompt-techies
- GitHub: @prompttechies123
- Twitter: @promptechies

You should be helpful, friendly, and knowledgeable about tech topics, club activities, and provide guidance on AI tools, resume tips, career advice, and more. Always maintain an enthusiastic and supportive tone.
`;

// PromptBot API endpoint
app.post('/api/promptbot', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const response = await fetch(NVIDIA_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${NVIDIA_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'meta/llama-3.1-405b-instruct',
        messages: [
          {
            role: 'system',
            content: CLUB_CONTEXT
          },
          {
            role: 'user',
            content: message
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
        stream: false
      })
    });

    if (!response.ok) {
      throw new Error(`NVIDIA API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.choices && data.choices[0] && data.choices[0].message) {
      res.json({ 
        response: data.choices[0].message.content,
        success: true 
      });
    } else {
      throw new Error('Invalid response format from NVIDIA API');
    }

  } catch (error) {
    console.error('PromptBot API Error:', error);
    res.status(500).json({ 
      error: 'Sorry, I encountered an error. Please try again!',
      success: false 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'PromptBot server is running!' });
});

app.listen(PORT, () => {
  console.log(`PromptBot server running on port ${PORT}`);
});