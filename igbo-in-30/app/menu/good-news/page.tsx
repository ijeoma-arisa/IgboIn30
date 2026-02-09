import { Metadata } from 'next';
import Card from '@/app/ui/Card';

export const metadata: Metadata = {
  title: 'Good News',
};

export default function Page(){
  return (
    <main>
      <h1 className="text-black text-center mb-4 text-xl md:text-3xl font-bold">
        {metadata.title?.toString()}
      </h1>
      <div className="flex flex-col items-center gap-6 text-black">
        <Card className="w-3/4 min-h-20 sm:w-full justify-center text-center">
          <p className="font-semibold">You're already on your way to learning Igbo!</p>
          <p>👏 Kụọ onwe gị aka (Clap for yourself) 👏 </p>
        </Card>

        <Card className="w-3/4 min-h-20 sm:w-full justify-center text-center">
          <p>I was able to teach myself Igbo by practicing <span className="font-semibold">for 30 minutes a day</span>!</p>
          <p className="font-bold">But I couldn't have done it without God</p>
        </Card>

        <h1 className="font-bold text-xl">The Gospel</h1>
        <Card className="w-full min-h-20 justify-center">
          <p>🔸 God created us to be in relationship with Him and each other</p>
          <p>🔸 <span className="font-bold"> Bad News: </span> As humans, we constantly do bad things that distance us from God</p>
          <p>🔸 <span className="font-bold"> Good News: </span> God decided to restore our relationship with Him because He loves us: </p>
          <p className="italic px-10 py-4 font-bold">
            "For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." 
            (John 3:16 NKJV)
          </p>
          <p>🔸 God sent Jesus Christ to die for our sins, and He came back to life before returning to Heaven</p>
          <p>🔸 Jesus' sacrifice allows us to experience eternal life with God in spite of our imperfections</p>
        </Card>

        <Card className="w-full min-h-20 justify-center items-center">

          <h1 className="font-bold text-xl mt-4"> 
            Jesus Christ gave us the gift of salvation from our sins.
          </h1>

          <h1 className="font-bold text-xl"> 
              It is up to us to accept or reject this gift.
          </h1>

        </Card>

      <h1 className="font-bold text-xl mt-4">
        A Prayer to Accept Jesus Christ as Lord and Savior:
      </h1>
      <Card className="w-full min-h-20 justify-center pl-6">
        <p> Dear God,</p>
        
        <br></br>
        <p> I come before you with a willing and expectant heart. I confess that I am an imperfect human being in need of a Savior. I have sinned against You and other people in many different ways. </p> 

        <br></br>   
        <p> Thank you for loving me enough to send your Son, Jesus Christ, to die for my sins. 
        I believe with my heart that You raised Jesus Christ from the dead and that He is seated with You in heaven today. </p>

        <br></br>
        <p> I confess with my mouth that Jesus Christ is Lord of my life. </p>
        
        <br></br>
        <p> I accept your gift of salvation, Lord. Please be with me as I take this new step with You. Help me to be obedient to Your will for my life. </p>
        
        <br></br>
        <p> Thank you for being a loving and holy Father. </p>
        
        <br></br>
        <p> In Jesus' Name I pray,</p>
        
        <br></br>
        <p>Amen.</p>
    
      </Card>

      <Card className="w-full min-h-20 justify-center pl-6 items-center font-bold">
        Welcome Child of God! I'm so glad you're here
      </Card>

      <Card className="w-full min-h-20 justify-center pl-6 items-center font-bold">
        Here are some Christian Igbo resources 
      </Card>


      </div>
    </main>
  );
}