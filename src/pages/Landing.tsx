import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Search, TrendingUp, ShieldCheck, Star, Mic } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-ai-shopping.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-up space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                <Sparkles className="w-4 h-4 text-primary" />
                AI-Powered Shopping Assistant
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Shop Smarter.{" "}
                <span className="gradient-text">Not Harder.</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                Let AI find the best deals, compare prices across platforms, and help you make confident purchase decisions in seconds.
              </p>

              {/* Search Bar */}
              <div className="glass-strong p-2 rounded-2xl shadow-lg max-w-2xl">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-muted-foreground ml-3" />
                  <Input 
                    placeholder="Ask me what you want to buy..." 
                    className="border-0 bg-transparent focus-visible:ring-0 text-base"
                  />
                  <Button 
                    size="icon" 
                    variant="ghost" 
                    className="rounded-full hover:bg-muted/50"
                  >
                    <Mic className="w-5 h-5" />
                  </Button>
                  <Link to="/chat">
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-xl px-6">
                      Search
                    </Button>
                  </Link>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/chat">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover-glow rounded-xl px-8"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Chat
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="glass border-2 hover:bg-muted/50 rounded-xl px-8"
                >
                  Try Telegram Bot
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-glow-pulse" />
              <img 
                src={heroImage} 
                alt="AI Shopping Assistant" 
                className="relative rounded-3xl shadow-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose <span className="gradient-text">ShopSmart AI</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of online shopping with intelligent features designed to save you time and money.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Compare Prices",
                description: "Instantly compare prices across Amazon, Google Shopping, and more",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: Star,
                title: "Smart Ranking",
                description: "AI analyzes reviews, ratings, and seller credibility for you",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: ShieldCheck,
                title: "Trusted Reviews",
                description: "Get sentiment analysis and authentic review summaries",
                color: "from-green-500 to-emerald-500"
              },
              {
                icon: Sparkles,
                title: "Track Deals",
                description: "Monitor price drops and get notified when prices fall",
                color: "from-orange-500 to-red-500"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-strong p-6 rounded-2xl hover-scale hover-glow transition-smooth group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-strong max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl shadow-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Shop Smarter?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of smart shoppers who save time and money with AI-powered product discovery.
            </p>
            <Link to="/chat">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover-glow rounded-xl px-12 text-lg"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Get Started Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;