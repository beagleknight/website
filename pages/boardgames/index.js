import Image from 'next/image'
import Link from 'next/link'

const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export default function BoardGames({boardGames}) {
  return (
    <div>
        {boardGames.map((boardGame) => (
            <div key={boardGame.id}>
                <p>{boardGame.name}</p>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${boardGame.youtubeId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        ))}
    </div>
  )
}

export const getServerSideProps = async () => {
    const notionResponse = await notion.databases.query({
        database_id: "7bd89fb026ad470788e6fa935b625358",
        filter: {
            "property": "YouTube",
            "url": {
                "is_not_empty": true
            }
        }
    })
    const boardGames = notionResponse.results.map(page => {
        const captured = page.properties['YouTube'].url.match(/(v=|tu.be\/)(?<id>.*)/);
        const name = page.properties['Name'].title[0].text.content

        return {
            id: page.id,
            name,
            youtubeId: captured.groups.id
        }
    }).slice(0, 5); // TODO

    return {
        props: {
            boardGames
        }
    }
}