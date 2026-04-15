const Footer = () => {
  return (
    <footer className="bg-hero border-t border-hero-muted/20 py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-hero-muted">
          © {new Date().getFullYear()} ABOKA IT Consult. All rights reserved.
        </p>
        <p className="text-sm text-hero-muted">
          abokait.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
