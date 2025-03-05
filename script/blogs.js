document.addEventListener("DOMContentLoaded", function () {
  const backBtn = document.getElementById("btn-index");

  if (backBtn) {
    backBtn.addEventListener("click", function () {
      window.location.href = "index.html"; // ✅ Redirect to index.html
    });
  }

  // Blogs page navigation
  const blogs = document.getElementById("blogsID");

  if (blogs) {
    blogs.addEventListener("click", function () {
      window.location.href = "./blogs.html";
    });
  }
});
