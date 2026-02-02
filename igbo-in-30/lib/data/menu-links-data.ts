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
  { name: 'Home', href: '/menu', icon: HomeIcon, textColor: 'text-gray-500', hover: 'hover:bg-gray-500' },
  { name: 'Good News', href: '/menu/good-news', icon: HeartIcon, textColor: 'text-pink-500', hover: 'hover:bg-pink-500'},
  { name: 'YouTube Lessons', href: '/menu/youtube-lessons', icon: PlayCircleIcon, textColor: 'text-red-600', hover: 'hover:bg-gray-500'},
  { name: 'Videos', href:'/menu/videos', icon: TvIcon, textColor:'text-blue-800', hover: 'hover:bg-blue-800' },
  { name: 'Music', href:'/menu/music', icon: MusicalNoteIcon, textColor: 'text-purple-500', hover: 'hover:bg-purple-500' },
  { name: 'Websites', href:'/menu/websites', icon: GlobeAltIcon, textColor: 'text-cyan-500', hover: 'hover:bg-cyan-500' },
  { name: 'Social Media', href: '/menu/social-media', icon: CameraIcon, textColor: 'text-amber-500', hover: 'hover:bg-amber-500' },
];

export const studyLinks = links.slice(2);
export const studyOptions = studyLinks.map((link) => link.name);