const officialConfig = [
  { name: "乃木坂46 公式サイト", link: "https://www.nogizaka46.com", group: "nogi" },
  { name: "乃木坂46 ニュース", link: "https://www.nogizaka46.com/s/n46/news/list", group: "nogi" },  
  { name: "乃木坂46 スケジュール", link: "https://www.sakurazaka46.com/s/s46/media/list", group: "nogi" },
  { name: "乃木坂46 メンバー", link: "https://www.nogizaka46.com/s/n46/search/artist", group: "nogi" },
  { name: "乃木坂46 ブログ", link: "https://www.nogizaka46.com/s/n46/diary/MEMBER", group: "nogi" },
  { name: "乃木坂46 OFFICIAL WEB SHOP", link: "https://www.nogizaka46shop.com/", group: "nogi" },
  { name: "乃木坂46 Mobile", link: "https://sp.nogizaka46.com", group: "nogi" }, 
  { name: "のぎ動画", link: "https://nogidoga.com/", group: "nogi" },
  { name: "MYNOGI", link: "https://mynogi.snft.jp/", group: "nogi" },
  { name: "ミーグリ/CD購入イベント", link: "https://www.nogizaka46.com/s/n46/live?ima=0000&ct=HANDSHAKE", group: "nogi" },
  { name: "乃木坂46 メッセージ", link: "https://message.nogizaka46.com/", group: "nogi" },
  { name: "乃木坂工事中", link: "https://tv-aichi.co.jp/nogi-kou/", group: "nogi" },
	
  { name: "櫻坂46 公式サイト", link: "https://sakurazaka46.com/s/s46/", group: "saku" },  
  { name: "櫻坂46 ニュース", link: "https://sakurazaka46.com/s/s46/news/list", group: "saku" },
  { name: "櫻坂46 スケジュール", link: "https://sakurazaka46.com/s/s46/media/list", group: "saku" },
  { name: "櫻坂46 メンバー", link: "https://sakurazaka46.com/s/s46/search/artist", group: "saku" },
  { name: "櫻坂46 ブログ", link: "https://sakurazaka46.com/s/s46/diary/blog/list", group: "saku" },
  { name: "櫻坂46 OFFICIAL GOODS STORE", link: "https://store.plusmember.jp/sakurazaka46/", group: "saku" },
  { name: "MY PAGE", link: "https://sakurazaka46.com/s/s46/mypage", group: "saku" },
  { name: "マネージャー日記", link: "https://sakurazaka46.com/s/s46/diary/managers_diary/list", group: "saku" },
  { name: "さくみみ", link: "https://sakurazaka46.com/s/s46/diary/radio", group: "saku" },
  { name: "ミーグリ", link: "https://sakurazaka46.com/s/s46/diary/event_page/list?ima=0000", group: "saku" },
  { name: "櫻坂46 メッセージ", link: "https://message.sakurazaka46.com/", group: "saku" },
  { name: "そこ曲がったら、櫻坂？", link: "https://www.tv-tokyo.co.jp/keyaki/", group: "saku" },
  { name: "COSTUME", link: "https://sakurazaka46.com/s/s46/page/costume?ima=0000", group: "saku" },

  { name: "日向坂46 公式サイト", link: "https://www.hinatazaka46.com/s/official/", group: "hina" },
  { name: "日向坂46 ニュース", link: "https://www.hinatazaka46.com/s/official/news/list", group: "hina" },
  { name: "日向坂46 スケジュール", link: "https://www.hinatazaka46.com/s/official/media/list", group: "hina" },
  { name: "日向坂46 メンバー", link: "https://www.hinatazaka46.com/s/official/search/artist", group: "hina" },
  { name: "日向坂46 ブログ", link: "https://www.hinatazaka46.com/s/official/diary/member", group: "hina" },
  { name: "日向坂46 OFFICIAL GOODS STORE", link: "https://store.plusmember.jp/hinatazaka46/", group: "hina" },
  { name: "マイページ", link: "https://www.hinatazaka46.com/s/official/mypage", group: "hina" },
  { name: "ひなたぼっこ日記", link: "https://www.hinatazaka46.com/s/official/diary/manager/list", group: "hina" },
  { name: "日向坂46 ファンクラブ", link: "https://www.hinatazaka46.com/s/official/page/about_fanclub", group: "hina" },
  { name: "ミーグリ", link: "https://www.hinatazaka46.com/s/official/diary/event/list?ima=0000", group: "hina" },
  { name: "日向坂46 メッセージ", link: "https://message.hinatazaka46.com/", group: "hina" },
  { name: "日向坂で会いましょう", link: "日向坂で会いましょう", group: "hina" },

];

