async function showDialog() {

  let dialog = createDialog();

  document.body.appendChild(dialog).showModal();


  // Give the script time to show the dialog by returning a promise. Make sure that it is resolved/rejected later.

  return new Promise((resolve, reject) => {

    try {

      // Resolve the promise and dismiss the dialog when when user clicks on 'Done' button

      const doneBtn = document.getElementById("done");

      doneBtn.addEventListener("click", () => {

        console.log("user is done");

        dialog.close();

        resolve("user is done");

      })


      // reject when dialog is cancelled/closed

      dialog.addEventListener("cancel", () => {

        console.log("dialog cancelled");

        reject("dialog cancelled");

      });


      dialog.addEventListener("close", () => {

        console.log("dialog closed");

        reject("dialog closed");

      });

    } catch (e) {

      console.log(e);

      reject(e);

    }

  })

}


function createDialog() {

  const dialog = document.createElement("dialog");

  dialog.style.color = "white";

  const div = document.createElement("div");

  div.style.display = "block";

  div.style.height = "200px";

  div.style.width = "400px";

  const header = document.createElement("h2");

  header.id = "head";

  header.style.color = "white";

  header.textContent = "Sample Dialog";

  div.appendChild(header);

  const doneButton = document.createElement("button");

  doneButton.id = "done";

  doneButton.textContent = "Done";

  div.appendChild(doneButton);

  dialog.appendChild(div);

  return dialog;

}


// Wait for the dialog to render

await showDialog();