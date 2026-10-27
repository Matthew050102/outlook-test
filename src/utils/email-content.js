const EMAIL_TEMPLATES = [
  {
    subjectTemplate: "A Naprendszer bolygóinak áttekintése",
    contentTemplate:
      "A Naprendszer a Nap gravitációja által egyben tartott bolygórendszer. Nyolc nagybolygóból áll, amelyek közül a belső négy kőzetbolygó, a külső négy pedig óriásbolygó. A Kuiper-öv és az Oort-felhő a rendszer legtávolabbi részeihez tartozik.",
  },
  {
    subjectTemplate: "A kávécserje termesztése és története",
    contentTemplate:
      "A kávé a buzérfélék családjába tartozó Coffea nemzetség cserjéinek magjából készített ital. Eredetileg Etiópia magashegyi vidékeiről származik, majd az arab világ közvetítésével terjedt el Európában és az egész világon a 17. század folyamán.",
  },
  {
    subjectTemplate: "A könyvnyomtatás hatása Európában",
    contentTemplate:
      "Johannes Gutenberg a 15. század közepén Mainzban fejlesztette ki a mozgatható betűs nyomtatási technológiát. Ez az újítás forradalmasította az információ terjedését, és alapvetően hozzájárult a reneszánsz, a reformáció és a tudományos forradalom kibontakozásához.",
  },
  {
    subjectTemplate: "A mesterséges intelligencia korai kutatásai",
    contentTemplate:
      "A mesterséges intelligencia mint önálló tudományterület az 1956-os Dartmouth-i konferencián született meg. A korai kutatók olyan algoritmusok kifejlesztésére törekedtek, amelyek képesek formális logikai problémákat és matematikai tételeket megoldani.",
  },
  {
    subjectTemplate: "A méhek szerepe az ökoszisztémában",
    contentTemplate:
      "A házi méh és a vadon élő beporzók kulcsfontosságú szerepet játszanak a zárvatermő növények szaporodásában. A haszonnövények jelentős hányada igényli a rovarok általi beporzást, így a méhpopulációk csökkenése közvetlen hatással van a globális élelmiszer-biztonságra.",
  },
  {
    subjectTemplate: "Az ókori alexandriai könyvtár öröksége",
    contentTemplate:
      "Az alexandriai könyvtár az ókori világ egyik legnagyobb és legjelentősebb tudományos gyűjteménye volt Egyiptomban. A Ptolemaida-dinasztia idején működő intézmény célja a korszak összes írott művének összegyűjtése és rendszerezése volt.",
  },
  {
    subjectTemplate: "A fotoszintézis biokémiai mechanizmusa",
    contentTemplate:
      "A fotoszintézis során a növények és bizonyos baktériumok a napfény energiáját felhasználva szén-dioxidból és vízből szerves anyagokat szintetizálnak. A folyamat fényfüggő és fénytől független (Calvin-ciklus) szakaszokra osztható a kloroplasztiszokban.",
  },
  {
    subjectTemplate: "A jégkorszakok kialakulásának okai",
    contentTemplate:
      "A Föld éghajlattörténetében periodikusan visszatérő eljegesedési korszakokat nagyrészt a Milanković-ciklusok magyarázzák. A Föld pályájának excentricitása, a forgástengely ferdesége és a precesszió együttesen határozza meg a besugárzás eloszlását.",
  },
  {
    subjectTemplate: "A hangsebesség és a lökéshullámok fizikája",
    contentTemplate:
      "A hang terjedési sebessége a közeg sűrűségétől és hőmérsékletétől függ, tengerszinten, száraz levegőben megközelítőleg 343 méter másodpercenként. Amikor egy tárgy meghaladja ezt a sebességet, a légnyomás hirtelen ugrása hangrobbanást idéz elő.",
  },
  {
    subjectTemplate: "A középkori selyemút kereskedelmi hálózata",
    contentTemplate:
      "A selyemút nem egyetlen útvonal volt, hanem egy kiterjedt karavánút-hálózat, amely Kínát kötötte össze Közép-Ázsián keresztül a Földközi-tenger vidékével. Az áruk mellett vallások, technológiák és kulturális eszmék közvetítését is szolgálta évszázadokon át.",
  },
  {
    subjectTemplate: "A mélytengeri hidrotermális kürtők élővilága",
    contentTemplate:
      "Az óceáni hátságok mentén található forró hidrotermális kürtők közvetlen napfény hiányában is gazdag ökoszisztémát tartanak fenn. Az itt élő élőlények táplálékláncának alapját a kemoszintetizáló baktériumok alkotják, amelyek kénhidrogénből nyernek energiát.",
  },
  {
    subjectTemplate: "A szubszaharai baobabfák biológiája",
    contentTemplate:
      "A majomkenyérfa néven is ismert baobab törzsében hatalmas mennyiségű vizet képes raktározni a száraz évszakok átvészelésére. Egyes példányok életkora elérheti az ezer évet is, és kérgüket, gyümölcsüket hagyományosan széles körben használják a helyi közösségek.",
  },
  {
    subjectTemplate: "A teleszkópok fejlődése Galileitől napjainkig",
    contentTemplate:
      "Galileo Galilei 1609-ben fordította először saját készítésű lencsés távcsövét az éjszakai égbolt felé, felfedezve a Jupiter négy holdját. A modern csillagászat ma már a látható fény mellett infravörös, rádió- és röntgentartományban is vizsgálja a kozmoszt.",
  },
  {
    subjectTemplate: "Az óceáni áramlatok klímaszabályozó hatása",
    contentTemplate:
      "A termohalin cirkuláció által hajtott globális szállítószalag hatalmas mennyiségű hőt szállít az egyenlítői övezetekből a sarkvidékek felé. A Golf-áramlat észak-atlanti ága nélkül Európa északnyugati részének éghajlata jóval hűvösebb és zordabb lenne.",
  },
  {
    subjectTemplate: "A félvezetők működése és a modern elektronika",
    contentTemplate:
      "A félvezetők elektromos vezetőképessége a vezetők és a szigetelők közé esik, és szennyezéssel (adalékolással) pontosan szabályozható. A szilícium alapú p-n átmenetek felfedezése tette lehetővé a tranzisztorok és az integrált áramkörök megalkotását.",
  },
  {
    subjectTemplate: "A vulkáni bazaltoszlopok természetes képződése",
    contentTemplate:
      "A bazaltos láva lassú kihűlése és megszilárdulása során a térfogatcsökkenés feszültséget kelt az anyagban. A mechanikai feszültség hatására a kőzet rendszerint szabályos, hatoldalú oszlopokra repedezik szét, mint ahogy az az Ír Óriások útjánál is megfigyelhető.",
  },
  {
    subjectTemplate: "A mélyűri szondák Voyager-küldetése",
    contentTemplate:
      "A NASA által 1977-ben indított Voyager–1 és Voyager–2 űrszondák eredeti célja a külső óriásbolygók tanulmányozása volt. A feladat teljesítése után mindkét eszköz elhagyta a helioszférát, és jelenleg a csillagközi térből küld adatokat vissza a Földre.",
  },
  {
    subjectTemplate: "A korallzátonyok szerkezete és védelme",
    contentTemplate:
      "A korallzátonyok a tengeri fajok mintegy negyedének biztosítanak élőhelyet, noha a tengerfenék kevesebb mint egy százalékát fedik le. A víz hőmérsékletének emelkedése és a savasodás a korallok szimbiotikus algáinak elvesztéséhez, úgynevezett kifehéredéshez vezet.",
  },
  {
    subjectTemplate: "A zenei skálák akusztikai felépítése",
    contentTemplate:
      "A nyugati tonális zene tizenkét egyenlő félhangra osztott kiegyenlített hangolási rendszert használ. Az oktáv frekvenciaaránya pontosan kétszeres, míg a tiszta kvint a kiinduló hang frekvenciájának másfélszereséhez közeli arányt képviseli.",
  },
  {
    subjectTemplate: "A gleccserek morfológiája és mozgása",
    contentTemplate:
      "A gleccserek a magashegységekben és sarki területeken felhalmozódott hó saját súlya alatt tömörülő jégtömegei. A jég plasztikus alakváltozása és az aljzaton való csúszása révén lassan völgyeket mélyít ki, jellegzetes U-alakú völgyformákat hozva létre.",
  },
];

export function getRandomEmailContent() {
  const index = Math.floor(Math.random() * EMAIL_TEMPLATES.length);
  const selectedTemplate = EMAIL_TEMPLATES[index];
  const id = Math.floor(Math.random() * 1000000);

  return {
    id,
    subject: `${selectedTemplate.subjectTemplate} - REF#${id}`,
    content: `${selectedTemplate.contentTemplate}`,
  };
}
