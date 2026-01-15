const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} NovaStore. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
