const coachPhotos = [...document.querySelectorAll('.coach-photo')]
const trainerDescription = document.querySelector('.coach-description p')

const opisy = ['Jola', 'Paweł', 'Stefan', 'Ewelina', 'Zosia', 'Janek']


const acticeTrener = (e) => {

    coachPhotos.forEach(photo => photo.classList.remove('photo-active'))
    e.target.classList.toggle('photo-active');
    const index = e.target.dataset.option;
    trainerDescription.textContent = opisy[index];

}

coachPhotos.forEach(coachPhoto => coachPhoto.addEventListener('click', acticeTrener))