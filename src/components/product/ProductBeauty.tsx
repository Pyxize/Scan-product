export const ProductBeauty = ({ productsBeauty }) => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <img
            className="object-cover"
            src={productsBeauty.product.image_front_small_url}
            alt={productsBeauty.brands}
          />
          <div className="flex flex-col items-center mt-4">
            <h1 className="font-bold text-3xl text-emerald-800 uppercase text-center">
              {productsBeauty.product.product_name}
            </h1>
            <p className="text-sm font-normal text-emerald-800">
              {productsBeauty.product.brands_tags[0]}
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-slate-800 font-bold text-xl mb-2">
            Liste des ingredients:
          </h2>
          <p>{productsBeauty.product.ingredients_text}</p>
        </div>
        {productsBeauty.product.additives_tags.length > 0 && (
          <div className="flex flex-col">
            <h2 className="text-slate-800 font-bold text-xl mb-2">
              Liste des additifs:
            </h2>
            <div className="grid grid-cols-4">
              {productsBeauty.product.additives_tags.map((additif, index) => (
                <p key={index}>{additif.slice(3)}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
