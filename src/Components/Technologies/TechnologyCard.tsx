import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../Types";
import { Bounce, toast } from "react-toastify";

interface TechnologyCardProps {
    technology: TechnologyType;
    technologiesCart: TechnologyType[];
    setTechnologiesCart: Dispatch<SetStateAction<TechnologyType[]>>;
    isTechnologyAdded: boolean;
}

const TechnologyCard = ({ technology, technologiesCart, setTechnologiesCart, isTechnologyAdded }: TechnologyCardProps) => {


    const handleAddToStack = () => {
        const newTechnologiesCart = [...technologiesCart, technology];
        setTechnologiesCart(newTechnologiesCart);
        toast.success(`${technology.name} added to stack`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    return (
        <div className={`mx-auto flex h-full w-full max-w-[280px] flex-col rounded-xl border bg-white p-4 shadow-sm md:max-w-none ${isTechnologyAdded ? "border-pink-400" : "border-slate-200"}`}>
            <div className="flex items-start justify-between">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-10 w-10 object-contain"
                />
                <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-500">
                    {technology.badge}
                </span>
            </div>

            <h2 className="mt-3 text-base font-bold text-slate-900">
                {technology.name}
            </h2>

            <p className="mt-2 min-h-[60px] text-[11px] leading-4 text-slate-400">
                {technology.description}
            </p>

            <div className="mt-3 grid grid-cols-[auto_1fr_auto] items-center gap-2 text-[10px] text-slate-500">
                <span className="rounded bg-slate-50 px-2 py-1">
                    {technology.category}
                </span>
                <span className="truncate text-center">
                    {technology.difficulty}
                </span>
                <span className="flex items-center gap-1 font-medium text-slate-700">
                    <span className="text-yellow-400">★</span>
                    {technology.rating}
                </span>
            </div>

            <button
                onClick={handleAddToStack}
                className={`btn mt-4 w-full rounded-md py-2 text-[11px] font-medium transition disabled:pointer-events-auto disabled:cursor-not-allowed ${isTechnologyAdded ? "bg-pink-50 text-pink-600 hover:bg-pink-50" : "bg-slate-950 text-white hover:bg-slate-800"}`}
                disabled={isTechnologyAdded}
            >
                {isTechnologyAdded ? "Added to Stack" : "Add to Stack"}

            </button>
        </div>
    );
};

export default TechnologyCard;