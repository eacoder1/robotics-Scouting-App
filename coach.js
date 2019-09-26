const form = document.getElementById('coach');


form.addEventListener('submit', (e) => {
e.preventDefault();
console.log(form.compDate.value);


db.collection("teams")
.get()
.then(
  function(querySnapshot) {
    querySnapshot.forEach(
      db.collection("teams")
      .doc(doc.id)
      .collection("competitions")
      .where("Date", "==", form.compDate.value)
      .get()
      .then(function(querySnapshot){
        if(querySnapshot.length == 0){
          resolve("doesn't exist")
        }else {
          resolve("exists")
        }
        })
        .then(function(resolve) {
          console.log("Resolve:" + resolve)
        })
        .catch(
          function(error){
            console.log("error"  +  error)
          }
        )
        }
      }
    )
  }
)

// db.collection("teams")
// .get()
// .then
//   (function(querySnapshot) {
//     querySnapshot.forEach (
//       function (doc) {
//          db.collection("teams")
//         .doc(doc.id)
//         .collection("competitions")
//           .add({Date: form.compDate.value})
//           .then(
//             function(docRef) {
//               window.location.href = "./index.html";
//             });
        
//       });
        
//         });

        });
        
        
        
        
        
        
