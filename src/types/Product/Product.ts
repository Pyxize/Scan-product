export interface ProductFood {
  code: string;
  errors: [];
  product: ProductInformation;
  result: Result;
  status: string;
  warning: [];
}

type ProductInformation = {
  brands: string;
  brands_tags: string[];
  ecoscore_score: number;
  image_front_small_url: string;
  image_url: string;
  ingredients_text: string;
  nutriments: Nutrients;
  nutriscore: Nutriscore;
  nutriscore_grade: string;
  nutrition_data_per: string;
  product_name: string;
};

type Result = {
  id: string;
  lc_name: string;
  name: string;
};
export type Nutrients = {
  carbohydrates: number;
  carbohydrates_100g: number;
  carbohydrates_serving: number;
  carbohydrates_unit: string;
  carbohydrates_value: number;
  'carbon-footprint-from-known-ingredients_100g': number;
  'carbon-footprint-from-known-ingredients_product': number;
  'carbon-footprint-from-known-ingredients_serving': number;
  energy: number;
  'energy-kcal': number;
  'energy-kcal_100g': number;
  'energy-kcal_serving': number;
  'energy-kcal_unit': string;
  'energy-kcal_value': number;
  'energy-kcal_value_computed': number;
  'energy-kj': number;
  'energy-kj_100g': number;
  'energy-kj_serving': number;
  'energy-kj_unit': string;
  'energy-kj_value': number;
  'energy-kj_value_computed': number;
  energy_100g: number;
  energy_serving: number;
  energy_unit: string;
  energy_value: number;
  fat: number;
  fat_100g: number;
  fat_serving: number;
  fat_unit: string;
  fat_value: number;
  'fruits-vegetables-legumes-estimate-from-ingredients_100g': number;
  'fruits-vegetables-legumes-estimate-from-ingredients_serving': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_100g': number;
  'fruits-vegetables-nuts-estimate-from-ingredients_serving': number;
  'nova-group': number;
  'nova-group_100g': number;
  'nova-group_serving': number;
  'nutrition-score-fr': number;
  'nutrition-score-fr_100g': number;
  proteins: number;
  proteins_100g: number;
  proteins_serving: number;
  proteins_unit: string;
  proteins_value: number;
  salt: number;
  salt_100g: number;
  salt_serving: number;
  salt_unit: string;
  salt_value: number;
  'saturated-fat': number;
  'saturated-fat_100g': number;
  'saturated-fat_serving': number;
  'saturated-fat_unit': string;
  'saturated-fat_value': number;
  sodium: number;
  sodium_100g: number;
  sodium_serving: number;
  sodium_unit: string;
  sodium_value: number;
  sugars: number;
  sugars_100g: number;
  sugars_serving: number;
  sugars_unit: string;
  sugars_value: number;
};

export type Nutriscore = {
  '2021'?: NutriscoreYears;
  '2023'?: NutriscoreYears;
};

type NutriscoreYears = {
  category_available: number;
  data: NutriscoreData | NutriscoreDataWithoutComponents;
  grade: string;
  nutrients_available: number;
  nutriscore_applicable: number;
  nutriscore_computed: number;
  score: number;
};

type NutriscoreComponent = {
  id: string;
  points: number;
  points_max: number | null;
  unit: string | null;
  value: number;
};

type NutriscoreData = {
  components: {
    negative: NutriscoreComponent[];
    positive: NutriscoreComponent[];
  };
  count_proteins: number;
  count_proteins_reason: string;
  is_beverage: number;
  is_cheese: number;
  is_fat_oil_nuts_seeds: number;
  is_red_meat_product: number;
  is_water: number;
  negative_points: number;
  negative_points_max: number;
  positive_nutrients: [];
  positive_points: number;
  positive_points_max: number;
};

type NutriscoreDataWithoutComponents = {
  energy: number;
  energy_points: number;
  energy_value: number;
  fiber: number;
  fiber_points: number;
  fiber_value: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_points: number;
  fruits_vegetables_nuts_colza_walnut_olive_oils_value: number;
  is_beverage: number;
  is_cheese: number;
  is_fat: number;
  is_water: number;
  negative_points: number;
  positive_points: number;
  proteins: number;
  proteins_points: number;
  proteins_value: number;
  saturated_fat: number;
  saturated_fat_points: number;
  saturated_fat_value: number;
  sodium: number;
  sodium_points: number;
  sodium_value: number;
  sugars: number;
  sugars_points: number;
  sugars_value: number;
};
