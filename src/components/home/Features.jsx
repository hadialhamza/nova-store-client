import { Truck, Shield, Clock } from "lucide-react";

export default function Features() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="space-y-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <Truck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Fast Delivery</h3>
          <p className="text-muted-foreground">
            We ship worldwide with express options available.
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">Secure Payment</h3>
          <p className="text-muted-foreground">
            Your transactions are protected with 256-bit encryption.
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary">
            <Clock className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold">24/7 Support</h3>
          <p className="text-muted-foreground">
            Our team is available round the clock to help you.
          </p>
        </div>
      </div>
    </section>
  );
}
