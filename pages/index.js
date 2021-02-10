import Layout from "../components/Layout";
import Link from 'next/link'

export default function Home({ pokemonList }) {
  // console.log(pokemonList);
  return (
    <Layout title="Home">
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon?id=${index + 1}`}>
              <a className="p-4 border border-gray my-2 capitalize flex items-center text-lg font-medium bg-gray-50 rounded-md">
                <img className="w-20 h-20 mr-3" src={pokemon.image} alt={pokemon.name}/>
                <span className="mr-1 font-semibold">{index + 1}.</span>
                {pokemon.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}


export async function getStaticProps(context) {
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    const {results} = await res.json()
    const pokemonList = results.map((result, index) => {
      const paddedIndex = ("00" + (index + 1)).slice(-3)
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddedIndex}.png`
      return {
        ...result, 
        image
      }
    })

    return {
      props: {pokemonList}
    }
  } catch (err) {
    console.error(err)
  }
}