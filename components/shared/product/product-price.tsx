import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  classname,
}: {
  value: string;
  classname?: string;
}) => {
  return (
    <p className={cn("text-2xl", classname)}>
      <span className="text-xs align-super">Rs</span>
      {value}
    </p>
  );
};

export default ProductPrice;
