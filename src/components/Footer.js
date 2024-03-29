const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <footer className="flex container flex-wrap justify-around md:justify-between mx-auto mt-4 mb-6 z-50 transform translate-x-0">
      <span className="px-6">
        Made with &#10084; by{" "}
        <a href="https://rory-dwyer.com" className="hover:underline" target="_blank" rel="noreferrer">
          Rory Dwyer
        </a>
      </span>
      <span className="px-6">&copy; {currentYear} Christa Prentiss, All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
