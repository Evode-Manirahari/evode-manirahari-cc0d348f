import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  impact: string;
  metrics?: string;
  problem?: string;
  solution?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  tech, 
  highlights, 
  impact, 
  metrics,
  problem,
  solution,
  githubUrl, 
  liveUrl 
}: ProjectCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full">
      <CardHeader>
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Tech Stack */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {tech.map((item, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Key Features
          </h4>
          <ul className="text-sm space-y-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Metrics */}
        {metrics && (
          <div className="space-y-2">
            <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
              Key Metrics
            </h4>
            <p className="text-sm text-green-600 font-medium bg-green-50 dark:bg-green-950/20 px-3 py-2 rounded-md border border-green-200 dark:border-green-800">
              {metrics}
            </p>
          </div>
        )}

        {/* Problem-Solution */}
        {problem && solution && (
          <div className="space-y-3">
            <div className="space-y-1">
              <h4 className="font-semibold text-xs text-red-600 uppercase tracking-wide">Problem</h4>
              <p className="text-sm text-muted-foreground">{problem}</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-semibold text-xs text-blue-600 uppercase tracking-wide">Solution</h4>
              <p className="text-sm text-muted-foreground">{solution}</p>
            </div>
          </div>
        )}

        {/* Impact */}
        <div className="space-y-2">
          <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
            Impact & Learning
          </h4>
          <p className="text-sm text-primary font-medium">{impact}</p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          {githubUrl && (
            <Button 
              variant="portfolio" 
              size="sm" 
              className="flex-1"
              onClick={() => window.open(githubUrl, '_blank')}
            >
              <Github className="w-4 h-4" />
              Code
            </Button>
          )}
          {liveUrl && (
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1"
              onClick={() => window.open(liveUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};