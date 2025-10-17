import { Button } from "@/components/ui/button";
import { Sparkles, Search, Heart, TrendingUp, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:glow transition-all">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">ShopSmart AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors ${
                isActive("/") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link 
              to="/chat" 
              className={`text-sm font-medium transition-colors ${
                isActive("/chat") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              AI Chat
            </Link>
            <Link 
              to="/results" 
              className={`text-sm font-medium transition-colors ${
                isActive("/results") ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Compare
            </Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full hidden sm:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Link to="/chat">
              <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-md hover-glow">
                <Sparkles className="w-4 h-4 mr-2" />
                Start Chat
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 glass-strong border-t border-border">
        <div className="flex items-center justify-around px-4 py-3">
          <Link to="/" className={`flex flex-col items-center gap-1 ${isActive("/") ? "text-primary" : "text-muted-foreground"}`}>
            <Search className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link to="/chat" className={`flex flex-col items-center gap-1 ${isActive("/chat") ? "text-primary" : "text-muted-foreground"}`}>
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-medium">Chat</span>
          </Link>
          <Link to="/results" className={`flex flex-col items-center gap-1 ${isActive("/results") ? "text-primary" : "text-muted-foreground"}`}>
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs font-medium">Compare</span>
          </Link>
          <button className={`flex flex-col items-center gap-1 text-muted-foreground`}>
            <Heart className="w-5 h-5" />
            <span className="text-xs font-medium">Saved</span>
          </button>
          <button className={`flex flex-col items-center gap-1 text-muted-foreground`}>
            <User className="w-5 h-5" />
            <span className="text-xs font-medium">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;