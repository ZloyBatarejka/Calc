const numbersButton = document.querySelectorAll(".data-number");
const operatorsButton = document.querySelectorAll(".data-operator");
const prev = document.querySelector(".prev");
const current = document.querySelector(".current");
let ac = document.querySelector(".data-all-clear")
let del = document.querySelector(".data-delete")
let equal = document.querySelector(".data-equals");
let operand = 0;
let operator;
let a;


numbersButton.forEach(value=>{
	value.addEventListener("click",()=>{
		current.textContent += value.textContent;
	});
});

operatorsButton.forEach((value,index)=>{
	value.addEventListener("click",()=>{
		a = +current.textContent;
		operator = index;
		current.textContent += value.textContent;
		prev.textContent = current.textContent;
		current.textContent = "";
	});
});

equal.addEventListener("click",()=>{
	if(operator==0){
		current.textContent = a / +current.textContent;
		prev.textContent = "";
		operator = undefined;
	}
	if(operator==1){
		current.textContent = a * +current.textContent;
		prev.textContent = "";
		operator = undefined;
	}
	if(operator==2){
		current.textContent = a + +current.textContent;
		prev.textContent = "";
		operator = undefined;
	}
	if(operator==3){
		current.textContent = a - +current.textContent;
		prev.textContent = "";
		operator = undefined;
	}
	return;
})

ac.addEventListener("click",()=>{
	operator = undefined;
	current.textContent = "";
	prev.textContent = "";
})
del.addEventListener("click",()=>{
	current.textContent = current.textContent.slice(0,current.textContent.length-1);
})