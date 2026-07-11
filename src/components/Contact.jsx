import {Mail, Send} from 'lucide-react'
import SectionIntro from './ui/SectionIntro'
import ContactCard from './ui/ContactCard';

export default function Contact() {
  return (
    <section id='contact' className="flex flex-col gap-11 px-6 md:px-20 lg:px-30 mb-12">
      <SectionIntro sectionName={'Get In Touch'} />

      <div className='flex flex-col items-center gap-6'>
        <div className='flex items-center gap-3 justify-center border px-3 py-1.5 lg:px-5 lg:py-2 rounded-4xl border-primary/30'>
          <div className="h-2 w-2 rounded-full bg-green-600 animate-pulse"></div>
          <h4 className='font-mono text-muted-foreground text-xs lg:text-sm'>Availaible for opportunities</h4>
        </div>

        <h3 className='text-xl md:text-2xl lg:text-3xl text-center font-bold'>
          Let's Build Something{" "}
          <span 
            className='text-primary' 
            style={{ 
              textShadow: "0 0 16px var(--primary)"
            }}
          >
            Amazing
          </span>
        </h3>

        <p className='text-muted-foreground max-w-142 text-center'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, my inbox is always open!</p>
        
        <a href="mailto:parthnaik.office@gmail.com"
          className='group flex gap-3 items-center font-medium text-sm 
                      rounded-lg py-3 px-4 lg:py-4 lg:px-7 border
                      text-primary border-primary bg-primary/10
                      hover:bg-primary hover:text-black
                      transition-all duration-300 ease-in-out'
        >
            <Mail className='size-5 lg:size-6 transition-transform duration-500 group-hover:scale-115' />
            <span>Say Hello</span>
            <Send className='size-5 lg:size-6 transition-transform duration-500 group-hover:translate-x-1.5' />
        </a>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 lg:mt-4'>
          <ContactCard 
            icon={'github'}
            social={'GitHub'}
            username={'@losthread'}
            url={"https://github.com/losthread"}
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