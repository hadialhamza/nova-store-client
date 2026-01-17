export default function AboutSection() {
  return (
    <section className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold">About NovaStore</h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          At NovaStore, we believe in bringing the future to your doorstep.
          Founded in 2024, our mission is to curate the most innovative products
          from around the globe. We scrutinize every item for quality,
          sustainability, and design excellence.
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you are a tech enthusiast, a fashion icon, or someone who
          appreciates fine home decor, we have something special for you.
        </p>
      </div>
      <div className="flex-1 h-100 bg-accent/10 rounded-2xl flex items-center justify-center">
        <span className="text-accent font-logo text-4xl">NS</span>
      </div>
    </section>
  );
}
