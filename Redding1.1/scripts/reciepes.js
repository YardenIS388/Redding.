
$(document).ready(() => {

    let ReciepeNode = function (Rurl, Rname, Rtime, Rcontent, ID) {
        this.url = Rurl;
        this.name = Rname;
        this.time = Rtime;
        this.content = Rcontent;
        this.ID = ID;
    }


    let appleD = "This was my grandmother's apple pie recipe. I have never seen another one quite like it. It will always be my favorite and has won me several first place prizes in local competitions. I hope it becomes one of your favorites as well!"
    let lemonD = "Store-bought lemon curd doesn’t even deserve to share the same name as homemade. This from-scratch lemon curd is deliciously tangy, creamy, and sweet. You only need 5 ingredients and it comes together on the stove in 10 minutes! Lemon curd is perfect for scones, crepes, angel food cake, quick breads, pound cake, and so much more.."
    let PancakeD = " Nulla lacus risus, mattis id bibendum et, consectetur id mi. Morbi pellentesque gravida leo, id ultrices ipsum semper pretium. Vivamus dui urna, dictum eu maximus scelerisque, euismod a magna. Vestibulum sed volutpat urna. Morbi vestibulum consequat odio et lacinia. Mauris in turpis elit. Praesent sit amet ante vel metus congue eleifend a eget sem. Aliquam dapibus nulla tellu Integer ultrices ornare tincidunt. In eget justo. Phasellus id imperdiet tellus."
    let pizzaD = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus risus, mattis id bibendum et, consectetur id mi. Morbi pellentesque gravida leo, id ultrices ipsum semper pretium. Vivamus dui urna, dictum eu maximus scelerisque, euismod a magna. Vestibulum sed volutpat urna. Morbi vestibulum consequat odio et lacinia. Mauris in turpis elit. Mauris sagittis eget tellus eu sodales. Praesent sit amet ante vel metus congue eleifend a eget sem."
    let quinoaD = "Consectetur id mi. Morbi pellentesque gravida leo, id ultrices ipsum semper pretium. Vivamus dui urna, dictum eu maximus scelerisque, euismod a magna. Vestibulum sed volutpat urna. Morbi vestibulum consequat odio et lacinia. Mauris in turpis elit. Mauris sagittis eget tellus eu sodales. Praesent sit amet ante vel metus congue eleifend a eget sem. Aliquam dapibus nulla tell Integer ultrices ornare tincidunt. In eget justo."
    let zucchiniD = " mattis id bibendum et, consectetur id mi. Morbi pellentesque gravida leo, id ultrices ipsum semper pretium. Vivamus dui urna, dictum eu maximus scelerisque, euismod a magna. Vestibulum sed volutpat urna. Morbi vestibulum consequat odio et lacinia. Mauris in turpis elit. Mauris sagittis eget tellus eu sodales. Praesent sit amet ante vel metus congue eleifend a eget sem. Aliquam dapibus nulla tell."
    let steakD = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacus risus, mattis id bibendum et, consectetur id mi. Morbi pellentesque gravida leo, id ultrices ipsum semper pretium. Vivamus dui urna, dictum eu maximus scelerisque, euismod a magna. Vestibulum sed volutpat urna. Morbi vestibulum consequat odio et lacinia. Mauris in turpis elit. Mauris sagittis eget tellus eu sodales. Praesent sit amet ante vel metus congue eleifend a eget sem."


    const applePie = new ReciepeNode("images/ApplePie.png", "Apple Pie", "45 minutes", appleD, 0);
    const lemonCurd = new ReciepeNode("images/LemonCurd.png", "Lemon Curd", "25 minutes", lemonD, 1);
    const sweetnedMilk = new ReciepeNode("images/Panckes.png", "Buckwheat Panckes", "25 minutes", PancakeD, 2);
    const spaghetti = new ReciepeNode("images/pizza.png", "Homemade Pizza", "30 minutes", pizzaD, 3);
    const quinoaSalad = new ReciepeNode("images/QuinoaSalad.png", "Quinoa Salad", "50 minutes", quinoaD, 4);
    const stuffedZucchini = new ReciepeNode("images/StuffedZucchini.png", "Stuffed Zucchini", "25 minutes", zucchiniD, 5);
    const banufiPie = new ReciepeNode("images/SteakReciepe.png", "Steak ", "15 minutes", steakD, 6);

    let reciepeArray = [applePie, lemonCurd, sweetnedMilk, spaghetti, quinoaSalad, stuffedZucchini, banufiPie];

    document.getElementById("reciepe-preview").innerHTML = ' <section id="reciepe-card-wrapper"><section id="reciepe-card"><img src=' + reciepeArray[0].url + ' alt=""><section id="reciepe-details"><h1>' + reciepeArray[0].name + '</h1> <p> ' + reciepeArray[0].time + '</p> </section><button class="btn btn-outline-primary reciepe-view-button" >View  </button></section> </section> <section id="reciepe-content"><h2> Ingrediants</h2><p>' + reciepeArray[0].content + ' </p> </section>';

    for (let index = 0; index < reciepeArray.length; index++) {
        document.getElementById("reciepe-dynamic-list").innerHTML += ' <tr> <td id= ' + reciepeArray[index].ID + ' > <div class="d-flex "> <img src=' + reciepeArray[index].url + '  title="user img"/><div class="ms-3"><p class="fw-bold mb-1">' + reciepeArray[index].name + '</p> <p class="text-muted mb-0"> ' + reciepeArray[index].time + '</p> </div></div></td><td> <div class="d-grid gap-2">  <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-square-up-right"></i> </button> </div></td></tr>';
    }

    let reciepe = document.getElementById("reciepe-dynamic-list").children;

    for (let index = 0; index < reciepeArray.length; index++) {

        const element = reciepe[index].children[0];

        element.addEventListener("click", event => {

            currentIndex = element.attributes.ID.value;

            const nextPreview = ' <section id="reciepe-card-wrapper"><section id="reciepe-card"><img src=' + reciepeArray[currentIndex].url + ' alt=""><section id="reciepe-details"><h1>' + reciepeArray[currentIndex].name + '</h1> <p> ' + reciepeArray[currentIndex].time + '</p> </section><button class="btn btn-outline-primary reciepe-view-button" >View  </button></section> </section> <section id="reciepe-content"><h2> Ingrediants</h2><p>' + reciepeArray[currentIndex].content + ' </p> </section>';

            document.getElementById("reciepe-preview").innerHTML = nextPreview;

        });
    }
});




