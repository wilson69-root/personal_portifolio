import { NextResponse } from "next/server";
import OpenAI from "openai";

const SYSTEM_PROMPT = `
You are an AI assistant for Wilson Kevin Ngatia. You are embedded in his portfolio website.
Your role is to answer questions about Wilson's skills, experience, and projects in a professional, friendly, and concise manner.

Details about Wilson:
- **Role**: Tech Professional, Computer Lab Assistant.
- **Location**: Karatina, Nyeri, Kenya.
- **Summary**: Motivated and adaptable aspiring tech professional. Problem Solver. Builder. Learner.
- **Work Experience**: Computer Lab Assistant at Antioch Baptist Church (2022-Present). Tasks: Tech support, training, hardware troubleshooting, website backend dev.
- **Skills**: 
  - IT Support: Hardware Troubleshooting, Software Installation, Linux, Microsoft Suite.
  - Dev: Python, Web Development, MySQL, HTML/CSS.
  - Cloud: Cloud Computing, Backend Development.
  - Soft Skills: Communication, Problem Solving, Team Collaboration.
- **Projects**:
  - *Uplift_One*: Privacy-first AA meeting platform. Tech: Next.js, TypeScript, Tailwind, WebRTC.
  - *FundiConnect*: Service marketplace for connecting customers with service providers. Tech: React, AI Integration.
- **Certifications**: AI for Software Engineering (PLP), ALX AI Starter Kit, Cloud Practitioner (Ajira Digital).
- **Contact**: wilsonkevinngatia@gmail.com, Phone: +254717854140.
- **CV/Resume**: You can view the full CV here: [View CV](/cv/index.html).

Tone: Friendly, professional, helpful. Use emojis occasionally.
If asked about something not in this list, politely say you don't know but suggest checking his CV.
`;

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const lastMessage = messages[messages.length - 1].content.toLowerCase();

        // 1. Check for API Key
        const apiKey = process.env.GROQ_API_KEY;

        if (apiKey) {
            // Real AI Mode
            const openai = new OpenAI({
                apiKey,
                baseURL: "https://api.groq.com/openai/v1"
            });

            const completion = await openai.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...messages.map((m: any) => ({
                        role: m.role,
                        content: m.content
                    })),
                ],
            });

            return NextResponse.json({
                content: completion.choices[0].message.content
            });
        }

        // 2. Mock Mode (Fallback)
        // Simulate network delay for realism
        await new Promise(resolve => setTimeout(resolve, 1000));

        let reply = "I'm not sure about that. Try asking about my **skills**, **projects**, or **experience**! 🤔";

        if (lastMessage.includes("hello") || lastMessage.includes("hi") || lastMessage.includes("hey")) {
            reply = "Hello! 👋 I'm Wilson's virtual assistant. How can I help you today?";
        } else if (lastMessage.includes("skill") || lastMessage.includes("stack") || lastMessage.includes("tech")) {
            reply = "Wilson is proficient in **Python**, **Web Development (Next.js, React)**, **MySQL**, and **Linux**. He also has strong IT support skills like hardware troubleshooting. 💻";
        } else if (lastMessage.includes("project") || lastMessage.includes("work") || lastMessage.includes("built")) {
            reply = "He has built some cool projects! \n\n1. **Uplift_One**: A privacy-first AA meeting platform. \n2. **FundiConnect**: An AI-powered service marketplace. \n\nCheck the Projects section for more! 🚀";
        } else if (lastMessage.includes("contact") || lastMessage.includes("email") || lastMessage.includes("reach")) {
            reply = "You can reach Wilson at **wilsonkevinngatia@gmail.com** or call **+254717854140**. 📧";
        } else if (lastMessage.includes("experience") || lastMessage.includes("job")) {
            reply = "Wilson has been a **Computer Lab Assistant** at Antioch Baptist Church since 2022, providing tech support and training. 💼";
        } else if (lastMessage.includes("cv") || lastMessage.includes("resume") || lastMessage.includes("curriculum")) {
            reply = "Sure! You can view and download Wilson's full CV here: [View CV](/cv/index.html) 📄";
        }

        return NextResponse.json({ content: reply });

    } catch (error) {
        console.error("API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
