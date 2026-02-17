import { Embedding } from '@/lib/definitions';

export const youtubePlaylists: Embedding[] = [
  {
    name: 'Igbo Learning Resources',
    embedText: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=Pm_1aTkjAKCeOjFi&amp;list=PLIcprcNO7gwEoev6mBMHrvrCDxtZL-jBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    name: 'Beginner Igbo Lessons',
    embedText: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=Z1kwJeQsguPXAGqY&amp;list=PLIcprcNO7gwGDOc2woFJs-oLWf73EzcMc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
  {
    name: 'Intermediate Igbo Lessons',
    embedText: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=rvH-wvbgLK7v9yb7&amp;list=PLIcprcNO7gwHTG70y4pf3O6sRO908OaXQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
   {
    name: 'Christian Igbo Lessons',
    embedText: '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=FMckUREwVFaIhAQH&amp;list=PLIcprcNO7gwFi9odyXPajALBYtM1OsQTT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
  },
];

export const numYoutubePlaylists = youtubePlaylists.length;