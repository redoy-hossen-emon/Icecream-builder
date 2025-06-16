const Btn = document.querySelectorAll('button');

const icecream = document.querySelector('.icecream');

function alertmsg(alerttxt) {

  let alertmsg = document.querySelector('.alert');

  alertmsg.innerHTML = alerttxt
  setTimeout(() => {
    alertmsg.innerHTML = " ";
  }, 3000);
}


Btn.forEach(element => {

  element.addEventListener("click", function () {
    let scoopCount = icecream.querySelectorAll('.scoop').length;
    let scoopType = this.getAttribute('data-type');
    let tolalPrice = document.querySelector('.totalprice')

    let price = parseFloat(this.closest(".right").querySelector('.price').textContent);
    let total = parseFloat(tolalPrice.textContent) || 0;


    if (element.classList.contains('plus')) {


      if (scoopCount > 9) {

       return alertmsg("YOU ADDED THE MOST SCOOPS!")
      } else {
        addscoops(scoopType);
      }

    } else if (element.classList.contains('minus')) {

      removescoops(scoopType)
    } else {
      alertmsg("Somthing went Wrong!")
    }
    // add and remove cherry -------------
    icecream.querySelectorAll('.cherry').forEach((e) => { e.remove() })
    if (icecream.querySelectorAll('.scoop').length > 0) {
      icecream.append(Object.assign(document.createElement('div'), { className: 'cherry' }));
    }
    // quantity update -----------
    let count = icecream.querySelectorAll("." + scoopType).length;
    this.closest('li').querySelector('.quantity').innerHTML = count;

    // total price update -----------
    tolalPrice.innerHTML = (element.classList.contains('plus') ? total + price : Math.max(0, total - price)).toFixed(2);



  })
});
function quantity() {



}
function addscoops(scoopType) {

  let scoops = document.createElement('div');
  scoops.classList.add(scoopType, "scoop");
  const lastChild = icecream.lastElementChild;

  if (lastChild && lastChild.classList.contains('cherry')) {
    icecream.insertBefore(scoops, icecream.lastElementChild);
  } else {
    icecream.appendChild(scoops);
  }
}

function removescoops(scoopType) {

  let Child = icecream.querySelectorAll("." + scoopType);
  const lastChild = Child[Child.length - 1];

  if (Child.length > 0) {
    lastChild.remove();
  } else { return alertmsg("This scoop not have yet") }


}