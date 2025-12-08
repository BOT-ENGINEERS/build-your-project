import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <img src={logo} alt="Bot Engineers" className="h-8" />

        <p className="text-sm text-muted-foreground text-center">
          Helping is allowed, cheating is not. © {new Date().getFullYear()} Bot Engineers
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
