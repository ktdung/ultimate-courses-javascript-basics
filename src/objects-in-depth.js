export function objectsInDepth() {
    console.log(`
===============================================
Object Literal, Function and Constructor Syntax
===============================================
`);
    const drink = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: {
            sale: 99,
            full: 129,
        },
    };

    console.log(drink);

    const drinkReference = drink;

    drinkReference.name = 'Peach';

    console.log(drink);

    console.log(drink === drinkReference);
    console.log({} === {});

    console.log({} instanceof Object);
    console.log(new Object() instanceof Object);
    console.log(Object() instanceof Object);

    console.log(`
===============================================
Properties, Methods and Values
===============================================
`);
    const drink1 = {
        id: 'xhs8Pla',
        name: 'Lemonade',
        price: 99,
        getDrinkDetails() {
            return `Drink ${this.name} (${this.price})`;
        },
        'abc 123': 'I am the value!',
        100: 'I am a number!'
    };

    console.log(drink1);
    console.log(drink1.getDrinkDetails());

    const myId = 'id';

    console.log(drink1[myId]);
    console.log(drink1['name']);
    console.log(drink1.name);
    console.log(drink1.price);
    console.log(drink1['abc 123']);
    console.log(drink1[100]);

    console.log(`
===============================================
Shorthand Properties and Methods
===============================================
`);
    const id = 'xhs8Pla';
    const name = 'Lemonade';
    const price = 99;

    const someKey = 'name';

    const drink2 = {
        id,
        [someKey]: name,
        price,
        getDrinkDetails() {
            return `Drink ${this.name} (${this.price})`;
        },
    };

    console.log(drink2);

    console.log(`
===============================================
Destructuring Object Properties
===============================================
`);

    const drink3 = {
        id3: 'xhs8Pla',
        name3: 'Lemonade',
        price3: {
            sale3: 99,
            full3: 129,
        },
    };

    console.log(drink3);

    const myDrinkId = drink3.id3;
    const myDrinkName = drink3.name3;
    const myDrinkSalePrice = drink3.price3.sale3;

    console.log(myDrinkId, myDrinkName, myDrinkSalePrice);

    const id3 = 1234;

    const {
        id3: myId3,
        price3: { full3 },
        ...rest3
    } = drink3;

    console.log(id3, myId3, full3, rest3);

    console.log(`
===============================================
Property and Value Existence Checking
===============================================
`);

    const drink4 = {
        id4: 'xhs8Pla',
        name4: 'Lemonade',
        price4: {
            sale4: 99,
            full4: 129,
        },
    };

    if (drink4.id4) {
        console.log(drink4.id4);
    }

    for (const prop in drink4) {
        if (drink4[prop] === 'Lemonade') {
            console.log(prop, drink4[prop]);
        }
    }

    console.log(Object.values(drink4));

    const hasLemonade = Object.values(drink4).includes('Lemonade');
    console.log(hasLemonade);

    //property Exists
    console.log(drink4.hasOwnProperty('name4'));
    console.log(drink4.hasOwnProperty('name3'));
    console.log(Object.prototype.hasOwnProperty.call(drink4, 'name4'));

    console.log(Object.keys(drink4));
    console.log(Object.keys(drink4).includes('name4'));

    console.log(`
===============================================
Adding and Updating Object Properties
===============================================
`);

    const drink5 = {
        id5: 'xhs8Pla',
        name5: 'Lemonade',
        price5: {
            sale5: 99,
            full5: 129,
        },
    };

    drink5.brand5 = 'My Drinks Co.';
    drink5.name5 = 'Peach';

    console.log(drink5);

    const propUpdate = (obj, prop, value) => obj[prop] = value;

    propUpdate(drink5,'brand5', 'My Drinks Co.');
    propUpdate(drink5,'name5', 'Lime');

    console.log(drink5);

    console.log(`
===============================================
Removing Object Properties
===============================================
`);
    const drink6 = {
        id6: 'xhs8Pla',
        name6: 'Lemonade',
        price6: {
            sale6: 99,
            full6: 129,
        },
    };

    console.log(drink6);

    delete drink6.id6;
    console.log(drink6);

    // drink6.name6 = undefined;
    console.log(drink6);
    if (drink6.id6) {
        console.log('Has ID...');
    }

    const {price6, ...rest} = drink6;

    console.log(price6, rest, drink6);


}