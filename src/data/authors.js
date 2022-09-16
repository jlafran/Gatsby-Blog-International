const authors = {
  hugomn: {
    name: 'RTI LATINA SRL',
    additionalName: 'hugomn',
    address: 'Berlin DE',
    birthDate: '1986-09-01',
    birthPlace: 'Juiz de Fora BR',
    brand: 'RTI LATINA SRL',
    children: '...',
    email: 'hugomn@gmail.com',
    familyName: 'Nogueira',
    gender: 'Male',
    givenName: 'Hugo',
    height: '...',
    homeLocation: 'Berlin',
    jobTitle: 'Engineering Lead',
    knows: '...',
    memberOf: '...',
    nationality: 'Brazilian',
    owns: '...',
    parent: '...',
    performerIn: '...',
    publishingPrinciples: '...',
    relatedTo: '...',
    seeks: '...',
    sibling: '...',
    spouse: {
      additionalName: 'Lunara Leto Costa',
      name: 'Lunara Leto Costa',
      givenName: 'Lunara',
      familyName: 'Costa',
      gender: 'Female',
      nationality: 'Brazilian',
      homeLocation: 'Berlin',
    },
    telephone: '...',
    weight: '...',
    workLocation: '...',
    worksFor: '...',
    description: '...',
    disambiguatingDescription: '...',
    identifier: '...',
    image: 'http://www.gravatar.com/avatar/9174fca44b5ca403593ac9cb2407e0e7',
    sameAs: 'https://hugomagalhaes.com/en/about/',
    url: 'https://hugomagalhaes.com/en/about/',
  },
};

const getAuthor = (id) => {
  const author = {
    ...authors[id],
    '@type': 'Person',
  };
  return author ? author : authors[0];
};

module.exports = {
  authors,
  getAuthor,
};
