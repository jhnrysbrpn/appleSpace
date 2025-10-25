// Get references to elements
const memberCards = document.querySelectorAll('.member-card');
const profiles = document.querySelectorAll('.profile-card');
const profileImage = document.getElementById('profileImage');
const nameBar = document.getElementById('memberName');

// Map each member to a consistent image
const imageMap = {
  sobrepena: 'appleSpace/Sobrepeña.png',
  adan: 'appleSpace/Adan.png',
  talento: 'appleSpace/Talento.png',
  criss: 'appleSpace/Criss.png',
  benagua: 'appleSpace/Benagua.png',
  vida: 'appleSpace/Vida.png',
  gutierrez: 'appleSpace/Gutierrez.png'
};

// Map each member to their display name
const nameMap = {
  sobrepena: 'John Rey C. Sobrepeña',
  adan: 'Daniel Adan',
  talento: 'Christian Talento',
  criss: 'Juan Miguel Criss',
  benagua: 'Earl James Benagua',
  vida: 'Sept Cj Vida',
  gutierrez: 'Dharl Akhen Gutierrez'
};

// Handle member clicks
memberCards.forEach(card => {
  card.addEventListener('click', () => {
    const member = card.getAttribute('data-member');

    // Hide all profile cards
    profiles.forEach(profile => profile.classList.add('hidden'));

    // Show selected member’s profile
    const activeProfile = document.getElementById(member);
    if (activeProfile) activeProfile.classList.remove('hidden');

    // Fade out image, swap, then fade in
    profileImage.classList.add('opacity-0');
    setTimeout(() => {
      profileImage.src =
        imageMap[member] ||
        `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
      profileImage.classList.remove('opacity-0');
    }, 300);

    // Fade out name, swap, then fade in
    nameBar.classList.add('opacity-0');
    setTimeout(() => {
      nameBar.textContent = nameMap[member] || 'Unknown Member';
      nameBar.classList.remove('opacity-0');
    }, 300);
  });
});
