// import {
//   Select,
//   SelectGroup,
//   SelectValue,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";

// interface Props {
//   data: {
//     id: string;
//     groupName: string;
//   }[];
//   setSelectedGroup: (value: string) => void;
// }

// const SelectComponent = ({ data, setSelectedGroup }: Props) => {
//   return (
//     <>
//       <Select onValueChange={(value) => setSelectedGroup(value)}>
//         <SelectTrigger className="w-[180px]">
//           <SelectValue placeholder="Select a group" />
//         </SelectTrigger>
//         <SelectContent>
//           <SelectGroup>
//             {data.map((item) => (
//               <SelectItem value={item.groupName} key={item.id}>
//                 {item.groupName}
//               </SelectItem>
//             ))}
//           </SelectGroup>
//         </SelectContent>
//       </Select>
//     </>
//   );
// };

// export default SelectComponent;
import {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Options } from "../../shared/types";

interface SelectListProps {
  options: Options[];
  onChange: (value: string) => void;
  text: string;
}

const SelectInput = ({ onChange, options, text }: SelectListProps) => {
  return (
    <>
      <Select onValueChange={(value) => onChange(value)}>
        <SelectTrigger>
          <SelectValue placeholder={text} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map(({ value, id }) => (
              <SelectItem value={id} key={id}>
                {value}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default SelectInput;
