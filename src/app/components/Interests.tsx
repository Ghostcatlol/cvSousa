import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type Interests = typeof RESUME_DATA.interests;

interface InterestsProps {
  interests: Interests;
  className?: string;
}

function InterestsList({ list, className }: { list: readonly { label: string; url: string }[]; className?: string }) {
  return (
    <ul className={cn("flex list-none flex-wrap gap-1 p-0", className)} aria-label="Lista de interesses">
      {list.map((interest) => (
        <li key={interest.label}>
          <a href={interest.url} target="_blank" rel="noopener noreferrer">
            <Badge className="print:text-[10px] cursor-pointer hover:underline" aria-label={`Interesse: ${interest.label}`}>
              {interest.label}
            </Badge>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Interests({ interests, className }: InterestsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="interests-section">
        Interests
      </h2>
      <span className="mb-1 block text-xs text-muted-foreground italic">
        (You can click on the interests for more details)
      </span>
      <div className="mb-2 text-pretty font-mono text-sm text-foreground/80 print:text-[12px]" aria-labelledby="interests-section">
        {interests.paragraph}
      </div>
      <InterestsList list={interests.list} />
    </Section>
  );
}
