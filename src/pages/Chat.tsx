import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Send, Mic, StopCircle } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hi! I'm your AI shopping assistant. Tell me what you're looking for, and I'll help you find the best deals across the web!",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsThinking(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I'm analyzing thousands of products to find you the best options. Let me gather information on pricing, reviews, and availability...",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsThinking(false);
    }, 1500);
  };

  const suggestions = [
    "Find cheapest option",
    "Show best rated",
    "Filter by brand",
    "Under $100",
  ];

  return (
    <div className="min-h-screen pt-20 pb-32 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-[1fr,300px] gap-6">
          {/* Chat Area */}
          <div className="space-y-4">
            {/* Chat Header */}
            <div className="glass-strong p-4 rounded-2xl animate-fade-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="font-semibold">AI Shopping Assistant</h2>
                  <p className="text-sm text-muted-foreground">Online • Ready to help</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="glass-strong rounded-2xl p-4 min-h-[500px] flex flex-col">
              <ScrollArea className="flex-1 pr-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-gradient-to-r from-primary to-secondary text-white"
                            : "glass border border-border"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p className={`text-xs mt-1 ${message.role === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                          {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isThinking && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="glass border border-border rounded-2xl px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0ms" }} />
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "150ms" }} />
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "300ms" }} />
                          </div>
                          <span className="text-sm text-muted-foreground">AI is thinking...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Input Area */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Ask me anything about products..."
                    className="border-0 bg-muted/50 focus-visible:ring-1 focus-visible:ring-primary rounded-xl"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full hover:bg-muted/50"
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isThinking}
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-6"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar with Suggestions */}
          <div className="hidden lg:block space-y-4">
            <div className="glass-strong p-4 rounded-2xl animate-fade-in">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Quick Actions
              </h3>
              <div className="space-y-2">
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(suggestion)}
                    className="w-full text-left px-3 py-2 rounded-lg text-sm hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>

            <div className="glass-strong p-4 rounded-2xl">
              <h3 className="font-semibold mb-3">Recent Searches</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>No recent searches yet</p>
              </div>
            </div>

            <div className="glass p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <div className="text-center space-y-2">
                <StopCircle className="w-8 h-8 mx-auto text-primary" />
                <p className="text-sm font-medium">Collect Results</p>
                <p className="text-xs text-muted-foreground">
                  Click when you've gathered enough information
                </p>
                <Button size="sm" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg">
                  View Results
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;