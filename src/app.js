// contact list, don't change this.
const contactsList = [
  {
    name: "Togusa",
    phone: "555 555-5555",
    image: "togusa.png",
    email: "togusa@secnine.com",
    ID: "0"
  },
  {
    name: "Tachikoma",
    phone: "555 555-5555",
    image: "tachikoma.png",
    email: "tachikoma@secnine.com",
    ID: "1"
  },
  {
    name: "Saito",
    phone: "555 555-5555",
    image: "saito.png",
    email: "saito@secnine.com",
    ID: "2"
  },
  {
    name: '"major" Motoko',
    phone: "555 555-5555",
    image: "motoko.png",
    email: "motoko@secnine.com",
    ID: "3"
  },
  {
    name: "Ishikawa",
    phone: "555 555-5555",
    image: "ishikawa.png",
    email: "ishikawa@secnine.com",
    ID: "4"
  },
  {
    name: "Batou",
    phone: "555 555-5555",
    image: "batou.png",
    email: "batou@secnine.com",
    ID: "5"
  },
  {
    name: "Aramaki",
    phone: "555 555-5555",
    image: "aramaki.png",
    email: "aramaki@secnine.com",
    ID: "6"
  },
]

const contactAreaShell = document.getElementById("display_all_contacts")
const singleContactAreaShell = document.getElementById("display_single_contact")
const closeButton = `<button id="closeButton">close</button>`

//Adding the contacts to the all contacts area
for(item in contactsList) {
  let singleContact = `<div id="contact` + item + `"></div>`
  contactAreaShell.insertAdjacentHTML("beforeend", singleContact)
  let currentContact = document.getElementById("contact" + item)
  currentContact.insertAdjacentHTML("beforeend", contactsList[item].name)
  currentContact.insertAdjacentHTML("beforeend",`<img class="portrait" src="img/` + contactsList[item].image + `" alt="a picture of ` + contactsList[item].name + `" style="width:75px;height:75px;"></img>`)
  currentContact.addEventListener("click", (evt) => {
    singleContactAreaShell.innerHTML = '';
    //I know tyhat using br elements is hacky, but I don't have time to use a better solution at this point
    singleContactAreaShell.insertAdjacentHTML("beforeend", contactsList[currentContact.id.substring(7)].name + "<br></br>")
    singleContactAreaShell.insertAdjacentHTML("beforeend", contactsList[currentContact.id.substring(7)].phone + "<br></br>")
    singleContactAreaShell.insertAdjacentHTML("beforeend", contactsList[currentContact.id.substring(7)].email + "<br></br>")
    singleContactAreaShell.insertAdjacentHTML("beforeend", `<img class="portrait" src="img/` + contactsList[currentContact.id.substring(7)].image + `" alt="a picture of ` + contactsList[currentContact.id.substring(7)].name + `" style="width:125px;height:125px;"></img>` + "<br></br>")
    singleContactAreaShell.insertAdjacentHTML("beforeend", closeButton)
    closeButtonObject = document.getElementById("closeButton")
    closeButtonObject.addEventListener("click", (evt) => {
      singleContactAreaShell.innerHTML = '';
    })
  })
}