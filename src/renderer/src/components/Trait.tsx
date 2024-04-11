interface TraitProps {
  champions: {
    traits: string[]
  }[]
}

const Trait: React.FC<TraitProps> = ({ champions }) => {
  return (
    <div className="w-1/6">
      <div className="text-center text-sm font-bold mb-1">Traits</div>
      <div className="bg-bgrhl rounded-lg border border-neutral-900 p-2 h-[94%] text-sm font-thin">
        {champions.map((champion, index) =>
          champion.traits.map((trait, traitIndex) => (
            <div key={`${index}-${traitIndex}`}>{trait}</div>
          ))
        )}{' '}
      </div>
    </div>
  )
}

export default Trait
