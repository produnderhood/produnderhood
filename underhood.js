const name = 'produnderhood';
const site = 'produnderhood.ru';

const description = 'Коллективный твиттер продакт-менеджеров';

module.exports = {
  underhood: {
    name,
    description,
  },
  github: {
    user: 'produnderhood',
    repo: 'produnderhood',
  },
  curator: {
    email: 'igrekde@gmail.com',
    twitter: 'igrekde',
  },
  site: {
    title: 'Сайт @' + name,
    description: description,
    // TODO: RSS "feed_url": "https://" + site + "/rss.xml",
    site_url: 'https://' + site + '/',
  },
};
