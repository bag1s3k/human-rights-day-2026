const workshopsData = [
    {
        jmeno: "Martin Hájek",
        nazev: "Lidská práva na Wikipedii",
        anotace: "Používáš Wikipedii? Chceš si vyzkoušet, jak se tvoří? Tak navštiv náš rychlokurz editačních dovedností, na kterém se dozvíš, jak rychle vytvořit kvalitní článek. Vyzkoušíš si tvorbu reálného článku s tematikou lidských práv (osobnosti, organizace, práva).",
        ucebna: "VT4"
    },
    {
        jmeno: "Jiří Láznička",
        nazev: "Sebeobrana pro ženy",
        anotace: "Stalo se ti někdy, že jdeš večer sama domů a necítíš se v bezpečí? Co bys dělala, kdyby se něco opravdu stalo? Přijď na workshop sebeobrany a aktivně si vyzkoušej konkrétní techniky, které můžeš použít v reálných situacích. Naučíš se, jak pracovat s hlasem, jak si nastavit hranice i jak se účinně bránit.Získej větší jistotu, klid a kontrolu, protože sebevědomí je ta nejlepší prevence. <span style='font-weight: 900;'>Cvičební úbor s sebou</span>",
        ucebna: "venkovní učebna"
    },
    {
        jmeno: "PhDr. Martina Kalčíková",
        nazev: "Jáchymovské peklo a obávaná věznice v Uherském Hradišti",
        anotace: "Zjisti, jaké podmínky zažívali političtí vězni v 50. letech 20. století v obávané věznici v Uherském Hradišti a jak následně museli pracovat v uranových dolech v Jáchymově.",
        ucebna: "Salonek 2"
    },
    {
        jmeno: "Kristýna Navrátilová",
        nazev: "Duševní zdraví je taky zdraví",
        anotace: "Jaké to je, když člověk zažívá úzkost nebo depresi? Duševní zdraví se týká každého z nás a tento workshop nabídne prostor k otevřenému rozhovoru o tom, jak lidé prožívají psychické potíže, proč je důležité je brát vážně a co může pomoci. Společně si ukážeme praktický přehled toho, jak funguje terapie, medikace a kde hledat pomoc.",
        ucebna: "JZ2"
    },
    {
        jmeno: "Jana Skupien",
        nazev: "Neviditelné ženy: Kde se ztrácí ženská práce, talent a hlas?",
        anotace: "Je spravedlnost o rovném dělení, nebo o příležitostech? Svět navržený muži – od medicíny po politiku – má na ženy zásadní dopady. Workshop odkrývá příčiny genderové nerovnosti a bariéry, které ženám brání v úspěchu. Zjistěte, proč je jejich práce často neviditelná a jak měnit systém doma, v práci i ve vědě. Pojďme společně hledat cestu k férovější budoucnosti.",
        ucebna: "JZ6"
    },
    {
        jmeno: "Mgr. Eva Svobodová",
        nazev: "Christofascism: When Laws are Based on Religion",
        anotace: "A look into the religiosity of the United States, from history to its influence on politics to how those same politics affect the rights of citizens. Run in English.",
        ucebna: "JZ1"
    },
    {
        jmeno: "Hana Hrádková",
        nazev: "Jóga, vážně?",
        anotace: "Cvičení jógy a lidská práva nejsou dvě zcela odlišné oblasti. Je to spojení tělesné a duchovní praxe. Zaměříme se na svobodu myšlení a představíme si techniky pro vnitřní klid, propojíme princip nenásilí s odpovědností a respektujícím chováním. Přijď s námi naplnit právo na odpočinek v době digitálního stresu. <span style='font-weight: 900;'>Cvičební úbor s sebou</span>",
        ucebna: "malá posilovna"
    },
    {
        jmeno: "Matěj Bajnar",
        nazev: "Jak klimatická krize spaluje lidská práva",
        anotace: "Přijď na interaktivní workshop prozkoumat, jak environmentální změny ovlivňují lidská práva. Ukážeme si hlavní klimatická rizika – sucha, povodně, extrémní teploty – a jejich dopady na životy lidí. Budeš pracovat ve skupinách na konkrétním scénáři ohrožené komunity, analyzovat data, indentifikovat ohrožená práva a navrhovat realistická řešení s ohledem na dostupné zdroje.",
        ucebna: "JZ3"
    },
    {
        jmeno: "Vladyslava Ivasenko",
        nazev: "Digitální soud: Kde končí soukromí?",
        anotace: "Ve workshopu se zaměříš na ochranu soukromí v digitálním prostředí. Budeš řešit konkrétní případ školní aplikace, vžiješ se do různých rolí a na základě důkazů se budeš rozhodovat, jestli došlo k porušení lidských práv.",
        ucebna: "33"
    },
    {
        jmeno: "František Ondřej Dokoupil",
        nazev: "Bydlení je hra, ale jak pro koho?",
        anotace: "V jakých podmínkách se ještě dá bydlet? Je bydlení základní lidské právo? Jaké podmínky si může klást pronajímatel?",
        ucebna: "32"
    },
    {
        jmeno: "Ondřej Klust",
        nazev: "EU & lidská práva",
        anotace: "Ve workshopu se zaměříš na postavení jednotlivce v Evropské unii prostřednictvím strukturovaného dialogu a diskuze o aktuálních příležitostech. Budeme spolu s ostatními kriticky rozebírat stav lidských práv v členských státech jako je Maďarsko či Slovensko a definovat základní evropské hodnoty.",
        ucebna: "salonek 3"
    },
    {
        jmeno: "Monika Stará",
        nazev: "Evoluce lidských práv v Rusku",
        anotace: "Jak moc se liší to, co je napsané v zákonech, od reality? Na workshopu se podíváš na Rusko od revolucí až po současnost a zjistíš, jak se tam (ne)dodržují lidská práva. Čeká tě práce s konkrétními příklady, diskuse i zamyšlení nad tím, jak moc může stát ovlivnit svobodu jednotlivce.",
        ucebna: "31"
    },
    {
        jmeno: "Gabriela Kolářová",
        nazev: "Svoboda v moři algoritmů: Y/N?",
        anotace: "Prozkoumáš předpojatosti lidské mysli, triky algoritmů pro získání a udržení naší pozornosti, a co s tím AI. Zkusíš hledat odpověď, jestli v dnešní době ještě existuje svoboda jednotlivce a jaké jsou její limity a dopady.",
        ucebna: "salonek 4"
    },
    {
        jmeno: "Vlastimil Čech",
        nazev: "Putování tisícem a jednou nocí",
        anotace: "Stejně jako lidé mohou i příběhy cestovat přes půl světa. Ukážeme si, jak vyprávění princezny Šahrazád ukazuje na kulturní a hodnotový svět indického a arabského prostředí. Původně indické pohádky cestou do Arábie košatěly, byly adaptovány s ohledem na nové prostředí. Vyzkoušíme si, jak vzrušující může být vyprávění příběhů, i když nám nejde zrovna o hlavu. Budeme pracovat s materiály v češtině i angličtině.",
        ucebna: "JZ4"
    }
];

const container = document.getElementById('workshops-container');

function renderWorkshops() {
  workshopsData.forEach(workshop => {
    
    const cardHTML = `
      <article class="comic-card">
        <div class="comic-card-header">
          <h3>${workshop.nazev}</h3>
        </div>
        <p class="comic-description">
          ${workshop.anotace}
        </p>
        <div class="comic-card-footer">
          <span class="comic-badge badge-tutor">${workshop.jmeno}</span>
          <span class="comic-badge badge-room">Učebna: ${workshop.ucebna}</span>
        </div>
      </article>
    `;

    container.innerHTML += cardHTML;
  });
}

renderWorkshops();

const images = [
    'images/vladimir_dzuro_bubble.webp',
    'images/jakub_zelenka_bubble.webp',
    'images/sylvia_tiryaki_bubble.webp'
];

let currentIndex = -1;

function changeImage() {
    const imgElement = document.getElementById('rotating-image');
    let nextIndex;

    do {
        nextIndex = Math.floor(Math.random() * images.length);
    } while (nextIndex === currentIndex);

    currentIndex = nextIndex;
    imgElement.src = images[currentIndex];
}

window.onload = changeImage;

setInterval(changeImage, 3000);