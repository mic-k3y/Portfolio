const Header = () => (
    <header className="fixed top-0 w-full bg-blue-100 text-blue-900 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        <h1 className="text-2xl font-bold">Michael Yilma</h1>
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {['Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  
  export default Header;
  