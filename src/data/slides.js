// The original photographs already live at the repository root on main.
// Import those tracked originals so Vite can fingerprint them without duplicate source files.
import hero from '../../IMG_7833 2.jpg';
import detail from '../../IMG_7845.jpg';
import closing from '../../IMG_7858.jpg';
import spring from '../../56B7E0FA-3AC2-45F3-9668-3358EA4EBE9E 2.PNG';
import christmas from '../../Ceramic_Chrristmas.PNG';
import summer from '../../5C83B43E-E2E4-4DDB-9D1B-68CE29F3FE53.PNG';
import autumn from '../../8A5611F3-3923-48A4-941F-681582528986 2.PNG';

export const images = {
  hero,
  detail,
  closing,
  seasons: [
    spring,
    christmas,
    summer,
    autumn,
  ],
};

export const slides = [
 ['01','BOKUJI — 次のステージへ','すでにある価値を、もっと届く形へ。','cover'],
 ['02','今回お話を伺って見えてきたこと','変化した市場に、魅力の届け方を合わせていく。'],
 ['03','問題は「商品」ではない','価値の伝え方と、買える仕組みに伸びしろがある。'],
 ['04','BOKUJIには、すでに資産がある','陶器、店舗、お客様、物語。すべてが次の一歩の土台です。'],
 ['05','発想を変える','「売れるのを待つ」から「欲しくなる理由をつくる」へ。','shift'],
 ['06','店舗そのものを「販売メディア」に','食事、ショールーム、ギフト、ブランド体験がひとつになる。'],
 ['07','季節ごとに「買う理由」をつくる','季節が変わるたび、新しいBOKUJIに出会う。','seasons'],
 ['08','包装で「商品」から「贈り物」へ','開ける時間まで、BOKUJIらしく。'],
 ['09','一点物だからこそ、ストーリーを売る','誰が、どんな想いで、なぜ描いたのか。'],
 ['10','店舗からWebへつなぐ','一度の出会いを、次の購入と再来店へ。','journey'],
 ['11','国内Web販売という新しい入口','いつでも、どこからでも、BOKUJIに出会える場所。'],
 ['12','海外では、まず「陶器」から','少数の商品から、世界の反応を確かめる。'],
 ['13','小さく試して、データを見る','TEST → MEASURE → LEARN → IMPROVE'],
 ['14','もう一つの可能性 — お米','BOKUJIの世界観をまとった、国内向けの新しい商品へ。'],
 ['15','お米を「ブランド」に育てる','単発販売から、暮らしに続く商品へ。'],
 ['16','店舗・Web・SNSをバラバラにしない','すべての接点がBOKUJIを中心に循環する。'],
 ['17','AIで、小さなチームでも速く動く','手仕事の価値を、裏側の仕組みで支える。'],
 ['18','まずは、小さく始める','試し、学び、育てながら、売れた仕組みを広げる。'],
 ['19','BOKUJI','価値あるものを、価値が伝わる形へ。','closing'],
].map(([number,title,summary,type='placeholder'])=>({number,title,summary,type}));
