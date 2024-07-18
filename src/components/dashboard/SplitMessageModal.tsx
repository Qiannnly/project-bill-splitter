import StandardCard from "../shared/StandardCard";
import { Button } from "../ui/button";

type Props = {
  text: string[];
  onClose: () => void;
  isModalOpen: boolean;
};

const SplitMessageModal = ({ text, onClose, isModalOpen }: Props) => {
  return (
    <>
      {isModalOpen && (
        <div className="w-screen bg-gray-100 bg-opacity-80 h-screen fixed top-0 left-0 pt-48">
          <div>
            <StandardCard title="Your transactions are split into: ">
              <div>
                {text.map((element, id) => (
                  <div key={id}>{element}</div>
                ))}
              </div>
              <div className="text-center mt-9" onClick={onClose}>
                <Button>Close</Button>
              </div>
            </StandardCard>
          </div>
        </div>
      )}
    </>
  );
};

export default SplitMessageModal;
