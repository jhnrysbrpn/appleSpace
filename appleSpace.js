const memberCards = document.querySelectorAll('.member-card');
const profiles = document.querySelectorAll('.profile-card');
const profileImage = document.getElementById('profileImage');

// Optional: map each member to a consistent random image
const imageMap = {
  sobrepena: 'appleSpace/avatar.png',
  adan: 'https://picsum.photos/id/1027/300/300',
  talento: 'https://picsum.photos/id/1005/300/300',
  criss: 'https://picsum.photos/id/1012/300/300',
  benagua: 'https://picsum.photos/id/1025/300/300',
  vida: 'https://picsum.photos/id/1018/300/300',
  gutierrez: 'https://picsum.photos/id/1020/300/300'
};

memberCards.forEach(card => {
  card.addEventListener('click', () => {
    const member = card.getAttribute('data-member');

    // Hide all profile cards
    profiles.forEach(profile => profile.classList.add('hidden'));

    // Show the selected member's profile
    const activeProfile = document.getElementById(member);
    if (activeProfile) activeProfile.classList.remove('hidden');

    // Change the profile image
    profileImage.classList.add('opacity-0'); // fade out

    setTimeout(() => {
      // Use mapped image if available, otherwise random one
      profileImage.src = imageMap[member] || `https://picsum.photos/300?random=${Math.floor(Math.random() * 1000)}`;
      profileImage.classList.remove('opacity-0'); // fade back in
    }, 300);
  });
});
