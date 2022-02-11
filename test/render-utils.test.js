import { renderSodaCard, renderSodaDetail } from '../render-utils.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    
    const expected = `<div class="soda-detail"><p class="name"></p><img src="../assets/1.jpeg"><p class="calories">175 calories</p><p class="sugar">45g</p><p class="description"></p></div>`;
    
    const actual = renderSodaDetail({
        id: '1',
        
        calories: '175',
        sugar: '45g',

    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);

    
   
});

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<a href="./soda/?id=undefined"><div class="soda-card"><p></p><img src="./assets/undefined.jpeg"></div></a>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderSodaCard({

    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual.outerHTML, expected);
});
