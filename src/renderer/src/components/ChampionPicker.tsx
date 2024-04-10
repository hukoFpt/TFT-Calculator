import ListChampion from './ListChampion'

const ChampionPicker = () => {
  return (
    <div className="w-4/6 champion-list p-2 flex flex-col gap-1 bg-zinc-800 rounded-md border border-zinc-600">
      <div className="text-center font-semibold">Champion List</div>
      <ListChampion cost={1} className={'border-2 border-neutral-500 rounded'} />
      <ListChampion cost={2} className={'border-2 border-emerald-500 rounded'} />
      <ListChampion cost={3} className={'border-2 border-cyan-500 rounded'} />
      <ListChampion cost={4} className={'border-2 border-fuchsia-500 rounded'} />
      <ListChampion cost={5} className={'border-2 border-yellow-500 rounded'} />
    </div>
  )
}

export default ChampionPicker
