import traitData from '../assets/data/traits.json'

interface TraitProps {
  champions: {
    id: number
    traits: string[]
  }[]
}

const Trait: React.FC<TraitProps> = ({ champions }) => {
  const uniqueChampions = champions.reduce(
    (
      unique: {
        id: number
        traits: string[]
      }[],
      champion
    ) => {
      return unique.some((champ) => champ.id === champion.id) ? unique : [...unique, champion]
    },
    []
  )
  const traitCounts = uniqueChampions.reduce((counts, champion) => {
    champion.traits.forEach((trait) => {
      counts[trait] = (counts[trait] || 0) + 1
    })
    return counts
  }, {})
  return (
    <div className="w-1/6">
      <div className="text-center text-sm font-bold mb-1">Traits</div>
      <div className="bg-bgrhl rounded-lg border border-neutral-900 p-2 h-[94%] text-sm font-thin">
        {Object.entries(traitCounts).map(([traitId, count], index) => {
          // Find the corresponding trait in traitData
          const trait = traitData.find((t) => t.id === traitId)
          return (
            <div key={index}>
              {trait ? trait.name : traitId}: {count}
              <div className="flex">
                {trait &&
                  trait.active
                    .slice(1)
                    .map((active, activeIndex) => <div key={activeIndex}>{active.min}</div>)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Trait
