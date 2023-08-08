document.addEventListener('DOMContentLoaded', function() {
  const categorySections = document.querySelectorAll('.category');

  categorySections.forEach(section => {
    const categoryHeading = section.querySelector('h2');
    const contentTogglers = section.querySelectorAll('.content-toggler');
    const contents = section.querySelectorAll('.content');

    categoryHeading.addEventListener('click', () => {
      section.querySelector('.index').classList.toggle('show');
    });

    contentTogglers.forEach(toggler => {
      toggler.addEventListener('click', () => {
        contents.forEach(content => {
          content.classList.remove('selected');
        });
        const selectedContent = toggler.nextElementSibling;
        selectedContent.classList.toggle('selected');
      });
    });
  });
});
