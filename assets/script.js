var tvshows = [
    'Alice in Borderland',
    'The Good Place',
    'Ratched',
    'Why Women Kill',
    'Ru Paul : Drag Race',
    'Mortel',
    'Titans',
    'Arcane',
    '9-1-1',
    'Sex Education',
    'Lupin',
    '¿Quién Mató a Sara?',
    'Russian Doll',
    'Kingdom',
    'The Umbrella Academy',
    'Plan Coeur',
    'Under The Dome',
    'Family Business',
    'Lucifer',
    'Dexter',
    'Modern Family',
    '10%',
    'How To Get Away With Murder',
    'Queen\'s Gambit',
    'The 100',
    'Gossip Girl',
    'Dr House',
    'Good Doctor',
    '9-1-1 : Lone Star',
    'Alta Mar',
    'Groom',
    'Fresh Off The Boat',
    '13 Reasons Why',
    'The Man In The High Castle',
    'Zoo',
    'I-Zombie',
    'The End Of The Fxxxing World',
    'The Big Bang Theory',
    'Unbelievable',
    'Orange Is The New Black',
    'Mindhunter',
    'The I-Land',
    'Happy!',
    'Black Mirror',
    'Girlboss',
    'Ru Paul : Drag Race All Stars',
    'Santa Clarita Diet',
    'Scream Queens',
    'Glee',
    'Malcolm',
    'One Upon A Time',
    'Code Black',
    'Sense 8',
    'Scorpion',
    'Making A Murderer',
    'Dirk Gently\'s Holistic Detective Agency',
    'Narcos',
    'Sherlock',
    'Prison Break',
    'Pretty Little Liars',
    'Limitless',
    'Dead Of Summer',
    'Buffy The Vampire Slayer',
    'Containment',
    'Once Upon A Time In Wonderland',
    'Lie To Me',
    'Misfits',
    'Charmed',
    'Body Of Proof',
    'Desperate Housewifes',
    'Skins',
    'That\'s So Raven',
    'Mr Robot',
    'Westworld',
    'Scandal',
    'Unbreakable Kimmy Schmidt',
];

var snacks = [
    'des Napolitains',
    'des M&M\'s',
    'des Carambars',
    'des brioches / beurre / confiture',
    'des crèpes',
    'des gaufres',
    'des donuts au chocolat',
    'des donuts aux fruits',
    'des BN à la fraise',
    'des BN au chocolat',
    'des Princes au chocolat',
    'des Princes à la fraise',
    'des Princes à la vanille',
    'des Oursons de LU',
    'des cookies aux pépites de chocolat',
    'des cookies tout chocolat',
    'des cookies aux noix de macadamia',
    'des cookies aux pépites de chocolat goût noix de coco',
    'des Oreos',
    'des Oreos double',
    'des Mini-BN à la fraise',
    'des Mini-BN au chocolat',
    'des Granola',
    'des Pailles de LU',
    'des Petits Ecoliers',
    'des Mikado',
    'des barquettes fraise/chocolat',
    'des Pim\'s',
    'des Kinder Cards',
    'des Kinder Shokobons',
    'des Kinder Maxi',
    'des Kinder Délice',
    'des Kinder Country',
    'des Maltesers',
    'des Pick Up',
    'un assortiment de biscuits "pour le café avec mamie"',
    'des tartelettes à la framboise',
    'des madeleines',
    'des madelaines aux pépites de chocolat',
    'des madeleine fourrées chocolat',
    'un peu de marbré au chocolat',
    'un peu de quatre-quarts',
    'un peu de Brownie',
    'des fruits',
    'des Speculoos',
    'des langues de chat',
    'des Twix',
    'des Snickers',
    'des Mars',
    'des Lion',
    'une glace',
    'une barre de céréale',
    'des Nutella Biscuits',
    'un Brookie',
    'des Pepito mini-Rollos',
    'un bol de céréales Lion',
    'un bol de céréales Smacks',
    'un bol de céréales Trésor',
    'un bol de céréales Spécial K',
    'rien, sheh',
    'des Petits Beurre',
    'des Petits Beurre aux pépites de chocolat',
    'une tartine de pain au Nutella',
    'une tartine de pain à la confiture',
    'des Kinder Bueno',
    'des Kinder Chocolat',
    'des Kinder Surprise',
    'du Toblerone',
    'des Kit-Kat',
    'une tablette de chocolat',
    'un paquet de bonbons qui piquent',
    'un paquet de bonbons qui piquent pas',
    'des Smarties',
    'des Bounty',
    'des Célébrations',
    'des Ferrero',
];

var randomNumber = Math.floor(Math.random() * tvshows.length);
var secondRandomNulber = Math.floor(Math.random() * snacks.length)

var tvshow = tvshows[randomNumber];
var snack = snacks[secondRandomNulber];

document.getElementById('div1').innerHTML = ("Je vous propose <strong>" + tvshow + "</strong> avec <strong>" + snack + "</strong> ?");