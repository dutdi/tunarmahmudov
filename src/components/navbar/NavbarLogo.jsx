const NavbarLogo = () => {
  return (
    <div>
      <a href="/tunarmahmudov/" className="hidden md:block">
        <img src="/tunarmahmudov/images/logo.png" alt="logo" className="h-14" />
      </a>

      <a href="/tunarmahmudov/" className="block md:hidden">
        <img src="/tunarmahmudov/images/logo.png" alt="logo" className="h-14" />
      </a>
    </div>
  );
};

export default NavbarLogo;
