const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-hero/95 backdrop-blur-sm border-b border-hero-muted/20">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="text-xl font-semibold text-hero-foreground tracking-tight">
          ABOKA <span className="font-light">IT Consult</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {["Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-hero-muted hover:text-hero-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="bg-accent text-accent-foreground px-5 py-2 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
};

export default Header;
