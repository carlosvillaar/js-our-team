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


for (let member of teamMembers){
  const {name, role, email, img} = member;
  
  const card = `<div class="row flex">
                  <div class="col flex bg-black align-center">
                      <div class="img">
                        <img src="./assets/${member.img}" alt="${member.name}">
                      /div>
                    <div class="card-text">
                      <h2 class="fullname">${member.name}</h2>
                      <p class="role">${member.role}</p>
                      <p class="email c-azure">${member.email}</p>
                    </div>
                  </div>
                </div>`;
  
  
document.querySelector('.cards-container').innerHTML += card;
}
