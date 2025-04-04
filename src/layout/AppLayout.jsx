
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.$isNavbarVisible ? "22rem" : "0")} 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  transition: grid-template-columns 0.3s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-100);
  padding: 2rem;

  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;

const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: ${(props) => (props.$isNavbarVisible ? "block" : "none")};

  @media (min-width: 768px) {
    display: none;
  }
`;

export default function AppLayout() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavbarVisible(true);
      } else {
        setIsNavbarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledAppLayout $isNavbarVisible={isNavbarVisible}>
      <Header />

      <button
        className="md:hidden fixed top-4 left-4 bg-transparent border-gray-400 rounded-lg shadow shadow-gray-500 z-20 border-2 hover:bg-[var(--color-grey-400)] focus:outline-none transition-all ease-in-out duration-300 outline-none!"
        onClick={() => setIsNavbarVisible(!isNavbarVisible)}
      >
        <FaBars size={44} />
      </button>

      <Overlay
        $isNavbarVisible={isNavbarVisible}
        onClick={() => setIsNavbarVisible(false)}
      />

      <SideBar
        $isVisible={isNavbarVisible || window.innerWidth > 768}
        onClose={() => setIsNavbarVisible(false)}
      />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
}
