export interface WikiCategory {
  id: string;
  title: string;
  icon: string;
  articles: WikiArticle[];
}

export interface WikiArticle {
  id: string;
  title: string;
  content: string;
  tags: string[];
}

export const wikiData: WikiCategory[] = [
  {
    id: 'getting-started',
    title: 'Začínáme',
    icon: 'FaPlay',
    articles: [
      {
        id: 'how-to-connect',
        title: 'Jak se připojit na server',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores odit doloribus reprehenderit laborum consequuntur esse vitae possimus quasi! Perferendis odit aperiam laudantium nesciunt nulla qui dicta nostrum praesentium dignissimos.',
        tags: ['připojení', 'začátek', 'návod']
      },
      {
        id: 'first-steps',
        title: 'První kroky na serveru',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores odit doloribus reprehenderit laborum consequuntur esse vitae possimus quasi! Perferendis odit aperiam laudantium nesciunt nulla qui dicta nostrum praesentium dignissimos.',
        tags: ['začátek', 'tutorial']
      }
    ]
  },
  {
    id: 'economy',
    title: 'Ekonomika',
    icon: 'FaMoneyBill',
    articles: [
      {
        id: 'jobs',
        title: 'Práce a výdělky',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores odit doloribus reprehenderit laborum consequuntur esse vitae possimus quasi! Perferendis odit aperiam laudantium nesciunt nulla qui dicta nostrum praesentium dignissimos.',
        tags: ['práce', 'peníze', 'výdělek']
      },
      {
        id: 'banking',
        title: 'Bankovní systém',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores odit doloribus reprehenderit laborum consequuntur esse vitae possimus quasi! Perferendis odit aperiam laudantium nesciunt nulla qui dicta nostrum praesentium dignissimos.',
        tags: ['banka', 'peníze', 'účet']
      }
    ]
  },
  {
    id: 'vehicles',
    title: 'Vozidla',
    icon: 'FaCar',
    articles: [
      {
        id: 'car-dealership',
        title: 'Nákup vozidel',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores odit doloribus reprehenderit laborum consequuntur esse vitae possimus quasi! Perferendis odit aperiam laudantium nesciunt nulla qui dicta nostrum praesentium dignissimos.',
        tags: ['auta', 'nákup', 'dealer']
      },
      {
        id: 'car-maintenance',
        title: 'Údržba vozidel',
        content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias dolores odit doloribus reprehenderit laborum consequuntur esse vitae possimus quasi! Perferendis odit aperiam laudantium nesciunt nulla qui dicta nostrum praesentium dignissimos.',
        tags: ['auta', 'opravy', 'údržba']
      }
    ]
  }
];