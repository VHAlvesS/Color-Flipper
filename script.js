class ColorChanger {
    constructor() {
        // Atributos
        this.actualOption;

        // Elementos no HTML
        this.HexBG = document.getElementById('HexColors');
        this.SimpleBG = document.getElementById('Simple');
        this.randomColorGenerator = document.getElementById('ChangeColor');
        this.colorShowText = document.getElementById('BGColorText');

        // EventListeners
        this.HexBG.addEventListener('click', this.optionChange.bind(this));
        this.SimpleBG.addEventListener('click', this.optionChange.bind(this));
        this.randomColorGenerator.addEventListener('click', this.changeColor.bind(this));
    }

    // Metodos

    optionChange = (e) => {
        this.actualOption = `${e.target.textContent}`;
        console.log(`${this.actualOption}`);
    }


    randomNumberGenerator = (maxNumber) => { return Math.floor(Math.random() * maxNumber)+1}

    hexGenerator = () => {
        // 1- Gerar um numero aleatorio de 1 a 15
        // 1.1- Se o numero aleatorio for maior do que 10 atribuir sua letra equivalente numa string e adiciona-la em um array.

        const hexVerification = (number) => {
            if(number === 10) return 'A';
            if(number === 11) return 'B';
            if(number === 12) return 'C';
            if(number === 13) return 'D';
            if(number === 14) return 'E';
            if(number === 15) return 'F';
        }
        

        const arr = [];
        const number1 = this.randomNumberGenerator(15);
        if(number1 >= 10) {
            arr[0] = hexVerification(number1);
        }
        else {
            arr[0] = number1;
        }

        const number2 = this.randomNumberGenerator(15);
        if(number2 >= 10) {
            arr[1] = hexVerification(number2);
        }
        else {
            arr[1] = number2;
        }

        const number3 = this.randomNumberGenerator(15);
        if(number3 >= 10) {
            arr[2] = hexVerification(number3);
        }
        else {
            arr[2] = number3;
        }

        const number4 = this.randomNumberGenerator(15);
        if(number4 >= 10) {
            arr[3] = hexVerification(number4);
        }
        else {
            arr[3] = number4;
        }

        const number5 = this.randomNumberGenerator(15);
        if(number5 >= 10) {
            arr[4] = hexVerification(number5);
        }
        else {
            arr[4] = number5;
        }

        const number6 = this.randomNumberGenerator(15);
        if(number6 >= 10) {
            arr[5] = hexVerification(number6);
        }
        else {
            arr[5] = number6;
        }
        arr.unshift('#');
        console.log('codigo rodou');
        console.log(arr);
        return arr.join().replace(/,/g, '');
    }

    changeColor = function () {
        console.log('teste')

        if(this.actualOption === 'Hex') { 
            const hexColor = this.hexGenerator();
            const styleString = `background-color: ${hexColor};`;
            document.body.setAttribute('style', styleString);
            this.colorShowText.innerHTML = `Background Color: <span>${hexColor.toUpperCase()}</span>`;
        }

        if(this.actualOption === 'Simple' || this.actualOption === undefined) { 
            console.log('Simple generator')

            const choosing = this.randomNumberGenerator(3);
            console.log(this.randomNumberGenerator(5));

            if(choosing === 1) {
                console.log('Cor solida presente no css')
                const cssColors = ['aliceblue','antiquewhite','aqua','aquamarine','azure','beige','bisque','black','blanchedalmond','blue','blueviolet','brown','burlywood','cadetblue','chartreuse','chocolate','coral','cornflowerblue','cornsilk','crimson','cyan','darkblue','darkcyan','darkgoldenrod','darkgray','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid','darkred','darksalmon','darkseagreen','darkslateblue','darkslategray','darkturquoise','darkviolet','deeppink','deepskyblue','dimgray','dodgerblue','firebrick','floralwhite','forestgreen','fuchsia','gainsboro','ghostwhite','gold','goldenrod','gray','green','greenyellow','honeydew','hotpink','indianred','indigo','ivory','khaki','lavender','lavenderblush','lawngreen','lemonchiffon','lightblue','lightcoral','lightcyan','lightgoldenrodyellow','lightgray','lightgreen','lightpink','lightsalmon','lightseagreen','lightskyblue','lightslategray','lightsteelblue','lightyellow','lime','limegreen','linen','magenta','maroon','mediumaquamarine','mediumblue','mediumorchid','mediumpurple','mediumseagreen','mediumslateblue','mediumspringgreen','mediumturquoise','mediumvioletred','midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','oldlace','olive','olivedrab','orange','orangered','orchid','palegoldenrod','palegreen','paleturquoise','palevioletred','papayawhip','peachpuff','peru','pink','plum','powderblue','purple','rebeccapurple','red','rosybrown','royalblue','saddlebrown','salmon','sandybrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategray','snow','springgreen','steelblue','tan','teal','thistle','tomato','turquoise','violet','wheat','white','whitesmoke','yellow','yellowgreen'];
                const indexNumber = Math.floor(Math.random() * cssColors.length)+1;

                document.body.style.backgroundColor = `${cssColors[indexNumber]}`;
                this.colorShowText.innerHTML = `Background Color : <span>${document.body.style.backgroundColor.toUpperCase()}</span>`;
            }

            if(choosing === 2) {
                console.log('Cor gerada via Hex')
                
                document.body.style.backgroundColor = this.hexGenerator();
                this.colorShowText.innerHTML = `Background Color : <span>${document.body.style.backgroundColor.toUpperCase()}</span>`;
            }

            if(choosing === 3) {
                console.log('Cor gerada via RGBA')
                document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)+1}, ${Math.floor(Math.random() * 255)+1}, ${Math.floor(Math.random() * 255)+1})`;
                this.colorShowText.innerHTML = `Background Color : <span>${document.body.style.backgroundColor.toUpperCase()}</span>`;
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const colorGenerator = new ColorChanger();
});