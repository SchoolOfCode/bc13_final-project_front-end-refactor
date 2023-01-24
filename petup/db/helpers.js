//The functions below will create and seed database tables according to schema.
//There's also a function to delete and reset all tables. 
//example to reset table, write this in the terminal : 'npm run db-reset'

import {pool} from "./index.js";

export async function createAllTables() {
    return await pool.query(
      `CREATE TABLE users (
        user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        fullname VARCHAR(50),
      nickname VARCHAR(15),
      email VARCHAR(50),
      phone_number VARCHAR(30),
      profile_image TEXT,
      tagline VARCHAR(150),
      address_region TEXT,
      address_city VARCHAR (50),
      address_postcode VARCHAR (10),
      latitude float,
      longitude float,
  	  sitting_services_enabled boolean,
dog_walking boolean,
house_sitting boolean,
pet_hosting boolean,
pet_hosting_rate int,
house_sitting_rate int,
dog_walking_rate  int,
pet_dog boolean,
pet_cat boolean,
pet_other boolean
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
        profile_image,
        tagline,
        address_region,
        address_city,
        address_postcode,
        latitude,
        longitude,
        sitting_services_enabled,
  dog_walking,
  house_sitting,
  pet_hosting,
  pet_hosting_rate,
  house_sitting_rate,
  dog_walking_rate,
  pet_dog,
  pet_cat,
  pet_other)
          VALUES 
        ('Malcolm New',
  'Brigette',
  'rima5917@yahoo.com',
  '+62-7348-297-878',
  'rare roland determines chan geology flag hamburg invision classical formats',
  'https://xsgames.co/randomusers/assets/avatars/female/12.jpg',
  'East of England',
  'Braintree',
  'CM8 1EF',
  51.792326,
  0.629806,
  true,
  true,
  true,
  true,
  10,
  39,
  10,
  true,
  true,
  true),('Elba Nguyen','Elizbeth','henrietta.meek@wrapped.edu.sn','+36-6858-852-824','biol dallas detroit ranging minute mb educated significance column trout','https://xsgames.co/randomusers/assets/avatars/male/22.jpg','East of England','Braintree','CM8 1EU',51.792068,0.630501,true,true,true,true,22,17,37,true,true,true),('Kina Ridenour','Zenia','lawerencesayre7@hotmail.com','+507-7910-359-632','pale pain pr implement mauritius catherine ski strap ward az','https://xsgames.co/randomusers/assets/avatars/female/40.jpg','East of England','Braintree','CM8 1PH',51.792887,0.629287,true,true,true,true,55,44,58,true,true,true),('Elly Locke','Nicki','makeda.straub@endif.com','+265-1642-726-681','he notebook supervisor tests pantyhose giants suzuki hash wr asus','https://xsgames.co/randomusers/assets/avatars/male/22.jpg','East of England','Braintree','CM8 1PQ',51.793028,0.628977,true,true,true,true,41,28,22,true,false,true),('Leo Stephen','Minerva','melany46044@june.com','+213-7030-689-458','groups crimes spyware unto plug sas adoption denied pictures mercedes','https://xsgames.co/randomusers/assets/avatars/female/43.jpg','East of England','Braintree','CM8 1DX',51.791263,0.629889,true,true,true,true,54,50,47,true,true,true),('Tennie Batiste','Laurene','carisaoh-mast51128@builder.com','+593-7696-576-577','investors linking cartridge move acer coordinates excerpt mixing fred findarticles','https://xsgames.co/randomusers/assets/avatars/male/67.jpg','East of England','Braintree','CM8 1ZJ',51.792284,0.628089,true,true,true,true,26,30,57,true,true,false),('Maurice Swan','Porter','racquel_abney@gmail.com','+509-7319-132-421','facial mix sims involving furniture furthermore contribution outdoor unfortunately campus','https://xsgames.co/randomusers/assets/avatars/female/17.jpg','East of England','Braintree','CM8 1EL',51.791908,0.628009,true,true,true,true,50,48,33,true,true,true),('Makeda Cowell','Edwina','oliva.mcclelland423@odds.com','+255-4956-451-753','assess unless neighbors sweet productivity chelsea jets massage permitted beside','https://xsgames.co/randomusers/assets/avatars/male/34.jpg','East of England','Braintree','CM8 1EN',51.792497,0.627829,true,true,true,true,40,49,26,true,true,true),('Bryan Woods','Taina','willena0@hotmail.com','+967-9227-181-109','hobby shareware african reforms sewing unlikely spell basis copied roster','https://xsgames.co/randomusers/assets/avatars/female/44.jpg','East of England','Braintree','CM8 1ET',51.793582,0.630358,true,true,true,true,50,45,48,true,false,true),('Chanelle Aponte','Janice','inger170@hoping.com','+48-9730-002-292','webpage quantity farmer rapid physically kinase available louis hh med','https://xsgames.co/randomusers/assets/avatars/male/32.jpg','East of England','Braintree','CM8 1XD',51.791315,0.631197,true,true,true,true,43,32,35,true,true,true),('Alverta Street','Maudie','leesa75@hotmail.com','+256-3930-305-862','haiti championships papers screw whereas burn tf sally installing airport','https://xsgames.co/randomusers/assets/avatars/female/54.jpg','North West','Wigan','M46 9WU',53.535127,-2.496903,true,true,true,true,16,34,45,true,true,true),('Cordelia Carlton','Rachal','jamaal36@plastic.com','+213-3830-413-051','columns carmen tender jackets mysimon likes troubleshooting arguments charging attack','https://xsgames.co/randomusers/assets/avatars/male/22.jpg','North West','Wigan','M46 9XF',53.534893,-2.497021,true,true,true,true,32,18,30,true,true,true),('Reatha Garvey','Sharleen','adelaidabinder2@gmail.com','+81-0685-958-093','received partnerships bell rider gifts absolutely blogs managed church booty','https://xsgames.co/randomusers/assets/avatars/female/55.jpg','North West','Wigan','M46 9XE',53.534858,-2.496583,true,true,true,true,49,56,35,true,true,true),('Suzanne Schwartz','Shavonda','jazmine70@poland.us.na','+27-9510-632-762','memphis mat diy minus tt istanbul pain camcorder hitting ag','https://xsgames.co/randomusers/assets/avatars/male/6.jpg','North West','Wigan','M46 9NX',53.535078,-2.495666,true,true,true,true,13,17,15,true,true,true),('Edwina Gilbert','Bronwyn','maxwell68896@japanese.org.tw','+237-6624-745-451','lean common execute vpn license specific domestic sie stockings teenage','https://xsgames.co/randomusers/assets/avatars/female/42.jpg','North West','Wigan','M46 9NU',53.535901,-2.496792,true,true,true,true,43,59,15,true,true,true),('Noah Farrell','Lyndsay','malinda-warren841@gmail.com','+218-1187-271-740','patent downloading sucking notice stranger dow condos peaceful pack wolf','https://xsgames.co/randomusers/assets/avatars/male/44.jpg','North West','Wigan','M46 9QB',53.534575,-2.497863,true,true,true,true,40,32,12,true,true,true),('Svetlana Teel','Andrew','treena-pettway18@yahoo.com','+964-9463-712-054','laos mothers ethiopia salon function fiber operator discover vids state','https://xsgames.co/randomusers/assets/avatars/female/62.jpg','North West','Wigan','M46 9WZ',53.535726,-2.495477,true,true,true,true,49,45,52,true,true,true),('Alise Story','Livia','cherlyn18@hotmail.com','+37-3395-688-766','operational slideshow pockets universe amazing robust ken ruby des fda','https://xsgames.co/randomusers/assets/avatars/male/54.jpg','North West','Wigan','M46 9SF',53.534307,-2.495264,true,true,true,true,53,47,23,true,true,true),('Joann Church','Vertie','roxie8@barbie.com','+354-2145-438-760','alive enforcement sit eyed robin armenia moderator composite donor str','https://xsgames.co/randomusers/assets/avatars/female/57.jpg','North West','Wigan','M46 9PE',53.534994,-2.494427,true,true,true,true,51,37,34,true,true,true),('Vella Tejeda','Raelene','suzan26218@colleges.com','+43-3016-606-667','reload detected signup nice everybody paste awards rows scary vote','https://xsgames.co/randomusers/assets/avatars/male/27.jpg','North West','Wigan','M46 9NT',53.536232,-2.495045,true,true,true,true,10,15,27,true,true,true),('Jacklyn Workman','Karyl','susanna324@developmental.com','+679-8511-759-461','jenny trial fw oakland bureau reasoning pk missing application vic','https://xsgames.co/randomusers/assets/avatars/female/14.jpg','London','Westminster','WC2E 7EA',51.510131,-0.11858,true,true,true,true,10,58,41,true,true,true),('Malia Sheridan','Todd','gary_dubois@afternoon.com','+45-8295-914-627','irish messaging antiques academic latex exceed weak pot information likelihood','https://xsgames.co/randomusers/assets/avatars/male/52.jpg','London','Westminster','WC2E 7ED',51.51013,-0.118605,true,true,true,true,17,21,46,true,true,true),('Malisa Roth','Lela','eloisa-miles@yahoo.com','+58-5410-933-353','thread hypothesis km tips dip other muslim memory series grip','https://xsgames.co/randomusers/assets/avatars/female/34.jpg','London','Westminster','WC2E 7AE',51.510077,-0.118708,true,true,true,true,34,49,25,true,true,true),('Marilynn Dunham','Dortha','ora37@slideshow.com','+354-4952-990-259','advantage symbols take charm ghost gba erp curves civic calm','https://xsgames.co/randomusers/assets/avatars/male/49.jpg','London','Westminster','WC2R 2PP',51.50998,-0.117098,true,true,true,true,17,45,55,true,true,true),('Phyllis Bucher','Ivette','albina_lehmann46@convicted.com','+60-0785-043-420','iron terminology underlying contributing holding teeth marco projectors renaissance speak','https://xsgames.co/randomusers/assets/avatars/female/64.jpg','London','Westminster','WC2R 2AB',51.509981,-0.117073,true,true,true,true,11,56,39,true,true,true),('Deandrea Linkous','Marquetta','torynapier@yahoo.com','+593-3750-907-992','parties feb confidentiality beef inf medical young gone boots tomorrow','https://xsgames.co/randomusers/assets/avatars/male/51.jpg','London','Westminster','WC2R 0BL',51.510033,-0.119301,true,true,true,true,51,46,57,true,true,true),('Sparkle Thornton','Maybelle','jesica.post1660@drove.com','+31-8914-576-685','opposite nc way became telecom drunk replacing pf instructor sec','https://xsgames.co/randomusers/assets/avatars/female/36.jpg','London','Westminster','WC2E 7EE',51.510557,-0.118919,true,true,true,true,50,23,18,true,true,true),('Christal Pritchett','Holli','elin52310@gmail.com','+41-6608-958-729','review controls symbols suits hill monster lived xml tutorial obesity','https://xsgames.co/randomusers/assets/avatars/male/26.jpg','London','Westminster','WC2E 7EN',51.510557,-0.118919,true,true,true,true,37,34,50,true,true,true),('Hae Brennan','Alberta','celsa_mcclure8@mention.com','+31-6292-935-641','incidents notre dealer ids lincoln depot salem loved encouraging uzbekistan','https://xsgames.co/randomusers/assets/avatars/female/41.jpg','London','Westminster','WC2E 7PN',51.510557,-0.118919,true,true,true,true,44,39,58,true,true,true),('Alise Wellman','Sharilyn','haydeedrake3@de.com','+62-2690-958-784','worker learned officially scan participation surgeons rolling revenge transcript targets','https://xsgames.co/randomusers/assets/avatars/male/34.jpg','London','Westminster','WC2R 0BU',51.510288,-0.119507,true,true,true,true,58,43,52,true,true,true);

     `
    );
  }
  

