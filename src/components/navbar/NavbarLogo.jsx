const NavbarLogo = () => {
  return (
    <div>
      <a href="/" className="hidden md:block">
        <img src="/tunarmahmudov/images/logo.png" alt="logo" className="h-14" />
      </a>

      <a href="/" className="block md:hidden">
        <img src="/tunarmahmudov/images/logo.png" alt="logo" className="h-14" />
      </a>
    </div>
  );
};

export default NavbarLogo;
