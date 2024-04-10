import itemsData from '../assets/data/items.json'
//Components
import bf_sword from '../assets/images/items/component/bf_sword.png'
import chain_vest from '../assets/images/items/component/chain_vest.png'
import giants_belt from '../assets/images/items/component/giants_belt.png'
import needlessly_large_rod from '../assets/images/items/component/needlessly_large_rod.png'
import negatron_cloak from '../assets/images/items/component/negatron_cloak.png'
import recurve_bow from '../assets/images/items/component/recurve_bow.png'
import sparring_gloves from '../assets/images/items/component/sparring_gloves.png'
import spatula from '../assets/images/items/component/spatula.png'
import tear_of_the_goddess from '../assets/images/items/component/tear_of_the_goddess.png'
import DraggableItem from './DraggableItem'
//Craftable
import adaptive_helm from '../assets/images/items/craftable/adaptive_helm.png'
import archangel_staff from '../assets/images/items/craftable/archangel_staff.png'
import behemoth from '../assets/images/items/craftable/behemoth.png'
import bloodthirster from '../assets/images/items/craftable/bloodthirster.png'
import blue_buff from '../assets/images/items/craftable/blue_buff.png'
import bramble_vest from '../assets/images/items/craftable/bramble_vest.png'
import crownguard from '../assets/images/items/craftable/crownguard.png'
import death_blade from '../assets/images/items/craftable/death_blade.png'
import dragons_claw from '../assets/images/items/craftable/dragons_claw.png'
import edge_of_night from '../assets/images/items/craftable/edge_of_night.png'
import evenshroud from '../assets/images/items/craftable/evenshroud.png'
import gargoyle_stoneplate from '../assets/images/items/craftable/gargoyle_stoneplate.png'
import giant_slayer from '../assets/images/items/craftable/giant_slayer.png'
import guinsoos_rageblade from '../assets/images/items/craftable/guinsoos_rageblade.png'
import hand_of_justice from '../assets/images/items/craftable/hand_of_justice.png'
import hextech_gunblade from '../assets/images/items/craftable/hextech_gunblade.png'
import infinity_edge from '../assets/images/items/craftable/infinity_edge.png'
import ionic_spark from '../assets/images/items/craftable/ionic_spark.png'
import jeweled_guantlet from '../assets/images/items/craftable/jeweled_guantlet.png'
import last_whisper from '../assets/images/items/craftable/last_whisper.png'
import morellonomicon from '../assets/images/items/craftable/morellonomicon.png'
import nashors_tooth from '../assets/images/items/craftable/nashors_tooth.png'
import quicksilver from '../assets/images/items/craftable/quicksilver.png'
import rabadons_deathcap from '../assets/images/items/craftable/rabadons_deathcap.png'
import redbuff from '../assets/images/items/craftable/redbuff.png'
import redemption from '../assets/images/items/craftable/redemption.png'
import runaans_hurricane from '../assets/images/items/craftable/runaans_hurricane.png'
import spear_of_shojin from '../assets/images/items/craftable/spear_of_shojin.png'
import statikk_shiv from '../assets/images/items/craftable/statikk_shiv.png'
import steraks_gage from '../assets/images/items/craftable/steraks_gage.png'
import stridebreaker from '../assets/images/items/craftable/stridebreaker.png'
import sunfire_cape from '../assets/images/items/craftable/sunfire_cape.png'
import tacticians_crown from '../assets/images/items/craftable/tacticians_crown.png'
import thieves_gloves from '../assets/images/items/craftable/thieves_gloves.png'
import titans_resolve from '../assets/images/items/craftable/titans_resolve.png'
import warmogs_armor from '../assets/images/items/craftable/warmogs_armor.png'
import winters_approach from '../assets/images/items/craftable/winters_approach.png'
//Radiant
import adaptive_helm_radiant from '../assets/images/items/radiant/adaptive_helm_radiant.png'
import archangel_staff_radiant from '../assets/images/items/radiant/archangel_staff_radiant.png'
import behemoth_radiant from '../assets/images/items/radiant/behemoth_radiant.png'
import bloodthirster_radiant from '../assets/images/items/radiant/bloodthirster_radiant.png'
import blue_buff_radiant from '../assets/images/items/radiant/blue_buff_radiant.png'
import bramble_vest_radiant from '../assets/images/items/radiant/bramble_vest_radiant.png'
import crownguard_radiant from '../assets/images/items/radiant/crownguard_radiant.png'
import death_blade_radiant from '../assets/images/items/radiant/death_blade_radiant.png'
import dragons_claw_radiant from '../assets/images/items/radiant/dragons_claw_radiant.png'
import edge_of_night_radiant from '../assets/images/items/radiant/edge_of_night_radiant.png'
import evenshroud_radiant from '../assets/images/items/radiant/evenshroud_radiant.png'
import fimbulwinter_radiant from '../assets/images/items/radiant/fimbulwinter_radiant.png'
import gargoyle_stoneplate_radiant from '../assets/images/items/radiant/gargoyle_stoneplate_radiant.png'
import giant_slayer_radiant from '../assets/images/items/radiant/giant_slayer_radiant.png'
import guinsoos_rageblade_radiant from '../assets/images/items/radiant/guinsoos_rageblade_radiant.png'
import hand_of_justice_radiant from '../assets/images/items/radiant/hand_of_justice_radiant.png'
import hextech_gunblade_radiant from '../assets/images/items/radiant/hextech_gunblade_radiant.png'
import infinity_edge_radiant from '../assets/images/items/radiant/infinity_edge_radiant.png'
import ionic_spark_radiant from '../assets/images/items/radiant/ionic_spark_radiant.png'
import jeweled_gauntlet_radiant from '../assets/images/items/radiant/jeweled_gauntlet_radiant.png'
import last_whisper_radiant from '../assets/images/items/radiant/last_whisper_radiant.png'
import morellonomicon_radiant from '../assets/images/items/radiant/morellonomicon_radiant.png'
import nashors_tooth_radiant from '../assets/images/items/radiant/nashors_tooth_radiant.png'
import quicksilver_radiant from '../assets/images/items/radiant/quicksilver_radiant.png'
import rabadons_deathcap_radiant from '../assets/images/items/radiant/rabadons_deathcap_radiant.png'
import redbuff_radiant from '../assets/images/items/radiant/redbuff_radiant.png'
import redemption_radiant from '../assets/images/items/radiant/redemption_radiant.png'
import runaans_hurricane_radiant from '../assets/images/items/radiant/runaans_hurricane_radiant.png'
import spear_of_shojin_radiant from '../assets/images/items/radiant/spear_of_shojin_radiant.png'
import statikk_shiv_radiant from '../assets/images/items/radiant/statikk_shiv_radiant.png'
import steraks_gage_radiant from '../assets/images/items/radiant/steraks_gage_radiant.png'
import stridebreaker_radiant from '../assets/images/items/radiant/stridebreaker-radiant.png'
import sunfire_cape_radiant from '../assets/images/items/radiant/sunfire_cape_radiant.png'
import thieves_gloves_radiant from '../assets/images/items/radiant/thieves_gloves_radiant.png'
import titans_resolve_radiant from '../assets/images/items/radiant/titans_resolve_radiant.png'
import warmogs_armor_radiant from '../assets/images/items/radiant/warmogs_armor_radiant.png'
//Emblem
import emblem_dryad from '../assets/images/items/emblem/emblem_dryad.png'
import emblem_fated from '../assets/images/items/emblem/emblem_fated.png'
import emblem_ghostly from '../assets/images/items/emblem/emblem_ghostly.png'
import emblem_heavenly from '../assets/images/items/emblem/emblem_heavenly.png'
import emblem_mythic from '../assets/images/items/emblem/emblem_mythic.png'
import emblem_porcelain from '../assets/images/items/emblem/emblem_porcelain.png'
import emblem_skyweaver from '../assets/images/items/emblem/emblem_skyweaver.png'
import emblem_umbral from '../assets/images/items/emblem/emblem_umbral.png'
//Exclusive Emblem
import emblem_altruist from '../assets/images/items/exclusive_emblem/emblem_altruist.png'
import emblem_arcanist from '../assets/images/items/exclusive_emblem/emblem_arcanist.png'
import emblem_behemoth from '../assets/images/items/exclusive_emblem/emblem_behemoth.png'
import emblem_bruiser from '../assets/images/items/exclusive_emblem/emblem_bruiser.png'
import emblem_dragonlord from '../assets/images/items/exclusive_emblem/emblem_dragonlord.png'
import emblem_duelist from '../assets/images/items/exclusive_emblem/emblem_duelist.png'
import emblem_fortune from '../assets/images/items/exclusive_emblem/emblem_fortune.png'
import emblem_inkshadow from '../assets/images/items/exclusive_emblem/emblem_inkshadow.png'
import emblem_invoker from '../assets/images/items/exclusive_emblem/emblem_invoker.png'
import emblem_reaper from '../assets/images/items/exclusive_emblem/emblem_reaper.png'
import emblem_sage from '../assets/images/items/exclusive_emblem/emblem_sage.png'
import emblem_sniper from '../assets/images/items/exclusive_emblem/emblem_sniper.png'
import emblem_warden from '../assets/images/items/exclusive_emblem/emblem_warden.png'
//Artifact
import deathfiregrasp from '../assets/images/items/artifact/deathfiregrasp.png'
import deathsdance from '../assets/images/items/artifact/deathsdance.png'
import diamondhands from '../assets/images/items/artifact/diamondhands.png'
import everfrost from '../assets/images/items/artifact/everfrost.png'
import gamblersblade from '../assets/images/items/artifact/gamblersblade.png'
import goldmancersstaff from '../assets/images/items/artifact/goldmancersstaff.png'
import hullbreaker from '../assets/images/items/artifact/hullbreaker.png'
import mail from '../assets/images/items/artifact/mail.png'
import muramana from '../assets/images/items/artifact/muramana.png'
import snipersfocus from '../assets/images/items/artifact/snipersfocus.png'
import spiritvisage from '../assets/images/items/artifact/spiritvisage.png'
import thecollector from '../assets/images/items/artifact/thecollector.png'
import trickstersglass from '../assets/images/items/artifact/trickstersglass.png'
import trinityforce from '../assets/images/items/artifact/trinityforce.png'
import zhonyashourglass from '../assets/images/items/artifact/zhonyashourglass.png'
//Support
import aegis from '../assets/images/items/support/aegis.png'
import banshees_veil from '../assets/images/items/support/banshees_veil.png'
import chalice_of_power from '../assets/images/items/support/chalice_of_power.png'
import locket_of_the_iron_solari from '../assets/images/items/support/locket_of_the_iron_solari.png'
import needlessy_large_gem from '../assets/images/items/support/needlessy_large_gem.png'
import obsidian_cleaver from '../assets/images/items/support/obsidian_cleaver.png'
import radiant_virtue from '../assets/images/items/support/radiant_virtue.png'
import randuins_sanctum from '../assets/images/items/support/randuins_sanctum.png'
import shroud_of_stillness from '../assets/images/items/support/shroud_of_stillness.png'
import zekes_herald from '../assets/images/items/support/zekes_herald.png'
import zephyr from '../assets/images/items/support/zephyr.png'
import zzrot_portal from '../assets/images/items/support/zzrot_portal.png'
//Inkshadow Tattoos
import bombardment from '../assets/images/items/inkshadow/bombardment.png'
import force from '../assets/images/items/inkshadow/force.png'
import fury from '../assets/images/items/inkshadow/fury.png'
import protection from '../assets/images/items/inkshadow/protection.png'
import toxin from '../assets/images/items/inkshadow/toxin.png'
import vitality from '../assets/images/items/inkshadow/vitality.png'
//Kayle Upgrades
import abilitypower1 from '../assets/images/items/storyweaver/abilitypower1.png'
import abilitypower2 from '../assets/images/items/storyweaver/abilitypower2.png'
import abilitypower3 from '../assets/images/items/storyweaver/abilitypower3.png'
import attackspeed1 from '../assets/images/items/storyweaver/attackspeed1.png'
import attackspeed2 from '../assets/images/items/storyweaver/attackspeed2.png'
import attackspeed3 from '../assets/images/items/storyweaver/attackspeed3.png'
import support1 from '../assets/images/items/storyweaver/support1.png'
import support3 from '../assets/images/items/storyweaver/support3.png'
import ascension from '../assets/images/items/storyweaver/ascension.png'

