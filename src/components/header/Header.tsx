type HeaderProps = {
  header: string;
};

const Header = ({ header }: HeaderProps) => {
  return (
    <>
      <div className=" flex justify-center items-center mt-40 lg:mb-10">
        <h2 className="font-semibold text-center text-2xl">{header}</h2>
      </div>
    </>
  );
};

export default Header;
