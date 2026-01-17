export default function Newsletter() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center space-y-8">
        <h2 className="text-3xl font-bold">Join the Innovation</h2>
        <p className="max-w-xl mx-auto opacity-90">
          Subscribe to our newsletter to get early access to new drops and
          exclusive discounts.
        </p>
        <form className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="button"
            className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
