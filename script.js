window.onload = () => {
    const addBlogPostBtn = document.getElementById("add-blog-post-btn")
    addBlogPostBtn.addEventListener("click", addBlogPost)

    blogPosts.map((blog) => {
        createBlogPost(blog.title, blog.content)
    })
}

const blogPosts = [
    {
        title: "Getting Started with JavaScript",
        content: "JavaScript is a popular programming language used to make websites interactive. Beginners can start by learning variables, functions, conditions, and events."
    },
    {
        title: "Why Exercise Is Important",
        content: "Regular exercise can help improve your strength, energy, and overall health. Even a short workout each day can be a good way to build a healthy habit."
    },
    {
        title: "Exploring Cambodia",
        content: "Cambodia is known for its beautiful temples, rich history, and delicious food. Places such as Angkor Wat, Phnom Penh, and Kampot attract visitors from around the world."
    },
    {
        title: "Tips for Better Studying",
        content: "Creating a study schedule and breaking large tasks into smaller parts can make studying easier. Taking short breaks can also help you stay focused."
    }
]

const createBlogPost = (getTitle, getContent) => {
    // Get <ul> that stores the list of blog post
    const blogPostList = document.getElementById("blog-post")

    // Create <li> for storing the blog
    const blogPost = document.createElement("li")

    // Create <h3> for title
    const title = document.createElement("h3")
    title.textContent = getTitle

    // Create <p> for content
    const content = document.createElement("p")
    content.textContent = getContent    

    // Create edit blog post title <button>
    const editTitleBtn = document.createElement("button")
    editTitleBtn.textContent = "Edit Title"
    editTitleBtn.addEventListener("click", e => editTitle(e.target.parentElement.parentElement))

    // Create edit blog post content <button>
    const editContentBtn = document.createElement("button")
    editContentBtn.textContent = "Edit Content"
    editContentBtn.addEventListener("click", e => editContent(e.target.parentElement.parentElement))

    // Create delete blog post <button>
    const deleteBlogPostBtn = document.createElement("button")
    deleteBlogPostBtn.textContent = "Delete Post"
    deleteBlogPostBtn.addEventListener("click", e => deleteBlogPost(e.target.parentElement.parentElement))
    deleteBlogPostBtn.setAttribute("class", "delete-blog-post-btn")

    // Wrap each element in desired rows
    const titleRow = document.createElement("div")
    titleRow.setAttribute("class", "title-row")

    const contentRow = document.createElement("div")
    contentRow.setAttribute("class", "content-row")

    const btnRow = document.createElement("div")
    btnRow.setAttribute("class", "btn-row")

    // Append blog post title and content, edit title and content <button>, and delete <button>
    titleRow.append(title, editTitleBtn)
    contentRow.append(content)
    btnRow.append(editContentBtn, deleteBlogPostBtn)
    blogPost.append(titleRow, contentRow, btnRow)
    blogPostList.appendChild(blogPost)
}

const addBlogPost = () => {
    const getTitle = prompt("Enter your blog post title: ")
    const getContent = prompt("Enter your blog post content: ")

    // Prevent creating empty blog post
    if (!getTitle || !getContent || getTitle.trim() === "" || getContent.trim() === "") {
        alert("Blog post title and content cannot be empty")
        return
    }

    createBlogPost(getTitle, getContent)
}

const editTitle = (target) => {
    // Prompt the user to edit their title
    const getEditedTitle = prompt("Edit your blog post title: ")

    // Validate if the user does not type anything
    if (!getEditedTitle || getEditedTitle.trim() === "") {
        return
    }

    // Target <li><div>
    const titleToEdit = target.firstChild.firstChild
    titleToEdit.textContent = getEditedTitle
}

const editContent = (target) => {
    // Prompt the user to edit their content
    const getEditedContent = prompt("Edit your blog post content: ")

    // Validate if the user does not type anything
    if (!getEditedContent || getEditedContent.trim() === "") {
        return
    }

    const contentToEdit = target.childNodes[1].firstChild
    contentToEdit.textContent = getEditedContent
}

const deleteBlogPost = (target) => {
    const title = target.firstChild.firstChild.textContent
    const confirmToDelete = confirm(`Are you sure you want to delete this blog post "${title}"?`)

    if (confirmToDelete) {
        target.remove()
        alert(`Blog post "${title}" has been deleted successfully.`)
    }
}