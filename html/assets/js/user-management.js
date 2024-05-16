document
  .querySelector("#editUserModal")
  .addEventListener("shown.bs.modal", () => {
    document.querySelector("#firstNameEdit").focus();
  });

document
  .querySelector("#addUserModal")
  .addEventListener("shown.bs.modal", () => {
    document.querySelector("#firstName").focus();
  });

document.querySelectorAll(".delete-btn").forEach((btnConfirm) => {
  btnConfirm.addEventListener("click", (e) => {
    const id = btnConfirm.dataset.id;
    const options = {
      title: "Are you sure?",
      type: "danger",
      btnOkText: "Yes",
      btnCancelText: "No",
      onConfirm: () => {
        deleteUser(id);
      },
      onCancel: () => {
        console.log("Cancel");
      },
    };
    const {
      el,
      content,
      options: confirmedOptions,
    } = bs5dialog.confirm("Do you really want to delete this user?", options);
  });
});

function showEditUserModal(btn) {
  document.querySelector("#id").value = btn.dataset.id;

  document.querySelector("#firstNameEdit").value = btn.dataset.firstName;
  document.querySelector("#lastNameEdit").value = btn.dataset.lastName;
  document.querySelector("#usernameEdit").value = btn.dataset.username;
  document.querySelector("#mobileEdit").value = btn.dataset.mobile;
  document.querySelector("#isAdminEdit").checked = btn.dataset.isAdmin === "true";
}

async function updateUser(event){
  event.preventDefault();

  const formData = new FormData(document.getElementById('editUserForm'));  //lay data cua form
  let data = Object.fromEntries(formData.entries()); //chuyen data tu collection thanh object

  try{
    let res = await fetch('/users', {  //gui len server
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (res.status === 200){
      location.reload();
    }
    else{
      let resText = await res.text();
      throw new Error(resText); 
    }
  }
  catch(err){
    event.tartget.querySelector('#errorMessage').innerText = err.message;
  }
}

async function deleteUser(id){
  try{
    let res = await fetch('/users', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id})
    });

    if (res.status === 200){
      location.reload();
    }
    else{
      let resText = await res.text();
      throw new Error(resText);
    }
  }
  catch(err){
    let toast = new boostrap.Toast(document.querySelector('.toast'),{});
    let toastBody = document.querySelector(".toast . toast-body");
    toastBody.innerHTML = "Can not delete user";
    toastBody.classList.add("text-danger");
    toast.show();
    console.log(err);
  }
}