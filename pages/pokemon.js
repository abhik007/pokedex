import Layout from "../components/Layout";

export default function pokemon({ pokemon }) {
  //   console.log(pokemon);

  return (
    <Layout title={pokemon.name}>
      <div className="border bg-gray-50 rounded-lg py-8 mb-4 mx-auto w-3/4">
        <h1 className="text-2xl mb-2 text-center capitalize">{pokemon.name}</h1>
        <img className="mx-auto w-3/5" src={pokemon.image} alt={pokemon.name} />
        <div className="flex flex-row justify-around">
          <div className="flex flex-col">
            <p className="font-semibold">
              <span className="font-bold mr-2">Weight: </span>
              {pokemon.weight}
            </p>
            <p className="font-semibold">
              <span className="font-bold mr-2">Height: </span>
              {pokemon.height}
            </p>
          </div>
          <div className="flex flex-row">
            <h2 className="font-bold mr-2">Types:</h2>
            <div className="flex flex-col">
              {pokemon.types.map((type, index) => (
                <p className="font-semibold" key={index}>
                  {type.type.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await res.json();
    const paddedId = ("00" + id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedId}.png`;
    pokemon.image = image;

    return {
      props: { pokemon },
    };
  } catch (err) {}
}
