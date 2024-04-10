import data from '../assets/data/champions.json'
import DraggableChampion from './DragableChampion'
import { DndProvider } from 'react-dnd'
import { TouchBackend } from 'react-dnd-touch-backend';

import ahriImage from '../assets/images/champions/tft11_ahri.png'
import caitlynImage from '../assets/images/champions/tft11_caitlyn.png'
import chogathImage from '../assets/images/champions/tft11_chogath.png'
import dariusImage from '../assets/images/champions/tft11_darius.png'
import garenImage from '../assets/images/champions/tft11_garen.png'
import jaxImage from '../assets/images/champions/tft11_jax.png'
import khazixImage from '../assets/images/champions/tft11_khazix.png'
import kobukoImage from '../assets/images/champions/tft11_kobuko.png'
import kogmawImage from '../assets/images/champions/tft11_kogmaw.png'
import malphiteImage from '../assets/images/champions/tft11_malphite.png'
import reksaiImage from '../assets/images/champions/tft11_reksai.png'
import sivirImage from '../assets/images/champions/tft11_sivir.png'
import yasuoImage from '../assets/images/champions/tft11_yasuo.png'
import aatroxImage from '../assets/images/champions/tft11_aatrox.png'
import gnarImage from '../assets/images/champions/tft11_gnar.png'
import jannaImage from '../assets/images/champions/tft11_janna.png'
import kindredImage from '../assets/images/champions/tft11_kindred.png'
import luxImage from '../assets/images/champions/tft11_lux.png'
import neekoImage from '../assets/images/champions/tft11_neeko.png'
import qiyanaImage from '../assets/images/champions/tft11_qiyana.png'
import rivenImage from '../assets/images/champions/tft11_riven.png'
import sennaImage from '../assets/images/champions/tft11_senna.png'
import shenImage from '../assets/images/champions/tft11_shen.png'
import teemoImage from '../assets/images/champions/tft11_teemo.png'
import yorickImage from '../assets/images/champions/tft11_yorick.png'
import zyraImage from '../assets/images/champions/tft11_zyra.png'
import aluneImage from '../assets/images/champions/tft11_alune.png'
import amumuImage from '../assets/images/champions/tft11_amumu.png'
import apheliosImage from '../assets/images/champions/tft11_aphelios.png'
import bardImage from '../assets/images/champions/tft11_bard.png'
import dianaImage from '../assets/images/champions/tft11_diana.png'
import illaoiImage from '../assets/images/champions/tft11_illaoi.png'
import sorakaImage from '../assets/images/champions/tft11_soraka.png'
import tahmkenchImage from '../assets/images/champions/tft11_tahmkench.png'
import threshImage from '../assets/images/champions/tft11_thresh.png'
import tristanaImage from '../assets/images/champions/tft11_tristana.png'
import volibearImage from '../assets/images/champions/tft11_volibear.png'
import yoneImage from '../assets/images/champions/tft11_yone.png'
import zoeImage from '../assets/images/champions/tft11_zoe.png'
import annieImage from '../assets/images/champions/tft11_annie.png'
import asheImage from '../assets/images/champions/tft11_ashe.png'
import galioImage from '../assets/images/champions/tft11_galio.png'
import kaisaImage from '../assets/images/champions/tft11_kaisa.png'
import kaynImage from '../assets/images/champions/tft11_kayn.png'
import leesinImage from '../assets/images/champions/tft11_leesin.png'
import lilliaImage from '../assets/images/champions/tft11_lillia.png'
import morganaImage from '../assets/images/champions/tft11_morgana.png'
import nautilusImage from '../assets/images/champions/tft11_nautilus.png'
import ornnImage from '../assets/images/champions/tft11_ornn.png'
import sylasImage from '../assets/images/champions/tft11_sylas.png'
import syndraImage from '../assets/images/champions/tft11_syndra.png'
import azirImage from '../assets/images/champions/tft11_azir.png'
import hweiImage from '../assets/images/champions/tft11_hwei.png'
import ireliaImage from '../assets/images/champions/tft11_irelia.png'
import lissandraImage from '../assets/images/champions/tft11_lissandra.png'
import rakanImage from '../assets/images/champions/tft11_rakan.png'
import settImage from '../assets/images/champions/tft11_sett.png'
import udyrImage from '../assets/images/champions/tft11_udyr.png'
import wukongImage from '../assets/images/champions/tft11_wukong.png'
import xayahImage from '../assets/images/champions/tft11_xayah.png'

const images = {
  1: ahriImage,
  2: caitlynImage,
  3: chogathImage,
  4: dariusImage,
  5: garenImage,
  6: jaxImage,
  7: khazixImage,
  8: kobukoImage,
  9: kogmawImage,
  10: malphiteImage,
  11: reksaiImage,
  12: sivirImage,
  13: yasuoImage,
  14: aatroxImage,
  15: gnarImage,
  16: jannaImage,
  17: kindredImage,
  18: luxImage,
  19: neekoImage,
  20: qiyanaImage,
  21: rivenImage,
  22: sennaImage,
  23: shenImage,
  24: teemoImage,
  25: yorickImage,
  26: zyraImage,
  27: aluneImage,
  28: amumuImage,
  29: apheliosImage,
  30: bardImage,
  31: dianaImage,
  32: illaoiImage,
  33: sorakaImage,
  34: tahmkenchImage,
  35: threshImage,
  36: tristanaImage,
  37: volibearImage,
  38: yoneImage,
  39: zoeImage,
  40: annieImage,
  41: asheImage,
  42: galioImage,
  43: kaisaImage,
  44: kaynImage,
  45: leesinImage,
  46: lilliaImage,
  47: morganaImage,
  48: nautilusImage,
  49: ornnImage,
  50: sylasImage,
  51: syndraImage,
  52: azirImage,
  53: hweiImage,
  54: ireliaImage,
  55: lissandraImage,
  56: rakanImage,
  57: settImage,
  58: udyrImage,
  59: wukongImage,
  60: xayahImage
}

const ListChampion = ({ cost, className }) => {
  console.log(data)
  return (
    <DndProvider backend={TouchBackend} options={{ enableMouseEvents: true }}>
      <div className="1-cost flex gap-1">
        {data
          .filter(
            (champion: { id: number; name: string; cost: number; image: string }) =>
              champion.cost === cost
          )
          .map((champion: { id: number; name: string; cost: number; image: string }) => {
            const imageSrc = images[champion.id]
            console.log(imageSrc)
            return (
              <DraggableChampion
                key={champion.id}
                id={champion.id}
                name={champion.name}
                image={imageSrc}
                className={className}
              />
            )
          })}
      </div>
    </DndProvider>
  )
}

export default ListChampion
