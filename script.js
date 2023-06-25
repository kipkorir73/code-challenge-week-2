
document.addEventListener('DOMContentLoaded', () => {
  const animalListContainer = document.getElementById('animal-list');
  const animalDetailsContainer = document.getElementById('animal-details');

  // Get the animal data
  fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(data => {
      // Displaying of the  animal names
      data.forEach(animal => {
        const animalNameElement = document.createElement('div');
        animalNameElement.classList.add('animal-item');
        animalNameElement.textContent = animal.name;

        // Click event listener to view details
        animalNameElement.addEventListener('click', () => {
          displayAnimalDetails(animal);
        });

        animalListContainer.appendChild(animalNameElement);
      });
    })
    .catch(error => {
      console.error('Error fetching animal data:', error);
    });

  // Display details of the animals
  function displayAnimalDetails(animal) {
    animalDetailsContainer.innerHTML = '';

    const animalImageElement = document.createElement('img');
    animalImageElement.src = animal.image;
    animalImageElement.alt = animal.name;

    const votesElement = document.createElement('div');
    votesElement.textContent = `Votes: ${animal.votes}`;

    animalDetailsContainer.appendChild(animalImageElement);
    animalDetailsContainer.appendChild(votesElement);
  }
});
