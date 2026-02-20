export const links = [
  { name: 'Home', href: '/menu', icon: 'Home' },
  { name: 'Good News', href: '/menu/good-news', icon: 'Heart' },
  { name: 'YouTube Lessons', href: '/menu/youtube-lessons', icon: 'PlayCircle' },
  { name: 'Videos', href:'/menu/videos', icon: 'Tv' },
  { name: 'Music', href:'/menu/music', icon: 'MusicalNote' },
  { name: 'Websites', href:'/menu/websites', icon: 'GlobeAlt' },
  { name: 'Social Media', href: '/menu/social-media', icon: 'Camera' },
];

// export const links = [
//   { name: 'Home', href: '/menu', icon: HomeIcon },
//   { name: 'Good News', href: '/menu/good-news', icon: HeartIcon },
//   { name: 'YouTube Lessons', href: '/menu/youtube-lessons', icon: PlayCircleIcon },
//   { name: 'Videos', href:'/menu/videos', icon: TvIcon },
//   { name: 'Music', href:'/menu/music', icon: MusicalNoteIcon },
//   { name: 'Websites', href:'/menu/websites', icon: GlobeAltIcon },
//   { name: 'Social Media', href: '/menu/social-media', icon: CameraIcon },
// ];

export const studyLinks = links.slice(2);
export const studyOptions = studyLinks.map((link) => link.name);

export const specialLinks = [
  { name: 'Tutorial', href: '/', icon: 'QuestionMarkCircle'},
  { name: 'Good News', href: '/menu/good-news', icon: 'Gift' },
  { name: 'About', href:'/', icon: 'InformationCircle'},
];
// export const specialLinks = [
//   { name: 'Tutorial', href: '/', icon: QuestionMarkCircleIcon},
//   { name: 'Good News', href: '/menu/good-news', icon: GiftIcon },
//   { name: 'About', href:'/', icon: InformationCircleIcon},
// ];