/*
import { toKcal } from '../../utils/ConvertKcal.ts';
import { Nutriscore, Nutrients } from '../../types/Product/Product.ts';
import { Accordion } from '../Accordion/Accordion.tsx';
import ProteinSvg from '../../assets/img/fish-cooked.svg';
import SaltSvg from '../../assets/img/salt.svg';
import SugarSvg from '../../assets/img/sugar.svg';
import FatSvg from '../../assets/img/gras.svg';
import FireSvg from '../../assets/img/fire.svg';


interface ProductNutritionInfoRowProps {
  productsNutrient: Nutrients;
}

interface ProductInfoRow {
  productsNutrient: Nutrients;
  productsNutriscore: Nutriscore;
}

const ProductNutrientInfo = ({
  productsNutrient,
}: ProductNutritionInfoRowProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img width="24" height="24" src={FireSvg} alt="" />
          </div>
          <h3>Calories</h3>
        </div>
        <div className="flex justify-center items-center">
          {toKcal(productsNutrient.energy)}
          {productsNutrient.energy_unit}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img width="24" height="24" src={ProteinSvg} alt="" />
          </div>
          <h3>Protéines</h3>
        </div>
        <div className="flex justify-center items-center">
          {productsNutrient.proteins}
          {productsNutrient.proteins_unit}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img width="24" height="24" src={SaltSvg} alt="" />
          </div>
          <h3>Sel</h3>
        </div>
        <div className="flex justify-center items-center">
          {productsNutrient.salt}
          {productsNutrient.proteins_unit}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img width="24" height="24" src={SugarSvg} alt="" />
          </div>
          <h3>Sucre</h3>
        </div>
        <div className="flex justify-center items-center">
          {productsNutrient.sugars}
          {productsNutrient.proteins_unit}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img width="24" height="24" src={FatSvg} alt="" />
          </div>
          <h3>Graisses saturées</h3>
        </div>
        <div className="flex justify-center items-center">
          {productsNutrient['saturated-fat_value']}
          {productsNutrient.proteins_unit}
        </div>
      </div>
    </div>
  );
};

const ProductNutriscoreInfo = () => {
  return (
    <div>
      <Accordion
        title={
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
              <img width="24" height="24" src="../public/img/fire.svg" alt="" />
            </div>
            <h3>Calories</h3>
          </div>
        }
        label={
          <div className="flex justify-center items-center">
            {toKcal(productsNutrient.energy)}
            {productsNutrient.energy_unit}
          </div>
        }
      >
      </Accordion>

    </div>
  );
};

export const ProductNutritionInfo = ({ products }) => {
  return (
    <section>
      {!products.nutriscore[2023].data.components ? (
        <ProductNutrientInfo productsNutrient={products.nutriments} />
      ) : (
        <ProductNutriscoreInfo
          productsNutriscore={products.nutriscore}
          productsNutrient={products.nutriments}
        />
      )}
    </section>
  );
};

 */