const toolConfig = [
  {
    name: "乃木坂46データベース",
    desc: "n46db.com",
    detail: "坂道グループのメンバーのプロフォールや参加曲、フォーメーション、楽曲の作曲者・編曲者、MVや個人PVの監督などの情報のデータベースです。\n\n・[About this website](https://n46db.com/about.php)",
    tags: ["information", "song", "photo", "create"],
    groups: ["nogi", "saku", "hina"],
    link: "https://n46db.com/"
  },
{
  name: "坂道雑文帳",
  desc: "meaning-of-goodbye.com",
  detail: "文章を書くことと坂道シリーズが好きな個人が運営するサイト。\nフォーメーションやセットリストなど、まとめ系の記事。\n関連ツール：[坂道シリーズ 統合データベース検索](https://meaning-of-goodbye.com/sakamichi-search/)\n\n・[サイトについて](https://meaning-of-goodbye.com/about/)",
  tags: ["song","forum","live"],
  groups: ["nogi","saku","hina"],
  link: "https://meaning-of-goodbye.com/"
},
{
  name: "坂道シリーズ 統合データベース検索",
  desc: "[坂道雑文帳] Sakamichi Universe",
  detail: "「坂道雑文帳」が運営する、坂道シリーズの情報を集約した検索サイトです。\nメンバー、楽曲、ライブ、フォーメーション、データなど、最新の公演やリリース情報のほか、過去の特定日を再現する「タイムマシンモード」やネタバレ配慮機能を搭載。\n\n・[サイト紹介記事](https://note.com/nogikeyaksh/n/n95f652f7d114)",
  tags: ["information","song","live"],
  groups: ["nogi","saku","hina"],
  link: "https://meaning-of-goodbye.com/sakamichi-search/"
},
{
  name: "あの坂道を登れ",
  desc: "anosaka.com",
  detail: "・ライブなど、様々なイベントへの参加レポート\n・出演メディア（テレビ・ラジオ・本・曲）の感想\n・人気ランキング\n・関連ゲーム攻略\n\n・[ABOUT](https://anosaka.com/about-us)",
  tags: ["meet","information","song","sale","create","forum","live","game","ranking","sns","oshi"],
  groups: ["nogi","saku","hina"],
  link: "https://anosaka.com/"
},
{
  name: "坂道データベース",
  desc: "sakamichidb.anosaka.com",
  detail: "「あの坂道」が運営する坂道グループのMV再生回数やチャート情報まとめた非公式ファンサイトです。\n\n・[このサイトについて](https://sakamichidb.anosaka.com/other/about)",
  tags: ["information","song","streaming","create","tool","ranking"],
  groups: ["nogi","saku","hina"],
  link: "https://sakamichidb.anosaka.com/"
},
{
  name: "坂道シリーズ楽曲DB",
  desc: "saka46.fun",
  detail: "アイドルグループ・坂道シリーズの楽曲ファンです。坂道シリーズの楽曲やクリエイター（作曲家、MV監督、パフォーマーなど）についての情報を発信しています。",
  tags: ["song","streaming","live","ranking"],
  groups: ["nogi","saku","hina"],
  link: "https://saka46.fun/"
},
{
  name: "乃木坂46まとめ",
  desc: "nogizaka46.u-ff.com",
  detail: "[乃木坂46データベース](https://nogizaka46.u-ff.com/database/)\n・最新ニュース\n・メンバーやグループ資料まとめ\n・セットリスト\n・ミーグリ資料\n・外仕事の動画まとめ",
  tags: ["clothes","meet","information","song","sale","forum","live","ranking"],
  groups: ["nogi"],
  link: "https://nogizaka46.u-ff.com/"
},
{
  name: "日向坂46まとめ",
  desc: "hinatazaka46.u-ff.com",
  detail: "[日向坂46データベース](https://hinatazaka46.u-ff.com/database/)\n・最新ニュース\n・メンバーやグループ資料まとめ\n・セットリスト\n・ミーグリ資料\n・動画まとめ（Smartnews）\n・Podcast（Audee）",
  tags: ["clothes","meet","information","song","sale","streaming","forum","live","ranking"],
  groups: ["hina"],
  link: "https://hinatazaka46.u-ff.com/"
},
{
  name: "まいにち日向坂",
  desc: "hinatafan.com",
  detail: "・ほぼセトリ専門\n・日向坂46聖地巡礼\n・メンバー資料まとめ",
  tags: ["place","meet","information","song","forum","live","oshi"],
  groups: ["nogi","saku","hina"],
  link: "https://hinatafan.com/"
},
{
  name: "FrontPage - sakamichi",
  desc: "坂道グループ配信まとめサイト",
  detail: "坂道グループのShowroom、SNSなど生配信動画のまとめサイト。",
  tags: ["information","streaming","sns"],
  groups: ["nogi","saku","hina"],
  link: "https://www.wikihouse.com/sakamichi/index.php?FrontPage"
},
{
  name: "がなぷら",
  desc: "ファン向けの応援ブログ「がなぷら」",
  detail: "【坂道/イコノイジョイ/PassCode/MFS】ファン向けの応援ブログ「がなぷら」を運営中‖Live参戦記事も書いてます",
  tags: ["information","forum","ranking","oshi"],
  groups: ["nogi","saku","hina"],
  link: "https://hiragana-plan.com/"
},
{
  name: "アイドルの愛犬の名前まとめ",
  desc: "seesaawiki.jp/nameofidolsdog",
  detail: "不完全",
  tags: ["information"],
  groups: ["nogi","saku","hina"],
  link: "https://seesaawiki.jp/nameofidolsdog/"
},
{
  name: "日向坂46　ライブ情報まとめ",
  desc: "w.atwiki.jp/hinatazaka46liveinfo",
  detail: "日向坂46のライブに関しての質問に関して、まとめたWIKIです。",
  tags: ["place","sns","information","song","live","oshi"],
  groups: ["hina"],
  link: "https://w.atwiki.jp/hinatazaka46liveinfo/"
},
{
  name: "乃木坂パープルハート",
  desc: "nogizaka.info",
  detail: "「乃木坂パープルハート」はどちらかというと、乃木坂46についてはよく知らないよ、っていう「乃木坂初心者向け」のページです。とはいえ、長く応援している人にも楽しんでもらえるように、いろいろな情報を載せていきたいと思います。",
  tags: ["clothes","information","song","oshi"],
  groups: ["nogi"],
  link: "https://www.nogizaka.info/index.html"
},
{
  name: "坂道 store",
  desc: "sakamichi-store.net",
  detail: "坂道グループの私服・衣装・スニーカー・カメラ・コスメ等を紹介しています。blog/Youtube /TV/TikTok等で得た情報を参考にまとめています🌷たまに推し活レポや聖地巡礼も...！！ ※個人での特定になりますので間違っていたらすみません。\n\n・[坂道store / X](https://x.com/sakamichi_store)",
  tags: ["item","clothes","place","oshi"],
  groups: ["nogi","saku","hina"],
  link: "https://sakamichi-store.net/"
},
{
  name: "N46 fashion │ 乃木坂46×私服･衣装",
  desc: "instagram.com/ngz46.fashionsnap",
  detail: "・私服\n・衣装\n・私物\n・アイテム\n・愛用品",
  tags: ["item","clothes","oshi"],
  groups: ["nogi"],
  link: "https://www.instagram.com/ngz46.fashionsnap/"
},
{
  name: "アイドルバケット",
  desc: "坂道グループの情報を発信中",
  detail: "・私服・衣装特定\n・セットリスト\n・ペンライトカラー",
  tags: ["item","clothes","information","song","live","oshi"],
  groups: ["nogi","saku","hina"],
  link: "https://idolbucket.jp/"
},
{
  name: "ゆにめいと Yunimate",
  desc: "yunimate.jp",
  detail: "坂道（乃木坂46・櫻坂46・欅坂46・日向坂46）衣装情報",
  tags: ["clothes","song"],
  groups: ["nogi","saku","hina"],
  link: "https://yunimate.jp/"
},
{
  name: "乃木坂46 N46ネットワーク",
  desc: "nogizaka46.net",
  detail: "・乃木坂46 セットリスト\n・楽曲情報\n・[RSS link](https://nogizaka46.net/feed/atom)",
  tags: ["clothes","information","song","forum","live"],
  groups: ["nogi"],
  link: "https://nogizaka46.net/"
},
{
  name: "JOYFUL LOVE 虹色作戦まとめwiki",
  desc: "w.atwiki.jp/joyfullove",
  detail: "日向坂46のライブで行われるJOYFUL LOVE 虹色作戦に関してまとめたwikiです。",
  tags: ["live","oshi"],
  groups: ["hina"],
  link: "https://w.atwiki.jp/joyfullove/"
},
{
  name: "乃木坂コール中",
  desc: "nogizaka46-live.hatenablog.jp",
  detail: "乃木坂46コール個人ブログ",
  tags: ["song","live","oshi"],
  groups: ["nogi"],
  link: "https://nogizaka46-live.hatenablog.jp/"
},
{
  name: "乃木坂紹介中",
  desc: "n46hako.com",
  detail: "乃木坂46 セットリストのみ",
  tags: ["song","live"],
  groups: ["nogi"],
  link: "https://n46hako.com/"
},
{
  name: "SEKAIWEEK 坂道シリーズ＆僕青応援サイト",
  desc: "the0ries.com",
  detail: "坂道グループまとめ記事",
  tags: ["information","song","sale","forum"],
  groups: ["nogi","saku","hina"],
  link: "https://the0ries.com/category/nogizaka/"
},
];

const tagLabels = {
  "item": "アイテム・愛用品",
  "clothes": "私服・衣装・制服",
  "place": "場所・聖地巡礼",
  "sns": "SNS",
  "meet": "握手・ミーグリ",
  "information": "個人・グループ情報",
  "song": "楽曲資料",
  "sale": "売上",
 "game": "ゲーム", 
  "streaming": "ストリーミング・配信",
  "photo": "写真",
  "message": "メッセージ",
  "create": "作成ツール",
  "oshi": "推し活", 
  "ranking": "ランキング", 
  "forum": "まとめ・RSS",
  "live": "ライブ・セトリ",
  "tool": "関連ツール",
};
