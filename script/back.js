document.addEventListener("DOMContentLoaded", function () {
  const blogs = document.getElementById("blogsID");

  if (blogs) {
    blogs.addEventListener("click", function () {
      window.location.href = "./blogs.html";
    });
  }
});
