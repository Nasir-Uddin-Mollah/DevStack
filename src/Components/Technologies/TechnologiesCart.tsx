import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../Types";
import { Bounce, toast } from "react-toastify";

interface TechnologyCartProps {
    technologiesCart: TechnologyType[];
    setTechnologiesCart: Dispatch<SetStateAction<TechnologyType[]>>;
}

const TechnologiesCart = ({ technologiesCart, setTechnologiesCart }: TechnologyCartProps) => {
    const removeTechnology = (id: number) => {
        const technology = technologiesCart.find(tech => tech.id === id);
        const remainingTechs = technologiesCart.filter(tech => tech.id !== id);
        setTechnologiesCart(remainingTechs);
        toast.success(`${technology?.name} removed from stack`, {
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

    const removeAll = () => {
        setTechnologiesCart([]);
        toast.success("Removed all stacks", {
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
        <aside className="w-full rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="text-lg font-bold text-slate-900">
                Your Stack
            </h2>

            {technologiesCart.length === 0 ? (
                <p className="mt-1 text-xs text-slate-400">
                    No Technology Selected
                </p>
            ) : (
                <div className="">
                    <p className="mt-1 text-xs text-slate-400">
                        {technologiesCart.length} Technology Selected
                    </p>
                </div>
            )}

            <div className="mt-4 space-y-3">
                {technologiesCart.map((technology) => (
                    <div key={technology.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <img
                                src={technology.icon}
                                alt={technology.name}
                                className="h-10 w-10 object-contain"
                            />

                            <div>
                                <h3 className="text-sm font-semibold text-slate-800">
                                    {technology.name}
                                </h3>

                                <p className="mt-0.5 text-xs text-slate-400">
                                    {technology.category}
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => removeTechnology(technology.id)}
                            className="text-xl font-light text-slate-300 transition hover:text-red-400"
                            aria-label={`Remove ${technology.name}`}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>

            {technologiesCart.length === 0 && (
                <div className="mt-4 flex min-h-44 items-center justify-center rounded-lg border border-slate-100">
                    <p className="text-sm text-slate-300">
                        Your stack is empty.
                    </p>
                </div>
            )}

            {technologiesCart.length > 0 && (
                <div className="mt-5 border-t border-slate-100 pt-4 text-center">
                    <button
                        onClick={removeAll}
                        className="btn w-full rounded border border-pink-200 py-1.5 text-xs font-semibold text-pink-600 transition hover:bg-pink-50"
                    >
                        Remove All
                    </button>
                </div>
            )}

        </aside>
    );
};

export default TechnologiesCart;