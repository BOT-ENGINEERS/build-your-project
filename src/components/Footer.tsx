const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">BE</span>
          </div>
          <span className="font-semibold text-foreground">Bot Engineers</span>
        </div>

        <p className="text-sm text-muted-foreground text-center">
          Helping is allowed, cheating is not. © {new Date().getFullYear()} Bot Engineers
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
