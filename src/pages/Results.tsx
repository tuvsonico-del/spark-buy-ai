import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Heart, TrendingUp, ShieldCheck, Grid3x3, List, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  source: string;
  image: string;
  confidence: "high" | "medium" | "low";
  isTrustSeller?: boolean;
}

const mockProducts: Product[] = [
  {
    id: "1",
    title: "Premium Wireless Headphones with Active Noise Cancellation",
    price: 299.99,
    rating: 4.8,
    reviews: 2847,
    source: "Amazon",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    confidence: "high",
    isTrustSeller: true,
  },
  {
    id: "2",
    title: "Professional Studio Headphones - Audiophile Grade",
    price: 249.99,
    rating: 4.7,
    reviews: 1523,
    source: "Best Buy",
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    confidence: "high",
    isTrustSeller: true,
  },
  {
    id: "3",
    title: "Sport Wireless Earbuds - Waterproof & Long Battery",
    price: 149.99,
    rating: 4.5,
    reviews: 3421,
    source: "Google Shopping",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    confidence: "medium",
  },
  {
    id: "4",
    title: "Budget-Friendly Bluetooth Headphones",
    price: 79.99,
    rating: 4.3,
    reviews: 892,
    source: "eBay",
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?w=400&h=400&fit=crop",
    confidence: "medium",
  },
];

const Results = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("ai-ranking");

  const getConfidenceBadge = (confidence: string) => {
    const colors = {
      high: "bg-green-500/10 text-green-600 border-green-500/20",
      medium: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20",
      low: "bg-red-500/10 text-red-600 border-red-500/20",
    };
    return colors[confidence as keyof typeof colors] || colors.medium;
  };

  return (
    <div className="min-h-screen pt-20 pb-32 md:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            Product <span className="gradient-text">Comparison</span>
          </h1>
          <p className="text-muted-foreground">
            AI-ranked results based on price, reviews, and credibility
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="glass-strong p-4 rounded-2xl mb-6 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] border-border bg-background/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-ranking">AI Ranking</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground hidden sm:block">View:</span>
                <div className="flex gap-1 p-1 glass rounded-lg">
                  <Button
                    size="icon"
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    onClick={() => setViewMode("grid")}
                    className="h-8 w-8 rounded-md"
                  >
                    <Grid3x3 className="w-4 h-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant={viewMode === "list" ? "default" : "ghost"}
                    onClick={() => setViewMode("list")}
                    className="h-8 w-8 rounded-md"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">{mockProducts.length} Results Found</span>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-4"}>
          {mockProducts.map((product, index) => (
            <Card
              key={product.id}
              className="glass-strong overflow-hidden hover-scale hover-glow transition-smooth group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 rounded-full bg-white/90 hover:bg-white shadow-md"
                >
                  <Heart className="w-4 h-4" />
                </Button>
                {product.isTrustSeller && (
                  <Badge className="absolute top-2 left-2 bg-green-500/90 hover:bg-green-500">
                    <ShieldCheck className="w-3 h-3 mr-1" />
                    Trusted
                  </Badge>
                )}
              </div>

              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-sm line-clamp-2 flex-1 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-500 text-yellow-500"
                            : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold gradient-text">
                      ${product.price}
                    </p>
                    <p className="text-xs text-muted-foreground">{product.source}</p>
                  </div>
                  <Badge className={`${getConfidenceBadge(product.confidence)} border`}>
                    {product.confidence === "high" ? "✓ " : ""}
                    {product.confidence}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-lg">
                    Buy Now
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-lg">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Insights Panel */}
        <div className="mt-8 glass-strong p-6 rounded-2xl animate-fade-up">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">AI Insights</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Based on {mockProducts.reduce((acc, p) => acc + p.reviews, 0).toLocaleString()} reviews analyzed, 
                the top-ranked products show consistent positive sentiment and reliable seller ratings. 
                Price ranges vary by 73%, with premium options offering advanced features and better warranty coverage.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="glass">
                  <Star className="w-3 h-3 mr-1 text-yellow-500" />
                  Avg. Rating: 4.6
                </Badge>
                <Badge variant="outline" className="glass">
                  <TrendingUp className="w-3 h-3 mr-1 text-green-500" />
                  Best Value: $249.99
                </Badge>
                <Badge variant="outline" className="glass">
                  <ShieldCheck className="w-3 h-3 mr-1 text-blue-500" />
                  2 Trusted Sellers
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;