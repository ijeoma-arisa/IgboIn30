import { 
  HomeIcon, 
  PlayCircleIcon,
  TvIcon,
  MusicalNoteIcon,
  CameraIcon,
  HeartIcon
} from '@heroicons/react/24/solid';
import { GlobeAltIcon } from '@heroicons/react/24/outline';

export const links = [
  { name: 'Home', href: '/menu', icon: HomeIcon },
  { name: 'Good News', href: '/menu/good-news', icon: HeartIcon},
  { name: 'YouTube Lessons', href: '/menu/youtube-lessons', icon: PlayCircleIcon},
  { name: 'Videos', href:'/menu/videos', icon: TvIcon },
  { name: 'Music', href:'/menu/music', icon: MusicalNoteIcon },
  { name: 'Websites', href:'/menu/websites', icon: GlobeAltIcon },
  { name: 'Social Media', href: '/menu/social-media', icon: CameraIcon },
];

export const studyOptions = links.slice(2).map((link) => link.name);