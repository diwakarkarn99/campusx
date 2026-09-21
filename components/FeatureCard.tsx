type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-4 text-3xl">{icon}</div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-2 text-slate-400">
        {description}
      </p>
    </div>
  );
}