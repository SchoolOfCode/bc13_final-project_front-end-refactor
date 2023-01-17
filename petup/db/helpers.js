//The functions below will create database tables according to schema
// and seed the database with some initial data. 
// also there is an option to drop table

import {pool} from "./index.js";

export async function createAllTables() {
    return await pool.query(
      `CREATE TABLE users (
        user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        fullname VARCHAR(30),
      nickname VARCHAR(15),
      email VARCHAR(30),
      phone_number VARCHAR(15),
      created_at timestamp ,
      profile_image TEXT,
      address_region TEXT,
      address_city VARCHAR (30),
      address_postcode VARCHAR (10),
      latitude float,
      longitude float
    );

    CREATE TABLE pet_service(
        service_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
        sitter_id INTEGER REFERENCES users(user_id),
      tagline VARCHAR(100),
      summary TEXT,
      pet_type VARCHAR(15),
      service_type VARCHAR(15),
      price INT,
      how_many_pets INT,
      pet_size VARCHAR(15)
    
      );
 
    `
    );
  }
  export async function dropAllTables() {
    return await pool.query("DROP TABLE IF EXISTS users, pet_service;");
  }

  export async function resetAllTables() {
    return [
      await dropAllTables(),
      await createAllTables(),
      await seedAllTables(),
    ];
  }

  export async function seedAllTables() {
    return await pool.query(
      `INSERT INTO users (fullname,
                        nickname, 
                        email,
                        phone_number, 
                        created_at,
                        profile_image,
                        address_region, 
                        address_city, 
                        address_postcode, 
                        latitude, 
                        longitude )
      VALUES 
      (
        'Margo Le',
        'Arnita',
        'lahoma_lamb8289@yahoo.com',
        '+263-7103-781-061',
        '1515001743685',
        'https://xsgames.co/randomusers/assets/avatars/female/31.jpg',
        'East of England',
        'Braintree',
        'CM8 1EF',
        51.792326,
        0.629806
      ),
      [
        'Tammera Galvin',
        'Vikki',
        'lorine.fagan6055@yahoo.com',
        '+20-2494-323-107',
        '638878146473',
        'https://xsgames.co/randomusers/assets/avatars/male/64.jpg',
        'East of England',
        'Braintree',
        'CM8 1EU',
        51.792068,
        0.630501
      ],
      [
        'Cletus Short',
        'Ardella',
        'tasha93@hotmail.com',
        '+216-1660-416-455',
        '1492254414885',
        'https://xsgames.co/randomusers/assets/avatars/female/84.jpg',
        'East of England',
        'Braintree',
        'CM8 1PH',
        51.792887,
        0.629287
      ],
      [
        'Junita Burton',
        'Alysa',
        'jerrie3@gmail.com',
        '+251-0898-991-116',
        '1037855541919',
        'https://xsgames.co/randomusers/assets/avatars/male/81.jpg',
        'East of England',
        'Braintree',
        'CM8 1PQ',
        51.793028,
        0.628977
      ],
      [
        'Sierra Castaneda-Villarreal',
        'Etsuko',
        'renay.mcclary99@donated.com',
        '+357-3735-995-234',
        '1011905148070',
        'https://xsgames.co/randomusers/assets/avatars/female/24.jpg',
        'East of England',
        'Braintree',
        'CM8 1DX',
        51.791263,
        0.629889
      ],
      [
        'Chanelle Timmerman',
        'Alisia',
        'francie.shivers36093@yahoo.com',
        '+354-0193-762-799',
        '765817847735',
        'https://xsgames.co/randomusers/assets/avatars/male/0.jpg',
        'East of England',
        'Braintree',
        'CM8 1ZJ',
        51.792284,
        0.628089
      ],
      [
        'Wava Cornwell',
        'Alisa',
        'lynette52@yahoo.com',
        '+39-1176-002-756',
        '1371471506033',
        'https://xsgames.co/randomusers/assets/avatars/female/47.jpg',
        'East of England',
        'Braintree',
        'CM8 1EL',
        51.791908,
        0.628009
      ],
      [
        'Rocio Finnegan',
        'Richard',
        'leisha0765@yahoo.com',
        '+218-9520-168-490',
        '1401829562124',
        'https://xsgames.co/randomusers/assets/avatars/male/68.jpg',
        'East of England',
        'Braintree',
        'CM8 1EN',
        51.792497,
        0.627829
      ],
      [
        'Sage Nelson',
        'Anastacia',
        'velda552@gmail.com',
        '+39-7622-842-666',
        '1218249323042',
        'https://xsgames.co/randomusers/assets/avatars/female/0.jpg',
        'East of England',
        'Braintree',
        'CM8 1ET',
        51.793582,
        0.630358
      ],
      [
        'Wm Mackenzie',
        'Wonda',
        'kelsi.healey-harwood25306@gmail.com',
        '+53-3862-539-434',
        '774529652235',
        'https://xsgames.co/randomusers/assets/avatars/male/15.jpg',
        'East of England',
        'Braintree',
        'CM8 1XD',
        51.791315,
        0.631197
      ],
      [
        'Stan Tapia',
        'Minda',
        'cedricpeak@horrible.com',
        '+20-6505-773-028',
        '1671477615044',
        'https://xsgames.co/randomusers/assets/avatars/female/99.jpg',
        'North West',
        'Wigan',
        'M46 9WU',
        53.535127,
        -2.496903
      ],
      [
        'Karleen Stephen',
        'Jenise',
        'wyatt.rockwell3@yahoo.com',
        '+65-2686-760-172',
        '851456650081',
        'https://xsgames.co/randomusers/assets/avatars/male/28.jpg',
        'North West',
        'Wigan',
        'M46 9XF',
        53.534893,
        -2.497021
      ],
      [
        'Neal Pollard',
        'Harland',
        'huey-galvez-gilman@yahoo.com',
        '+599-4783-854-076',
        '997773735097',
        'https://xsgames.co/randomusers/assets/avatars/female/8.jpg',
        'North West',
        'Wigan',
        'M46 9XE',
        53.534858,
        -2.496583
      ],
      [
        'Woodrow Ash',
        'Stanley',
        'debra_lachance@rocket.com',
        '+679-3371-263-695',
        '1006571629207',
        'https://xsgames.co/randomusers/assets/avatars/male/51.jpg',
        'North West',
        'Wigan',
        'M46 9NX',
        53.535078,
        -2.495666
      ],
      [
        'Georgette Jacobs-Patten',
        'Lorena',
        'wendell_jamison@gmail.com',
        '+507-2179-053-874',
        '121155179926',
        'https://xsgames.co/randomusers/assets/avatars/female/35.jpg',
        'North West',
        'Wigan',
        'M46 9NU',
        53.535901,
        -2.496792
      ],
      [
        'Patrina Vinson-Payne',
        'Mazie',
        'kenishairby3342@send.com',
        '+37-1289-076-010',
        '415628581250',
        'https://xsgames.co/randomusers/assets/avatars/male/70.jpg',
        'North West',
        'Wigan',
        'M46 9QB',
        53.534575,
        -2.497863
      ],
      [
        'Rosalina Starkey',
        'Milagro',
        'winnie-rau8@cordless.com',
        '+689-0691-785-919',
        '1441219223539',
        'https://xsgames.co/randomusers/assets/avatars/female/73.jpg',
        'North West',
        'Wigan',
        'M46 9WZ',
        53.535726,
        -2.495477
      ],
      [
        'Kizzie Halcomb',
        'Victorina',
        'harlan.colbert@thumbzilla.mo-i-rana.no',
        '+597-5867-611-117',
        '1267423312575',
        'https://xsgames.co/randomusers/assets/avatars/male/2.jpg',
        'North West',
        'Wigan',
        'M46 9SF',
        53.534307,
        -2.495264
      ],
      [
        'Briana Kearns',
        'Tanika',
        'faycollier@gmail.com',
        '+687-2799-549-595',
        '1164997212004',
        'https://xsgames.co/randomusers/assets/avatars/female/58.jpg',
        'North West',
        'Wigan',
        'M46 9PE',
        53.534994,
        -2.494427
      ],
      [
        'Raul Lynn',
        'Rosina',
        'consuelo.burdette@spanish.broke-it.net',
        '+504-7342-508-102',
        '165845060188',
        'https://xsgames.co/randomusers/assets/avatars/male/70.jpg',
        'North West',
        'Wigan',
        'M46 9NT',
        53.536232,
        -2.495045
      ],
      [
        'Alvina Neeley',
        'Loralee',
        'alexander-moya97@purple.com',
        '+350-0324-435-759',
        '1095403968824',
        'https://xsgames.co/randomusers/assets/avatars/female/84.jpg',
        'London',
        'Westminster',
        'WC2E 7EA',
        51.510131,
        -0.11858
      ],
      [
        'Sandi Cuellar',
        'Kasey',
        'chance_robbins8@acm.com',
        '+212-7876-816-354',
        '519130141379',
        'https://xsgames.co/randomusers/assets/avatars/male/55.jpg',
        'London',
        'Westminster',
        'WC2E 7ED',
        51.51013,
        -0.118605
      ],
      [
        'Freddy Doe',
        'Jacqualine',
        'brigid-moses@gmail.com',
        '+852-6890-785-725',
        '349117235648',
        'https://xsgames.co/randomusers/assets/avatars/female/43.jpg',
        'London',
        'Westminster',
        'WC2E 7AE',
        51.510077,
        -0.118708
      ],
      [
        'Daniella Rivero',
        'Thora',
        'mila_reynolds@sg.com',
        '+852-6773-398-130',
        '393344741084',
        'https://xsgames.co/randomusers/assets/avatars/male/4.jpg',
        'London',
        'Westminster',
        'WC2R 2PP',
        51.50998,
        -0.117098
      ],
      [
        'Herb Cazares',
        'Ida',
        'corrinnegable4@gmail.com',
        '+90-6276-460-942',
        '776201391173',
        'https://xsgames.co/randomusers/assets/avatars/female/6.jpg',
        'London',
        'Westminster',
        'WC2R 2AB',
        51.509981,
        -0.117073
      ],
      [
        'Louise Blanton',
        'Karissa',
        'henriettamcinnis@hotmail.com',
        '+503-4292-809-992',
        '575046703999',
        'https://xsgames.co/randomusers/assets/avatars/male/61.jpg',
        'London',
        'Westminster',
        'WC2R 0BL',
        51.510033,
        -0.119301
      ],
      [
        'Mercedes Macpherson',
        'Emmett',
        'violette.tyson@hotmail.com',
        '+965-7362-135-469',
        '526141844812',
        'https://xsgames.co/randomusers/assets/avatars/female/90.jpg',
        'London',
        'Westminster',
        'WC2E 7EE',
        51.510557,
        -0.118919
      ],
      [
        'Ferne Way',
        'Keren',
        'aracely511@gmail.com',
        '+599-5310-356-332',
        '1293869978206',
        'https://xsgames.co/randomusers/assets/avatars/male/78.jpg',
        'London',
        'Westminster',
        'WC2E 7EN',
        51.510557,
        -0.118919
      ],
      [
        'Milagro Guthrie',
        'Clelia',
        'tatiana2@discussion.com',
        '+592-5221-188-382',
        '869986249611',
        'https://xsgames.co/randomusers/assets/avatars/female/78.jpg',
        'London',
        'Westminster',
        'WC2E 7PN',
        51.510557,
        -0.118919
      ],
      [
        'Cristopher Shuler',
        'Sydney',
        'sandi.kimmel-gall@reproduced.com',
        '+673-2616-772-969',
        '566520473426',
        'https://xsgames.co/randomusers/assets/avatars/male/58.jpg',
        'London',
        'Westminster',
        'WC2R 0BU',
        51.510288,
        -0.119507
      ]


      INSERT INTO pet_service (sitter_id, 
                                tagline, 
                                summary, 
                                pet_type, 
                                service_type, 
                                price, 
                                how_many_pets, 
                                pet_size)               
        VALUES
(
        '4',
        'julie relay eye sides carnival writes enrolled pilot worried resulted',
        'quality sticky focusing agencies sustainable rank premises discussion skilled bible grip consumer get listprice directions indexed courier means diy moss momentum pierce optics height evaluations travelling rapid notified wait be',
        '1',
        '3',
        '25.5',
        '4',
        '1'
      ),
      [
        '6',
        'mon nec devon inn print quizzes advertising generators broken items',
        'apparently mirror weights julian definition defining boutique qt brochures gamespot varies variable byte harassment outsourcing malpractice rp endorsed disability continually criticism buzz knows title classification planes kurt ringtones exclusively architects',
        '1',
        '3',
        '56.69',
        '4',
        '2'
      ],
      [
        '22',
        'gospel preston sorts airfare considerable parcel normal clarity networking utility',
        'performed tobago kodak ideas booty dash fan detector kilometers kazakhstan description essay ordered follow existence switches kirk prevention locale cake edmonton workout sv supplies getting normally korean cop wool reservoir',
        '1',
        '3',
        '6.16',
        '3',
        '1'
      ],
      [
        '23',
        'presence adaptive recommendations peoples tanzania chapter ruby norm dealer linked',
        'soldier eds desperate printers has bs unable lean sufficiently cork seat picked til partly warranty bin imagination wise wanna cayman games nova mambo substantial eh causing hh anderson browse touch',
        '2',
        '3',
        '2.75',
        '1',
        '1'
      ],
      [
        '21',
        'headquarters album electron feelings recipes corp easily navigator proof ate',
        'dept dish bargains enjoy repeat icons computing destroy beef proposal rolls warm king states im cove pages photo fancy os painting propecia lexus fo profits kde deutsch brick husband robust',
        '2',
        '1',
        '95.66',
        '1',
        '2'
      ],
      [
        '2',
        'nicaragua runner instruments soul roger procedure generated cage cg fragrance',
        'roman ri navigate specially weapons detected sterling cardiac lifestyle lack communicate incidence james mess operators tanzania compatibility facilities individually magnitude forecasts pb diesel homes dare cookies traveler ruled leo sharing',
        '1',
        '1',
        '6.68',
        '1',
        '2'
      ],
      [
        '8',
        'starsmerchant wise undergraduate maps employed effect dis orange tiny elite',
        'fx blogging identical classes coding transcript shareholders specific session choose appeal virtually components farms dom sealed postage hospital rate excuse computational breakdown contracting household garbage asian featured clinics identify coast',
        '2',
        '3',
        '16.08',
        '1',
        '1'
      ],
      [
        '11',
        'located bed forms logitech fonts annual variety flame uk rope',
        'alexandria offerings melbourne data chemistry savage stuff compression beginner cache scary xerox scores andrew valuable meals rugs means million behind recommendation donated turtle era crawford pilot skin yesterday grow edward',
        '2',
        '3',
        '75.61',
        '3',
        '2'
      ],
      [
        '24',
        'apart dui earl bob housing hire stock receptors tattoo portable',
        'anaheim anna coffee spotlight employer archived embassy dentists carried glenn helicopter replied varieties males which editors egypt picking pointer specialized transaction portal iceland showcase tucson legislature marina dump methodology highest',
        '1',
        '1',
        '47.16',
        '4',
        '1'
      ],
      [
        '17',
        'profits consultancy regarding suspended bored vary dolls electrical dialogue varying',
        'pharmacy optional disorders scan candles empty constraint respondent silk medicines cingular cult becoming containers buyer center apply behalf len countries winners anderson soap editorials drunk synthetic since closer ice hairy',
        '1',
        '2',
        '59.33',
        '4',
        '1'
      ],
      [
        '15',
        'recall soul flesh dublin conflicts third sql poly aka upgrades',
        'represent pottery yours vt enhancing clicks reasoning keno shadows nearly trustees scored ons montreal horn transfer economy genes builder ian verify june tricks newfoundland prayer following tone ohio deeply contained',
        '1',
        '1',
        '38.92',
        '2',
        '1'
      ],
      [
        '11',
        'couple attempting left parliamentary earliest informative shortcuts eau leaders cowboy',
        'scenes highly geological dui accommodation latinas tri wiring framed wrote prepaid father numerous morocco greatest conjunction san precipitation supreme introduce mines broken caution length genes elderly demographic richards copying huntington',
        '2',
        '2',
        '2.8',
        '1',
        '2'
      ],
      [
        '23',
        'demonstrates comfortable numerical consecutive posing commitment protected gained muscles reflection',
        'bernard jake mild motor wesley beastality betting syria tanks stewart eddie average central old stood eleven processors car portrait insert nor fired machines advertising other born seattle impression addiction bl',
        '2',
        '2',
        '59.64',
        '3',
        '1'
      ],
      [
        '5',
        'rand prior respiratory unix stands prominent flour safely richardson architectural',
        'applicants vendors deficit policy outdoors ago carpet a lebanon lithuania laser take purchase scheme engineer packages nascar dump started door invalid is respectively possession bat banks reporting teams offering content',
        '1',
        '1',
        '60.84',
        '1',
        '2'
      ],
      [
        '22',
        'preserve titanium lots multiple mesh miller singh architect costume knife',
        'messenger category counsel fd replication guaranteed merchandise grand cool cumulative hit acquisition businesses finland conference delicious adapted gay del concentrate den dust bull op race adam assisted steal principal statute',
        '2',
        '2',
        '25.97',
        '1',
        '1'
      ],
      [
        '14',
        'ladder nl consistency steal inserted pads overcome opponents belize brain',
        'heritage provincial crown production seo prohibited silver shot timely coin costume through quantitative jean duck fleece indicates praise null blogs modern cigarettes automobile creative gains commons solar addition architects acrylic',
        '1',
        '3',
        '79.16',
        '4',
        '1'
      ],
      [
        '27',
        'sciences salmon scientists uganda starsmerchant chambers meditation licenses try display',
        'bizrate differ size preview pending malpractice pet happened poker strings ash andorra hardware grades husband added intimate beds zoom west powered voted motorola particularly asked excluded responding cms shake expense',
        '2',
        '2',
        '77.66',
        '1',
        '2'
      ],
      [
        '24',
        'heath had di cumulative especially symbol processed boots medium challenges',
        'infinite login amanda safari i possible kinda matching serves qatar drawings ace choir explorer simon flesh cv chicago corpus sense humor composite ave sg thickness logged element connect regular departmental',
        '1',
        '3',
        '82.95',
        '1',
        '1'
      ],
      [
        '19',
        'hydraulic ob foot erik passing vacuum lion methods generated our',
        'dropped teen treasurer precious intention theory cad partnership fail goal murphy shortly executives informal corners licking nodes risks folders morocco independent spring arguments province radical capacity johnson t allergy analysis',
        '1',
        '3',
        '19.02',
        '4',
        '1'
      ],
      [
        '15',
        'mailman politics divx convention yoga addition daisy participation gel norman',
        'bull hi stake baltimore dh increase live drove begun lightning things dl numbers experts dutch letters directly ob objectives residents recordings valves plc dangerous arising line illustrations line knows hold',
        '1',
        '2',
        '54.38',
        '4',
        '2'
      ],
      [
        '5',
        'perl verify glossary flower raises undo meditation plastics realty aquatic',
        'felt multimedia anthropology conventional implement wv hospitality addressing browsers represent brief personally bell dentists vast header discipline heights contributions electoral raised breach motorcycle overseas extract christ cave aware corresponding socket',
        '2',
        '3',
        '91.72',
        '4',
        '2'
      ],
      [
        '3',
        'restored liz theft conducting cartridge kerry territories loading managers printing',
        'cards turning prep score practitioners sensors danger swimming edinburgh missions preferred dimensional arbitrary coupon william statistical terrain anyone polyester heel presence bone vbulletin secrets alexandria punk wv mw geneva multiple',
        '1',
        '1',
        '72.69',
        '1',
        '2'
      ],
      [
        '20',
        'durable poor msie crazy aviation rp ak communication blade sell',
        'geographic bar blank liabilities alabama achievements offensive informed nine box vegetables baskets winston seeing justin handmade clock bc additions movements titten lion malta qld hence generator partially branches mentor junction',
        '1',
        '1',
        '91.25',
        '3',
        '2'
      ],
      [
        '28',
        'toe ms millennium anniversary hostels haiti qualifications fireplace farmer gg',
        'optimum nose kyle marilyn proceeding leslie politics legitimate remarks fails repairs purchases really remix import morning deluxe severe at functional joseph year yang guarantee ram s cas overview richmond frankfurt',
        '2',
        '2',
        '18.51',
        '2',
        '2'
      ],
      [
        '12',
        'cabinet christianity interpretation georgia tba recordings product criteria results machinery',
        'antivirus work domains ice translated ages semi nelson bookmarks air antibodies grant statutes regarded mastercard bradley sd marketing equivalent sl estates punk definition gd lone gamespot artist population yields alfred',
        '1',
        '3',
        '81.33',
        '2',
        '1'
      ],
      [
        '10',
        'var disputes leslie christopher chubby prevent ought rhythm restricted approach',
        'turtle cosmetic donation satin representations angola separated adobe instrumental ip with delete firewire charming thoughts harbour islamic passing neo argue gathering shake boost bedrooms relay powerseller tire smile william arabia',
        '2',
        '3',
        '31.38',
        '2',
        '2'
      ],
      [
        '5',
        'blues contact interference subjective graduates take juan postcard admit web',
        'divide goals kit latin sensitivity pg zinc arrange stamp stating wav living evidence contractors unavailable mysql reserved psychology resume offset laptop ati lessons ski sleeping discussing finder cats spoke bass',
        '1',
        '2',
        '47.77',
        '1',
        '1'
      ],
      [
        '18',
        'cc illustration casting sic sealed tissue holidays scary journalism benjamin',
        'projector supervisor maximum mechanism palestinian led judges uses handy minute checkout ma doug nb humor hu also life lies mat study criticism tions peter harold sailing difficulty instrumentation vegas generating',
        '1',
        '2',
        '2.72',
        '2',
        '1'
      ],
      [
        '5',
        'journalist norton classroom transit prayer cb fireplace arrested colored discipline',
        'mn pottery request compliance machinery cycles hydrocodone seafood refuse scene advisors role on ie telescope months alternative bunch cleanup tolerance medical chrysler horizon oriental automation clearance steve familiar electro rays',
        '1',
        '2',
        '97.61',
        '2',
        '2'
      ],
      [
        '17',
        'lately scott tub warcraft sized donald dear discounts enhance windsor',
        'apartment aud cafe infected occurrence acid telecommunications galaxy deutschland yourself developments likewise savings clause eddie schema mechanical advisors biggest sept pix euros newest occurs worry hardware mauritius troubleshooting ask departmental',
        '2',
        '2',
        '73.79',
        '4',
        '2'
      ],
      [
        '15',
        'striking groundwater collectibles arms albums midnight transcript climbing viewpicture accessory',
        'nitrogen missing mars equal mexican bishop congressional singing supplement sustainable basics tender weights flavor lopez sale brook recommend pantyhose effects waves highlight housing male webpage saint yorkshire securely reliance despite',
        '2',
        '3',
        '38.81',
        '1',
        '2'
      ],
      [
        '6',
        'liechtenstein cognitive became incl horn blogger photo seen mapping dennis',
        'value activity organised budapest wed anything fin allan dvd voyeurweb holmes frederick discussing red breed survive relation delay double publicity rec arrangement industry yn craft muslim breath resumes recorders surname',
        '2',
        '1',
        '39.84',
        '3',
        '2'
      ],
      [
        '28',
        'emphasis lg water toe salaries advocate everybody marriott portion neighbors',
        'enquiry is joining scuba juvenile returns copying served northeast lesbian generate publication sure mean weblog cells patents assessed effects given nurse chosen differently henry panasonic installing photo virtually movers cadillac',
        '2',
        '1',
        '63.16',
        '3',
        '2'
      ],
      [
        '23',
        'continue explaining logo resistance submit cgi ng aurora apple throwing',
        'situated agreements vienna villas warrior signing architecture mn fi medline bride iv warned namely scuba cats hardcover throat zoo bryant raid thoughts normally cake emperor safety peripherals matched mixer acquire',
        '1',
        '2',
        '99.01',
        '1',
        '2'
      ],
      [
        '1',
        'secondary nor ricky mercy him namely processor theatre case max',
        'convenient basename jake connectors med proceedings momentum ukraine programming wishlist newest ny tar legitimate phil pharmacology exclusive ks flavor button verbal outlet yale syria further burner cameras duo organ conviction',
        '2',
        '2',
        '72.41',
        '4',
        '1'
      ],
      [
        '27',
        'zoo pts including graduated conjunction rider downloads tonight father interact',
        'influenced every wine beyond religious subsection image ana november expanded legislation stanley chairs possibilities prizes bryant tin rob paste drawn variance lists nb accompanied cb off abs prince pontiac pills',
        '2',
        '2',
        '16.81',
        '1',
        '2'
      ],
      [
        '23',
        'outsourcing normal battery lenses cn catholic interface fisher treated gang',
        'opposed loose replies slip publish dicke error hear lodge pope acceptance np lodging atlas assumption buried spam least pastor prepaid libs designed lord fine properties commissions dies extent household studio',
        '2',
        '1',
        '66.22',
        '1',
        '2'
      ],
      [
        '4',
        'procedures isp companion talent neighborhood arctic don abu smallest presence',
        'bigger columbia aka driven notre bishop designing b romania knitting vatican signup commit offense gnome stages die series magazine vietnamese anthropology algebra tourism defining soul treasures subject applying telecommunications shadows',
        '1',
        '2',
        '2.45',
        '3',
        '1'
      ],
      [
        '10',
        'various susan receivers ri objective mat test people management bool',
        'writer venue zoo novel utilize jose favourite sub sunny ip mailman workers granny however bean republican developing tri theoretical royal treo uk offshore inc quote wright reveals fans iraq trick',
        '2',
        '3',
        '4.71',
        '1',
        '2'
      ],
      [
        '18',
        'ah guard var breathing kw imports accountability midlands compensation via',
        'nasdaq hay virginia returned wake belongs feat developments surf assigned shell adjustable h s reactions efforts expand condition merchants sunny alignment announce researchers copyrighted hello democrat sends reject apr plays',
        '1',
        '3',
        '98.32',
        '4',
        '2'
      ],
      [
        '16',
        'improved encouraged strange apartment vinyl disorders canberra handhelds necessity sat',
        'metadata walk newsletters mighty mary king boutique inquiries drawn copy mentor offline revolutionary alcohol tablets quarter shortcuts beef gang nearest burden analyses palm buildings outdoors candle kinds luck occupations decision',
        '2',
        '1',
        '48.73',
        '2',
        '1'
      ],
      [
        '8',
        'fails price occupational margin season optics spider inherited failing mathematical',
        'declare information dim targets factory limits contacting moore nudist fitting protect township chester noticed ranging docs grip overhead docs bring underground developmental psychology mali val biology lasting completion interpretation punk',
        '1',
        '2',
        '90.54',
        '1',
        '1'
      ],
      [
        '8',
        'ten beast acid zope axis my gourmet avoid strategic particle',
        'shift verify reviewing ah julian matching shorter oaks damages abuse hearts acceptable programmer confidential dosage cleared spreading statewide strong intellectual convinced thongs conducted specifies confidential late estonia develop antiques blues',
        '2',
        '1',
        '83.42',
        '3',
        '2'
      ],
      [
        '22',
        'ago differences movers harbor bias agrees contest notes puts planets',
        'linking curtis conferencing folk tri citations bathroom meat transcription mrna wright gates calvin evaluating environments cope therapist brave joyce ti prairie prefers hd creation facts mitsubishi beverage seeking travis possibilities',
        '2',
        '2',
        '15.12',
        '4',
        '1'
      ],
      [
        '3',
        'modeling climbing better approximately center potatoes hosted hq singh las',
        'financial nepal trucks souls fluid walnut poster suitable pressed limitations specials louis micro keep configuration carl nc arrivals ted liability experiencing ak aerospace euros ultra wv staying hydrocodone package compute',
        '1',
        '1',
        '58.86',
        '1',
        '1'
      ],
      [
        '11',
        'receive tb physicians contract removable amd permanent destinations teens prescribed',
        'commonly pointer holds focusing dm advertisement assumption beatles tiles entertaining hairy indicating causing chapters commonly pray cho political mike talks butler penetration whole ant cost subscribers pose celebs mumbai ext',
        '2',
        '3',
        '49.87',
        '2',
        '2'
      ],
      [
        '12',
        'blogger premiere musicians either retrieval wisdom sells passport rights penn',
        'philippines directors needle cornwall dude rv eagles amazing drawings codes limitation traveller kodak beauty vi brave boxed aud brutal limitations biggest hunter differently remark covers continent minus wallace female disposition',
        '2',
        '1',
        '98.09',
        '2',
        '1'
      ],
      [
        '18',
        'wet status cultural initial minor portal slovakia advertisements late reliable',
        'aol rating enjoyed halo linux charm joyce relate wto finger digit shuttle de co api accepting se princeton individuals pk co communities read vsnet illustrated stake masters boutique evaluation brian',
        '1',
        '3',
        '34.39',
        '2',
        '2'
      ],
      [
        '24',
        'tunes hierarchy contain realize saved macro happen rather installations symphony',
        'restaurants rural db southampton religious subsequent president balance promises demonstrated curtis legendary taken comparative associations aspect athletes favourites dark no require sims give sentence spoke protect adjustment ir bridge buildings',
        '2',
        '1',
        '18.65',
        '1',
        '2'
      ],
      [
        '2',
        'county psychological starts webshots johnson cas relate atlantic robust dozen',
        'conceptual ranging prediction coffee neutral learn contest dome sources sake tasks correct rip equipment girls string needed tribes besides shown taking victim nursing bar quotes decided upon safety gratis technology',
        '2',
        '3',
        '78.83',
        '2',
        '1'
      ]

      
     `
    );
  }
  
