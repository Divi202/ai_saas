"use client";

import PageHeader from "@/components/pageheader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarInset } from "@/components/ui/sidebar";
import { useState } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const AIStylist = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const aiMessage: Message = {
        sender: "ai",
        text: `Stylist: Great! Here's an outfit suggestion for "${input}". 👗`,
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 700);

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <SidebarInset>
      <PageHeader title="AI Stylist" />

      <div className="mt-4 px-4 w-full max-w-4xl mx-auto">
        <Card className="flex flex-col h-[80vh] sm:h-[75vh] shadow-md border border-border bg-background">
          <CardContent className="flex-1 p-4 overflow-hidden">
            <ScrollArea className="h-full pr-2">
              <div className="space-y-4">
                {messages.length === 0 ? (
                  <div className="text-center text-sm text-muted-foreground mt-10 px-4">
                    👋 Hi there! I'm your <strong>AI Stylist</strong>. Ask me
                    anything about:
                    <ul className="list-disc text-left mt-2 ml-5 space-y-1">
                      <li>Styling your wardrobe</li>
                      <li>Outfits for events or seasons</li>
                      <li>Combining clothes & accessories</li>
                    </ul>
                  </div>
                ) : (
                  messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.sender === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`rounded-xl px-4 py-2 max-w-[80%] text-sm break-words ${
                          msg.sender === "user"
                            ? "bg-purple-600 text-white"
                            : "bg-gray-100 text-gray-900"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </CardContent>

          <div className="p-4 border-t flex flex-col sm:flex-row items-center gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask your stylist..."
              className="w-full sm:flex-1"
            />
            <Button onClick={sendMessage} className="w-full sm:w-auto">
              Send
            </Button>
          </div>
        </Card>
      </div>
    </SidebarInset>
  );
};

export default AIStylist;
