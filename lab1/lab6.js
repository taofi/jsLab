let arr =[1, 2, 3];
let [first] = arr;
console.log(first);
let user={
    name: "Name",
    age: 10,
}
let admin = {
    admin: true,
    ...user
};
console.log(`${admin.admin}, ${admin.name}, ${admin.age}`);