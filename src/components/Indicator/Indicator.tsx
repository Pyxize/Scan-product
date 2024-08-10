import { Nutriscore } from '../Nutriscore/Nutriscore.tsx';

export const Indicator = ({ productIndicator }) => {
  return (
    <section className="flex flex-col">
      <h2 className="text-slate-800 font-bold text-xl mb-2">Indicateurs: </h2>
      <div className="grid grid-cols-3 gap-4">
        <Nutriscore score={productIndicator.nutriscore_grade} />
      </div>
    </section>
  );
};
