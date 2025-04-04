/*
for문
*/

/*
 *
 **
 ***
 ****
 *****
 */

const lines = 5;

for (let i = 1; i <= lines; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}

/*
 *
 **
 ***
 ****
 *****
 */

for (let k = lines; k >= 1; k--) {
  let space = "";
  let stars = "";
  for (let l = 1; l <= k; l++) {
    stars += "*";
  }
  for (let s = 1; s <= lines - k; s++) {
    space += " ";
  }
  console.log(space + stars);
}
