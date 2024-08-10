import { Nutrients } from '../../types/Product/Product.ts';
import ProteinSvg from '../../assets/img/fish-cooked.svg';
import SaltSvg from '../../assets/img/salt.svg';
import SugarSvg from '../../assets/img/sugar.svg';
import FatSvg from '../../assets/img/gras.svg';
import FireSvg from '../../assets/img/fire.svg';

interface ProductNutritionProps {
  products: Nutrients;
}

export const ProductNutrition = ({ products }: ProductNutritionProps) => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        {/*CALORIES*/}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
              <img width="24" height="24" src={FireSvg} alt="" />
            </div>
            <h3>Calories</h3>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>{products['energy-kcal']}</p>
            <p>{products['energy-kcal_unit']}</p>
          </div>
        </div>
        {/*PROTEINES*/}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
              <img width="24" height="24" src={ProteinSvg} alt="" />
            </div>
            <h3>Protéines</h3>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>{products.proteins}</p>
            <p>{products.proteins_unit}</p>
          </div>
        </div>
        {/*SALT*/}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
              <img width="24" height="24" src={SaltSvg} alt="" />
            </div>
            <h3>Sel</h3>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>{products.salt}</p>
            <p>{products.proteins_unit}</p>
          </div>
        </div>
        {/*SUGAR*/}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
              <img width="24" height="24" src={SugarSvg} alt="" />
            </div>
            <h3>Sucre</h3>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>{products.sugars}</p>
            <p>{products.proteins_unit}</p>
          </div>
        </div>
        {/*GRAISSES SATURES */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
              <img width="24" height="24" src={FatSvg} alt="" />
            </div>
            <h3>Graisses saturées</h3>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>{products['saturated-fat_value']}</p>
            <p>{products.proteins_unit}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
