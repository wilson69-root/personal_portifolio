import { NextResponse } from "next/server";
import OpenAI from "openai";
import { Resend } from "resend";

const SYSTEM_PROMPT = `
You are an AI assistant for Wilson Kevin Ngatia. You are embedded in his portfolio website.
Your role is to answer questions about Wilson's skills, experience, and projects in a professional, friendly, and concise manner.
You also have the ability to send emails on behalf of the user or to Wilson.

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

TOOLS:
You have a tool called "send_email".
- Use this when the user explicitly asks to send an email to Wilson or to themselves (e.g., "Send me your CV", "Send Wilson a message").
- If the user asks to send a CV to themselves, ask for their email address if not provided.
- If the user sends a message to Wilson, use Wilson's email (wilsonkevinngatia@gmail.com) as the recipient if not specified, but usually you'd want to capture the user's email to reply to. Ideally, send the email TO Wilson FROM the system, including the user's message and contact info.
`;

const tools = [
    {
        type: "function",
        function: {
            name: "send_email",
            description: "Send an email. Use this to send the CV to a user or a message to the portfolio owner.",
            parameters: {
                type: "object",
                properties: {
                    to: {
                        type: "string",
                        description: "The email address to send to.",
                    },
                    subject: {
                        type: "string",
                        description: "The subject of the email.",
                    },
                    body: {
                        type: "string",
                        description: "The HTML body of the email.",
                    },
                },
                required: ["to", "subject", "body"],
            },
        },
    },
];

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const lastMessage = messages[messages.length - 1].content.toLowerCase();

        // 1. Check for API Keys
        const apiKey = process.env.GROQ_API_KEY;
        const resendApiKey = process.env.RESEND_API_KEY;

        if (apiKey) {
            // Real AI Mode
            const openai = new OpenAI({
                apiKey,
                baseURL: "https://api.groq.com/openai/v1"
            });

            // Initial call to model
            const completion = await openai.chat.completions.create({
                model: "llama-3.3-70b-versatile",
                messages: [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...messages.map((m: any) => ({
                        role: m.role,
                        content: m.content,
                        tool_calls: m.tool_calls, // Pass previous tool calls if any
                        tool_call_id: m.tool_call_id,
                        name: m.name
                    })),
                ],
                tools: tools as any,
                tool_choice: "auto",
            });

            const responseMessage = completion.choices[0].message;

            // Check if the model wants to call a tool
            if (responseMessage.tool_calls) {
                const toolCalls = responseMessage.tool_calls;

                // Prepare messages for the second turn (include the assistant's tool call)
                // We must explicitly construct the object to avoid passing unsupported properties (like 'id') to Groq
                const assistantMessage = {
                    role: "assistant",
                    content: responseMessage.content,
                    tool_calls: responseMessage.tool_calls
                };

                const newMessages = [
                    { role: "system", content: SYSTEM_PROMPT },
                    ...messages,
                    assistantMessage
                ];

                for (const toolCall of toolCalls) {
                    if (toolCall.type === 'function' && toolCall.function.name === "send_email") {
                        if (!resendApiKey) {
                            newMessages.push({
                                role: "tool",
                                tool_call_id: toolCall.id,
                                content: "Error: Email service is not configured (missing API Key).",
                            });
                            continue;
                        }

                        const resend = new Resend(resendApiKey);
                        const functionArgs = JSON.parse(toolCall.function.arguments);

                        try {
                            // Fix: Ensure 'from' is a verified domain or the testing domain provided by Resend
                            // Usually 'onboarding@resend.dev' is for testing.
                            // For production, the user needs a verified domain.
                            // We will try to use a safe default or checking if the user provided one in ENV (not common for this setup).
                            // Let's assume 'onboarding@resend.dev' for now if not configured otherwise, or handle the error gracefully.

                            const { data, error } = await resend.emails.send({
                                from: 'Wilson Portfolio <onboarding@resend.dev>', // Update this if you have a custom domain
                                to: [functionArgs.to],
                                subject: functionArgs.subject,
                                html: functionArgs.body,
                            });

                            if (error) {
                                console.error("Resend Error:", error);
                                newMessages.push({
                                    role: "tool",
                                    tool_call_id: toolCall.id,
                                    content: `Error sending email: ${error.message}`,
                                });
                            } else {
                                newMessages.push({
                                    role: "tool",
                                    tool_call_id: toolCall.id,
                                    content: `Email sent successfully! ID: ${data?.id}`,
                                });
                            }

                        } catch (e: any) {
                            newMessages.push({
                                role: "tool",
                                tool_call_id: toolCall.id,
                                content: `Exception sending email: ${e.message}`,
                            });
                        }
                    }
                }

                // Second call to model with tool outputs
                const secondResponse = await openai.chat.completions.create({
                    model: "llama-3.3-70b-versatile",
                    messages: newMessages as any,
                });

                return NextResponse.json({
                    content: secondResponse.choices[0].message.content
                });
            }

            return NextResponse.json({
                content: responseMessage.content
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
