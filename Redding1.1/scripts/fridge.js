$(document).ready(() => {

  let itemNode = function (Rurl, Rname, Rdate, RdaysLeft, Ramount, ID) {
    this.url = Rurl;
    this.name = Rname;
    this.date = Rdate;
    this.daysLeft = RdaysLeft;
    this.amount = Ramount;
    this.ID = ID;
  }

  const lemon = new itemNode("images/Lemon.png", "Lemon", "20/04/23", "2", 5, 0);
  const apple = new itemNode("images/Apple.png", "Apple", "25/04/23", "10", 7, 1);
  const bread = new itemNode("images/Bread.png", "Bread", "22/04/23", "5", 8, 2);
  const milk = new itemNode("images/Milk.png", "Milk", "24/04/23", "8", 9, 3);
  const tabasco = new itemNode("images/Tabsko.png", "Tabasco", "02/08/24", "37", 3, 4);
  const beef = new itemNode("images/Steak.png", "Beef", "10/04/23", "2", 4, 5);
  const salt = new itemNode("images/Ketchup.png", "Ketchup", "24/04/26", "78", 5, 6);
  const avocado = new itemNode("images/avocado.png", "Avocado", "24/04/23", "8", 6, 7);
  const cheese = new itemNode("images/Cheese.png", "Cheese", "31/04/23", "22", 9, 8);
  const mayo = new itemNode("images/Mayo.png", "Mayonnaise", "04/12/23", "22", 5, 9);
  const butter = new itemNode("images/Butter.png", "Butter", "10/05/23", "32", 2, 10);
  const chocolate = new itemNode("images/Chocolate.png", "Chocolate", "15/06/24", "36", 4, 11);
  const garlic = new itemNode("images/Watermelon.png", "Watermelon", "30/05/23", "44", 5, 12);

  let itemArray = [lemon, apple, bread, milk, tabasco, beef, salt, avocado, cheese, mayo, butter, chocolate, garlic];

  // itemArray = itemArray.sort((a, b) => (parseInt(a.daysLeft) > parseInt(b.daysLeft)) ? 1 : -1)

  document.getElementById("big-item").innerHTML = '  <section class="d-flex justify-content-around" id="item-options"> <h1>' + itemArray[0].name + '</h1> <section class="d-flex p-2 align-items-center justify-content-"><button type="button" class="btn btn-outline-primary"> <i class="fa-solid fa-pen-to-square"></i> </button> <button for="big-item" type="submit" class="btn btn-outline-primary"><i class="fa-solid fa-trash-can"></i> </button>  </section> </section><section class="d-flex justify-content-center" ><p> ' + itemArray[0].date + ' </section><section class="text-center" id="big-selected"> <a href="mainobject.html"> <img id="big-pic" src=' + itemArray[0].url + ' alt="selected-item"></a> <br> <input type="number" value= ' + itemArray[0].amount + ' class="text-center" style="width:50px"></section>'

  for (let index = 0; index < itemArray.length; index++) {

    // document.getElementById("ingrediant-list").innerHTML +='<section id='+ itemArray[index].ID +' class="product"> <a href="mainobject.html"> <img src=' +itemArray[index].url+ '><p>'+itemArray[index].name+'</p><p>'+itemArray[index].date+'</p><p>'+itemArray[index].daysLeft+'</p><input type="number" value="'+itemArray[index].amount+'" > </a> </section>'
    document.getElementById("ingrediant-list").innerHTML += '<div id=' + itemArray[index].ID + ' class="container "><div class="product row d-flex p-2 align-items-center justify-content-center"><div class="col-3 d-flex p-2 align-items-center">  <a href="mainobject.html"> <img src=' + itemArray[index].url + ' alt=""> </a> </div><div class="col-3 ">' + itemArray[index].name + '</div><div  class="col-3 p-date">' + itemArray[index].date + '</div><div class="col-1">' + itemArray[index].daysLeft + '</div><div class="col-1"> <input type="number" style="width:50px" value="' + itemArray[index].amount + '"></div></div></div>'

  }
  let product = document.getElementById("ingrediant-list").children;

  for (let index = 0; index < product.length; index++) {
    const element = product[index];

    element.addEventListener("mouseover", event => {

      let nextIndex = element.attributes.ID.value;
      document.getElementById("big-item").innerHTML = '  <section id="item-options" class="d-flex justify-content-around"> <h1 >' + itemArray[nextIndex].name + '</h1> <section><button type="button" class="btn btn-outline-primary"> <i class="fa-solid fa-pen-to-square"></i> </button> <button for="big-item" type="submit" class="btn btn-outline-primary"><i class="fa-solid fa-trash-can"></i> </button>  </section> </section><section class="text-center" id="big-selected" ><p> ' + itemArray[nextIndex].date + '</p> </section><section class="text-center"  id="big-selected"> <a href="mainobject.html"> <img  id="big-pic" src=' + itemArray[nextIndex].url + ' alt="selected-item"></a> <br> <input type="number" value= ' + itemArray[nextIndex].amount + '  style="width:50px"></section>'

    });
  }
});