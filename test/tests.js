const test = QUnit.test;

function headsOrTails(number) {
    if(number < .5) {
        return 'heads';
    }
    return 'tails'
}

test('return a value of heads if the randomNumber is below .5', function(assert) {
    //Arrange
    const number = .3;
    const expected ='heads'
    //Act 
    const result = headsOrTails(number);

    //Assert
    assert.equal(result, expected);
});

test('return a value of tails if the randomNumber is above .5', function(assert) {
    //Arrange
    const number = .6;
    const expected ='tails'
    //Act 
    const result = headsOrTails(number);

    //Assert
    assert.equal(result, expected);
});