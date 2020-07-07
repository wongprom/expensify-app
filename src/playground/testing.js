import uuid from 'uuid';

const menus = [
  {
    meatSide: [
      {
        burgers: [
          {
            id: uuid,
            iconURL: 'https://img.icons8.com/dotty/80/000000/cute-skull.png',
            thanksForIcon: 'https://icons8.com/icon/5rCOX4S78wTc/cute-skull',
            type: 'burgare',
            title: 'the bastard',
            subtitile: 'signature cheese',
            text:
              'Bastards klassiska cheeseburgare. Våra egna dillpickles, 2x cheddar, majonäs, senap, ketchup och rå gul lök.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            iconURL:
              'https://img.icons8.com/pastel-glyph/64/000000/beefburger.png',
            thanksForIcon: 'https://icons8.com/icon/108397/beef-burger',
            type: 'burgare',
            title: 'new york',
            subtitile: 'original streetburger',
            text: 'vår variant av ga',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            iconURL: 'https://img.icons8.com/ios-filled/50/000000/kris.png',
            thanksForIcon: 'https://icons8.com/icon/45034/kris',
            type: 'burgare',
            title: 'london',
            subtitile: 'umami tryffel',
            text:
              'Bistroburgare med vår egna tryffelmajonäs, picklad rödlök, krispsallad, pepperjack cheese och cheddar.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            iconURL:
              'https://img.icons8.com/ios-filled/50/000000/chili-pepper.png',
            thanksForIcon: 'https://icons8.com/icon/10392/chili-pepper',
            type: 'burgare',
            title: 'texas',
            subtitile: 'the new',
            text:
              'En Bastard barbeque. Rökt bacon, rödlök, krispsallad, 2x cheddar, eld och lågor bbqsås och chipotledressing.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            iconURL: 'https://img.icons8.com/pastel-glyph/64/000000/anchor.png',
            thanksForIcon: 'https://icons8.com/icon/111566/anchor',
            type: 'burgare',
            title: 'luleå',
            subtitile: 'x-tra cheesy',
            text:
              'Norrländsk cheeseburgare på Bastardvis. Jalapeñodressing, rödlök och trippla cheddarskivor.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            iconURL:
              'https://img.icons8.com/ios-filled/50/000000/thor-hammer.png',
            thanksForIcon: 'https://icons8.com/icon/10381/thor-hammer',
            type: 'burgare',
            title: 'los angeles',
            subtitile: 'the champion oak',
            text:
              'Vår mest efterlängtade signaturburgare. Karamelliserad lök, jalapeños, bacon, 2x pepperjack, bifftomat, krispsallad och jalapeño- & honungsdressing.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            iconURL:
              'https://img.icons8.com/ios-filled/50/000000/talk-male.png',
            thanksForIcon: 'https://icons8.com/icon/8975/communicate',
            type: 'burgare',
            title: 'signatur',
            subtitile: 'månadens',
            text:
              'Varje månad så kör vi en signaturburgare som tas fram av våra egna kockar eller via olika collabs. Fråga efter månadens burgare.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            iconURL: 'https://img.icons8.com/ios-filled/50/000000/cleaver.png',
            thanksForIcon: 'https://icons8.com/icon/47657/cleaver',
            type: 'burgare',
            title: 'kentucky',
            subtitile: 'bastard chickenburger',
            text:
              'Kycklingburgare på svensk kyckling, tomat, krispsallad, 2x cheddar, Bastarddressing och rödlök.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            iconURL:
              'https://img.icons8.com/ios-filled/50/000000/salami--v1.png',
            thanksForIcon: 'https://icons8.com/icon/oSYOMoFEQ84R/salami',
            type: 'parisare',
            title: 'sthlm-paris',
            subtitile: 'bastard chickenburger',
            text:
              'Norrländsk parisare, med senap, ketchup, gurk- och jalapeñosallad och hackad gul lök. På köttkorv.',
            price: 89,
            add: {
              text: 'fries och läsk ',
              price: 139,
            },
          },
        ],
      },
      {
        kidsMeal: [
          {
            id: uuid,
            type: undefined,
            title: 'kidz meal',
            subtitile: 'barn upp til 12 år',
            text:
              'Välj mellan hamburgare med ketchup, 6 st vegonuggetseller halloumiburgare. Servers med fries och en MER',
            price: 65,
            add: {
              text: undefined,
              price: undefined,
            },
          },
          {
            id: uuid,
            type: undefined,
            title: 'american pancakes',
            subtitile: undefined,
            text: 'serveras med sylt, grädde och glass',
            price: 65,
            add: {
              text: undefined,
              price: undefined,
            },
          },
        ],
      },
      {
        sideDishes: [
          {
            name: 'shack fries',
            price: [35, 40],
          },
          {
            name: 'sötpoptatis fries',
            price: [35, 40],
          },
          {
            name: 'mixsallad',
            price: [30],
          },
          {
            name: 'mozzarellasticks 4 st',
            price: [35],
          },
          {
            name: 'vegonuggets 6 bitar',
            price: [45],
          },
          {
            name: 'animal styles fries',
            price: [55, 75],
          },
          {
            name: 'bastards rotfruktschips med valfri dipp',
            price: [35],
          },
        ],
      },
      {
        dips: [
          {
            name: 'bastard original',
            price: 15,
          },
          {
            name: 'bastard aioli',
            price: 15,
          },
          {
            name: 'tryffelmajo',
            price: 15,
          },
          {
            name: 'jalapeño/honung',
            price: 15,
          },
          {
            name: 'chipotle',
            price: 15,
          },
          {
            name: 'smältost',
            price: 15,
          },
        ],
      },
      {
        title: 'desserts shakes',
        subtitle: '&soda',
        desssertsShakesSodas: [
          {
            name: 'strawberry lime shake',
            price: 75,
          },
          {
            name: 'oreo shake',
            price: 75,
          },
          {
            name: 'blueberry cheesecake shake',
            price: 75,
          },
          {
            name: ['cola', 'fanta', 'trocadero'],
            price: 25,
          },
          {
            name: 'pop art creaft soda',
            price: 35,
          },
          {
            name: 'lemmelkaffe',
            price: 20,
          },
          {
            name: 'hjortronfloat',
            price: 45,
          },
          {
            name: 'brownie med vispgrädde',
            price: 65,
          },
          {
            name: 'vaniljglass med lejonet och björnen med tillbehör',
            price: 35,
          },
        ],
      },
      {
        beverages: [
          {
            title: 'beverages',
            subTitle: 'a few of our ',
            beverages: [
              {
                name: 'how to be a bastard',
                price: 75,
              },
              {
                name: 'little bastard',
                price: 75,
              },
              {
                name: 'babst blue ribbon',
                price: 45,
              },
              {
                name: 'lagunitas ipa',
                price: 79,
              },
              {
                name: 'sam adams boston lager',
                price: 72,
              },
              {
                name: 'bronx slow your roll ipa',
                price: 72,
              },
              {
                name: 'sweatwater hop hash ipa',
                price: 70,
              },
              {
                name: 'nanny state 0,5%',
                price: 45,
              },
              {
                name: 'angry orchard cider',
                price: 75,
              },
              {
                name: 'rött/vitt vin (375 ml)',
                price: 149,
              },
              {
                name: 'alkoholfritt vin',
                price: 45,
              },
              {
                name: 'groggar',
                price: 129,
              },
            ],
          },
        ],
      },
      {
        animalStyleFries: [
          {
            title: 'animal style',
            subTitle: 'fries',
            text:
              'Valfria fries toppade med bastarddressing, finhackad gul lök och jalapeños, smälltost och bacon',
            price: [55, 75],
          },
        ],
      },
      {
        allergier: [
          {
            title: 'allergier',
            text: 'Säg till när du beställer så hjälper vi dig.',
          },
        ],
      },
      {
        ayiaNapa: [
          {
            id: uuid,
            iconURL: 'https://img.icons8.com/dotty/80/000000/multiply.png',
            thanksForIcon: 'https://icons8.com/icon/oSYOMoFEQ84R/salami',
            type: 'burgare',
            title: 'ayia napa',
            subTitle: 'dubbel halloumi',
            text:
              'Dubbel vegetarisk halloumiburgare med picklad rödlök, bifftomat, krispsallad och vår jalapeño och honungsdressing',
            price: 109,
            add: {
              text: 'fries och läsk',
              pris: 159,
            },
          },
        ],
      },
    ],
  },
  {
    veganSide: [
      {
        veganskStreetfood: [
          {
            id: uuid,
            type: 'burgare',
            title: 'the bastard',
            subtitile: 'beyond',
            text:
              'Våra egna dillpickles, vegansk ost, veganmajonnäs, senap, ketchup och gul lök.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            type: 'burgare',
            title: 'new york',
            subtitile: 'beyond',
            text:
              'En riktig gatuköksburgare. Bifftomat, krispsallad, vegansk ost, bastarddressing och rödlök.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            type: 'burgare',
            title: 'london',
            subtitile: 'beyond',
            text:
              'Bistroburgare med vår egna tryffelmajonnäs, picklad rödlök, krispsallad och vegansk ost.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            type: 'burgare',
            title: 'texas',
            subtitile: 'beyond',
            text:
              'Bastard BBQ. Alspånsrökt tofu, rödlök, krispsallad, vegansk ost, bbqsås och chipotledressing.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            type: 'burgare',
            title: 'luleå',
            subtitile: 'beyond',
            text:
              'Norrländsk cheeseburgare på Bastardvis Jalapeñodressing, rödlök och vegansk ost.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            type: 'burgare',
            title: 'los angeles',
            subtitile: 'beyond',
            text:
              'Karamelliserad lök, jalapeños, alspånsrökt tofu, vegansk ost, bifftomat, krispsallad och jalapeño- och agavesirapsdressing.',
            price: 109,
            add: {
              text: 'fries och läsk ',
              price: 159,
            },
          },
          {
            id: uuid,
            type: 'burgare',
            title: 'vegansignatur',
            subtitile: 'månadens',
            text:
              'Karamelliserad lök, jalapeños, alspånsrökt tofu, vegansk ost, bifftomat, krispsallad och jalapeño- och agavesirapsdressing.',
            price: 129,
            add: {
              text: 'fries och läsk ',
              price: 169,
            },
          },
          {
            id: uuid,
            type: undefined,
            title: 'kidz meal',
            subtitile: 'beyond',
            text:
              'Välj mellan beyondburgare med ketchup eller 6 st vegonuggets. Servers med valfria fries och en MER.',
            price: 65,
            add: {
              text: undefined,
              price: undefined,
            },
          },
          {
            id: uuid,
            type: undefined,
            title: 'animail friendly style',
            subtitile: undefined,
            text:
              'Valfria fries toppade med bastarddressing, finhackad gul lök & jalapeños och alspånsrökt tofu.',
            price: [55, 75],
          },
        ],
      },
      {
        dips: [
          {
            name: 'bastard original',
            price: 15,
          },
          {
            name: 'bastard aioli',
            price: 15,
          },
          {
            name: 'tryffelmajo',
            price: 15,
          },
          {
            name: 'jalapeño/agavesirap',
            price: 15,
          },
          {
            name: 'chipotle',
            price: 15,
          },
        ],
      },
      {
        sideDishes: [
          {
            name: 'shack fries',
            price: [35, 40],
          },
          {
            name: 'sötpoptatis fries',
            price: [35, 40],
          },
          {
            name: 'mixsallad',
            price: [30],
          },

          {
            name: 'vegonuggets 6 bitar',
            price: [45],
          },
          {
            name: 'animal style fries',
            price: [55, 75],
          },
          {
            name: 'bastards rotfruktschips med valfri dipp',
            price: [35],
          },
        ],
      },
      {
        earthFriendley: {
          title: 'earth friendly',
          text:
            ' Vi måste tillsammans ta hand om planeten. Basrtard Burgers klimatkompenserar 110% via ett projekt som heter Sri Balanji, ett kraftverk i Indien som producerar förnyelsebar energi och ersätter fossila bränslen.',
        },
      },
      {
        hundredVegan: {
          title: '100% vegan',
          text:
            'Vår gröna meny är helt plantbaserad och allt tillagas separat. Kontakta gärna personalen om du har några frågor.',
        },
      },
      {
        desssertsShakesSodas: [
          {
            name: 'strawberry lime shake',
            price: 75,
          },
          {
            name: 'oreo shake',
            price: 75,
          },
          {
            name: 'blueberry cheesecake shake',
            price: 75,
          },
          {
            name: ['cola', 'fanta', 'trocadero'],
            price: 25,
          },
          {
            name: 'pop art creaft soda',
            price: 35,
          },
          {
            name: 'lemmelkaffe',
            price: 20,
          },
          {
            name: 'hjortronfloat',
            price: 45,
          },
          {
            name: 'brownie med vispgrädde',
            price: 65,
          },
          {
            name: 'vegansk vaniljglass från lejonet och björnen',
            price: 35,
          },
        ],
      },
      {
        beverages: [
          {
            title: 'beverages',
            subTitle: 'a few of our vegan',
            beverages: [
              {
                name: 'how to be a bastard',
                price: 75,
              },
              {
                name: 'little bastard',
                price: 75,
              },
              {
                name: 'babst blue ribbon',
                price: 45,
              },
              {
                name: 'lagunitas ipa',
                price: 79,
              },
              {
                name: 'sam adams boston lager',
                price: 72,
              },

              {
                name: 'nanny state 0,5%',
                price: 45,
              },

              {
                name: 'rött/vitt vin (375 ml)',
                price: 149,
              },
            ],
          },
        ],
      },
      {
        beyondBurger: {
          title: 'beyond burger',
          text:
            'Alla våra burgare är baserade på beyondburgaren som är helt och hållet växtbaserad. Källan till protein kommer i huvudsak från ärtor och den får sin röda färg från rödbetsjuice. Produkten är helt fri från soja, gluten och GMO',
        },
      },
      {
        allergier: {
          text: 'Säg till när du beställer så hjälper vi dig.',
        },
      },
    ],
  },
];

// console.log(
//   'menus',
//   menus.map((menu) => console.log(menu))
// );
//* meatSide
const meatSide = menus.filter((menu) => menu.meatSide);
// console.log('meatSide: ', meatSide);
//* Burgers []
const burgers = menus[0].meatSide[0].burgers;

console.log('burgers: ', burgers);

console.log('menus', menus[0]);
const dips = menus.map((el, index) => el.veganSide[index === 1]);
console.log(dips);
