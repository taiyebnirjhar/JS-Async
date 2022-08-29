/****
 * enroll
 * course progress
 * certificate
 ****/

const payment = true;
const mark = 80;

/** enroll **/
function enroll(callback) {
  console.log("course enrollment is in progress...");

  setTimeout(() => {
    if (mark) {
      console.log(`payment successfull`);
      if (callback) callback();
    } else {
      console.log(
        "payment unsuccessful.please try again or call to customer service "
      );
    }
  }, 2000);
}

/** course progress **/

function courseProgress(callback) {
  console.log("course is in progress..");
  setTimeout(() => {
    if (mark >= 80) {
      console.log(`congratulations 🎉`);
      if (callback) callback();
    } else {
      console.log(`Sorry you couldn't passed the exam`);
    }
  }, 3000);
}

function certificate() {
  console.log(`your certificate is in progress...`);
  setTimeout(() => {
    console.log("here is your certificate");
  }, 100);
}

/*******************************/
// Call Back Hell
enroll(() => {
  courseProgress(certificate);
});
