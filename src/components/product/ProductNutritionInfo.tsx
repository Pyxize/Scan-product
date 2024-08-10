import { toKcal } from '../../utils/ConvertKcal.ts';
import { Nutriscore, TypeNutrients } from '../../types/Product/Product.ts';
import { Accordion } from '../Accordion/Accordion.tsx';
import { Progress } from '../progress/Progress.tsx';

interface ProductNutritionInfoRowProps {
  productsNutrient: TypeNutrients;
}

interface ProductInfoRow {
  productsNutrient: TypeNutrients;
  productsNutriscore: Nutriscore;
}

interface ProductNutriscoreProps {
  productsNutriscore: Nutriscore;
}

const ProductNutrientInfo = ({
  productsNutrient,
}: ProductNutritionInfoRowProps) => {
  return (
    <div className="flex flex-col gap-4">
      {/*CALORIES*/}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img width="24" height="24" src="../public/img/fire.svg" alt="" />
          </div>
          <h3>Calories</h3>
        </div>
        <div className="flex justify-center items-center">
          {toKcal(productsNutrient.energy)}
          {productsNutrient.energy_unit}
        </div>
      </div>
      {/*PROTEINES*/}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img
              width="24"
              height="24"
              src="../public/img/fish-cooked.svg"
              alt=""
            />
          </div>
          <h3>Protéines</h3>
        </div>
        <div className="flex justify-center items-center">
          {productsNutrient.proteins}
          {productsNutrient.proteins_unit}
        </div>
      </div>
      {/*SALT*/}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img width="24" height="24" src="../public/img/salt.svg" alt="" />
          </div>
          <h3>Sel</h3>
        </div>
        <div className="flex justify-center items-center">
          {productsNutrient.salt}
          {productsNutrient.proteins_unit}
        </div>
      </div>
      {/*SUGAR*/}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img width="24" height="24" src="../public/img/sugar.svg" alt="" />
          </div>
          <h3>Sucre</h3>
        </div>
        <div className="flex justify-center items-center">
          {productsNutrient.sugars}
          {productsNutrient.proteins_unit}
        </div>
      </div>
      {/*GRAISSES SATURES */}
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-gray-200 h-12 w-12 rounded-lg">
            <img width="24" height="24" src="../public/img/gras.svg" alt="" />
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

const ProductNutriscoreInfo = ({
  productsNutrient,
  productsNutriscore,
}: ProductInfoRow) => {
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
        <Progress
          max={
            productsNutriscore['2023']?.data.components.negative[0].points_max
          }
          value={productsNutriscore['2023']?.data.components.negative[0].points}
        />
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
