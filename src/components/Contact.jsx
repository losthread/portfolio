import {Mail, Send} from 'lucide-react'
import SectionIntro from './ui/SectionIntro'
import ContactCard from './ui/ContactCard';

export default function Contact() {
  return (
    <section id='contact' className="flex flex-col gap-11 px-6 md:px-20 lg:px-30">
      <SectionIntro sectionName={'Get In Touch'} />

      <div className='flex flex-col items-center gap-6'>
        <div className='flex items-center gap-3 justify-center border px-5 py-2 rounded-4xl border-primary/30'>
          <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse"></div>
          <h4 className='font-mono text-muted-foreground text-sm'>Availaible for opportunites</h4>
        </div>

        <h3 className='text-3xl font-bold'>
          Let's Build Something{" "}
          <span 
            className='text-primary' 
            style={{ 
              textShadow: "0 0 16px var(--primary)" // Adjust RGB to match your primary color
            }}
          >
            Amazing
          </span>
        </h3>

        <p className='text-muted-foreground max-w-142 text-center'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, my inbox is always open!</p>
        
        <a href="mailto:parthnaik.office@gmail.com"
           className='flex gap-3 items-center font-medium text-md text-primary border border-primary rounded-lg py-4 px-7 bg-primary/11 hover:bg-primary hover:text-black transition-all duration-300 ease-in'>
            <Mail size={20} />
            Say Hello
            <Send size={18} />
        </a>

        <div className='flex gap-6 mt-6'>
          <ContactCard 
            icon={'github'}
            social={'GitHub'}
            username={'@losthread'}
            url={"https://github.com/losthread"}
          />

          <ContactCard 
            icon={'linkedin'}
            social={'LinkedIn'}
            username={'in/parth-naik'}
            url={"https://www.linkedin.com/in/parth-naik-a26944351/?skipRedirect=true"}
          />

          <ContactCard 
            icon={'twitter'}
            social={'Twitter'}
            username={'@Parth_Naik013'}
            url={"https://x.com/Parth_Naik013"}
          />

          <ContactCard 
            icon={'mail'}
            social={'Mail'}
            username={'parthnaik.office@gmail.com'}
            url={"mailto:parthnaik.office@gmail.com"}
          />
        </div>
      </div>
    </section>
  );
}