import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

import { ReactNode } from "react";

interface CardProps {
  title: string;
  children: ReactNode;
}
const StandardCard = ({ title, children }: CardProps) => {
  return (
    <>
      <Card className="w-[400px] mx-auto shadow-md">
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </>
  );
};

export default StandardCard;
