const animate = document.querySelector(".animate")

const observer = new IntersectionObserver(entries => {
  console.log(entries)
})
observer.observe(sectionOne)
