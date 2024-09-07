<script>
    import Step from './Step.svelte';

    let steps = [
        {name: 'Project 1', icon: 'fa-solid fa-cart-shopping'},
        {name: 'Project 2', icon: 'fa-solid fa-cart-shopping'},
        {name: 'Project 3', icon: 'fa-solid fa-cart-shopping'},
    ]

    let aboutData = [
        {name: 'Introduction', content: 'I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in building websites using HTML, CSS, JavaScript, and React. I am also proficient in using Node.js, Express, and MongoDB to build the backend of websites. I am always looking for new opportunities to learn and grow as a developer.'},
        {name: 'Education', content: 'I have a Bachelor\'s degree in Computer Science from the University of California, Berkeley. I graduated with honors and have been working as a developer for the past 5 years.'},
        {name: 'Experience', content: 'I have worked on a variety of projects, ranging from small websites to large web applications. I have experience working with clients to understand their needs and deliver high-quality websites that meet their requirements.'},
    ]
</script>


<main class="flex flex-col flex-1 p-4">
    <section id="intro" class="grid grid-cols-1 lg:grid-cols-2 gap-10 oy-6 sm:py-14">
        <div class="flex flex-col ml-5 lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I am <span class="poppins text-violet-400">Anzar</span> Peerzada <br/> Full Stack 
                <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in building websites using HTML, CSS, JavaScript, and React. I am also proficient in using Node.js, Express, and MongoDB to build the backend of websites. I am always looking for new opportunities to learn and grow as a developer.
            </p>
            <a class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl 
                poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" 
                href="#contact">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover: translate-x-full z-0 duration-200" />
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/anzar.png"} alt="Anzar Peerzada" class="z-[2] max-h-[70vh] object-cover" />
        </div>  
    </section>

    <section id ="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                <span class="poppins text-violet-400">Projects</span> I have worked on
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Some of my <span class="poppins text-violet-400">Projects</span>
            </h3>   
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step = {steps[0]}>
                <p class="text-base sm:text-lg md:text-xl">
                    This is a project I worked on that involved building a website for a client. The website was built using HTML, CSS, and JavaScript. I also used React to build the frontend of the website. The website is fully responsive and works on all devices.
                </p>
            </Step> 
            
            <Step step = {steps[1]}>
                <p class="text-base sm:text-lg md:text-xl">
                    This is a project I worked on that involved building a website for a client. The website was built using HTML, CSS, and JavaScript. I also used React to build the frontend of the website. The website is fully responsive and works on all devices.
                </p>
            </Step> 

            <Step step = {steps[2]}>
                <p class="text-base sm:text-lg md:text-xl">
                    This is a project I worked on that involved building a website for a client. The website was built using HTML, CSS, and JavaScript. I also used React to build the frontend of the website. The website is fully responsive and works on all devices.
                </p>
            </Step> 
        </div>  
    </section>

    <section id="about" class = "py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class ="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700
         after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3>
        </div>                  

        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each aboutData as data, index}
                <div class="flex gap-6 sm:gap-8">
                    <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0{index + 1}</p>
                    <div class="flex flex-col gap-6 sm:gap-8">
                        <h3 class="text-2xl sm:text-3xl md:text-5xl">{data.name}</h3>
                        <p class="text-base sm:text-lg md:text-xl">{data.content}</p>
                    </div>
                </div>
            {/each}
        </div>
    </section>

</main>