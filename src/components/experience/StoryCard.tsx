export function StoryCard({ className, label, children }: { className: string; label: string; children: React.ReactNode }) {
  return <aside className={`story-card ${className}`}><span>{label}</span>{children}</aside>;
}