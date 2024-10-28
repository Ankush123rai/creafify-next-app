import { Typography, Card, CardBody } from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
      color="transparent"
      shadow={false}
      className="cursor-pointer bg-gradient-to-r from-gray-100 to-white p-5 transition-transform hover:scale-95 hover:bg-gradient-to-r hover:from-gray-300 hover:to-blue-gray-500 hover:text-white shadow-lg rounded-lg"
    >
      <CardBody
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="flex flex-col items-start"
      >
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white shadow-md">
          <Icon className="h-6 w-6" />
        </div>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          variant="h5"
          className="mb-2 text-blue-900 font-semibold"
        >
          {title}
        </Typography>
        <Typography
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          className="text-black font-normal leading-relaxed"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default FeatureCard;
