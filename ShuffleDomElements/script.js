const containerSelector = ".container";
const targetSelector = ".target";

class ShuffleMachine {
    constructor(containerSelector, targetSelector) {
        this.container = document.querySelector(containerSelector);
        this.targetList = Array.from(this.container.querySelectorAll(targetSelector));
    }

    Shuffle() {
        let shuffled = [];

        for (let i = 0; i !== this.targetList.length;) {
            let rand = Math.floor(Math.random() * this.targetList.length);

            shuffled.push(this.targetList[rand]);

            this.container.removeChild(this.targetList[rand]);
            this.targetList.splice(rand, 1);
        }

        shuffled.forEach((el) => {
            this.container.appendChild(el);
        });
    }
}

let shuffleMachine = new ShuffleMachine(containerSelector, targetSelector);
shuffleMachine.Shuffle();