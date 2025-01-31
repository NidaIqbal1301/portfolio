// In types.ts
export interface PortfolioItem {
    type: 'project' | 'hackathon';
    image: string;
    title: string;
    description: string;
    livePreview?: string;
    githubLink?: string;
  }
  