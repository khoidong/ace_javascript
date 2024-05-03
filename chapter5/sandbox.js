//object literal
// const blogs = [
//     { title: "how to do this", likes: 30 },
//     { title: "how to do that", likes: 40 },
// ];

//console.log(blogs);
let user = {
    name: "crystal",
    age: 30,
    email: "crystal@codeblog.com",
    location: "wpg",
    blogs: [
        { title: "how to do this", likes: 30 },
        { title: "how to do that", likes: 40 },
    ],
    login: function () {
        console.log("the user is logged in");
    },
    logout: () => {
        console.log("the user logged out");
    },
    logBlogs() {
        console.log("This user has written this blog:");
        this.blogs.forEach((blog) => {
            console.log(blog.title, blog.likes);
        });
    },
};
user.login();
user.logout();
user.logBlogs();
