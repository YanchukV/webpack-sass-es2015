class Test {

	constructor(id) {
		this.elem = document.getElementById(id);
	}

	grey(){
		this.elem.style.backgroundColor = 'orange';
		this.elem.style.height = '1000px';
		this.elem.style.width = '1000px';
	}
}

export default Test;
