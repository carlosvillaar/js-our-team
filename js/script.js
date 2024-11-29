const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

function renderCards(){
for (let member of teamMembers){
  const {name, role, email, img} = member;
  const card = `<div class="col flex bg-black align-center">
                        <img src="./assets/${img}" alt="${name}" class:"flex">
                      <div class="card-text">
                        <h2 class="fullname">${name}</h2>
                        <p class="role">${role}</p>
                        <p class="email c-azure">${email}</p>
                      </div>
                </div>`
document.querySelector('.cards-container').innerHTML += card;
}
}

renderCards()
const button = document.getElementById('submit');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const newMember = {
    name: document.getElementById('name').value,
    role: document.getElementById('role').value,
    email: document.getElementById('email').value,
    img: document.getElementById('img').value
  };
  addNewObject(teamMembers, newMember);
})
function addNewObject(array, object) {
  array.push(object);
}
