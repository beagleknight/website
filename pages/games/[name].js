import Image from 'next/image'
import Link from 'next/link'
import games from "../../src/games/data.json"

export default function Game({game}) {
  return (
    <div>
      <Link href="/games"><a>Games</a></Link>
      <h1>{game.name}</h1>
    </div>
  )
}

export const getServerSideProps = (context) => {
    const { name } = context.query;
    const game = games.find((game) => game.name === name);

    return {
        props: {
            game
        }
    }
}