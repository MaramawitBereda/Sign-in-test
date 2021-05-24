Feature('Signin');

Scenario('check sign in page', (I) => {
    I.amOnPage('/');
    I.see('Sign in');
    I.dontSee('Welcome');
    I.fillField('Email', 'hello@world.com');
    I.fillField('password',secret('123456'));
    I.click('Continue');
});

Scenario('check after signed in', (I) => {
    I.see('Tickets');
    I.dontSee('Sign in');
    I.seeInCurrentUrl('/tickets');
});
