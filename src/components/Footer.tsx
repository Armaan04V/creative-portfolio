const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="signature text-2xl font-bold text-primary mb-2">
              Sorab Hans
            </div>
            <p className="text-muted-foreground text-sm">
              Graphic Designer & Creative Professional
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Sorab Hans. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Crafted with passion and attention to detail.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;