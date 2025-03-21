import { cn } from "@/lib/utils";

interface IconButtonProps {
    onClick: ()=> void,
    icon: React.ReactElement,
    classname: string
}

const IconButton = (props:IconButtonProps) => {
    const {onClick, icon, classname} = props;

    return (  <button onClick={onClick} className={cn("rounded-full cursor-pointer flex items-center bg-white border shadow-md p-2 hover:scale-110 transition", classname)}>
        {icon}
    </button>);
}
 
export default IconButton;