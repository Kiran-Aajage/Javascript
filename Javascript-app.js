// creates two var for with two users
 
const List1 =["Arjun", "Adwait", "Swapnil","Amit", "Vishal", "Adnan"];
const List2 =["Adwait", "Laxman", "Amit","Adnan","Nitin","Gaurav"];

function getUniqueElements(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

function getIntersection(arr1, arr2) {
    return arr1.filter((item) => arr2.includes(item));
  }

  const uniqueUsersList1 = getUniqueElements(List1.filter(user => !List2.includes(user)));
  const uniqueUsersList2 = getUniqueElements(List2.filter(user => !List1.includes(user)));
  const intersectionUsers = getIntersection(List1, List2);

  console.log("Unique users in List1 which are not in List2:", uniqueUsersList1);
console.log("Unique users in List2 which are not in List1:", uniqueUsersList2);
console.log("Users who are present in List1 and List2 both:", intersectionUsers);