import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Page() {
  return <p className="text-black">Home</p>
}