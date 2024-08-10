type Score = 'a' | 'b' | 'c' | 'd' | 'e';

interface NutriscoreProps {
  score: Score;
}

export const Nutriscore = ({ score }: NutriscoreProps) => {
  return (
    <section>
      {score === 'a' ? (
        <img
          src={
            'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-a.svg'
          }
          alt={score}
        />
      ) : score === 'b' ? (
        <img
          src={
            'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-b.svg'
          }
          alt={score}
        />
      ) : score === 'c' ? (
        <img
          src={
            'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-c.svg'
          }
          alt={score}
        />
      ) : score === 'd' ? (
        <img
          src={
            'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-d.svg'
          }
          alt={score}
        />
      ) : score === 'e' ? (
        <img
          src={
            'https://static.openfoodfacts.org/images/attributes/dist/nutriscore-e.svg'
          }
          alt={score}
        />
      ) : (
        ''
      )}
    </section>
  );
};
