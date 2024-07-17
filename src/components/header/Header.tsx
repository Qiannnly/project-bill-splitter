type HeaderProps = {
  header: string;
};

const Header = ({ header }: HeaderProps) => {
  return (
    <>
      <div className="border flex justify-center items-center mt-34 mb-8 lg:mt-36 lg:mb-10">
        <h2 className="font-semibold text-center text-2xl mt-28 mb-5">
          {header}
        </h2>
      </div>
    </>
  );
};

export default Header;
