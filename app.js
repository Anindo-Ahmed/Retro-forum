const loadPosts = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    // console.log(data.posts)
    displayPosts(data.posts);
}

const displayPosts = (posts) => {
    const postContainer = document.getElementById('post-container');
    
    posts.forEach(post => {
        // console.log(post);
        const card = document.createElement('div');
        
        card.className = 'flex flex-col lg:flex-row flex-1 gap-6 font-inter ';
        card.innerHTML = `
            <div id="post-card" class="flex flex-col lg:flex-row gap-6 bg-[#F3F3F5] p-10 rounded-2xl mb-6">
                    <div class="relative">
                        <div class="bg-slate-50 rounded-lg h-16 w-16 relative">
                            <div class="bg-green-800 rounded-full h-4 w-4 absolute top-0 right-0"></div>
                            <img src="${post.image}" alt="">
                        </div> 
                    </div>
                    <div>
                        <div class="flex flex-row lg:gap-5">
                            <p><span># </span>${post.category}</p>
                            <p><span>Author :</span> ${post.author.name}</p>
                        </div>
                        <h2 class="font mulish text-xl font-bold my-4">${post.title}</h2>
                        <p class="text-[#12132d99] mb-5">${post.description}</p>
                        <hr class="border-dashed border-2 mb-5">
                        <div class="flex flex-row justify-between">
                            <div class="flex flex-row gap-6">
                                <div class="flex flex-row lg:gap-3">
                                    <img src="./images/message-icon.svg" alt="" class="h-7 w-7">
                                    <p>${post.comment_count}</p>
                                </div>
                                <div class="flex flex-row lg:gap-3">
                                    <img src="./images/eye-icon.svg" alt="" class="h-7 w-7">
                                    <p>${post.view_count}</p>
                                </div>
                                <div class="flex flex-row lg:gap-3">
                                    <img src="./images/clock-hour-icon.svg" alt="" class="h-7 w-7">
                                    <p>${post.posted_time}</p>
                                </div>  
                            </div>
                            <div>
                                <button id="button" onclick = "getReadPost('${post.title}', '${post.view_count}')"><img src="./images/email .svg" alt=""></button>
                            </div>
                        </div>
                    </div>
            </div>
            
        `;

        postContainer.appendChild(card);
        
    });
}

const getReadPost = (title, count) => {
    const postTitle = document.getElementById('post-title');
    
    const div = document.createElement('div');
    div.className = 'flex flex-col lg:flex-row justify-between items-center bg-white p-4 rounded-2xl mb-5';
    div.innerHTML = `
        <div class="my-4 w-2/3">
            <h2 id="post-title" class="font mulish font-semibold">${title}</h2>
        </div>
        <div class="flex flex-row gap-2">
            <img src="./images/eye-icon.svg" alt="" class="h-7 w-7">
            <p id="view-count" class="font-inter">${count}</p>
        </div>
    `;
    postTitle.appendChild(div);  
}

const loadLatestPost = async () => {
    const responsible = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const latestPosts = await responsible.json();
    console.log(latestPosts);

    displayLatestPosts(latestPosts);
    
}

const displayLatestPosts = (latestPosts) => {
    const latestPostsContainer = document.getElementById('latest-post-container');
    
    latestPosts.forEach(latestPost => {
        console.log(latestPost);
        const newPost = document.createElement('div');
        newPost.innerHTML = `
        <div class="card p-6 border-2 border-[#12132d26] rounded-3xl">
            <div><img src="${latestPost.cover_image}" alt="" class="rounded-2xl mb-6"></div>
            <div class="flex flex-row gap-2 mb-4">
                <img src="./images/calendar.svg"  class="h-6 w-6" alt="">
                <p> ${(latestPost.author.posted_date) ? latestPost.author.posted_date : 'No Publish Date'}</p>
            </div>
            <h3 class="font-bold text-lg mb-3">${latestPost.title}</h3>
            <p class="text-[#12132d99] mb-4">${latestPost.description}</p>
            <div class="flex flex-row gap-4">
                <div>
                    <img src="${latestPost.profile_image}" alt="" class="h-16 w-16 rounded-full">
                </div>
                <div>
                    <p class="font-bold mb-2">${latestPost.author.name}</p>
                    <p class="text-[#12132d99] text-sm">${(latestPost.author.designation) ? latestPost.author.designation : 'Unknown'}</p>
                </div>
            </div>
        </div>
    `;
    latestPostsContainer.appendChild(newPost);
        

    });
    
}

loadPosts();
loadLatestPost();
displayLatestPosts()