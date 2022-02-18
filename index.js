// Write your solution here!
const cats = [ "Milo","Otis","Garfield", ];

 function destructivelyAppendCat(name){
     console.log("name",name)
  cats.push(name)
  //=>["Milo","Otis","Garfield","Ralph"]add element at the end
}
function destructivelyPrependCat(name){
    console.log("name",name)
 cats.unshift(name);
//=>["Bob","Milo","Otis","Garfield","Ralph"] add element at the beginning
}
function destructivelyRemoveLastCat(name){
    console.log("name",name)
 cats.pop(name);
 //=>["Bob","Milo","Otis","Garfield"]removes the last element (at the end)
}
function destructivelyRemoveFirstCat(name){
    console.log(name)
 cats.shift(name);
 //=>["Bob","Milo","Otis","Garfield"]removes the first elememt (at the beginning)
}
function appendCat(name){
    const cats = [ "Milo","Otis","Garfield", ];
    const animals = [...cats, name];
    return (animals);
    //=>["Milo","Otis","Garfield"] add element in the front leaving the cats array unchanged
}
function prependCat(name){
    const cats = [ "Milo","Otis","Garfield", ];
    const animals = [name, ...cats,];
    return (animals);
    //=>["Milo","Otis","Garfield"] add element in the end  leaving the cats array unchanged
}
function removeLastCat(name){
    const cats = [ "Milo","Otis","Garfield", ];
    cats.splice (-1);
    return (cats);
    //=>["Milo","Otis","Garfield"]remove element in the back leaving the cats array unchanged
}
function removeFirstCat(name){
    const cats = [ "Milo","Otis","Garfield", ];
    return cats.splice (1,2);
    
    //=>["Milo","Otis","Garfield"]remove element in the back leaving the cats array unchanged
}