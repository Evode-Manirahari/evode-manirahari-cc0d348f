import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Eye } from "lucide-react";

export const Resume = () => {
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    const timestamp = Date.now();
    setResumeUrl(`/resume.pdf?v=${timestamp}&cache=bust`);
  }, []);

  const handleDownload = () => {
    if (!resumeUrl) return;

    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Evode_Manirahari_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenNewTab = () => {
    if (!resumeUrl) return;
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="resume" className="py-20 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Resume
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            View or download my latest resume highlighting my education, technical skills, and experience.
          </p>
        </div>

        <Card className="overflow-hidden border-border/60 bg-card/80 backdrop-blur-sm">
          <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <CardTitle className="text-xl md:text-2xl">
              Evode Manirahari — Resume
            </CardTitle>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="sm" onClick={handleDownload}>
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Button variant="outline" size="sm" onClick={handleOpenNewTab}>
                <Eye className="w-4 h-4" />
                Open in New Tab
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border border-dashed border-border/60 rounded-lg overflow-hidden bg-muted">
              {resumeUrl ? (
                <iframe
                  src={resumeUrl + "#view=FitH"}
                  title="Evode Manirahari Resume PDF"
                  className="w-full h-[500px] md:h-[650px]"
                />
              ) : (
                <div className="h-[500px] flex items-center justify-center text-muted-foreground text-sm">
                  Loading resume...
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
