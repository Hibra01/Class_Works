const blogs = document.querySelector(".blogs");

function showBlogs(response){
    blogs.innerHTML = "";

    response.data.forEach((blog) => {

        blogs.innerHTML += `
                        <div class="col">
                            <div class="card" style="width: 18rem;">
                                <div class="card-body">
                                  <h5 class="card-title">${blog.title}</h5>
                                  <h6 class="card-subtitle mb-2 text-body-secondary">${blog.body}</h6>
                                  <p class="card-text">${blog.author}</p>
                                  <a href="#" class="card-link">Card link</a>
                                  <a href="#" class="card-link">Another link</a>
                                </div>
                              </div>
                        </div>
        `
    });
}

export {showBlogs};