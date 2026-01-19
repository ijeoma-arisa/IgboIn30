export default function Calendar(){
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };

  const todayString = today.toLocaleDateString('en-US', options);
  
  return (
    <div className="text-black">
      {todayString}
    </div>
  );
}