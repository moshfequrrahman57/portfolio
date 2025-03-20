import React from 'react';
import { useEffect } from 'react';
const Skills = () => {

    useEffect(()=>{
      (
        ()=>{
    const elements=document.querySelectorAll("#skill_main > div");
   // console.dir(elements);
        //  console.log(name);
    console.log("Ok");
    //console.dir(texts);
     const observer2=new IntersectionObserver((items)=>{
      items.forEach((item)=>{
        if(item.isIntersecting){
          console.dir("add skill");
         item.target.classList.add('anim_skill');
        }
        else{
          console.log(`remove skill`);
          item.target.classList.remove('anim_skill');
        }
      })
     },
    {threshold:0.1});

    elements.forEach(name=> observer2.observe(name));
    const skill_title=document.getElementById('skill_title');
    observer2.observe(skill_title);
        }
      )()
    },[])

    return (
        <div  className=' mx-5 w-[calc(100%-40px)] h-fit overflow-y-auto scroll-smooth flex flex-col items-center justify-between py-3'>
            <p id='skill_title' className='font-bold text-4xl animation_before my-7 uppercase'>Skills</p>
            <div id='skill_main' className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7'>
            <div className="skill_card animation_skill delay-200 ">
                <img src="/html-5-svgrepo-com.svg" alt="html5" className='w-14 h-14' />
                <p className='font-bold text-2xl'>HTML 5</p>
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi quaerat placeat? Iusto error nam, mollitia voluptatibus necessitatibus nemo rem.</p>
            </div>
            <div className="skill_card animation_skill delay-300 ">
                <img src="/css-3-svgrepo-com.svg" alt="CSS 3" className='w-14 h-14' />
                <p className='font-bold text-2xl'>CSS 3</p>
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi quaerat placeat? Iusto error nam, mollitia voluptatibus necessitatibus nemo rem.</p>
            </div>
            <div className="skill_card animation_skill delay-500 ">
                <img src="/tailwind-svgrepo-com.svg" alt="Tailwind" className='w-14 h-14' />
                <p className='font-bold text-2xl'>Tailwindcss</p>
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi quaerat placeat? Iusto error nam, mollitia voluptatibus necessitatibus nemo rem.</p>
            </div>
            <div className="skill_card animation_skill delay-700 ">
                <img src="/js-svgrepo-com.svg" alt="Js" className='w-14 h-14' />
                <p className='font-bold text-2xl'>JS ES6</p>
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi quaerat placeat? Iusto error nam, mollitia voluptatibus necessitatibus nemo rem.</p>
            </div>
            <div className="skill_card animation_skill delay-300 ">
                <img src="/react-svgrepo-com.svg" alt="React" className='w-14 h-14' />
                <p className='font-bold text-2xl'>React</p>
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi quaerat placeat? Iusto error nam, mollitia voluptatibus necessitatibus nemo rem.</p>
            </div>
            <div className="skill_card animation_skill delay-200 ">
                <img src="/nextjs-fill-svgrepo-com.svg" alt="Next.JS" className='w-14 h-14' />
                <p className='font-bold text-2xl'>Next.JS</p>
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi quaerat placeat? Iusto error nam, mollitia voluptatibus necessitatibus nemo rem.</p>
            </div>
            <div className="skill_card animation_skill delay-700 ">
                <img src="/github-svgrepo-com.svg" alt="Github" className='w-14 h-14' />
                <p className='font-bold text-2xl'>HTML 5</p>
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi quaerat placeat? Iusto error nam, mollitia voluptatibus necessitatibus nemo rem.</p>
            </div>
            <div className="skill_card animation_skill delay-500 ">
                <img src="/key-svgrepo-com.svg" alt="jwt" className='w-14 h-14' />
                <p className='font-bold text-2xl'>JWT Token</p>
                <p className='font-thin'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore quasi quaerat placeat? Iusto error nam, mollitia voluptatibus necessitatibus nemo rem.</p>
            </div>

           
            
            </div>

        </div>
    );
};

export default Skills;