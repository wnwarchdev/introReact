export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const heroContents = {
  title: 'Things to do <sup>soon!</sup>',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
};

export const headerContents = {
  icon: 'rocket',
};

export const faqContents = {
  header: 'FAQ:',
  text: 'Lorem ipsum dolor sit amet, FAQ',
};

export const infoContents = {
  header: 'Info:',
  text: 'Lorem ipsum dolor sit amet, INFO',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'How to get to the <sup>moon!</sup>',
    description: 'My plan of winning space race!',
    image: 'https://i.ya-webdesign.com/images/cartoon-earth-png-6.png',
  },
  {
    id: 'list-3',
    title: 'Contact with either have been  <sup>unsuccessful</sup>',
    description: 'Seems your buddies are dead...',
    image: 'https://lh3.googleusercontent.com/proxy/5HRQdu0S2HI-EP3CbExTEfrymLBRq2su7Us4F-8xyeMm5pzXct3aDKOq9xyj9eY1m_XezXoodk-b6mbSOH6kuoRC1DKJqIC4DyO7Q61cR6UKlVgv_TfQ7g4x_r5RJxQ6x4eCfrU',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Testing',
    icon: 'microscope',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Staff',
    icon: 'user-plus',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Compound',
    icon: 'industry',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Parts',
    icon: 'space-shuttle',
  },
  {
    id: 'column-6',
    listId: 'list-2',
    title: 'Resources',
    icon: 'cog',
  },
  {
    id: 'column-7',
    listId: 'list-3',
    title: 'Weapon',
    icon: 'crosshairs',
  },
  {
    id: 'column-8',
    listId: 'list-3',
    title: 'Visited',
    icon: 'globe',
  },
  {
    id: 'column-9',
    listId: 'list-3',
    title: 'Defeated',
    icon: 'trophy',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'Elementary physics',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Aerodynamics Vol 1&2',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Thrust',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Material Stress',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'Engineers',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Pilots',
  },
  {
    id: 'card-7',
    columnId: 'column-4',
    title: 'Launchpad',
  },
  {
    id: 'card-8',
    columnId: 'column-4',
    title: 'Construction Yard',
  },
  {
    id: 'card-9',
    columnId: 'column-4',
    title: 'Control Center',
  },
  {
    id: 'card-10',
    columnId: 'column-5',
    title: 'Rocket Stage 01',
  },
  {
    id: 'card-11',
    columnId: 'column-5',
    title: 'Rocket Stage 02',
  },
  {
    id: 'card-12',
    columnId: 'column-5',
    title: 'Rocket Stage 03',
  },
  {
    id: 'card-13',
    columnId: 'column-5',
    title: 'Command module',
  },
  {
    id: 'card-14',
    columnId: 'column-5',
    title: 'Landing module',
  },
  {
    id: 'card-15',
    columnId: 'column-6',
    title: 'Fuel',
  },
  {
    id: 'card-16',
    columnId: 'column-6',
    title: 'Oxidizer',
  },
  {
    id: 'card-17',
    columnId: 'column-6',
    title: 'Compressed air',
  },
  {
    id: 'card-18',
    columnId: 'column-6',
    title: 'Life support',
  },
  {
    id: 'card-18',
    columnId: 'column-6',
    title: 'Equipment',
  },
  {
    id: 'card-19',
    columnId: 'column-7',
    title: 'Pistol',
  },
  {
    id: 'card-20',
    columnId: 'column-7',
    title: 'Super shotgun',
  },
  {
    id: 'card-21',
    columnId: 'column-7',
    title: 'Plasma rifle',
  },
  {
    id: 'card-22',
    columnId: 'column-7',
    title: 'BFG 9000',
  },
  {
    id: 'card-23',
    columnId: 'column-8',
    title: 'Mars',
  },
  {
    id: 'card-24',
    columnId: 'column-8',
    title: 'Phobos',
  },
  {
    id: 'card-25',
    columnId: 'column-8',
    title: 'Deimos',
  },
  {
    id: 'card-26',
    columnId: 'column-8',
    title: 'Hell',
  },
  {
    id: 'card-27',
    columnId: 'column-9',
    title: 'Imp',
  },
  {
    id: 'card-27',
    columnId: 'column-9',
    title: 'Pinky',
  },
  {
    id: 'card-27',
    columnId: 'column-9',
    title: 'Cacodemon',
  },
  {
    id: 'card-27',
    columnId: 'column-9',
    title: 'Mancubus',
  },
  {
    id: 'card-27',
    columnId: 'column-9',
    title: 'Icon of Sin',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
