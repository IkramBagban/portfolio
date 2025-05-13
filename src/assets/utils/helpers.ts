export const scrollToSection = (sectionId: string, setMobileMenuOpen: (open: boolean) => void) => {
  setMobileMenuOpen(false);
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: "smooth",
    });
  }
};