// Scripts for old database //

// export async function createAllTables() {
//   return await pool.query(
//     `CREATE TABLE users (
//       user_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
//       fullname VARCHAR(50),
//     nickname VARCHAR(15),
//     email VARCHAR(50),
//     phone_number VARCHAR(30),
//     profile_image TEXT,
//     address_region TEXT,
//     address_city VARCHAR (50),
//     address_postcode VARCHAR (10),
//     latitude float,
//     longitude float
//   );

//   CREATE TABLE pet_service(
//       service_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
//       sitter_id INTEGER REFERENCES users(user_id),
//     tagline VARCHAR(100),
//     summary TEXT,
//     pet_type VARCHAR(15),
//     service_type VARCHAR(15),
//     price FLOAT,
//     how_many_pets INT,
//     pet_size VARCHAR(15)
//     );

//   `
//   );
// }
// export async function dropAllTables() {
//   return await pool.query("DROP TABLE IF EXISTS users, pet_service;");
// }

// export async function resetAllTables() {
//   return [
//     await dropAllTables(),
//     await createAllTables(),
//     await seedAllTables(),
//   ];
// }

// export async function seedAllTables() {
//   return await pool.query(
//     `INSERT INTO users (fullname,
//                           nickname, 
//                           email,
//                           phone_number, 
//                           profile_image,
//                           address_region, 
//                           address_city, 
//                           address_postcode, 
//                           latitude, 
//                           longitude )
//       VALUES 
//     ('Fatimah Bishop-Griffith',
//     'Cruz',
//     'barriebirch@vision.com',
//     '+33-4437-877-297',
//     'https://xsgames.co/randomusers/assets/avatars/female/52.jpg',
//     'East of England',
//     'Braintree',
//     'CM8 1EF',
//     51.792326,
//     0.629806),
//     ('Aleen Snead','Karol','gertrude05@yahoo.com','+593-8280-529-957','https://xsgames.co/randomusers/assets/avatars/male/6.jpg','East of England','Braintree','CM8 1EU',51.792068,0.630501),('Audry Prescott','Cordie','stevie-montero385@remarkable.com','+260-9236-650-701','https://xsgames.co/randomusers/assets/avatars/female/8.jpg','East of England','Braintree','CM8 1PH',51.792887,0.629287),('Leontine Cruz','Bridget','twana.poole2@boot.com','+66-6539-505-718','https://xsgames.co/randomusers/assets/avatars/male/31.jpg','East of England','Braintree','CM8 1PQ',51.793028,0.628977),('Tawana Hawley','Ossie','claudioharrell@laden.com','+33-2549-898-166','https://xsgames.co/randomusers/assets/avatars/female/3.jpg','East of England','Braintree','CM8 1DX',51.791263,0.629889),('Andreas Tillman','Refugia','amal-buckley@yahoo.com','+221-0465-359-396','https://xsgames.co/randomusers/assets/avatars/male/0.jpg','East of England','Braintree','CM8 1ZJ',51.792284,0.628089),('Gertrude Block','Kimber','columbus067@value.com','+973-6834-040-031','https://xsgames.co/randomusers/assets/avatars/female/7.jpg','East of England','Braintree','CM8 1EL',51.791908,0.628009),('Lizette Musser','Larry','ethyl8@hotmail.com','+92-7650-189-771','https://xsgames.co/randomusers/assets/avatars/male/59.jpg','East of England','Braintree','CM8 1EN',51.792497,0.627829),('Kiesha Corcoran-Batiste','Ellsworth','mabel.mota@reasoning.com','+90-8005-607-975','https://xsgames.co/randomusers/assets/avatars/female/65.jpg','East of England','Braintree','CM8 1ET',51.793582,0.630358),('Fawn Steffen','Randi','harold9@yahoo.com','+503-6951-625-398','https://xsgames.co/randomusers/assets/avatars/male/57.jpg','East of England','Braintree','CM8 1XD',51.791315,0.631197),('Starr Gilliam','Ron','anissa-sizemore788@initiatives.rnu.tn','+506-4826-992-465','https://xsgames.co/randomusers/assets/avatars/female/64.jpg','North West','Wigan','M46 9WU',53.535127,-2.496903),('Jolene Grooms','Douglas','lorriane_mcclary5389@gmail.com','+508-8207-637-326','https://xsgames.co/randomusers/assets/avatars/male/57.jpg','North West','Wigan','M46 9XF',53.534893,-2.497021),('Sibyl Denson','Randa','miles_tomlin@diamonds.com','+265-3832-760-531','https://xsgames.co/randomusers/assets/avatars/female/40.jpg','North West','Wigan','M46 9XE',53.534858,-2.496583),('Sebrina Wylie','Towanda','kiersten_ohara2@rev.com','+33-2605-027-258','https://xsgames.co/randomusers/assets/avatars/male/48.jpg','North West','Wigan','M46 9NX',53.535078,-2.495666),('Edgar Buffington','Kellie','adellrodrigue29@gmail.com','+591-5507-306-661','https://xsgames.co/randomusers/assets/avatars/female/64.jpg','North West','Wigan','M46 9NU',53.535901,-2.496792),('Andree Bussey','Lucinda','barney-lacey13@push.com','+352-1308-094-861','https://xsgames.co/randomusers/assets/avatars/male/0.jpg','North West','Wigan','M46 9QB',53.534575,-2.497863),('Caroyln Marler','So','caylapeachey56014@gmail.com','+591-4233-314-103','https://xsgames.co/randomusers/assets/avatars/female/5.jpg','North West','Wigan','M46 9WZ',53.535726,-2.495477),('Joellen Shin','Barbera','alena.logue25743@diversity.fukushima.fukushima.jp','+49-9904-553-603','https://xsgames.co/randomusers/assets/avatars/male/28.jpg','North West','Wigan','M46 9SF',53.534307,-2.495264),('Shirly Krebs','Holli','princess62339@revision.com','+506-1043-214-217','https://xsgames.co/randomusers/assets/avatars/female/34.jpg','North West','Wigan','M46 9PE',53.534994,-2.494427),('Nakia Tiller','Horacio','thad.pollard@optics.com','+39-0715-915-537','https://xsgames.co/randomusers/assets/avatars/male/40.jpg','North West','Wigan','M46 9NT',53.536232,-2.495045),('Leeanne Humphreys','Ginny','herminia15@interest.openair.museum','+973-1879-628-905','https://xsgames.co/randomusers/assets/avatars/female/67.jpg','London','Westminster','WC2E 7EA',51.510131,-0.11858),('Branda Tallent','Christi','valene_candelaria-alaniz0085@energy.com','+886-8874-753-108','https://xsgames.co/randomusers/assets/avatars/male/49.jpg','London','Westminster','WC2E 7ED',51.51013,-0.118605),('Lauralee Dibble','Chia','major_finnegan@services.com','+358-7912-239-965','https://xsgames.co/randomusers/assets/avatars/female/31.jpg','London','Westminster','WC2E 7AE',51.510077,-0.118708),('Vanna Dennison','Henriette','sanora.croft@verizon.com','+597-9942-029-833','https://xsgames.co/randomusers/assets/avatars/male/27.jpg','London','Westminster','WC2R 2PP',51.50998,-0.117098),('Sunni Wilkerson','Kenneth','donitahoff@hotmail.com','+231-4545-657-749','https://xsgames.co/randomusers/assets/avatars/female/22.jpg','London','Westminster','WC2R 2AB',51.509981,-0.117073),('Johnathon Uribe','Tianna','ilsereinhart42117@gmail.com','+501-4217-183-666','https://xsgames.co/randomusers/assets/avatars/male/58.jpg','London','Westminster','WC2R 0BL',51.510033,-0.119301),('Carla Mccollum','Jenise','sheilah12@leo.cv.ua','+81-2670-820-886','https://xsgames.co/randomusers/assets/avatars/female/1.jpg','London','Westminster','WC2E 7EE',51.510557,-0.118919),('Sona Aponte','Anibal','ryan-miller4210@yahoo.com','+596-5999-491-257','https://xsgames.co/randomusers/assets/avatars/male/20.jpg','London','Westminster','WC2E 7EN',51.510557,-0.118919),('Guadalupe Clary','Emely','krystal91@gmail.com','+44-1639-150-229','https://xsgames.co/randomusers/assets/avatars/female/13.jpg','London','Westminster','WC2E 7PN',51.510557,-0.118919),('Thomas Gustafson','Darcy','adrienne-overstreet5837@hotmail.com','+350-1939-902-619','https://xsgames.co/randomusers/assets/avatars/male/23.jpg','London','Westminster','WC2R 0BU',51.510288,-0.119507
//     );


