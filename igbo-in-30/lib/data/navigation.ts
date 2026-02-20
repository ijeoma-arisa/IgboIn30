export const regularSideNavLinks = [
  { name: 'Home', href: '/menu', icon: 'Home' },
  { name: 'YouTube Lessons', href: '/menu/youtube-lessons', icon: 'PlayCircle' },
  { name: 'Videos', href:'/menu/videos', icon: 'Tv' },
  { name: 'Music', href:'/menu/music', icon: 'MusicalNote' },
  { name: 'Websites', href:'/menu/websites', icon: 'GlobeAlt' },
  { name: 'Social Media', href: '/menu/social-media', icon: 'Camera' },
];

export const studyLinks = regularSideNavLinks.slice(2);
export const studyOptions = studyLinks.map((link) => link.name);

export const specialSideNavLinks = [
  { name: 'Tutorial', href: '/menu/tutorial', icon: 'QuestionMarkCircle'},
  { name: 'Good News', href: '/menu/good-news', icon: 'Gift' },
  { name: 'About', href:'/menu/about', icon: 'InformationCircle'},
];