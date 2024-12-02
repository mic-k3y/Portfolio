const Header = () => (
  <header className="bg-gray-900 text-white p-4 fixed w-full z-10 shadow-lg">
    <nav className="flex justify-between items-center max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold">Michael Yilma</h1>
      <ul className="flex space-x-4">
        {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((section) => (
          <li key={section}>
            <Link href={`#${section.toLowerCase()}`} className="hover:text-gray-400">
              {section}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