const images = {
  1: bf_sword,
  2: chain_vest,
  3: giants_belt,
  4: needlessly_large_rod,
  5: negatron_cloak,
  6: recurve_bow,
  7: sparring_gloves,
  8: spatula,
  9: tear_of_the_goddess,
  10: adaptive_helm,
  11: archangel_staff,
  12: behemoth,
  13: bloodthirster,
  14: blue_buff,
  15: bramble_vest,
  16: crownguard,
  17: death_blade,
  18: dragons_claw,
  19: edge_of_night,
  20: evenshroud,
  21: gargoyle_stoneplate,
  22: giant_slayer,
  23: guinsoos_rageblade,
  24: hand_of_justice,
  25: hextech_gunblade,
  26: infinity_edge,
  27: ionic_spark,
  28: jeweled_guantlet,
  29: last_whisper,
  30: morellonomicon,
  31: nashors_tooth,
  32: quicksilver,
  33: rabadons_deathcap,
  34: redbuff,
  35: redemption,
  36: runaans_hurricane,
  37: spear_of_shojin,
  38: statikk_shiv,
  39: steraks_gage,
  40: stridebreaker,
  41: sunfire_cape,
  46: tacticians_crown,
  42: thieves_gloves,
  43: titans_resolve,
  44: warmogs_armor,
  45: winters_approach,
  47: adaptive_helm_radiant,
  48: archangel_staff_radiant,
  49: behemoth_radiant,
  50: bloodthirster_radiant,
  51: blue_buff_radiant,
  52: bramble_vest_radiant,
  53: crownguard_radiant,
  54: death_blade_radiant,
  55: dragons_claw_radiant,
  56: edge_of_night_radiant,
  57: evenshroud_radiant,
  82: fimbulwinter_radiant,
  58: gargoyle_stoneplate_radiant,
  59: giant_slayer_radiant,
  60: guinsoos_rageblade_radiant,
  61: hand_of_justice_radiant,
  62: hextech_gunblade_radiant,
  63: infinity_edge_radiant,
  64: ionic_spark_radiant,
  65: jeweled_gauntlet_radiant,
  66: last_whisper_radiant,
  67: morellonomicon_radiant,
  68: nashors_tooth_radiant,
  69: quicksilver_radiant,
  70: rabadons_deathcap_radiant,
  71: redbuff_radiant,
  72: redemption_radiant,
  73: runaans_hurricane_radiant,
  74: spear_of_shojin_radiant,
  75: statikk_shiv_radiant,
  76: steraks_gage_radiant,
  77: stridebreaker_radiant,
  78: sunfire_cape_radiant,
  79: thieves_gloves_radiant,
  80: titans_resolve_radiant,
  81: warmogs_armor_radiant,
  83: emblem_dryad,
  84: emblem_fated,
  85: emblem_ghostly,
  86: emblem_heavenly,
  87: emblem_mythic,
  88: emblem_porcelain,
  89: emblem_skyweaver,
  90: emblem_umbral,
  91: emblem_altruist,
  92: emblem_arcanist,
  93: emblem_behemoth,
  94: emblem_bruiser,
  95: emblem_dragonlord,
  96: emblem_duelist,
  97: emblem_fortune,
  98: emblem_inkshadow,
  99: emblem_invoker,
  100: emblem_reaper,
  101: emblem_sage,
  102: emblem_sniper,
  103: emblem_warden,
  104: deathfiregrasp,
  105: deathsdance,
  106: diamondhands,
  107: everfrost,
  108: gamblersblade,
  109: goldmancersstaff,
  110: hullbreaker,
  111: mail,
  112: muramana,
  113: snipersfocus,
  114: spiritvisage,
  115: thecollector,
  116: trickstersglass,
  117: trinityforce,
  118: zhonyashourglass,
  119: aegis,
  120: banshees_veil,
  121: chalice_of_power,
  122: locket_of_the_iron_solari,
  123: needlessy_large_gem,
  124: obsidian_cleaver,
  125: radiant_virtue,
  126: randuins_sanctum,
  127: shroud_of_stillness,
  128: zekes_herald,
  129: zephyr,
  130: zzrot_portal,
  131: bombardment,
  132: force,
  133: fury,
  134: protection,
  135: toxin,
  136: vitality,
  137: abilitypower1,
  138: abilitypower2,
  139: abilitypower3,
  140: attackspeed1,
  141: attackspeed2,
  142: attackspeed3,
  143: support1,
  144: support3,
  145: ascension
}
const ListItem = ({ option }) => {
  return (
    <>
      {option === 'component' && (
        <div>
          <div className="flex gap-2">
            {itemsData
              .filter(
                (item: { id: number; name: string; image: string; option: string; type: string }) =>
                  item.option === option
              )
              .map(
                (data: {
                  id: number
                  name: string
                  image: string
                  option: string
                  type: string
                }) => {
                  const imageSrc = images[data.id]
                  console.log(imageSrc)
                  return (
                    <DraggableItem key={data.id} id={data.id} name={data.name} image={imageSrc} />
                  )
                }
              )}
          </div>
        </div>
      )}
      {option === 'craftable' && (
        <div>
          <div className="flex gap-2 flex-wrap">
            {itemsData
              .filter(
                (item: { id: number; name: string; image: string; option: string; type: string }) =>
                  item.option === option
              )
              .map(
                (data: {
                  id: number
                  name: string
                  image: string
                  option: string
                  type: string
                }) => {
                  const imageSrc = images[data.id]
                  console.log(imageSrc)
                  return (
                    <DraggableItem key={data.id} id={data.id} name={data.name} image={imageSrc} />
                  )
                }
              )}
          </div>
        </div>
      )}
      {option === 'radiant' && (
        <div>
          <div className="flex gap-2 flex-wrap">
            {itemsData
              .filter(
                (item: { id: number; name: string; image: string; option: string; type: string }) =>
                  item.option === option
              )
              .map(
                (data: {
                  id: number
                  name: string
                  image: string
                  option: string
                  type: string
                }) => {
                  const imageSrc = images[data.id]
                  console.log(imageSrc)
                  return (
                    <DraggableItem key={data.id} id={data.id} name={data.name} image={imageSrc} />
                  )
                }
              )}
          </div>
        </div>
      )}
      {option === 'other' && (
        <div className='flex flex-col max-h-[300px] overflow-y-auto'>
          <div className="text-sm py-1">Emblem</div>
          <div className="flex gap-2 flex-wrap">
            {itemsData
              .filter(
                (item: { id: number; name: string; image: string; option: string; type: string }) =>
                  item.option === option && item.type === 'craftable_emblem'
              )
              .map(
                (data: {
                  id: number
                  name: string
                  image: string
                  option: string
                  type: string
                }) => {
                  const imageSrc = images[data.id]
                  console.log(imageSrc)
                  return (
                    <DraggableItem key={data.id} id={data.id} name={data.name} image={imageSrc} />
                  )
                }
              )}
          </div>
          <div className="text-sm py-1">Exclusive Emblem</div>
          <div className="flex gap-2 flex-wrap">
            {itemsData
              .filter(
                (item: { id: number; name: string; image: string; option: string; type: string }) =>
                  item.option === option && item.type === 'exclusive_emblem'
              )
              .map(
                (data: {
                  id: number
                  name: string
                  image: string
                  option: string
                  type: string
                }) => {
                  const imageSrc = images[data.id]
                  console.log(imageSrc)
                  return (
                    <DraggableItem key={data.id} id={data.id} name={data.name} image={imageSrc} />
                  )
                }
              )}
          </div>
          <div className="text-sm py-1">Artifact</div>
          <div className="flex gap-2 flex-wrap">
            {itemsData
              .filter(
                (item: { id: number; name: string; image: string; option: string; type: string }) =>
                  item.option === option && item.type === 'artifact'
              )
              .map(
                (data: {
                  id: number
                  name: string
                  image: string
                  option: string
                  type: string
                }) => {
                  const imageSrc = images[data.id]
                  console.log(imageSrc)
                  return (
                    <DraggableItem key={data.id} id={data.id} name={data.name} image={imageSrc} />
                  )
                }
              )}
          </div>
          <div className="text-sm py-1">Support</div>
          <div className="flex gap-2 flex-wrap">
            {itemsData
              .filter(
                (item: { id: number; name: string; image: string; option: string; type: string }) =>
                  item.option === option && item.type === 'support'
              )
              .map(
                (data: {
                  id: number
                  name: string
                  image: string
                  option: string
                  type: string
                }) => {
                  const imageSrc = images[data.id]
                  console.log(imageSrc)
                  return (
                    <DraggableItem key={data.id} id={data.id} name={data.name} image={imageSrc} />
                  )
                }
              )}
          </div>
          <div className="text-sm py-1">Inkshadow Tattoos</div>
          <div className="flex gap-2 flex-wrap">
            {itemsData
              .filter(
                (item: { id: number; name: string; image: string; option: string; type: string }) =>
                  item.option === option && item.type === 'inkshadow'
              )
              .map(
                (data: {
                  id: number
                  name: string
                  image: string
                  option: string
                  type: string
                }) => {
                  const imageSrc = images[data.id]
                  console.log(imageSrc)
                  return (
                    <DraggableItem key={data.id} id={data.id} name={data.name} image={imageSrc} />
                  )
                }
              )}
          </div>
          <div className="text-sm py-1">Kayle Upgrades</div>
          <div className="flex gap-2 flex-wrap">
            {itemsData
              .filter(
                (item: { id: number; name: string; image: string; option: string; type: string }) =>
                  item.option === option && item.type === 'storyweaver'
              )
              .map(
                (data: {
                  id: number
                  name: string
                  image: string
                  option: string
                  type: string
                }) => {
                  const imageSrc = images[data.id]
                  console.log(imageSrc)
                  return (
                    <DraggableItem key={data.id} id={data.id} name={data.name} image={imageSrc} />
                  )
                }
              )}
          </div>
        </div>
      )}
    </>
  )
}

export default ListItem
