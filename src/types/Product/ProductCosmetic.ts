export interface ProductCosmetic {
  code: string;
  product: ProductInformation;
  status: number;
  status_verbose: string;
}

type ProductInformation = {
  brands: string;
  brands_tags: string[];
  image_front_small_url: string;
  ingredients_text: string;
  ingredients_text_fr: string;
  additives_tags: string[];
  ingredients: [];
  product_name: string;
};
