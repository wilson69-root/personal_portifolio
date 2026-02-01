"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import ReactMarkdown from "react-markdown";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Message Type
type Message = {
    id: string;
    role: "user" | "assistant";
    content: string;
};

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Hi! I'm Wilson's AI assistant. Ask me anything about his skills, projects, or experience! 👋",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            if (!response.ok) throw new Error("Failed to fetch response");

            const data = await response.json();
            const botMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: data.content,
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    id: (Date.now() + 1).toString(),
                    role: "assistant",
                    content: "Sorry, I encountered an error. Please try again later.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            <div
                className={cn(
                    "w-[350px] sm:w-[400px] h-[500px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/20 dark:border-slate-700 shadow-2xl rounded-3xl overflow-hidden flex flex-col transition-all duration-300 origin-bottom-right pointer-events-auto mb-4",
                    isOpen
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4 pointer-events-none h-0 opacity-0 overflow-hidden"
                )}
            >
                {/* Header */}
                <div className="p-4 bg-indigo-600 dark:bg-indigo-700 text-white flex justify-between items-center shadow-md">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                            <Bot size={18} />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm">Wilson's Assistant</h3>
                            <p className="text-xs text-indigo-100 flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                Online
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-indigo-200 dark:scrollbar-thumb-slate-700">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={cn(
                                "flex gap-3 max-w-[85%]",
                                msg.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                            )}
                        >
                            <div
                                className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-sm mt-1",
                                    msg.role === "user" ? "bg-slate-700 dark:bg-slate-600" : "bg-indigo-500"
                                )}
                            >
                                {msg.role === "user" ? <User size={16} /> : <Bot size={16} />}
                            </div>
                            <div
                                className={cn(
                                    "p-3 rounded-2xl text-sm shadow-sm",
                                    msg.role === "user"
                                        ? "bg-indigo-600 text-white rounded-tr-none"
                                        : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700"
                                )}
                            >
                                {msg.role === "assistant" ? (
                                    <ReactMarkdown
                                        components={{
                                            a: ({ node, ...props }) => (
                                                <a
                                                    {...props}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="underline font-semibold hover:text-indigo-200"
                                                />
                                            ),
                                            p: ({ node, ...props }) => <p {...props} className="mb-2 last:mb-0" />,
                                            ul: ({ node, ...props }) => <ul {...props} className="list-disc pl-4 mb-2" />,
                                            li: ({ node, ...props }) => <li {...props} className="mb-1" />,
                                            strong: ({ node, ...props }) => <strong {...props} className="font-bold" />,
                                        }}
                                    >
                                        {msg.content}
                                    </ReactMarkdown>
                                ) : (
                                    msg.content
                                )}
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-3 mr-auto max-w-[85%]">
                            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 text-white shadow-sm mt-1">
                                <Bot size={16} />
                            </div>
                            <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-tl-none shadow-sm">
                                <div className="flex gap-1">
                                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <form
                    onSubmit={handleSubmit}
                    className="p-3 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex gap-2"
                >
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask about my skills..."
                        className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white placeholder:text-slate-400"
                    />
                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="p-2.5 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
                    >
                        <Send size={18} />
                    </button>
                </form>
            </div>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-14 h-14 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center pointer-events-auto",
                    isOpen ? "rotate-90 scale-0 opacity-0" : "scale-100 opacity-100 hover:scale-110"
                )}
            >
                <MessageCircle size={28} />
            </button>
        </div>
    );
}
