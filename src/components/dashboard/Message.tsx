type Props = {
  text: string[];
};

const Message = ({ text }: Props) => {
  return (
    <>
      <div className="mb-20">
        <div className="mt-8 font-bold">Your transactions are split into:</div>

        <div>
          {text.map((element, id) => (
            <div key={id}>{element}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Message;
