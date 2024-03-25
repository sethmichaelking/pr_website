import React from 'react'
import { IoCheckmark } from "react-icons/io5";
import photo from './social.png'
function ValueProp() {
  return (
    <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/>
                <img class="w-full hidden dark:block rounded-md" src={photo} alt="dashboard image"/>
                <div class="mt-4 md:mt-0">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Want your inbox to <br/> <span class='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent animate-fade bg-clip-text'> look like this? </span> </h2>
                    <ul class='text-white text-left'>
                        <li class='flex'> 
                        <IoCheckmark />Journalists are constantly looking for sources on a tight deadline. 
                        </li>
                        <li class='flex'>
                        <IoCheckmark />This isn't sponsored content. Get quoted as an expert in news articles. 
                        </li>
                        <li class='flex'>
                        <IoCheckmark />100% legal and above board. No one is paid to include you in the article.
                        </li> 
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default ValueProp