import Link from "next/link";

export default function Contact() {
  return (
    <section className="container mx-auto px-4 text-center py-10">
      <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
      <p className="text-muted-foreground mb-6">
        Our support team is ready to assist you with any inquiries.
      </p>
      <Link href="/contact" className="text-primary font-bold hover:underline">
        Contact Support &rarr;
      </Link>
    </section>
  );
}
