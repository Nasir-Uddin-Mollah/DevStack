import type { TechnologyType } from "../../Types";
import { useState, Suspense } from "react";
import TechnologiesCart from "./TechnologiesCart";
import TechnologyGrid from "./TechnologyGrid";

interface TechnologiesProps {
    technologiesPromise: Promise<TechnologyType[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
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
                <Suspense fallback={
                    <div className="flex min-h-40 items-center justify-center">
                        <h1 className="text-center text-sm font-medium text-slate-400">Loading Technologies...</h1>
                    </div>
                }>
                    <TechnologyGrid
                        technologiesPromise={technologiesPromise}
                        technologiesCart={technologiesCart}
                        setTechnologiesCart={setTechnologiesCart}
                    />
                </Suspense>
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