//     INSERT INTO pet_service (sitter_id, 
//                               tagline, 
//                               summary, 
//                               pet_type, 
//                               service_type, 
//                               price, 
//                               how_many_pets, 
//                               pet_size)               
//       VALUES
//       (
//           23,
//           'dollars passwords ministries nickel warming sullivan superior hiv l advisory',
//           'realtor india thomson church tee diversity hip point colored yr amongst whose blacks neighborhood original affiliation singing budgets degrees exclusion archives gif myanmar brakes peter boy opening speed custody participated',
//           1,
//           2,
//           95.31,
//           4,
//           2
//       ),
//       (4,'administration laundry recipient denmark donation follows blair principles parliament committees','biggest coleman natural stake matches reveals tahoe vegetable arrow recording plus computers gentleman suit handled solar graph blues persistent liberia cheque liked vehicles journey daily reasonably fast superintendent arts vocabulary',2,1,60.12,1,2),(1,'obligation astrology colin performances tft endif lesbians champagne messaging temporary','mandate morning planning lemon studio pope collection another bottle strings und honduras rice joel survivors crew contacting converted resource modem frost linux merger desperate andrews participant engaged australia realized many',1,3,99.39,3,1),(25,'yea miracle cologne novelty dentists dash mayor aurora console christians','terrace demonstrated cancer bruce tooth funds movie capitol toxic applicable influence error battlefield postposted blank dad flip katie er viewpicture floyd separate walt databases copies modelling charlotte domestic poster meaningful',2,2,4.46,3,1),(25,'cardiovascular token pretty clearing rental barbara thumb questionnaire souls still','prix bond supplemental virtually broadband divided risks voters fragrance ment applying eddie permanent amino respect specialties nano contractors initiated changed purpose cv alternatively advocate named o heat being greatly cg',1,2,17.74,1,2),(13,'quarter pulse scene tee exploration rather simplified irish actors vocal','really blowing alot making copy moon montana processor ham switch seo realized tables reasons simultaneously llp christians rc penny lo surfing olive adsl hosts peterson transfer reaches opponent targets doll',2,2,7.64,3,2),(2,'ventures top arrivals losses feelings genuine crafts practices queries payment','sage frequent suggests denver times mailman womens obviously guarantee ownership investigation suburban love defend sociology fp lunch calibration categories investigators ted compaq absolutely amendment mat attacked naughty theology preparation organize',1,3,41.48,2,1),(7,'supervisor mirror know rick prices shanghai meet pb june vendors','width allowance amazon wm villages hotel po olympics roulette fake rogers plugin accessibility menu centre faith sea appointed blue est completion next blogging terror temperature excluded limited gently songs preceding',1,1,3.47,2,1),(2,'write trustees disabled diy extraordinary national required volkswagen girlfriend gen','asin prices consist recreational preliminary analysts chapters refined indexed begun manufacturing bee standings seats james session husband apache establishing fairly orchestra ripe accent andorra crazy kinds supervision registry solving secret',1,1,50.66,1,1),(21,'nt commentary ireland identity resident mechanism choices grave suggests experiment','resorts concentration performs miles encourages poly latino effects girlfriend twelve securely authorization examples pink copied present vacuum offerings interpretation md releases bottle skating mens gibson plots u buffer enclosed depth',2,3,11.86,3,1),(8,'corrections enhancement faculty definitions dried consolidation hey discussed starts lycos','scotland tx designs volleyball compliance lists divided fabrics smallest heated investigate scoring withdrawal tag telecommunications orleans petition put ge addresses excitement nvidia stupid expiration img competing turns declaration tank lesbian',2,3,7.77,1,2),(9,'establishment gourmet debate incoming observe calculators things pichunter cant backed','town fairfield punishment theatre controlled somehow cruz testimonials mtv programmer mins seconds occurrence sg which over partner useful telephone ancient ranked dose bullet duties science hormone rescue czech orders bidding',2,2,97.27,4,2),(9,'pick brazil magazines differential professionals confidentiality valuable concern advise downtown','execute sleeve pi kurt fight colours breach unique dsc paraguay troubleshooting operators options profession twins lines consolidated returning islam throwing translation attorneys initiative monthly opinion explorer close paperback optimal fundraising',1,2,21.76,1,2),(7,'one edinburgh slightly posts random am rio many skiing slovakia','apparently signal accused prozac incorporated avoid wool incident sorted guaranteed anime lie schedules marsh saw ancient buy http vg pal works medium gods honolulu richards jamie strand mph intimate em',1,2,94.41,1,1),(18,'undertaken staff hour jpeg underwear existed outer yrs records kept','sense beverages venezuela wesley indie artist lawyer file restrict stream surround behind hepatitis runtime ftp loop satisfy valve beside culture pakistan showing headphones webster chronicles ebony argued lawrence covers broad',2,1,28.41,2,2),(13,'choices cooper thursday parallel panama deep aluminium tiles wives discipline','diseases mini approve mm staying christians retirement holocaust event exciting contract hostel brunei fibre allow beats cw saved sequences int surgical publications anger withdrawal playstation forbidden april literature cage sense',1,1,97.22,4,2),(21,'m doors implemented jp strategic exploring booth browsers checkout pop','tapes help disclaimer loaded scheduled absent tire proposition cookies teach traveling matrix pottery lows reform hence ms rounds planning tune binding operators nurse misc solar weapons dell prayer tier supervisors',2,3,31.28,4,1),(25,'fig greek ic instantly shareholders army student aircraft wagner bike','strips perception numerous rio internship dallas contests charter meat smithsonian purchasing colleagues optics concrete dm catalogue amy wellington constitute falls tariff ti cedar strictly ya exploration colony olympic power lying',2,1,79.18,1,1),(7,'coordinate iran allowance efficiency mass jj ultimate vacation nor pope','monster singles bobby gossip sound password optics developmental direct inexpensive saint oem depression occasional dr jonathan container festivals urls guys cocktail ti advancement casa center sociology germany liberty regulated romantic',2,3,59.49,2,2),(7,'tells login satellite rg thermal ad scale wall pipe informational','vi receive leisure caution bouquet outcomes small campus johnny sri castle powered turtle want bookings interfaces catering cathedral shipment adam suit pleasant complex apr parliamentary mysimon dip physician confirmation hourly',2,3,49.57,2,2),(25,'republican putting religions nasdaq months staying necessarily tel ocean simon','vat cry mens ukraine jan significant ministers cw qt wondering agency correspondence number emergency vhs registration polo misc reads china from carries eur insulin vsnet networking lighter donald catholic ebook',1,3,23.99,2,1),(22,'venture humanitarian accepts rack score computing tvs chad tells game','fetish together panama setup hostel hq presenting ear johns alex wc louisville idea publicity islam runtime peripherals residential zones metropolitan germany economics delivery specialties sox ecology static underground sussex rebecca',1,2,33.82,2,2),(15,'ks afterwards life route synthesis presented seats congressional blogging developments','fabric strategies hypothetical tb hold torture lawsuit vegetables shade cabinet key cholesterol reference resistant marathon analysts stretch practices composition autumn than ban implied eau cloud queens collections championships railroad kinase',1,3,94.3,3,1),(19,'throwing importance hoping employers defense naked cycles plugin fr legal','substitute beginner exciting protocols allowance guilty avenue starsmerchant girls sans dow requiring congressional dial com ic hungarian after organised prediction cameroon passed classroom readily relevant apparent gourmet old dietary massage',1,1,34.15,3,2),(21,'pee webmaster catering stockholm mounting potential local give shown absorption','diversity vehicle digital worldcat peru asp nitrogen churches activities na teeth zone motorcycles fuzzy wiring holmes inflation invitations expired wait alliance gates lesson adventure picnic membrane noise monica kay gabriel',2,2,21.56,1,2),(10,'emerald moldova cedar determination celebrate copies sixth moves netherlands applies','receiving knew advocacy festival ds lisa horizon tires payable shut ambassador ghana bridal volkswagen axis structured valves downloadable advantage hat settlement chase belarus appliances simultaneously dispatched darkness relating omaha arlington',1,3,77.76,1,1),(24,'organizer rough ago bob structures kenneth fast afghanistan screenshots justice','official personally wherever discussed light calling phase possibly asn bikes response tr suggested chosen michael aged ratios approximate julian seas soft relief norton charms guild behind deadline sword attorney current',1,3,69.4,1,2),(25,'babes specialties explains decreased nec recording contractors computation tel oasis','showing va handle tears myanmar committees adequate traditions regards integration pray lone arrested ta pal coordinate roommate guides multi absorption money hon lancaster swim plugins antiques walk dried kind arbor',1,2,68.07,2,1),(9,'luis flex congressional invitations desire nuclear senators anyone dj une','submissions plant vsnet arise yea discount tale tom sim would divine based immediate maintains bw seas pets anything winter cleanup australia jungle acids banks photography revelation output air sandy cycle',1,2,40.9,2,1),(23,'entrance over valley yukon encoding isolation registrar overnight text turkish','grant ordered prompt academics publicly mem pos exhaust hood parish compounds classic runs subdivision unlike brisbane selections apparel pharmaceutical task professor unix faqs distance diary daughters stake pages relay mario',1,1,26.5,1,2),(15,'rss meaning sep rfc pct unknown donors colon waiting choose','companion ford complement yukon traveller predicted flu daughter flows ob apache ordinary guided modules prostate longer congress alan cent nails black some bend seo wilderness cingular transcript province italiano returns',1,3,12.42,4,2),(15,'jerry determination midwest metric enhance desire consistent prices extract bedding','insulation westminster workshops trailer provider frame chem cordless southeast influence essence assumption marble clocks enjoyed staying helps nextel fascinating welding critics noon experts cooperative egyptian since door implement somewhere continuously',1,3,78.21,3,1),(1,'threatened intensive brook junior engineering ireland alex wan claim pure','wagon satisfy component interviews is ver hip disaster petite specialist payments mirrors basin hits attorney malaysia owned contractors appeared scientific brochure kelly yahoo rough xhtml nasa textbook patrick weighted dc',2,1,80.5,2,2),(27,'hang map moon ranks convenient moscow ross service sheer stadium','matters focuses floyd pod cl discussions cute desert nelson representative component husband compounds holdings difficult freely blues milwaukee outputs devoted martin behind ati lincoln veterinary trademarks grill switching publisher hindu',2,1,71.85,3,2),(16,'eagle persons skills palestinian pm wrong psychological fri rebates cause','healthy experiencing russia db approximate decades practice mixing stage indicate regulation aspect attitudes from closely delhi drinks drawing howard gore partnership spelling budapest garage pushing british toner cohen optimization mo',1,3,84.59,2,1),(9,'terrorism bonus organic integral helped cardiac name beaver serum confident','congo morocco floral obvious america issn hazardous windsor tobacco todd impressed programs homework investigator angle reactions apparent penalty alpine spirituality colored indoor nfl prototype vintage paid modular stomach background fuji',2,2,73.12,1,2),(17,'kitty meal while ve operator resolutions belongs hobby inflation radius','typical wy brunswick peripheral developer scene fur charger engage fiber minimal thongs attractive cloudy yarn positive participate observed assumptions text corpus nodes director plots aye actual daughters flickr feelings mandatory',1,3,31.25,1,1),(29,'iceland fox developmental brandon pumps mardi reports congratulations mv apnic','pain retreat generators charger textiles stockholm lose promoted gamespot puts titans replied doom clicking ni catalogs much greetings findings conducting none supplies tobacco mere tablet juice niger la ga lc',1,1,29.82,2,1),(13,'terminal sapphire bulletin odd reply homepage identifying mathematical crawford sa','exotic willing signing treat tasks wedding authorities bicycle clan shuttle discount mysterious wal panasonic retro limitation daily wilderness storm uw socks baker asked jm needs wrestling syntax equation prostores bluetooth',1,1,71.68,2,1),(14,'victory subaru entitled stretch represents colored vessels twice incident tree','encryption yellow gorgeous kiss nbc fly enables conservation salem words feature tracks peninsula dollars understand deck jury nu week africa evaluated relationships villas controllers slightly metadata gr tex semester results',1,1,32.37,3,1),(4,'bulgarian kathy at announcement bios thread cnn exchange coast gen','licensing neon ray obtaining disorder assuming fingers basic assess loose rhode maryland rising deluxe market earthquake homework herself side equivalent fascinating jenny replace hispanic maybe governmental earthquake durham advisor lions',1,3,32.92,2,1),(23,'deployment gentle election chair blind policies biodiversity indirect uncertainty follows','shipped black superintendent choose tools aviation heading flower reynolds sunglasses rich linux quiet pipe cash outlook weapon championships breed religions lift placing siemens eq islamic disciplines unnecessary grill inside arbitration',2,3,54.1,1,2),(18,'burner arizona fellowship thehun doing competitions texts pregnancy pools parenting','expense bouquet midlands sun temporary closer son hint clients packs diabetes trying family consoles netherlands investors guilty soft marion perform device classified combines forces crossword organisations adopt humans occupation acquisition',2,2,76.71,4,2),(27,'packet conservation spare conferencing submitting luther balloon jets glossary hb','flash committee toner secretary totals breach firewall permit prices oxide reviewing shaved christmas alignment interface replaced competition clock broke guidance penn academics junction exciting virgin converter bean clips stomach dimensional',2,2,93.85,1,2),(3,'drops utility instead ever detailed aluminium theory spank pantyhose weekly','accused butterfly able conviction combines mercedes addition crops gilbert trader dry garden pirates material indigenous nova stunning hate contamination pokemon monsters distributions nj adobe liberia lightbox diving ceiling linked voice',2,3,32.96,2,2),(6,'tongue teens watching directories exchange discrimination harris describing descriptions dish','item pleased jean arrives cms ti frog maps publish firmware vacuum crawford have gaps une cologne infrared ethical pairs record mastercard solar easter vid arbitration gone qld amd resulted eagle',1,2,30.66,1,1),(2,'due chicken manufacturer chan chem paxil metric specifies targeted communication','sig explaining happiness slip survival proposal alike blogs weekends canyon attract leon lose philadelphia notices ccd purchases harder pulling lives ross philips deeply retrieval genes eventually lounge stockings watt warrant',2,3,6.35,4,2),(25,'florida notebook attitudes postings fighter grant minneapolis evolution ended dimensions','moldova violin metric papers fleet runtime landscape accessed cal percent calculators anne tricks right p by voip friendly reported assets thu dennis believe accomplish affect mug compressed democratic measure dinner',1,1,22.08,4,2),(16,'bound emotions worship consequences phones surgical implementation lenses scanner respected','residents islands alone western univ tiger draws clock reason customer contributed involving tissue richmond film dv width yard modification bathrooms epa del latter jimmy mercury license bored warriors ingredients dedicated',1,1,99.04,2,1),(12,'always isle wiki earrings magnitude sleeps bruce hotels postcard sanyo','arrow troy fastest anna shaft even imaging stem deep gabriel malawi plan candy amounts constitution approx norway blood peace birds usc cars army establishing favorite trinidad longer vision sleep quickly',2,1,29.65,1,1);
//    `
//   );
// }

