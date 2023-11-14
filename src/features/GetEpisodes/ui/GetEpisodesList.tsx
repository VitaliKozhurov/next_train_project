import { EpisodeType } from '@/shared'

type Props = {
  episodes: EpisodeType[]
}
export const GetEpisodesList = ({ episodes }: Props) => {
  return (
    <>
      {episodes.map(episode => (
        <h2 key={episode.id}>{episode.name}</h2>
      ))}
    </>
  )
}
/*
<Link href={`/characters/${character.id}`} key={character.id}>
    <CharacterCard {...character} />
</Link>*/
