import Image from 'next/image'
import Link from 'next/link'
import games from "../../src/games/data.json"

export default function Games({games}) {
  return (
    <div>
      {games.map(game => (
        <div key={game.name}>
          <Link href={`/games/${game.name}`}>
            <a>
              <Image src={`/images/games/${game.name}/${game.screenshots[0].url}`} width="510" height="296" />
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps = () => {
    return {
        props: {
            games
        }
    }
}