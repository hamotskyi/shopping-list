let shoppingList = [];
let ul = document.getElementById('ul');
let ulDone =  document.getElementById('ulDone');

class Product {
    constructor (title) {
        this.title = title;
        this.quantity = 1;
    }
}

function addNewProduct() {

    let inp = document.getElementById('inputArticle');
    let rowInputData = document.getElementById('inputArticle').value;
    let inputArticle = rowInputData.trim();
    let newProduct = new Product(inputArticle);
    
    if (inputArticle == "") {

        let placeholder = document.createAttribute("placeholder");
        placeholder.value = "Введіть назву продукту";
        inp.setAttributeNode(placeholder);
        inp.value = "";
        inp.focus();

    } else {

        if (!shoppingList.length) {

            shoppingList.push(newProduct);
            let li = document.createElement("li");
            let label = document.createElement("label");
            let pName = document.createElement('p');
            let pQuantity = document.createElement('p');
            let inputCheck = document.createElement("input");
            let attFor = document.createAttribute("for");
            let attOnchange = document.createAttribute("onchange");
            let attIdForP = document.createAttribute("id");
            let attIdForInp = document.createAttribute("id");
            let attType = document.createAttribute("type");
            let name = shoppingList[0].title;
            let quant = shoppingList[0].quantity;
            let textQuantity = document.createTextNode(`x ${quant}`);
            let textName = document.createTextNode(`${name}`);
            let divX = document.createElement("div");//
            let attOnclick = document.createAttribute("onclick");//
            let attIdForDivX = document.createAttribute("id");//
            attType.value = "checkbox";
            attIdForInp.value = `check${shoppingList.length - 1}`;
            attFor.value = attIdForInp.value;
            attIdForP.value = `qt${shoppingList.length - 1}`;
            attOnchange.value = "productFilter(this)";
            ul.appendChild(li);
            li.appendChild(label);
            li.appendChild(divX);//
            label.appendChild(pName);
            label.appendChild(pQuantity);
            label.appendChild(inputCheck);
            attOnclick.value = "deleteListItem(this)";//
            attIdForDivX.value = shoppingList.length - 1;//
            divX.setAttributeNode(attOnclick);//
            divX.setAttributeNode(attIdForDivX);//
            pName.appendChild(textName);
            pQuantity.appendChild(textQuantity);
            inputCheck.setAttributeNode(attType);
            inputCheck.setAttributeNode(attIdForInp);
            inputCheck.setAttributeNode(attOnchange);
            label.setAttributeNode(attFor);
            pQuantity.setAttributeNode(attIdForP);

            inp.value = "";
            inp.focus();

        } else {

            let index = shoppingList.findIndex((product) => {
            return (product.title == inputArticle);
            });

            if (index == -1) {

                shoppingList.push(newProduct);
                let li = document.createElement("li");
                let label = document.createElement("label");
                let pName = document.createElement('p');
                let pQuantity = document.createElement('p');
                let inputCheck = document.createElement("input");
                let attFor = document.createAttribute("for");
                let attOnchange = document.createAttribute("onchange");
                let attIdForP = document.createAttribute("id");
                let attIdForInp = document.createAttribute("id");
                let attType = document.createAttribute("type");
                let name = shoppingList[shoppingList.length - 1].title;
                let quant = shoppingList[shoppingList.length - 1].quantity;
                let textQuantity = document.createTextNode(`x ${quant}`);
                let textName = document.createTextNode(`${name}`);
                let divX = document.createElement("div");//
                let attOnclick = document.createAttribute("onclick");//
                let attIdForDivX = document.createAttribute("id");//
                attType.value = "checkbox";
                attIdForInp.value = `check${shoppingList.length - 1}`;
                attFor.value = attIdForInp.value;
                attIdForP.value = `qt${shoppingList.length - 1}`;
                attOnchange.value = "productFilter(this)";
                attOnclick.value = "deleteListItem(this)";//
                attIdForDivX.value = shoppingList.length - 1;//
                divX.setAttributeNode(attOnclick);//
                divX.setAttributeNode(attIdForDivX);//
                ul.appendChild(li);
                li.appendChild(label);
                li.appendChild(divX);//
                label.appendChild(pName);
                label.appendChild(pQuantity);
                label.appendChild(inputCheck);
                pName.appendChild(textName);
                pQuantity.appendChild(textQuantity);
                inputCheck.setAttributeNode(attType);
                inputCheck.setAttributeNode(attIdForInp);
                inputCheck.setAttributeNode(attOnchange);
                label.setAttributeNode(attFor);
                pQuantity.setAttributeNode(attIdForP);

                inp.value = "";
                inp.focus();


            } else {

                shoppingList[index].quantity++;
                let pQ = document.getElementById(`qt${index}`);
                let quant = shoppingList[index].quantity;
                let textQuantity = document.createTextNode(`x ${quant}`);
                pQ.removeChild(pQ.firstChild);
                pQ.appendChild(textQuantity);

            }

        }
    }
    
}

function productFilter(x) {
 
    let labelParent = x.parentNode
    let liParent = labelParent.parentNode
    
    if (x.checked == true) {
        ul.removeChild(liParent)
        ulDone.appendChild(liParent)
    } else {
        ulDone.removeChild(liParent)
        ul.appendChild(liParent)
    }

};

function deleteListItem(y) {
 
    let liParent = y.parentNode;
    console.log(liParent);
    liParent.remove();
    let index = y.id;
    shoppingList.splice(index, 1);
    
};
