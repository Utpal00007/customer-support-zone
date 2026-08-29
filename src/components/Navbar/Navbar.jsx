import Container from "../Container/Container";

const Navbar = () => {
  return (
    <nav className="bg-white py-6  shadow">
      <Container>
        {" "}
        <div className=" mx-auto flex flex-col lg:flex-row justify-between items-center">
          <h2 className="text-2xl font-bold">CS — Ticket System</h2>
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <ul className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-[#000000]/90 mt-4 lg:mt-0">
              <li>
                <a href="">Home </a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Changelog</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Download</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
            <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-3 px-4  rounded-md text-white ">
              + New Ticket
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
