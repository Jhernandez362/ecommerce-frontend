import { FilterTypes } from "@/types/filters";
import { useGetProductField } from "@/api/getProductField";
import { Label } from "@/components/ui/label";
import { RadioGroup } from "@/components/ui/radio-group";
import { RadioGroupItem } from "@radix-ui/react-radio-group";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type FilterOriginProps = {
    setFilterOrigin: (origin: string) => void; 
};

const FiltersOrigin = ({ setFilterOrigin }: FilterOriginProps) => {
    const { result, loading }: FilterTypes = useGetProductField();
    const [selectedOrigin, setSelectedOrigin] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(true); 

    const handleSelection = (value: string) => {
        setSelectedOrigin(value);
        setFilterOrigin(value);
    };

    return (
        <div className="w-full max-w-md sm:w-[350px] p-4 border border-gray-300 rounded-lg shadow-md bg-white">
            <button 
                className="flex justify-between items-center w-full text-lg font-bold text-gray-700 sm:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                Filter by origin
                {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {/* Extra content */}
            <div className={`${isOpen ? "block" : "hidden"} sm:block mt-3`}>
                {loading && result === null ? (
                    <p className="text-gray-500">Loading...</p>
                ) : (
                    <RadioGroup 
                        onValueChange={handleSelection} 
                        className="flex flex-col gap-3"
                        value={selectedOrigin || ""}
                    >
                        {result !== null &&
                            result.schema.attributes.origin.enum.map((origin: string) => (
                                <div 
                                    key={origin} 
                                    className={`flex items-center gap-2 p-2 rounded-md cursor-pointer transition 
                                        ${selectedOrigin === origin ? "bg-blue-100 border border-blue-400" : "hover:bg-gray-100"}`}
                                    onClick={() => handleSelection(origin)}
                                >
                                    <RadioGroupItem value={origin} id={origin} />
                                    <Label htmlFor={origin} className="text-gray-600 cursor-pointer">{origin}</Label>
                                </div>
                            ))}
                    </RadioGroup>
                )}
            </div>
        </div>
    );
};

export default FiltersOrigin;