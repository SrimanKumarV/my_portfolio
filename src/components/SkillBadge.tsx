

interface SkillBadgeProps {
  name: string;
}

export const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <div className="px-4 py-2 rounded-full glass border border-white/5 text-sm text-gray-300 font-medium hover:text-accent hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 whitespace-nowrap">
      {name}
    </div>
  );
};
