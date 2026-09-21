import FeatureCard from "@/components/FeatureCard";

export default function Features() {
  return (
    <section className="border-t border-slate-800 px-6 py-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
       <FeatureCard
  icon="👥"
  title="Connect"
  description="Find classmates and students who share your interests."
/>

<FeatureCard
  icon="💡"
  title="Share"
  description="Share ideas, knowledge, projects and your campus life."
/>

<FeatureCard
  icon="🚀"
  title="Grow"
  description="Discover communities, opportunities and events."
/>
      </div>
    </section>
  );
}