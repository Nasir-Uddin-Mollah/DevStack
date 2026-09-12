import TechnologyCard from "./TechnologyCard";
import type { TechnologyType } from "../../Types";
import { use, useState } from "react";
import TechnologiesCart from "./TechnologiesCart";

interface TechnologiesProps {
    technologiesPromise: Promise<TechnologyType[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);

    const [technologiesCart, setTechnologiesCart] = useState<TechnologyType[]>([]);

    return (
        <div className="mb-5">
            <div className="container mx-auto mt-5 max-w-6xl px-6 text-center md:text-left lg:px-8">
                <h1 className="whitespace-nowrap text-xl font-extrabold text-slate-900 sm:text-4xl">
                    Explore the <span className="bg-linear-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">Technologies</span>
                </h1>
                <p className="mt-1 text-xs text-slate-500 sm:text-lg">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>
            <div className="container mx-auto mt-5 grid max-w-6xl items-start gap-6 px-6 lg:grid-cols-[minmax(0,1fr)_280px] lg:px-8">
                <div className="grid w-full justify-items-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((technology: TechnologyType) => {
                        const isTechnologyAdded = technologiesCart.some(
                            tech => tech.id === technology.id
                        );

                        return (
                            <TechnologyCard
                                key={technology.id}
                                technology={technology}
                                technologiesCart={technologiesCart}
                                setTechnologiesCart={setTechnologiesCart}
                                isTechnologyAdded={isTechnologyAdded}
                            />
                        )
                    })}
                </div>
                <div className="w-full lg:top-24">
                    <TechnologiesCart
                        technologiesCart={technologiesCart}
                        setTechnologiesCart={setTechnologiesCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Technologies;