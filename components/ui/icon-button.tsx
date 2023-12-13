import { cn } from "@/lib/utils"
import { MouseEventHandler } from "react";

type Prop = {
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
    className?: string;
    icon: React.ReactElement;
}

const IconButton = ({className, onClick, icon}:Prop) => {
  return (
    <button
    onClick={onClick}
    className={cn("rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition", className)}
    >
        {icon}
    </button>
  )
}

export default IconButton