import { Button } from "../ui/button";

type SplitOptionButtonsProps = {
  splitOption: string;
  setSplitOption: (value: string) => void;
};

const SplitOptionButtons = ({
  splitOption,
  setSplitOption,
}: SplitOptionButtonsProps) => {
  return (
    <>
      <div className="space-x-6 justify-center items-center flex">
        <Button
          variant={`${splitOption === "evenly" ? "default" : "secondary"}`}
          onClick={() => setSplitOption("evenly")}
        >
          Split evenly
        </Button>
        <Button
          variant={`${splitOption === "between" ? "default" : "secondary"}`}
          onClick={() => setSplitOption("between")}
        >
          Split between
        </Button>
      </div>
    </>
  );
};

export default SplitOptionButtons;
