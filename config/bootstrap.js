/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {
	var razas = [	
					{nombre: "mestizo"},
					{nombre: "Akbash"},
					{nombre: "Akita americano (American akita)"},
					{nombre: "Akita"},
					{nombre: "Alano español"},
					{nombre: "Alapaha blue blood bulldog"},
					{nombre: "American Curl"},
					{nombre: "American shorthair"},
					{nombre: "American Staffordshire terrier"},
					{nombre: "American wirehair"},
					{nombre: "Angora turco"},
					{nombre: "Antiguo perro de muestra danés (Gammel Dansk Hønsehund)"},
					{nombre: "Antiguo perro de pastor inglés (Old English sheepdog, Bobtail)"},
					{nombre: "Aphrodite's Giants"},
					{nombre: "Australian Mist"},
					{nombre: "Australian silky terrier"},
					{nombre: "Azawakh"},
					{nombre: "Azul ruso"},
					{nombre: "Basenji"},
					{nombre: "Basset artesiano de Normandía (Basset artésien normand)"},
					{nombre: "Basset azul de Gascuña (Basset bleu de Gascogne)"},
					{nombre: "Basset hound"},
					{nombre: "Basset leonado de Bretaña (Basset fauve de Bretagne)"},
					{nombre: "Beagle"},
					{nombre: "Beagle-Harrier"},
					{nombre: "Bedlington terrier"},
					{nombre: "Bengala"},
					{nombre: "Bichón boloñés (Bolognese, Boloñés)"},
					{nombre: "Bichón de pelo rizado (Bichon à poil frisé)"},
					{nombre: "Bichón habanero (Bichon Havanais, Habanero)"},
					{nombre: "Bichón maltés (Maltese, Maltés)"},
					{nombre: "Billy"},
					{nombre: "Bobtail japonés"},
					{nombre: "Boerboel"},
					{nombre: "Bombay"},
					{nombre: "Border terrier"},
					{nombre: "Bosque de Noruega"},
					{nombre: "Boston Terrier"},
					{nombre: "Boxer (Deutscher Boxer, Boxer alemán)"},
					{nombre: "Boyero australiano (Australian cattle dog)"},
					{nombre: "Boyero de Appenzell (Appenzeller Sennenhund)"},
					{nombre: "Boyero de Entlebuch (Entlebucher Sennenhund, Entlebucher)"},
					{nombre: "Boyero de Flandes (Bouvier des Flandres, Vlaamse Koehond)"},
					{nombre: "Boyero de las Ardenas (Bouvier des Ardennes)"},
					{nombre: "Boyero de montaña bernés (Berner Sennenhund)"},
					{nombre: "Braco alemán de pelo cerdoso (Deutsch Stichelhaar)"},
					{nombre: "Braco alemán de pelo corto (Deutsch Kurzhaar)"},
					{nombre: "Braco alemán de pelo duro (Deutsch Drahthaar)"},
					{nombre: "Braco alemán de pelo largo (Deutsch Langhaar)"},
					{nombre: "Braco de Ariege (Braque de l'Ariège)"},
					{nombre: "Braco de Auvernia (Braque d'Auvergne)"},
					{nombre: "Braco de Bourbonnais (Braque du Bourbonnais)"},
					{nombre: "Braco de Weimar (Weimaraner)"},
					{nombre: "Braco eslovaco de pelo duro (Slovenský Hrubosrsty Stavac, Ohar)"},
					{nombre: "Braco francés tipo Gascuña de talla grande (Braque français type Gascogne, grande taille)"},
					{nombre: "Braco francés tipo Pirineos talla pequeña (Braque français type Pyrénées, petite taille)"},
					{nombre: "Braco húngaro de pelo corto (Rövidszörü Magyar Vizsla, Vizsla)"},
					{nombre: "Braco húngaro de pelo duro (Drotzörü Magyar Vizsla)"},
					{nombre: "Braco italiano (Bracco Italiano)"},
					{nombre: "Braco Saint-Germain (Braque Saint-Germain)"},
					{nombre: "Brazilian Shorthair"},
					{nombre: "Briquet grifón vendeano (Briquet griffon vendéen)"},
					{nombre: "British Shorthair"},
					{nombre: "Brivon de pelo corto"},
					{nombre: "Brivon de pelo largo"},
					{nombre: "Broholmer"},
					{nombre: "Buhund noruego (Norsk Buhund)"},
					{nombre: "Bull terrier"},
					{nombre: "Bulldog americano"},
					{nombre: "Bulldog francés (Bouledogue français)"},
					{nombre: "Bulldog"},
					{nombre: "Bullmastiff"},
					{nombre: "Burmilla"},
					{nombre: "Burmés"},
					{nombre: "Cairn terrier"},
					{nombre: "California Spangled"},
					{nombre: "Cane corso italiano (Perro corso italiano)"},
					{nombre: "Caniche"},
					{nombre: "Cavalier King Charles Spaniel"},
					{nombre: "Cazador de alces noruego gris (Norsk Elghund Grå)"},
					{nombre: "Cazador de alces noruego negro (Norsk Elghund Sort)"},
					{nombre: "Cazador de alces sueco (Jämthund)"},
					{nombre: "Ceylon"},
					{nombre: "Chartreux"},
					{nombre: "Chesapeake Bay Retriever (Cobrador de la bahía de Chesapeake)"},
					{nombre: "Chihuahua"},
					{nombre: "Chow chow"},
					{nombre: "Cimarrón uruguayo"},
					{nombre: "Cirneco dell'Etna"},
					{nombre: "Clumber spaniel"},
					{nombre: "Cobrador de Nueva Escocia (Nova Scotia Duck Tolling Retriever)"},
					{nombre: "Cocker spaniel americano (American Cocker Spaniel)"},
					{nombre: "Cocker spaniel inglés (English Cocker Spaniel)"},
					{nombre: "Collie barbudo (Bearded collie)"},
					{nombre: "Collie de la frontera (Border collie)"},
					{nombre: "Collie de pelo corto (Collie smooth)"},
					{nombre: "Collie de pelo largo (Collie rough)"},
					{nombre: "Cornish rexx"},
					{nombre: "Coton de Tuléar"},
					{nombre: "Crestado chino (Chinese Crested Dog)"},
					{nombre: "Curly Coated Retriever (Cobrador de pelo rizado)"},
					{nombre: "Cymric"},
					{nombre: "Dachshund"},
					{nombre: "Dandie dinmont terrier"},
					{nombre: "Deutsch Langhaar"},
					{nombre: "Devon rex"},
					{nombre: "Doberman"},
					{nombre: "Dogo argentino"},
					{nombre: "Dogo canario"},
					{nombre: "Dogo de Burdeos (Dogue de Bordeaux)"},
					{nombre: "Dogo del Tíbet (Do-Khyi)"},
					{nombre: "Dogo mallorquín (Ca de Bou)"},
					{nombre: "Doguillo (Pug, Carlino)"},
					{nombre: "Don Sphynx"},
					{nombre: "Dorado africano"},
					{nombre: "Dálmata (Dalmatinac)"},
					{nombre: "Espinone (spinone italiano)"},
					{nombre: "Eurasier"},
					{nombre: "Europeo Común"},
					{nombre: "Exótico de Pelo Corto (Exotic ShortHair Persian Cat)"},
					{nombre: "Fila brasilero (Fila Brasileiro)"},
					{nombre: "Fila de San Miguel (Cão Fila de São Miguel)"},
					{nombre: "Flat Coated Retriever (Cobrador de pelo liso)"},
					{nombre: "FoldEx (Exótico de Orejas Dobladas) - Raza Reconocida Oficialmente por la CCA/AFC (Canadian Cat Association / Association Féline Canadienne)"},
					{nombre: "Fox terrier de pelo de alambre (Wire fox terrier)"},
					{nombre: "Fox terrier de pelo liso (Smooth fox terrier)"},
					{nombre: "Foxhound americano (American foxhound)"},
					{nombre: "Foxhound inglés (English foxhound)"},
					{nombre: "Galgo español"},
					{nombre: "Gascon saintongeois"},
					{nombre: "German Rex"},
					{nombre: "Golden Retriever (Cobrador dorado)"},
					{nombre: "Gonzcy Polski"},
					{nombre: "Gos d'Atura Catalá (perro de pastor catalán)"},
					{nombre: "Gran basset grifón vendeano (Grand Basset griffon vendéen)"},
					{nombre: "Gran boyero suizo (Grosser Schweizer Sennenhund)"},
					{nombre: "Gran danés (Deutsche Dogge, Dogo alemán)"},
					{nombre: "Gran grifón vendeano (Grand griffon vendéen)"},
					{nombre: "Gran munsterlander (Grosser Münsterländer)"},
					{nombre: "Gran sabueso anglo-francés blanco y naranja (Grand anglo-français blanc et orange)"},
					{nombre: "Gran sabueso anglo-francés blanco y negro (Grand anglo-français blanc et noir)"},
					{nombre: "Gran sabueso anglo-francés tricolor (Grand anglo-français tricolore)"},
					{nombre: "Gran sabueso azul de Gascuña (Grand bleu de Gascogne)"},
					{nombre: "Greyhound"},
					{nombre: "Grifón azul de Gascuña (Griffon bleu de Gascogne)"},
					{nombre: "Grifón belga (Griffon belge)"},
					{nombre: "Grifón de Bruselas (Griffon bruxellois)"},
					{nombre: "Grifón de muestra bohemio de pelo duro (Ceský Fousek)"},
					{nombre: "Grifón de muestra Korthals de pelo duro (Griffon d arrêt à poil dur Korthals)"},
					{nombre: "Grifón del Nivernais (Griffon nivernais)"},
					{nombre: "Grifón leonado de Bretaña (Griffon fauve de Bretagne)"},
					{nombre: "Habana brown"},
					{nombre: "Harrier"},
					{nombre: "Himalayo"},
					{nombre: "Hokkaïdo"},
					{nombre: "Hovawart"},
					{nombre: "Husky siberiano (Siberian Husky)"},
					{nombre: "Irish Glen of Imaal Terrier"},
					{nombre: "Irish soft coated wheaten terrier"},
					{nombre: "Jack Russell terrier"},
					{nombre: "Kai"},
					{nombre: "Kangal (perro de pastor turco)"},
					{nombre: "Kelpie australiano (Australian kelpie)"},
					{nombre: "Kerry blue terrier"},
					{nombre: "Khao Manee"},
					{nombre: "King Charles spaniel"},
					{nombre: "Kishu"},
					{nombre: "Klee Kai de Alaska (mini husky)"},
					{nombre: "Komondor"},
					{nombre: "Korat"},
					{nombre: "Kromfohrländer"},
					{nombre: "Kuvasz"},
					{nombre: "Labrador Retriever (Cobrador del labrador)"},
					{nombre: "Laika de Siberia occidental (Zapadno-Sibirskaïa Laïka)"},
					{nombre: "Laika de Siberia oriental (Vostotchno-Sibirskaïa Laïka)"},
					{nombre: "Laika ruso-europeo (Russko-Evropeïskaïa Laïka)"},
					{nombre: "Lakeland terrier"},
					{nombre: "Landseer"},
					{nombre: "Lebrel afgano (Afghan Hound, Afgano)"},
					{nombre: "Lebrel escocés (Deerhound)"},
					{nombre: "Lebrel húngaro (Magyar Agar)"},
					{nombre: "Lebrel irlandés (Irish Wolfhound)"},
					{nombre: "Lebrel polonés (Chart Polski)"},
					{nombre: "Lebrel ruso para la caza (Russkaya Psovaya Borzaya, Barzoï)"},
					{nombre: "Lebrel árabe (Sloughi)"},
					{nombre: "Leonberger"},
					{nombre: "Lhasa Apso"},
					{nombre: "Lundehund noruego (Norsk Lundehund)"},
					{nombre: "Maine Coon"},
					{nombre: "Malamute de Alaska (Alaskan malamute)"},
					{nombre: "Manchester terrier"},
					{nombre: "Manx"},
					{nombre: "Mastiff"},
					{nombre: "Mastín del Alentejo (Rafeiro do Alentejo)"},
					{nombre: "Mastín del Pirineo"},
					{nombre: "Mastín español"},
					{nombre: "Mastín napolitano (Mastino napoletano)"},
					{nombre: "Mau egipcio"},
					{nombre: "Mudi"},
					{nombre: "Munchkin"},
					{nombre: "Norfolk terrier"},
					{nombre: "Norwich terrier"},
					{nombre: "Ocicat"},
					{nombre: "Ojos azules"},
					{nombre: "Oriental de pelo largo"},
					{nombre: "Oriental"},
					{nombre: "Parson Russell terrier"},
					{nombre: "Pastor alemán (Deutscher Schäferhund)"},
					{nombre: "Pastor australiano (Australian shepherd)"},
					{nombre: "Pastor australiano stumpy tail (Australian stumpy tail cattle dog)"},
					{nombre: "Pastor belga (Chien de berger belge)"},
					{nombre: "Pastor Bergamasco (Cane da pastore Bergamasco, Bergamasco)"},
					{nombre: "Pastor blanco suizo (Berger Blanc Suisse)"},
					{nombre: "Pastor croata (Hrvatski Ovcar)"},
					{nombre: "Pastor de Anatolia (Coban Köpegi)"},
					{nombre: "Pastor de Asia Central (Sredneasiatskaïa Ovtcharka)"},
					{nombre: "Pastor de Beauce (Berger de Beauce, Beauceron)"},
					{nombre: "Pastor de Bosnia-Herzegovina y Croacia (Tornjak)"},
					{nombre: "Pastor de Brie (Berger de Brie, Briard)"},
					{nombre: "Pastor de Karst (Kraski Ovcar)"},
					{nombre: "Pastor de los Pirineos de cara rasa (Berger des Pyrénées à face rase)"},
					{nombre: "Pastor de los Pirineos de pelo largo (Berger des Pyrénées à poil long)"},
					{nombre: "Pastor de Picardía (Berger de Picardie, Berger Picard)"},
					{nombre: "Pastor de Rusia Meridional (Ioujnorousskaïa Ovtcharka)"},
					{nombre: "Pastor de Shetland (Shetland sheepdog, Sheltie)"},
					{nombre: "Pastor del Cáucaso (Kavkazskaïa Ovtcharka)"},
					{nombre: "Pastor finlandés de Laponia (Lapinporokoïra)"},
					{nombre: "Pastor holandés (Hollandse herdershond)"},
					{nombre: "Pastor islandés (Islenskur Fjárhundur)"},
					{nombre: "Pastor mallorquín (Ca de Bestiar)"},
					{nombre: "Pastor Maremmano-Abruzzese (Cane da pastore Maremmano-Abruzzese)"},
					{nombre: "Pastor polaco de las llanuras (Polski Owczarek Nizinny)"},
					{nombre: "Pastor polaco de Podhale (Polski Owczarek Podhalanski)"},
					{nombre: "Pastor portugués (Cão da Serra de Aires)"},
					{nombre: "Pastor rumano de los Cárpatos (Ciobanesc Romanesc Carpatin, Carpatin)"},
					{nombre: "Pastor rumano de Mioritza (Ciobanesc Romanesc Mioritic)"},
					{nombre: "Pekinés (Pekingese)"},
					{nombre: "Pequeño basset grifón vendeano (Petit Basset griffon vendéen)"},
					{nombre: "Pequeño brabanzón (Petit Brabançon)"},
					{nombre: "Pequeño lebrel italiano (Piccolo Levriero Italiano)"},
					{nombre: "Pequeño munsterlander (Kleiner Münsterländer)"},
					{nombre: "Pequeño perro holandés para la caza acuática (Kooikerhondje)"},
					{nombre: "Pequeño Perro León (Petit chien lion, Lowchen)"},
					{nombre: "Pequeño perro ruso (Russkiy Toy)"},
					{nombre: "Pequeño sabueso azul de Gascuña (Petit bleu de Gascogne)"},
					{nombre: "Perdiguero alemán (Deutscher Wachtelhund)"},
					{nombre: "Perdiguero de Burgos"},
					{nombre: "Perdiguero de Drente (Drentse Patrijshond)"},
					{nombre: "Perdiguero frisón (Stabyhoun)"},
					{nombre: "Perdiguero portugués (Perdigueiro Português)"},
					{nombre: "PerFold (Persa de Orejas Dobladas) - Raza Experimental en el ámbito de la WCF (World Cat Federation)"},
					{nombre: "Perro de agua americano (American Water Spaniel)"},
					{nombre: "Perro de agua de Romagna (Lagotto Romagnolo)"},
					{nombre: "Perro de agua español"},
					{nombre: "Perro de agua francés (Barbet)"},
					{nombre: "Perro de agua frisón (Wetterhoun)"},
					{nombre: "Perro de agua irlandés (Irish Water Spaniel)"},
					{nombre: "Perro de agua portugués (Cão de agua Português)"},
					{nombre: "Perro de Canaán (Canaan Dog)"},
					{nombre: "Perro de Castro Laboreiro (Cão de Castro Laboreiro)"},
					{nombre: "Perro de Groenlandia (Grønlandshund)"},
					{nombre: "Perro de los faraones (Pharaoh hound)"},
					{nombre: "Perro de montaña de la Sierra de la Estrella (Cão da Serra da Estrela)"},
					{nombre: "Perro de montaña de los Pirineos (Chien de montagne des Pyrénées)"},
					{nombre: "Perro de montaña del Atlas (Chien de Montagne de Atlas, Aïdi)"},
					{nombre: "Perro de nutria (Otterhound)"},
					{nombre: "Perro de osos de Carelia (Karjalankarhukoira)"},
					{nombre: "Perro de Taiwán (Taiwan Dog)"},
					{nombre: "Perro finlandés de Laponia (Suomenlapinkoira)"},
					{nombre: "Perro jindo coreano (Korea Jindo Dog)"},
					{nombre: "Perro lobo checoslovaco (Ceskoslovenský Vlcak)"},
					{nombre: "Perro lobo de Saarloos (Saarlooswolfhond, Saarloos)"},
					{nombre: "Perro negro y fuego para la caza del mapache (Black and tan coonhound)"},
					{nombre: "Perro sin pelo del Perú"},
					{nombre: "Perro sin pelo mexicano (Xoloitzcuintle)"},
					{nombre: "Perro smous holandés (Hollandse Smoushond)"},
					{nombre: "Perro sueco de Laponia (Svensk Lapphund)"},
					{nombre: "Perro tailandés con una cresta sobre la espalda (Thai ridgeback dog)"},
					{nombre: "Perro tejonero alpino (Alpenländische Dachsbracke)"},
					{nombre: "Perro tejonero de Westfalia (Westfälische Dachsbracke)"},
					{nombre: "Perro tejonero sueco (Drever)"},
					{nombre: "Persa Americano o Moderno (Modern Persian Cat)"},
					{nombre: "Persa Clásico o Tradicional (Traditional Persian Cat)"},
					{nombre: "Peterbald"},
					{nombre: "Pinscher alemán (Deutscher Pinscher)"},
					{nombre: "Pinscher austriaco (Österreichischer pinscher)"},
					{nombre: "Pinscher miniatura (Zwergpinscher)"},
					{nombre: "Pitbull terrier americano"},
					{nombre: "Pixi Bob"},
					{nombre: "Podenco canario"},
					{nombre: "Podenco ibicenco"},
					{nombre: "Podenco portugués (Podengo Português)"},
					{nombre: "Pointer inglés (English Pointer)"},
					{nombre: "Poitevin"},
					{nombre: "Porcelana (Porcelaine)"},
					{nombre: "Pudelpointer"},
					{nombre: "Puli"},
					{nombre: "Pumi"},
					{nombre: "Ragdoll"},
					{nombre: "Rastreador de las montañas de Baviera (Bayrischer Gebirgsschweisshund)"},
					{nombre: "Rastreador del Hanover (Hannoverscher Schweisshund)"},
					{nombre: "Rhodesian ridgeback (Perro crestado rodesiano)"},
					{nombre: "Rottweiler"},
					{nombre: "Sabueso alemán (Deutsche Bracke)"},
					{nombre: "Sabueso anglo-francés de tamaño mediano (Anglo-Français de petite vénerie)"},
					{nombre: "Sabueso artesiano (Chien d Artois, Artois)"},
					{nombre: "Sabueso austriaco negro y fuego (Brandlbracke, Vieräugl)"},
					{nombre: "Sabueso de Bosnia de pelo cerdoso (Bosanski Ostrodlaki Gonic Barak, Barak)"},
					{nombre: "Sabueso de Halden (Haldenstøvare)"},
					{nombre: "Sabueso de Hamilton (Hamiltonstövare)"},
					{nombre: "Sabueso de Hygen (Hygenhund)"},
					{nombre: "Sabueso de Istria de pelo corto (Istarski Kratkodlaki Gonic)"},
					{nombre: "Sabueso de Istria de pelo duro (Istarski Ostrodlaki Gonic)"},
					{nombre: "Sabueso de montaña de Montenegro (Crnogorski Planinski Gonic)"},
					{nombre: "Sabueso de Posavaz (Posavski Gonic)"},
					{nombre: "Sabueso de San Huberto (Chien de Saint-Hubert, Bloodhound)"},
					{nombre: "Sabueso de Schiller (Schillerstövare)"},
					{nombre: "Sabueso de Smaland (Smålandsstövare)"},
					{nombre: "Sabueso de Transilvania (Erdélyi Kopó)"},
					{nombre: "Sabueso del Ariege (Ariégeois)"},
					{nombre: "Sabueso del Tirol (Tiroler Bracke)"},
					{nombre: "Sabueso eslovaco (Slovenský Kopov)"},
					{nombre: "Sabueso español"},
					{nombre: "Sabueso estirio de pelo áspero (Steirische Rauhhaarbracke)"},
					{nombre: "Sabueso finlandés (Suomenajokoira)"},
					{nombre: "Sabueso francés blanco y naranja (Français blanc et orange)"},
					{nombre: "Sabueso francés blanco y negro (Français blanc et noir)"},
					{nombre: "Sabueso francés tricolor (Français tricolore)"},
					{nombre: "Sabueso helénico (Hellinikos Ichnilatis)"},
					{nombre: "Sabueso italiano de pelo corto (Segugio italiano)"},
					{nombre: "Sabueso italiano de pelo duro (Segugio italiano)"},
					{nombre: "Sabueso noruego (Dunker)"},
					{nombre: "Sabueso polaco (Ogar Polski)"},
					{nombre: "Sabueso serbio (Srpski Gonic)"},
					{nombre: "Sabueso suizo (Schweizer Laufhund-Chien Courant Suisse)"},
					{nombre: "Sabueso suizo pequeño (Schweizerischer Niederlaufhund, Petit chien courant suisse)"},
					{nombre: "Sabueso tricolor serbio (Srpski Trobojni Gonic)"},
					{nombre: "Sagrado de Birmania"},
					{nombre: "Saluki"},
					{nombre: "Samoyedo (Samoiedskaïa Sabaka)"},
					{nombre: "San Bernardo (St. Bernhardshund, Bernhardiner)"},
					{nombre: "Sarplaninac"},
					{nombre: "Schapendoes neerlandés (Nederlandse schapendoes)"},
					{nombre: "Schipperke"},
					{nombre: "Schnauzer gigante (Riesenschnauzer)"},
					{nombre: "Schnauzer miniatura (Zwergschnauzer)"},
					{nombre: "Schnauzer"},
					{nombre: "Scottish Fold"},
					{nombre: "Scottish terrier"},
					{nombre: "Sealyham terrier"},
					{nombre: "Selkirk rex"},
					{nombre: "Serengeti"},
					{nombre: "Setter Gordon (Gordon Setter)"},
					{nombre: "Setter inglés (English Setter)"},
					{nombre: "Setter irlandés rojo (Irish Red Setter)"},
					{nombre: "Setter irlandés rojo y blanco (Irish Red and White Setter)"},
					{nombre: "Seychellois"},
					{nombre: "Shar pei"},
					{nombre: "Shiba"},
					{nombre: "Shih Tzu"},
					{nombre: "Shikoku"},
					{nombre: "Siamés Moderno"},
					{nombre: "Siamés Tradicional"},
					{nombre: "Siamés"},
					{nombre: "Siberiano"},
					{nombre: "Skye terrier"},
					{nombre: "Snowshoe"},
					{nombre: "Spaniel azul de Picardía (Epagneul bleu de Picardie)"},
					{nombre: "Spaniel bretón (Epagneul Breton)"},
					{nombre: "Spaniel continental enano (Epagneul nain Continental)"},
					{nombre: "Spaniel de campo (Field Spaniel)"},
					{nombre: "Spaniel de Pont-Audemer (Epagneul de Pont-Audemer)"},
					{nombre: "Spaniel francés (Epagneul français)"},
					{nombre: "Spaniel japonés (Chin)"},
					{nombre: "Spaniel picardo (Epagneul picard)"},
					{nombre: "Spaniel tibetano (Tibetan Spaniel)"},
					{nombre: "Sphynx"},
					{nombre: "Spitz alemán (Deutscher Spitz)"},
					{nombre: "Spitz de los Visigodos (Västgötaspets, Vallhund sueco)"},
					{nombre: "Spitz de Norrbotten (Norrbottenspets)"},
					{nombre: "Spitz finlandés (Suomenpystykorva)"},
					{nombre: "Spitz japonés (Nihon Supittsu)"},
					{nombre: "Springer spaniel galés (Welsh Springer Spaniel)"},
					{nombre: "Springer spaniel inglés (English Springer Spaniel)"},
					{nombre: "Staffordshire bull terrier"},
					{nombre: "Sussex spaniel"},
					{nombre: "Tchuvatch eslovaco (Slovenský Cuvac)"},
					{nombre: "Terranova (Newfoundland)"},
					{nombre: "Terrier australiano (Australian terrier)"},
					{nombre: "Terrier brasileño (Terrier brasileiro)"},
					{nombre: "Terrier cazador alemán (Deutscher jagdterrier)"},
					{nombre: "Terrier checo (Ceský Teriér)"},
					{nombre: "Terrier de juguete inglés negro y fuego (English Toy Terrier)"},
					{nombre: "Terrier galés (Welsh terrier)"},
					{nombre: "Terrier irlandés (Irish terrier)"},
					{nombre: "Terrier japonés (Nihon teria)"},
					{nombre: "Terrier negro (Tchiorny terrier, Terrier negro ruso)"},
					{nombre: "Terrier tibetano (Tibetan Terrier)"},
					{nombre: "Tonkinés"},
					{nombre: "Tosa"},
					{nombre: "Van Turco"},
					{nombre: "Volpino italiano"},
					{nombre: "Welsh Corgi Cardigan"},
					{nombre: "Welsh Corgi Pembroke"},
					{nombre: "West highland white terrier"},
					{nombre: "Whippet"},
					{nombre: "Yorkshire terrier"}       
	 ];
	Razas.count().exec(function(err, count) {
		if (err) return cb(err);
		if (count > 0) return cb();
		Razas.create(razas).exec(cb);
	});
};
