import { use, type Dispatch, type SetStateAction } from "react";
import type { TechnologyType } from "../../Types";
import TechnologyCard from "./TechnologyCard";

interface TechnologyGridProps {
    technologiesPromise: Promise<TechnologyType[]>;
    technologiesCart: TechnologyType[];
    setTechnologiesCart: Dispatch<SetStateAction<TechnologyType[]>>;
}

const TechnologyGrid = ({ technologiesPromise, technologiesCart, setTechnologiesCart }: TechnologyGridProps) => {
    const technologies = use(technologiesPromise);

    return (
        <div>
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
        </div>
    );
};

export default TechnologyGrid;